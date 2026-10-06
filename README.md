# Evelyn Naava — Website

A mobile-first Nuxt 3 site for Evelyn Naava, Financial Advisor. Built with Tailwind CSS, and the Bodoni Moda, Montserrat and Inter typefaces.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Structure

- `pages/index.vue` — Home
- `pages/about.vue` — About
- `pages/services/index.vue` — Services overview (cards)
- `pages/services/securities-trading.vue`
- `pages/services/unit-trusts.vue`
- `pages/services/bonds.vue`
- `pages/services/investment.vue`
- `pages/services/insurance.vue` — motor, health, life, travel, education, agricultural
- `pages/resources.vue`
- `pages/testimonials.vue`
- `pages/contact.vue` — contact form + "other ways to reach me"
- `components/NewsletterForm.vue` — mailing-list signup, used in the footer and on the Resources page
- `server/api/contact.post.ts` and `server/api/subscribe.post.ts` — send form/newsletter submissions by email

## Connecting the mailbox

The contact form and the mailing-list box both post to server API routes that send an email via SMTP. Until you provide the mailbox details, submissions are safely rejected with a friendly message and logged on the server — nothing is silently lost, but nothing is emailed either.

Once you have the destination email address and its SMTP credentials (from your email provider, e.g. Gmail, Zoho, or a transactional service like Resend/Postmark/SendGrid):

1. Copy `.env.example` to `.env`.
2. Fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.
3. Set `CONTACT_TO_EMAIL` to the inbox that should receive messages (this can be different from `SMTP_USER`).
4. Restart the server (`npm run dev` or redeploy).

No code changes are needed — both forms will start delivering automatically.

## Branding assets

- `public/images/logo-full.png` — full logo with wordmark, transparent background
- `public/images/logo-mark.png` — circular "E" mark only, transparent background, used in the navbar/footer
- `public/images/portrait.jpg` / `.webp` — professional photo used in the hero and contact page
- `public/favicon.ico` and `public/favicons/*` — generated from the logo mark

## Brand colors

- Navy `#2C2D6D` — primary/headings
- Pink `#EA4894` — accent/CTAs
- Cream `#FBF9F5` — page background

## Deployment

This is a standard Nuxt 3 app — deploy to Vercel, Netlify, or any Node host with `npm run build` (or `npm run generate` for a static build, though the contact/newsletter API routes require a server runtime, e.g. Vercel/Netlify functions or Node).
# evelynoldmutual
# evelynnaava
