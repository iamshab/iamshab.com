# iamshab.com

Personal site for Shahab Aghaei, built with Astro. The homepage and work history are in English; the imported blog posts are in Persian.

## Work locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Then open the local address shown by Astro. Before publishing, run:

```sh
npm run check
npm run build
```

## Edit the site

- Identity and social links: `src/data/site.ts`
- Homepage introduction: `src/components/Hero.astro`
- Work history, education, and typed titles: `src/data/resume.ts`
- Blog posts: `src/content/blog/*.md`
- Portrait: `public/img/avatar.jpeg`
- Social sharing image: `public/og.jpg`
- Global styles: `src/styles/global.css`

The Travel section is paused in `src/paused/travel-pages/`. Its page layouts, components, content collection, and empty content/image folders remain for later use. The sample Kyoto trip and photos were removed. There are no public Travel pages in the current build.

## Publishing

`astro.config.mjs` is configured for `https://iamshab.com` at the domain root. The GitHub Pages workflow in `.github/workflows/deploy.yml` runs automatically on pushes to `main`, and can also be started manually from the Actions tab. Set the repository's Pages source to **GitHub Actions** and configure the custom domain in GitHub Pages before publishing.

The old WordPress posts used root-level addresses such as `/hello-world/`; the new blog uses `/blog/hello-world/`. Static redirect pages for all eight imported posts are configured in `astro.config.mjs`. GitHub Pages serves these as HTML pages with a browser redirect. A hosting platform with server-side redirects would be needed for true HTTP 301 responses.

## Origin

This site started from the Astro Wanderer template. See `LICENSE` for its license.
