# Development Guide

## Prerequisites

- Node.js >= 18.17.0 (recommended: 20.x)
- npm >= 8.0.0

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - React components
- `src/lib/` - Utilities and constants
- `src/design-system/` - Design tokens and system
- `public/` - Static assets

## Development Workflow

1. Make changes to components or pages
2. Changes auto-reload in browser
3. Commit and push to trigger Vercel deployment

## Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- Design tokens for colors and typography
- ESLint for code quality

## Building

```bash
npm run build
```

This creates an optimized production build in `.next/` directory.
