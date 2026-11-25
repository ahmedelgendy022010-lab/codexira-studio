# Codexira Studio Website

A responsive, static multi-page website for Codexira Studio, built with HTML, CSS and vanilla JavaScript. No framework, build step, paid API or backend is required.

## Pages
- `index.html` — home
- `about.html` — studio overview
- `services.html` — services
- `portfolio.html` — concept project gallery
- `contact.html` — WhatsApp, email and inquiry form (opens the visitor's email application; it does not store submissions)
- `privacy.html` — privacy information
- `404.html` — not-found page
- `projects/` — three independent fictional concept demos: Casa Verde, Northstar Advisory and Forma Workspace

## Run locally
Open `index.html` in a browser, or serve the folder with any static server. For example, with Node.js installed:

```bash
npx serve .
```

## Deploy
The folder is ready for Vercel static hosting. Import the folder/repository or deploy it with the Vercel CLI from this directory. `vercel.json` contains basic response headers. No environment variables are required.

## Before public launch
1. Confirm the public WhatsApp number and email shown in `contact.html`.
2. Add the final production domain to canonical metadata and create an absolute `sitemap.xml` once the domain is selected.
3. Connect the chosen domain to the hosting project and verify DNS.
4. Add the live website URL to the Codexira Studio Facebook Page.

## Honest portfolio note
All three sample projects are fictional concept demonstrations, not paid client projects. Do not describe them as commissioned work or use fabricated testimonials, ratings or business outcomes.
