# Hemsworth Town Council website

This is a responsive Next.js 15 App Router website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

Install dependencies with `npm install`, then start the development server with `npm run dev`. Open `http://localhost:3000`.

## Dedicated server deployment

Use Node.js 20 LTS or newer on the server. On Wispbyte, select Node 20 in the server's startup/runtime settings and set the JavaScript file (`JS_FILE`) to `main.js`. Upload the full project (including `app`, `styles.css`, `package.json` and `package-lock.json`), not just the entry-point file.

The panel can install dependencies with `npm install` and then run `node main.js`. If the `.next/BUILD_ID` production build is missing, `main.js` runs `next build` automatically before starting the HTTP server. To build manually instead:

```sh
npm ci
npm run build
npm start
```

`main.js` is the production entry point configured in `package.json`. It serves the built Next.js site on `0.0.0.0:3000` by default so it can be reached through the server's network interface. Configure `PORT` and optionally `HOST` in the server environment to change the listening port or address. Keep the generated `.next` directory between restarts to avoid rebuilding. Run the process under your server's process manager and place a TLS-enabled reverse proxy in front of it for public HTTPS access.

## Council information

The site includes dedicated pages for council services, local facilities, councillors, meetings, finance, documents, news and contact information. Council reference documents and downloadable files are linked from the council’s published archive at [hemsworthcouncil.co.uk](https://www.hemsworthcouncil.co.uk); those links remain hosted by the council. Opening hours, fees, meeting dates and notices can change, so confirm time-sensitive information with the council.
