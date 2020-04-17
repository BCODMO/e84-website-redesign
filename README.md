# BCO-DMO Static Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/ce7581b2-a9ff-428c-bff2-c179322959de/deploy-status)](https://app.netlify.com/sites/bco-dmo-new/deploys)

### Getting Started
- install dependencies: run `npm i`
- run `gulp auto` to run on localhost with browser auto-reload

# Basics
- `src/pages` for page content
- `src/templates` for page layout
- output is plain html (stored in `dist` directory)

## Directory Layout
- `dist` : this directory contains real files that will be hosted
- `dist/assets` : all css, js, images, fonts and whatever assets related to app are located here
- `src` : raw files used to develop the app
- `src/pages` : pages for the app, everything here will be rendered to `dist` directory
- `src/templates` : layout files
- `src/templates/partials` : partial files like nav, user-tabs, menu, etc

---

Nunjucks official docs: [https://mozilla.github.io/nunjucks]([https://mozilla.github.io/nunjucks)
