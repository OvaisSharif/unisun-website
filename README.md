# UNISUN Website

Responsive React + Vite catalogue and enquiry website for **UNISUN Auto Machines and Equipments Trading L.L.C.**

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the production site to `dist/`.

## Deployment (Vercel)

- Import this repository from GitHub.
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Branding

The supplied UNISUN logo is used in the site header, footer, favicon and structured data. Its source palette is applied as:

- Charcoal: `#211A18`
- Green: `#08A830`
- Blue: `#088FD8`
- Red: `#D82018` (small accent only)

## Included

- English / Arabic language toggle and RTL layout direction.
- Responsive navigation and layouts for mobile, tablet, laptop and wide desktop.
- Product catalogue with category filters, application filters, text search, sorting and reset.
- Product-specific enquiry actions and WhatsApp shortcut.
- Basic technical SEO: page title/description, Open Graph/Twitter metadata, Organization JSON-LD, robots.txt, semantic sections, image alt text and lazy loading.
- Supplied blue nitrogen / air tyre inflation machine image used as the featured product.

## Required before public launch

1. Replace `YOUR_EMAIL@YOURDOMAIN.COM` in `src/main.jsx` with a monitored company email, or connect a real enquiry backend/form service. The current form opens the visitor's email client; it does not store or send enquiries by itself.
2. Replace `https://wa.me/971000000000` and `+971 XX XXX XXXX` with the company's verified WhatsApp and phone numbers.
3. Confirm the official domain and configure canonical URL, `og:url`, sitemap.xml and the sitemap reference in robots.txt after the domain is under company control.
4. Add the actual product catalogue, model names, specifications, availability, warranty details and genuine product photographs. Only the nitrogen / air inflation machine currently uses a supplied product photo; the other catalogue cards are illustrative categories and must be confirmed or replaced before launch.
5. Add the company's verified address and service-area details before adding LocalBusiness structured data or a Google Business Profile location.
6. Run Lighthouse / PageSpeed Insights and test real devices and browsers after deployment. Search ranking cannot be guaranteed by metadata alone; it also depends on useful original content, crawlability, backlinks, performance and ongoing SEO work.

## Notes

No prices, stock status, technical specifications, company address or customer-support guarantees have been invented. Product categories other than the supplied nitrogen / air machine are placeholders for catalogue planning.
