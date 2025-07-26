// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://muddd.blog",
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: "it",
    locales: ["en", "it"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  adapter: netlify(),
});
