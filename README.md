# Shubham Traders Solar Website

Premium lead-generation website for Shubham Traders, a solar EPC company based in Kasrawad, Khargone, Madhya Pradesh.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Shadcn-style UI components
- Framer Motion ready
- Lucide Icons
- Sanity CMS schemas
- Resend email API route
- GA4 support
- Schema markup, sitemap and robots

## Run

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set production values before deployment.

## Lead Flow

Forms submit to `/api/lead`. If `RESEND_API_KEY` is configured, leads are emailed to `LEAD_TO_EMAIL`; otherwise they are logged during local development.
