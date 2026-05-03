# Vidyashakti International School — Frontend

This repository contains a Vite + React (TypeScript) frontend for Vidyashakti International School.

## Local development

- Install dependencies:

```bash
npm install
```

- Run development server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

- Locally preview the production build:

```bash
npm run preview
```

## Deploying to Vercel

Recommended: connect your GitHub repository to Vercel for automatic deployments on push.

1. Ensure your code is pushed to GitHub (this repo is already pushed).
2. Go to https://vercel.com/import and choose **Import from Git** → **GitHub**.
3. Select the repository `ReachOutToHardik/schlexample` and import it.
4. In the project settings use these values:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add any environment variables under the Environment section if your app requires them.
6. Click **Deploy**. Vercel will build and provide a deployment URL. Subsequent pushes to the default branch will trigger new deployments automatically.

Optional: deploy with the Vercel CLI

```bash
npm i -g vercel
vercel login
cd path/to/project
vercel --prod
```

First-run prompts will guide you to link the project and set the framework/build settings (you can accept the defaults above).

## Notes

- If you want a dedicated Vercel configuration file, create `vercel.json` with a static-build setup and `dist` as the output directory.
- If you want, I can add `vercel.json` and set a GitHub action or help configure a custom domain.
