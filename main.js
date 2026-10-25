const { createServer } = require("node:http");
const { existsSync, readdirSync, statSync } = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { parse } = require("node:url");
const next = require("next");

const projectDirectory = __dirname;
const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOST || "0.0.0.0";

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT value: ${process.env.PORT}`);
}

function buildIfNeeded() {
  const buildId = path.join(projectDirectory, ".next", "BUILD_ID");
  const buildTime = existsSync(buildId) ? statSync(buildId).mtimeMs : 0;
  const sourceFiles = [
    "app",
    "public",
    "styles.css",
    "next.config.ts",
    "package.json",
    "package-lock.json",
    "postcss.config.mjs",
    "tailwind.config.ts",
    "tsconfig.json",
  ];
  let latestSourceTime = 0;

  function checkSourcePath(relativePath) {
    const sourcePath = path.join(projectDirectory, relativePath);
    if (!existsSync(sourcePath)) return;

    const sourceStat = statSync(sourcePath);
    if (sourceStat.isDirectory()) {
      for (const entry of readdirSync(sourcePath)) {
        checkSourcePath(path.join(relativePath, entry));
      }
    } else {
      latestSourceTime = Math.max(latestSourceTime, sourceStat.mtimeMs);
    }
  }

  for (const sourceFile of sourceFiles) {
    checkSourcePath(sourceFile);
  }

  if (buildTime > latestSourceTime) return;

  console.log(
    buildTime === 0
      ? "No production build found. Building the website before startup..."
      : "Website files changed since the last production build. Rebuilding before startup...",
  );
  const nextCli = path.join(projectDirectory, "node_modules", "next", "dist", "bin", "next");
  const result = spawnSync(process.execPath, [nextCli, "build"], {
    cwd: projectDirectory,
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) {
    throw new Error("Could not run the Next.js production build.", { cause: result.error });
  }
  if (result.status !== 0) {
    throw new Error(`Next.js production build failed with exit code ${result.status ?? "unknown"}.`);
  }
}

async function startServer() {
  buildIfNeeded();

  const app = next({ dev: false, dir: projectDirectory });
  await app.prepare();
  const handle = app.getRequestHandler();

  const server = createServer((request, response) => {
    Promise.resolve(handle(request, response, parse(request.url || "/", true)))
      .catch((error) => {
        console.error("Failed to handle request:", error);
        if (!response.headersSent) {
          response.statusCode = 500;
          response.end("Internal Server Error");
        } else {
          response.destroy(error);
        }
      });
  });

  server.listen(port, hostname, () => {
    console.log(`Hemsworth Town Council website listening on http://${hostname}:${port}`);
  });

  const shutdown = () => {
    server.close((error) => {
      if (error) {
        console.error("Failed to stop the web server cleanly:", error);
        process.exitCode = 1;
      }
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

startServer().catch((error) => {
  console.error("Failed to start the website:", error);
  process.exitCode = 1;
});
