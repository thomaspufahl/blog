import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

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
  ],
  vite: {
    ssr: {
      noExternal: ["smartypants"]
    }
  }
});