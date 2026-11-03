// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set this to your production URL (no trailing slash)
  site: 'https://iamshab.com',
  // Set this to your site's subpath if it is NOT hosted at the domain root
  // (e.g. GitHub Pages project sites). Delete this line if your site lives at "/".
  // Original WordPress permalinks. Astro emits static redirect pages for GitHub Pages.
  redirects: {
    '/hello-world/': '/blog/hello-world/',
    '/lamp-centos7/': '/blog/lamp-centos7/',
    '/jack-dorsey-decentralized-protocol/': '/blog/jack-dorsey-decentralized-protocol/',
    '/zitel-internet/': '/blog/zitel-internet/',
    '/قطع-برق؛-دردسرها-و-راه‌کارهای-مدیران/': '/blog/قطع-برق-دردسرها-و-راهکارهای-مدیران/',
    '/ilo-روی-اینترنت-داستان-یک-گاف-عملیاتی-در-د/': '/blog/ilo-روی-اینترنت-داستان-یک-گاف-عملیاتی-در-د/',
    '/اون-داشبورد-مانیتورینگ-لعنتی-رو-باز-کن/': '/blog/اون-داشبورد-مانیتورینگ-لعنتی-رو-باز-کن/',
    '/چهقدر-برای-سازمان-مهم-هستیم؟/': '/blog/چهقدر-برای-سازمان-مهم-هستیم/',
  },
  integrations: [sitemap()],
});
