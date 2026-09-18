# Info — Anahit Sultanova CV / Portfolio

Personal CV and portfolio website for **Sultanova Anahit** (Front-end / Web developer).  
Live site: [https://soltonanna.github.io/](https://soltonanna.github.io/)

---

## Overview

Single-page React application that presents professional profile, experience, portfolio projects, services, reviews, blog posts, and contact details. Content is mostly static (data files + media assets). The production build is published to GitHub Pages from the `dist` folder via `gh-pages`.

---

## Tech stack

| Area | Technologies |
|------|----------------|
| UI | React 18 (`react`, `react-dom`) |
| Build | Webpack 5, Webpack Dev Server, Babel (`@babel/preset-env`, `@babel/preset-react`) |
| Styles | Sass/SCSS design system (tokens → base → layout → components → sections), mobile-first, PostCSS (`postcss-preset-env`), `mini-css-extract-plugin` |
| Fonts | Self-hosted via Fontsource: Geist, Geist Mono, Instrument Serif |
| Animation / UX | Framer Motion (subtle reveals, respects reduced motion), native smooth scroll + IntersectionObserver scroll-spy |
| UI helpers | React Icons, Font Awesome React, React Tabs, React Loading, React Copy to Clipboard |
| Carousel | Custom scroll-snap `Carousel` module (no dependency) |
| Deploy | `gh-pages` → GitHub Pages |
| Polyfill | `@babel/polyfill` |

Browser targets (`.browserslistrc`): last 2 versions, not dead, > 0.5% usage.

---

## Project structure

```
soltonanna.github.io/
├── public/
│   └── index.html          # HTML template (roots: #root, #backdrop-root, #modal-root)
├── src/
│   ├── index.js            # App entry (React 18 createRoot)
│   ├── index.scss          # Global styles entry
│   ├── App.js              # Page layout / section composition
│   ├── components/         # Page sections (Header, About, Experience, …)
│   ├── modules/            # Reusable UI (Button, TimelineItem, ServiceCard, PortfolioItem, Carousel, InfoModal, Reveal, …)
│   ├── hooks/              # useScrollSpy, useLockBodyScroll, useEscape, useDetails, useStoredState
│   ├── styles/             # abstracts/ base/ layout/ components/ sections/ (legacy partials in styles/_*.scss and modules-styles/ are unused)
│   ├── utils/              # Static data (portfolio, blog, reviews, skills, nav items, media paths) + helpers
│   ├── media/              # Images, PDF, favicons
│   ├── fonts/              # Custom fonts
│   └── libs/               # e.g. normalize.css
├── dist/                   # Production build output (deployed)
├── webpack.config.js
├── babel.config.js
├── package.json
└── Doc.txt                 # Historical setup notes / package install log
```

### Main page sections (`App.js`)

1. **Header** — navigation  
2. **MainInfo** — hero / name & role  
3. **About** — about me  
4. **Experience** — work history / skills  
5. **Portfolio** — project gallery  
6. **Services** — services offered  
7. **Reviews** — testimonials  
8. **Blog** — articles / posts  
9. **Contact** — contact info  
10. **Footer**

Static content for portfolio, blog, and reviews lives under `src/utils/` (`portfolio-items.js`, `blog-items.js`, `review-items.js`, `media-files.js`).

---

## Prerequisites

- **Node.js** and **npm** (Node 18+ recommended; uses Dart Sass via the `sass` package)
- Git (for clone / deploy)

---

## How to run

### 1. Install dependencies

```bash
npm install
```

### 2. Development server

```bash
npm start
```

- Webpack Dev Server runs on **http://localhost:3001**
- Hot reload enabled (`hot: true`), browser opens automatically (`open: true`)

### 3. Build

```bash
# Development build
npm run build-dev

# Production build → output in dist/
npm run build-prod
```

### 4. Clean build folder

```bash
npm run clean
```

### 5. Deploy to GitHub Pages

```bash
npm run build-prod
npm run deploy
```

`deploy` publishes the `dist` folder with `gh-pages`. Site is served from the repository [soltonanna/soltonanna.github.io](https://github.com/soltonanna/soltonanna.github.io).

---

## Webpack highlights

- **Entry:** `@babel/polyfill` + `src/index.js`
- **Output:** `dist/[name].[contenthash].js` (assets under `assets/`, fonts under `fonts/`)
- **Loaders:** HTML, CSS/Sass + PostCSS, Babel (JS/JSX), image optimization (`image-webpack-loader`), font assets
- **Plugins:** `HtmlWebpackPlugin` (from `public/index.html`), `MiniCssExtractPlugin` (production CSS)

---

## Useful links

| Resource | URL |
|----------|-----|
| Live portfolio | https://soltonanna.github.io/ |
| GitHub repository | https://github.com/soltonanna/soltonanna.github.io |

---

## Author

**Sultanova Anahit** — Front-end / Web developer  
Package name: `anahit_cv-portfolio` · License: ISC
