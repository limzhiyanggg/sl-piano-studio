# Serene Piano Studio

Single-page marketing website for a private piano teacher in Singapore.

## Stack
- React + Vite
- Styling: TBD (Phase 2)

## Structure
- `src/components/` — one file per page section
- `src/assets/images/` — image assets (added in Phase 2)
- `src/tokens.js` — all design tokens (colors, type scale, spacing, radii)

## Phases
- Phase 1 (complete): Full JSX structure + all copy. No styling.
- Phase 2: CSS/Tailwind styling to match Figma desktop design.
- Phase 3: Responsive (mobile/tablet).

## Design Reference
Figma: https://www.figma.com/design/6uuNexgdmxgoKnzfnT1ZNJ/Serene-Piano-Studio?node-id=27-391
Fonts: Cormorant Garamond (headings/logo), EB Garamond (subheadings/steps), Manrope (body/nav/UI)
Accent: #B89A7A · Text dark: #1F2A33 · Text mid: #696E71 · BG secondary: #F3F3F3

## Design Tokens
All tokens live in `src/tokens.js` — colors, typography scale, spacing, and border radii.
Do not hardcode any design values in components. Import from tokens.

Note: Google Fonts (Cormorant Garamond, EB Garamond, Manrope) are loaded via `<link>` in `index.html` — add these in Phase 2 before applying typography styles.

## Reusable Components
- `TestimonialCard` — props: `name`, `quote`, `isPlaceholder`
- `FAQItem` — props: `question`, `answer`

## Image Conventions
Phase 1: placeholder JSX comments in the form `{/* image-name: description */}`
Phase 2: replace with real assets imported from `src/assets/images/`

## Commands
```
npm run dev    # start dev server
npm run build  # production build
```
