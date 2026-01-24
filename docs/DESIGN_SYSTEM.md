# Design System Documentation

## Overview

The Forward Together website uses a comprehensive design system based on JSON tokens for colors, typography, spacing, and other design elements.

## Color Palette

### Neutral Earth Tones

The site uses a Neutral Earth Tones color palette with the following structure:

- **Primary Colors**: Main brand colors (dark charcoal, blue-grey)
- **Secondary Colors**: Accent colors (warm tan, olive-brown)
- **Neutral Colors**: Backgrounds and text (creamy beige, greys)
- **Semantic Colors**: Success, error, warning (if needed)

See `src/design-system/tokens.json` for the complete color token definitions.

## Typography

### Font Families

- **Headings**: Playfair Display (serif)
- **Body Text**: Montserrat (sans-serif)

### Font Sizes

Font sizes are defined in the design tokens and follow a consistent scale.

## Usage

Import tokens from `@/design-system/tokens`:

```typescript
import { tokens } from '@/design-system/tokens';
```

Use Tailwind classes that map to tokens:

```tsx
<div className="bg-primary-500 text-neutral-100">
  Content
</div>
```

## Token Structure

All design tokens are defined in `src/design-system/tokens.json` and can be accessed programmatically or via Tailwind classes.
