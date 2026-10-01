# Four Deserts Cleaning Co. LLC - Website

Mobile-optimized marketing website for Four Deserts Cleaning Co. LLC,
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

- All calls to action across the site place a phone call to the business line
  at (575) 222-8732 via `tel:` links. There is no booking portal or contact
  form. Update the number in the HTML files if the business line changes.
- Update the canonical URL and Open Graph URLs in `index.html` if the final
  domain differs from `fourdesertscleaning.com`.
- Replace the placeholder Facebook, Instagram, and Google links with the live
  social profile URLs when available.
- Testimonials are sample reviews written in the brand voice. Swap in real
  client reviews when ready.

## Contact

Phone: (575) 222-8732
