# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cerna Creations is a design studio website for a Springfield, VA-based creative agency. The site is a static HTML/CSS/JS website showcasing services including branding, graphic design, motion design, web development, and custom cards.

## Architecture

This is a simple static website with no build process or dependencies:

- **index.html**: "Under construction" landing page with animated gradient background and sparkle effects
- **index2.html**: Full website with services, about section, and contact form
- **style.css**: Complete styling for the main website (index2.html)
- **main.js**: Client-side interactivity including smooth scrolling, mobile menu, and form handling
- **static/**: Static assets directory containing logo images

The site uses:
- Vanilla JavaScript (no frameworks)
- CSS Grid and Flexbox for layouts
- CSS animations for visual effects
- Inline styles in index.html for self-contained deployment

## Development

Since this is a static site with no build process:

1. **Local development**: Open HTML files directly in a browser, or use any local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

2. **Testing changes**: Refresh the browser after editing files

3. **Deployment**: The site appears to use Netlify Forms (see `data-netlify="True"` in index2.html:99)

## Key Implementation Details

- **Two separate pages**: index.html is a temporary "coming soon" page; index2.html is the full site
- **Form handling**: The contact form in index2.html has a placeholder submit handler (main.js:25-29) that shows an alert. For production, this integrates with Netlify Forms
- **Mobile menu**: JavaScript in main.js:20-22 toggles mobile navigation visibility
- **Scroll effects**: Header background changes on scroll (main.js:32-40)
- **Navigation**: Smooth scrolling implemented for anchor links (main.js:2-13)

## Contact Information

- Email: walter@cernacreations.com
- Location: Springfield, VA
- Business: Cerna Creations, LLC