const { createServer } = require("node:http");
const { parse } = require("node:url");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOST || "0.0.0.0";

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT value: ${process.env.PORT}`);
}

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
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
  })
  .catch((error) => {
    console.error("Failed to start the website:", error);
    process.exitCode = 1;
  });
