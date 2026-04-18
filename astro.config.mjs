// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://zibasan.github.io",
  base: "/markdown-code-editor-wiki",
  integrations: [
    starlight({
      title: "Markdown Editor Docs",
      customCss: ["./src/styles/custom.css"],
      defaultLocale: "root",
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
        en: {
          label: "English",
          lang: "en",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/zibasan/markdown-editor",
        },
      ],
      sidebar: [
        { label: "ホーム", link: "/" },
        {
          label: "始めましょう",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "test-pages",
          autogenerate: { directory: "test-pages" },
        },
      ],
    }),
    react(),
  ],
});
