# Four Deserts Cleaning Co. LLC - Website

Premium, mobile-optimized marketing website for Four Deserts Cleaning Co. LLC,
serving Las Cruces and surrounding areas in New Mexico.

Tagline: **Making the Desert Sparkle**

## Tech

- Static site: plain HTML, CSS, and vanilla JavaScript (no build step required)
- Font: Geist (loaded via Google Fonts)
- Icons: inline SVG (no external icon dependency)
- Fully responsive and SEO optimized

## Structure

```
index.html            Main landing page
robots.txt            Search engine crawl rules
sitemap.xml           Sitemap for search engines
site.webmanifest      PWA / install metadata
assets/
  css/styles.css      Design system and all styles
  js/main.js          Menu, FAQ, quote form, animations
  images/             Logo and stock photography
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
```

## Services featured

- Regular House Cleaning
- Deep Cleaning
- Move In and Move Out Cleaning
- Office and Commercial Cleaning
- Airbnb and Rental Turnover
- Janitorial Services
- Post-Construction Cleaning

## Notes for deployment

- The quote form uses a `mailto:` handoff to `ecarltonusa@gmail.com`. To capture
  submissions server side, connect the form in `assets/js/main.js` to a service
  such as Formspree, Netlify Forms, or a custom endpoint.
- Update the canonical URL and Open Graph URLs in `index.html` if the final
  domain differs from `fourdesertscleaning.com`.
- Replace the placeholder Facebook, Instagram, and Google links with the live
  social profile URLs when available.
- Testimonials are sample reviews written in the brand voice. Swap in real
  client reviews when ready.

## Contact

Phone: (575) 777-4266
Email: ecarltonusa@gmail.com
