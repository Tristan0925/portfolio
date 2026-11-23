# Tristan Laquindanum React Portfolio

This portfolio is a Vite + React application in the `portfolio` folder.

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The generated deployment files are in `dist/`.

## Deploy to Vercel for free

1. Push this `portfolio` folder to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Select **Add New... → Project**.
4. Import the repository.
5. Set the following values:
   - **Framework Preset:** Vite
   - **Root Directory:** `portfolio` if the repository root contains the portfolio folder
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**.

Vercel will build and publish the site with a free `*.vercel.app` URL. Every future push to the configured branch will trigger another deployment.

The included `vercel.json` rewrites all application routes to `index.html`, so routes such as `/contact`, `/projects`, and `/experience` work when visited directly or refreshed.

## Alternative: deploy with the Vercel CLI

```bash
npm install -g vercel
cd portfolio
vercel login
vercel
vercel --prod
```

Accept the Vercel project defaults unless prompted to change the project name or directory.
