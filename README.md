# Ethovia Website

## Project Summary
Ethovia is a Next.js App Router website for a digital marketing agency.  
It contains public-facing pages for homepage, about, services, work portfolio, dynamic case studies, contact, privacy policy, terms, and a custom 404 page.

## Problem Solved
The repository implements a branded web presence that:
- presents services and case studies,
- communicates contact channels,
- captures inquiry details through a validated contact form UI.

## Features
- Next.js App Router routing:
  - `/`
  - `/about`
  - `/services`
  - `/work`
  - `/work/[slug]`
  - `/contact`
  - `/privacy`
  - `/terms`
  - custom `not-found` page
- Shared site shell: navbar, footer, floating WhatsApp button, scroll-to-top button.
- Portfolio data source in `src/data/portfolioData.ts`, used for:
  - `/work` listing and filtering UI
  - static params generation for `/work/[slug]`
  - individual case-study rendering
- Contact form with client-side validation via React Hook Form + Zod.
- Animation and motion effects via Framer Motion and Lenis.

## Tech Stack
- Framework: Next.js `^16.0.10`
- Runtime UI: React `19.1.0`, React DOM `19.1.0`
- Language: TypeScript
- Styling: Tailwind CSS v4
- Animation: Framer Motion, Lenis
- Forms/Validation: React Hook Form, Zod, `@hookform/resolvers`
- Icons: Lucide React
- Linting: ESLint (Next.js config)

## Setup
Prerequisites:
- Node.js (version not pinned in repo)
- npm

Install and run:
```bash
npm install
npm run dev
```

Build and run production server:
```bash
npm run build
npm run start
```

Lint:
```bash
npm run lint
```

Note: linting requires dependencies to be installed (`node_modules` present).

## Structure
```text
src/
  app/
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
    services/page.tsx
    terms/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    globals.css
    layout.tsx
    not-found.tsx
    page.tsx
  components/
    common/
    home/
    layout/
    work/
  data/
    portfolioData.ts
public/
  images/
```

## Architecture Overview
- Rendering model:
  - App Router layout (`src/app/layout.tsx`) wraps all pages with shared UI components.
  - Most UI components are client components (`"use client"`), including animated sections and form handling.
- Data model:
  - Case-study content is local static data in `src/data/portfolioData.ts`.
  - `getAllSlugs()` feeds `generateStaticParams()` for static dynamic-route generation.
  - `getCaseStudyBySlug()` resolves data for `/work/[slug]`.
- Interaction model:
  - Contact form validates locally and shows success UI after a simulated async delay.
  - No API route handlers are present in `src/app` (`route.ts` files not found).

## Deployment Notes (Confirmed)
- Confirmed scripts for standard Next.js deployment flow:
  - `npm run build`
  - `npm run start`
- `next.config.ts` configures image quality allowlist.
- No deployment-specific config files detected:
  - no `vercel.json`
  - no `Dockerfile`
  - no CI workflow files under `.github/workflows`

## Limitations
- Contact form does not submit to a backend; it simulates submission and logs form data to the browser console.
- Legal pages currently contain placeholder text.
- Some internal links in footer/home service cards target routes or anchors not currently implemented.
- No automated tests were found in this repository.
- Repository contains at least one empty component file (`src/components/common/SmoothScrollProvider.tsx`) and some apparently unused assets/components.

## Partially Inferred Items
- The exact production hosting platform is not declared in repository config.
- Whether some missing routes are planned future pages or accidental dead links is not explicitly documented.
