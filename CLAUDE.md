# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static personal portfolio site for Sadegh Etemad, hosted on GitHub Pages. **There is no build step, no package manager, and no bundler.** All dependencies are loaded from CDN. Editing files and pushing directly updates the live site at `https://sadeghetemad.github.io`.

## Development

Open `index.html` directly in a browser to preview locally — no server needed. There are no build, lint, or test commands.

To serve locally with live reload, use any static file server (e.g., `python -m http.server 8080` or VS Code Live Server extension).

## Architecture

**Single HTML entry point** (`index.html`) with all content rendered by React into `<div id="root">`. Navigation is anchor-link scroll (`#about`, `#experience`, `#projects`) — no client-side router.

**No JSX, no transpilation.** All components use `React.createElement(...)` directly. This is intentional so no build step is needed.

**Global scope as a module system.** Each component file (e.g., `assets/js/components/Header.js`) declares a global `const` (e.g., `const Header = ...`). Components are loaded via ordered `<script>` tags in `index.html` before `main.js`, which wires up the React tree.

**Active component tree** (wired in `App` inside `main.js`):
```
App → Header, HeroSection, AboutSection, ExperienceSection, ProjectsSection, Footer
```

**Inactive components** (defined but not mounted in `App`): `ContactSection`, `SocialSection`, `BlogSection`, and `ResearchSection`. Note that `ResearchSection.js` is not even referenced by a `<script>` tag in `index.html`.

**Content is hard-coded** as inline data arrays inside each component file. There is no CMS or external content API.

**Fetcher files** (`medium-fetcher.js`, `scholar-fetcher.js`, `twitter-fetcher.js`) each listen for `DOMContentLoaded` and try to populate specific container IDs (`#medium-posts-container`, etc.). These IDs don't exist in the DOM because the corresponding sections aren't mounted, so fetchers run but render nothing.

**Scroll animations** are driven by `IntersectionObserver` in `main.js`, adding `.fade-in` / `.stagger-item` CSS classes — outside React's rendering cycle.

**Dark mode is intentionally disabled.** The infrastructure exists in CSS (`dark:` Tailwind classes and CSS variables), but `main.js` forces `localStorage.setItem('theme', 'light')` and removes the `dark` class on every load.

## External Dependencies (CDN only)

- Tailwind CSS 2.2.19
- React 18 + ReactDOM 18 (UMD production builds)
- Framer Motion 10.12.16
- Font Awesome 6.0.0-beta3
- Google Fonts Inter

## Known Issues

- `ProjectsSection.js` is loaded twice via `<script>` tags in `index.html` (one is a commented-out duplicate).
- `scholar-fetcher.js` has a malformed Scholar URL — the base URL hardcodes a different ID than what the constructor receives. It falls back to mock data regardless.
