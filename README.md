# Hemsworth Town Council website

This is a responsive Next.js 15 App Router website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

Install dependencies with `npm install`, then start the development server with `npm run dev`. Open `http://localhost:3000`.

## Dedicated server deployment

Use Node.js 20 or newer on the server. From the project directory, install dependencies and create the production build:

```sh
npm ci
npm run build
npm start
```

`main.js` is the production entry point configured in `package.json`. It serves the built Next.js site on `0.0.0.0:3000` by default so it can be reached through the server's network interface. Configure `PORT` and optionally `HOST` in the server environment to change the listening port or address. Run the process under your server's process manager and place a TLS-enabled reverse proxy in front of it for public HTTPS access.

## Council information

The site includes dedicated pages for council services, local facilities, councillors, meetings, finance, documents, news and contact information. Council reference documents and downloadable files are linked from the council’s published archive at [hemsworthcouncil.co.uk](https://www.hemsworthcouncil.co.uk); those links remain hosted by the council. Opening hours, fees, meeting dates and notices can change, so confirm time-sensitive information with the council.
