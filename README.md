# Rajat Nipane — Portfolio

Personal portfolio site, built with React, Vite, and Tailwind CSS. Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Plain JS data file (no CMS) — all content lives in `src/data.js`

## Editing content

All text on the site (name, bio, skills, projects, experience, education, links) lives in `src/data.js`. Update the values there and the corresponding sections re-render automatically — no need to touch component files for routine content changes.

## Local development

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. In the repo settings, make sure Pages → Build and deployment → Source is set to **GitHub Actions**.
