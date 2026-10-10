# Repository guidance

## Commands

- `npm run dev` — start the Nuxt development server at `http://localhost:3000`.
- `npm run build` — build the app for a server runtime.
- `npm run generate` — generate a static site; the contact and newsletter API routes still need a server runtime to send mail.
- `npm run preview` — preview a production build.

`package.json` does not currently define test or lint scripts, and there is no configured test runner or single-test command.

## Architecture

This is a Nuxt 3 app using Vue 3 and Tailwind CSS. File-based routes live in `pages/`; `app.vue` provides the shared page shell with the navbar and footer. Reusable page elements live in `components/`, while `utils/services.ts` centralizes the service-card and insurance-line data used across the service pages. Service detail routes are individual Vue pages, composed with shared components such as `ServicePageHero`.

The contact and newsletter forms submit to Nitro endpoints at `server/api/contact.post.ts` and `server/api/subscribe.post.ts`. Both use `server/utils/mailer.ts` for SMTP transport and recipient configuration. Server credentials are supplied through the runtime config from the environment variables documented in `.env.example`; do not put credentials in client-side code.

## Conventions

- Use Vue single-file components with `<script setup lang="ts">`; Nuxt auto-imports Vue and Nuxt APIs, and file names under `pages/` determine route paths.
- Keep page-specific SEO metadata in `useSeoMeta` and shared presentation in components. Keep reusable service content in `utils/services.ts` rather than duplicating overview-card data.
- Use Tailwind utility classes for component styling. Shared brand colors, fonts, page width, buttons, form fields, and base typography are defined in `tailwind.config.ts` and `assets/css/main.css`; prefer those tokens and classes when extending the design.
- Keep form delivery in server API routes: browser components call `/api/contact` or `/api/subscribe` with `$fetch`, while SMTP access stays in server utilities and runtime config.
