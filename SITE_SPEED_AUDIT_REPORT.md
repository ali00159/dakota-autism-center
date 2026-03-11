# Site Speed Audit Report

## Scope

- Implemented the optimization roadmap from `site_speed_audit_plan_4d29aa32.plan.md`.
- Kept layout, styling intent, and functionality unchanged.
- Focused on LCP image delivery, client bundle weight, and always-on runtime overhead.

## Baseline Snapshot

- `public/homepage-about-us-image.jpeg`: `2.7 MB`
- `public/images/home/hero-homepage-mother-child.jpg`: `373 KB`
- `public/images/contact/hero-contact-parent-child.jpg`: `362 KB`
- Duplicate hero `priority` usage existed on major routes (desktop + mobile hero variants).
- Homepage hero used `unoptimized`, bypassing Next.js image optimization.
- Client navigation imported heavy city content data (`src/data/cities.ts`) into a client component.

## Changes Implemented

### 1) Image Pipeline + LCP

- Enabled modern Next.js output formats in `next.config.ts`:
  - `images.formats = ['image/avif', 'image/webp']`
  - `images.minimumCacheTTL = 7 days`
- Removed `unoptimized` from homepage hero images in `src/app/HomeContent.tsx`.
- Removed duplicate hero `priority` patterns on key pages by keeping one priority LCP candidate and setting mobile variant to eager load:
  - `src/app/HomeContent.tsx`
  - `src/app/center-based-aba-therapy/CenterBasedContent.tsx`
  - `src/app/eidbi/EidbiContent.tsx`
  - `src/app/in-home-aba-therapy/InHomeAbaContent.tsx`
- Right-sized oversized about image:
  - Added `public/images/home/homepage-about-us-image.jpg` (`408 KB`)
  - Updated `src/app/HomeContent.tsx` to use the right-sized asset.

### 2) Global JS / Hydration Reduction

- Reduced client payload in navigation by splitting city nav data:
  - Added lightweight `src/data/cityNavigation.ts` (slug + city name only).
  - Updated `src/components/Navigation.tsx` to use lightweight data instead of full `cities.ts` content.
- Deferred below-the-fold client sections on homepage:
  - Dynamic imports for `ContactForm` and `TestimonialsSection` in `src/app/HomeContent.tsx`.

### 3) Runtime / Motion Overhead

- Scoped Lenis smooth-scroll runtime by route and reduced-motion preference:
  - Updated `src/components/SmoothScroll.tsx`.
  - Smooth-scroll initializes only on target marketing routes and is skipped for users with `prefers-reduced-motion: reduce`.

## Verification

- `npm run lint` passes (1 pre-existing unrelated warning in `src/app/blog/[slug]/BlogPostContent.tsx`).
- `npm run build` passes successfully.
- No linter errors in edited files.

## Notes

- The requested `audit-speed` skill was installed successfully.
- Full Lighthouse CLI capture could not be completed in this environment due repeated `npx lighthouse` install/runtime hang. Code-level optimizations and build/lint verification were completed and are ready for remeasurement in CI or local browser Lighthouse.
