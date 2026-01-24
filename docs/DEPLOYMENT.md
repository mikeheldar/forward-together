# Deployment Documentation

## Vercel Deployment

This project is automatically deployed to Vercel when changes are pushed to the `main` branch on GitHub.

### Production URL

- Production: https://forward-together-qs7p7i4d0-mikeheldars-projects.vercel.app
- Dashboard: https://vercel.com/mikeheldars-projects/forward-together

### Automatic Deployments

- Every push to `main` triggers a new production deployment
- Pull requests create preview deployments automatically

### Environment Variables

If needed, add environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SIMPLEPRACTICE_PORTAL_URL` (optional)
- `NEXT_PUBLIC_SIMPLEPRACTICE_BOOKING_URL` (optional)

### Build Configuration

- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Node Version**: 20.x (configured in Vercel)

## Manual Deployment

To deploy manually using Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```
