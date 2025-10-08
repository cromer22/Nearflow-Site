# Nearflow Website (Vite + React + Tailwind)

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel
1) Create a Vercel account and import this repo (or use the Vercel CLI).
2) Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3) After first deploy, add your domain **gonearflow.com** in Project → Settings → Domains.
   - Set **www.gonearflow.com** as the primary domain.
   - Redirect `gonearflow.com` → `www.gonearflow.com`.
4) At your domain registrar, add DNS records (using the values Vercel shows):
   - `A` record for `@` (apex) → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
5) Wait for DNS to propagate, then visit https://www.gonearflow.com
