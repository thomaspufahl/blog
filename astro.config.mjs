import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://thomaspufahl.com/",
  integrations: [
      tailwind({
        applyBaseStyles: false,
      }),
      image({
          serviceEntryPoint: '@astrojs/image/sharp'
      }),
      sitemap()
  ],
  vite: {
    ssr: {
      noExternal: ["smartypants"]
    }
  }
});