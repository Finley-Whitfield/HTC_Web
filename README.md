# Hemsworth Town Council website

This is a responsive Next.js 15 App Router website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

Install dependencies with `npm install`, then start the development server with `npm run dev`. Open `http://localhost:3000`.

## Dedicated server deployment

Use Node.js 20 LTS or newer on the server. On Wispbyte, select Node 20 in the server's startup/runtime settings and set the JavaScript file (`JS_FILE`) to `main.js`. Upload the full project (including `app`, `styles.css`, `package.json` and `package-lock.json`), not just the entry-point file.

The panel can install dependencies with `npm install` and then run `node main.js`. If the `.next/BUILD_ID` production build is missing or older than the site files, `main.js` runs `next build` automatically before starting the HTTP server. This ensures updated images and styles are included after a deployment. Next.js is configured to use two build workers to limit CPU usage on hosting; builds may take longer than with the default worker count. To build manually instead:

```sh
npm ci
npm run build
npm start
```

`main.js` is the production entry point configured in `package.json`. It serves the built Next.js site on `0.0.0.0:3000` by default so it can be reached through the server's network interface. Configure `PORT` and optionally `HOST` in the server environment to change the listening port or address. Keep the generated `.next` directory between restarts to avoid rebuilding. Run the process under your server's process manager and place a TLS-enabled reverse proxy in front of it for public HTTPS access.

## Changing the homepage banner photo

Put the image in `public/images/` and reference it in `styles.css` with a root-relative URL, for example `url("/images/Hemsworth_Center.jpg")`. The banner photo must be in `public`; Next.js does not serve files directly from the project-root `pics` folder. Commit and push both the image and the CSS change.

Homepage backgrounds now use photos of Hemsworth Community Centre and Hemsworth Water Park. The Water Park photo is by Carol Walker via [Geograph / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hemsworth_Water_Park_-_geograph.org.uk_-_2361968.jpg), under [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/); its attribution is also shown in the homepage footer.

## Council information

The site includes dedicated pages for council services, local facilities, councillors, meetings, finance, documents, news and contact information. Council reference documents and downloadable files are linked from the council’s published archive at [hemsworthcouncil.co.uk](https://www.hemsworthcouncil.co.uk); those links remain hosted by the council. Opening hours, fees, meeting dates and notices can change, so confirm time-sensitive information with the council.
