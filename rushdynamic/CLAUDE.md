# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 3030)
- **Build**: `npm run build`
- **Production server**: `npm start` (runs on port 3030)  
- **Lint**: `npm run lint`

## Project Architecture

This is a Next.js 14 portfolio website for Gokul Syam using the App Router architecture.

### Key Structure
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom fonts (InterTight, JetBrains Mono, Fraunces, Neue Metana, Neue Montreal)
- **Animations**: Framer Motion for page transitions and hover effects
- **Analytics**: PostHog integration for tracking pageviews
- **Layout**: Responsive design with custom breakpoints (3xl: 1921px)

### Font System
The project uses multiple custom fonts loaded via `next/font/local`:
- InterTight (primary)
- JetBrains Mono (monospace)
- Fraunces (serif, italic emphasis)
- Neue Metana (headings)
- Neue Montreal (body text)

All fonts are defined in `src/app/layout.tsx` and available as CSS variables.

### Pages Structure
- **Home** (`/`): Main landing page with animated profile image and bio
- **Projects** (`/projects`): Portfolio showcase using data from `src/app/data/projects.json`
- **Resume** (`/resume`): Resume/CV page
- **Contact** (`/contact`): Contact information page

### Component Architecture
- Layout components: `NavBar.tsx`, `Footer.tsx` in `src/app/`
- Page-specific components: `ProjectItems.tsx` in respective page directories
- Global providers: `PostHogProvider` in `src/app/providers.tsx`

### Data Management
- Project data is stored in `src/app/data/projects.json`
- Static assets (images, fonts) in `public/` directory
- Custom color palette defined in `tailwind.config.ts`

### PostHog Integration
- Configured in `src/app/providers.tsx` with manual pageview tracking
- Uses environment variables: `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`
- Wrapped in Suspense to avoid client-side rendering issues

### Custom Styling
- Custom CSS classes in `src/app/globals.css`
- Tailwind extends with custom colors: `light-grey`, `dark-grey`, `text-dark`
- Responsive design with mobile-first approach