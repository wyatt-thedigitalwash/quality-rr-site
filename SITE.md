# Quality Restoration & Renovations

## Business Overview

Quality Restoration & Renovations is a licensed, bonded, and insured general contractor based in Tampa, FL, serving the Tampa Bay region for over 25 years. The firm handles full-scope residential and commercial renovation, remodeling, and disaster restoration work across Hillsborough, Pinellas, and Pasco Counties.

Florida License: CGC1523357

## Contact

- Phone: (813) 517-1555
- Email: contact@quality-rr.com
- Address: 1907 N 40th Street, Tampa, FL 33605
- Hours: Monday through Friday, 8:00am to 4:30pm

## Brand Voice

Confident and direct. The firm speaks about itself in the third person where natural, using "Quality Restoration & Renovations" or "the team" rather than "we." Copy is plain, declarative, and free of marketing softness. No filler phrases like "we're here to help" or "let us guide you." The tone is that of a firm that has done this work for 25 years and does not need to oversell.

Rules:
- No em dashes anywhere in copy. Use periods, commas, or restructure the sentence.
- No exclamation points.
- No phrases like "Let us help," "Get started today," or "We're here for you."
- Avoid "trusted," "expert," and "premier" as adjectives applied to the firm. Show, do not tell.
- Stats and credentials are presented as facts, not boasts.

## Color Palette

Use these exact hex values. Do not introduce other colors.

- Navy: #024B7D (primary brand color, used for headlines, primary buttons, accents)
- Taupe: #72665A (secondary, used for secondary buttons, subtle backgrounds, dividers)
- Taupe Dark: #5A5048 (hover states, depth)
- Bone: #F3F3F3 (off-white, alternate section background, cool neutral)
- White: #FFFFFF (primary background, cards)
- Near-black: #252525 (body text)

Configure these in tailwind.config or globals.css as CSS variables and Tailwind theme extensions so they can be referenced throughout the codebase as `bg-navy`, `text-navy`, `bg-bone`, `text-taupe`, etc.

## Typography

Single font family: Inter. The site uses Inter at multiple weights to create hierarchy, with no secondary typeface. This is a Swiss / neo-grotesque approach.

- Display headlines (h1, h2): Inter 800. Tight negative letter-spacing (-0.03em to -0.035em). Leading 0.95 for hero, 1.05 for section headlines.
- Subheads (h3): Inter 700. Letter-spacing -0.02em. Leading 1.2.
- Body: Inter 400. Normal letter-spacing. Leading 1.6 to 1.7.
- UI / nav / eyebrows / buttons: Inter 500. Letter-spacing 0.15em (widest tracking, uppercase).
- Large display numbers (stats): Inter 800. Letter-spacing -0.04em.

Load Inter via next/font/google with weights 400, 500, 600, 700, 800. Configure as Tailwind's default font-sans family. Set font-display as an alias to the same font (so existing `font-display` class references continue to work, but resolve to Inter).

All headlines use navy color by default. Body uses ink.

## Design Direction

Industrial / craftsman. Editorial layout sensibility. Type-forward and photo-driven. The site should feel like a design-build firm's portfolio, not a contractor brochure.

Section backgrounds alternate between white and bone, never navy as a full section background. Navy is reserved for type, primary buttons, and small accent elements.

Buttons are square or have a small radius (4px maximum). No pill shapes. No gradients. Primary buttons are navy background with white text. Secondary buttons are outlined in taupe with taupe text.

## Anti-Patterns (Do Not Use Anywhere On This Site)

- Pill-shaped buttons
- Gradient backgrounds or gradient buttons
- Lucide or other icons inside colored circles
- Three-column card grids for services (use editorial layouts instead)
- Centered hero with stacked CTAs
- Animated number counters
- "Why Choose Us" sections with icon grids
- Drop shadows on cards
- Teal or orange anywhere
- Stock photography or generic imagery
- Before/after slider widgets
- "Get a Free Quote" popup modals
- Animated SVG line illustrations
- Em dashes in any copy

## Logo

Placeholder until client provides logo file. Render as a wordmark in Inter 800, navy, two-line:

Line 1: Quality Restoration
Line 2: & Renovations

Use this treatment in both header and footer. When the real logo file is provided, swap it in at /public/logo.svg or similar.

## Services

Two top-level service categories with subpages:

### Residential
Full home renovation, interior and exterior remodeling, patio and outdoor living, doors windows and ceilings, fire and flood restoration, structural modifications, flooring and trim work, drywall and painting.

### Commercial
Office remodeling, commercial build-outs, multi-housing renovations, interior and exterior renovations, complete property rehabs, fire and flood restoration, stair landing and balcony repairs, concrete stucco and siding work, wall relocation and HVAC modifications, doors windows and ceilings, drywall texture and paint.

### Specialty Pages
Kitchen Remodeling, Bathroom Remodeling, Office Remodeling each get their own detail page.

## Service Area

Tampa Bay region, specifically:
- Hillsborough County (Tampa, Brandon, Riverview, Plant City, Valrico, Carrollwood)
- Pinellas County (St. Petersburg, Clearwater, Largo, Dunedin, Palm Harbor, Pinellas Park)
- Pasco County (Wesley Chapel, New Port Richey, Land O' Lakes, Zephyrhills, Trinity)

## Page Inventory

1. Home (/)
2. Services (/services)
3. Residential (/services/residential)
4. Commercial (/services/commercial)
5. Kitchen Remodeling (/services/kitchen-remodeling)
6. Bathroom Remodeling (/services/bathroom-remodeling)
7. Office Remodeling (/services/office-remodeling)
8. Project Gallery (/project-gallery)
9. FAQs (/faqs)
10. Service Area (/service-area)
11. Contact (/contact)

All URLs match the existing live site at quality-rr.com to preserve SEO. The /service-area page is new.

## Image Strategy

Client will provide all photography post-launch. Until then, every image slot uses a labeled placeholder block with the correct aspect ratio, a taupe background, and small label text describing the intended image. Use the following pattern: a div with class `aspect-[ratio]` (e.g. `aspect-[16/9]`, `aspect-[4/5]`), background `bg-taupe/20`, with a centered text label in `text-taupe text-sm` describing what photo will go there (e.g. "Image: Modern kitchen interior, 16:9 hero").

Do not use placeholder image services like placehold.co or picsum. Use styled div blocks so the placeholders match the brand visually.

## Form Submission

The contact form submits via a Next.js API route at /api/contact, which uses Resend to email submissions to contact@quality-rr.com.

- Sending domain: quality-rr.com (verify in Resend dashboard before launch)
- From address: noreply@quality-rr.com
- Reply-to: form submitter's email
- Env variables:
  - RESEND_API_KEY: Resend API key for sending emails
  - CONTACT_TO_EMAIL: Comma-separated list of recipient email addresses (e.g. "contact@quality-rr.com,wyatt@thedigitalwash.com"). All submissions go to every email in the list. Locally use a personal test email.
- Honeypot spam prevention enabled on the "website" hidden field

When configuring the Vercel production environment, set CONTACT_TO_EMAIL=contact@quality-rr.com (or multiple addresses comma-separated). Locally in .env.local, set to a personal test email.

The ContactForm component is reused on both the home page and the /contact page.

## Conversion Tracking

The /home-renovations-tampa landing page uses Google Tag Manager for conversion tracking.

GTM Container: GTM-5VK4Q7QT (installed only on the landing page route via src/app/home-renovations-tampa/layout.tsx)

Tracked conversions:
- Form submission: LandingForm.tsx pushes `form_submit_success` event to dataLayer when /api/contact returns success. GTM listens for this custom event and fires the Google Ads Conversion Tracking tag (Conversion ID AW-17863186239, Label 533ZCNPqhuYbEL-u6sVC).
- Phone clicks: handled automatically by GTM's "Click to Call" trigger, which fires on any tel: link click. No code wiring required.

The honeypot bot path does NOT push the event, ensuring spam submissions are not counted as conversions.

GTM is intentionally NOT installed on the main site (any route outside /home-renovations-tampa) to prevent main site traffic from being counted as Google Ads conversions.

## Analytics

The main site uses Google Analytics 4 (GA4) for traffic and behavior measurement.

GA4 Measurement ID env variable: NEXT_PUBLIC_GA4_ID (set in .env.local locally and in Vercel production)

GA4 is installed only on the (main) route group, NOT on the landing page (/home-renovations-tampa). The landing page uses GTM for Google Ads conversion tracking exclusively, and is intentionally isolated from GA4 so that organic traffic does not contaminate Google Ads campaign data.

Tracked events:
- form_submit_success: fires when ContactForm submission succeeds (event_category: lead)
- phone_click: fires when any tel: link is clicked anywhere on the main site (event_category: engagement, includes phone_source metadata)
- Page views: tracked automatically via send_page_view in the gtag config

The honeypot bot path does NOT push form_submit_success events.

## Animation Strategy

The site uses Framer Motion for stateful animations (mobile menu, FAQ accordion, dropdowns) and CSS transitions for hover and color states. Animations are restrained to match the editorial brand direction.

Animated elements:
- FAQ accordion expand/collapse (FaqAccordion.tsx, FaqList.tsx)
- Mobile menu drawer slide-in/out with menu item stagger (Header.tsx)
- Services dropdown fade/slide on desktop (Header.tsx)
- Hero text stagger on initial load (home page and landing page only)
- Button and link hover state transitions (consistent 150-300ms durations)

NOT animated:
- Scroll-into-view body sections (no fade-in on scroll)
- Page route transitions (uses Next.js native)
- Splash screens or loading overlays
- Image hover effects (scale/zoom)
- Counter animations
- Parallax

Easing values:
- Standard: [0.16, 1, 0.3, 1] for editorial feel (slight overshoot dampened)
- Snappy: easeOut for dropdowns and quick state changes
- Slow: ease-in-out for cross-fades

All animations respect prefers-reduced-motion via Framer Motion's useReducedMotion hook.

## Blog

The site has a blog at /blog with individual posts at /blog/[slug].

Posts are MDX files stored in /content/blog/. Each post includes frontmatter (title, description, date, featuredImage, etc.) and markdown body content.

Posts are indexed by Google, included in the sitemap, and use Article schema JSON-LD for rich results.

Author attribution: All posts attributed to "Quality Restoration & Renovations" (firm-level, no personal author).

Categories used:
- Local Authority (Tampa Bay specific knowledge)
- Project Spotlight (case studies)
- Renovation Guide (general educational content)

Image handling: Featured images live in /public/images/. Reference by path like /images/filename.jpg in frontmatter. Use next/image for all blog images.

Blog post structure (in order):
1. Post header (eyebrow, title, metadata row)
2. Featured image (aspect-[16/9], full width)
3. Post content (max-w-2xl, editorial typography)
4. Continue exploring section (optional, from internalLinks frontmatter)
5. Article schema JSON-LD
6. CTA band

## Content Notes

Copy throughout the site has been adapted from the previous quality-rr.com site, cleaned of generic phrasing, em dashes, and softening language. Where copy is rewritten, it stays factual and direct.
