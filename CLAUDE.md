# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page static portfolio site for Derick Juma (mobile developer). Three files: `index.html`, `style.css`, `script.js`. No build system, no package manager, no tests.

## Development

Open `index.html` directly in a browser, or serve the directory with any static server (e.g. `python3 -m http.server`) to preview changes. There is no build, lint, or test command.

## Architecture

The site is **data-driven**: `index.html` provides empty placeholder containers (`#skillsGrid`, `#projectsGrid`, `#educationTimeline`, `#certGrid`, `#directContact`, `#socialLinks`, `.hero-text`), and `script.js` populates them at load time from data objects defined at the top of the file.

To change site content, edit the data objects in `script.js` — not the HTML:
- `profileData` — name, role, bio, profile image path, contact handles
- `socialLinks` — footer social icons (each entry carries its own inline SVG)
- `skillsData` — skills grid, grouped by category
- `projectsData` — project cards (name, description, technologies, github/demo links)
- `educationData` — degree/institution/period entries rendered as a vertical timeline
- `certificationsData` — certification cards (name, issuer, date, optional credentialUrl)

The render functions (`renderHero`, `renderSkills`, `renderProjects`, `renderEducation`, `renderCertifications`, `renderContact`, `renderSocialLinks`) are called once from `initializeApp` and use `innerHTML` with template literals. There is no framework and no reactive re-rendering — to update the UI, change data and reload.

Scroll-driven UI (nav active state, scroll-reveal `.in-view`, scroll-to-top visibility) uses `IntersectionObserver` and a single passive `scroll` listener — don't reintroduce per-scroll layout reads (`offsetTop`, etc.) in tight handlers.

### Theming

Light/dark mode is driven by CSS variables under `:root` and `[data-theme="dark"]` in `style.css`. The active theme is set via the `data-theme` attribute on `<body>`, persisted in `localStorage` under the key `theme`, and falls back to the OS `prefers-color-scheme` on first load. Always add new colors as CSS variables in both blocks rather than hardcoding values.

### Contact form

`handleContactFormSubmit` currently logs submissions to the console and stores them in `localStorage` under `contact-messages`. There is no backend; the `// TODO: Connect to backend email service here` comment marks the integration point (EmailJS / SendGrid / Firebase Functions / custom endpoint).
