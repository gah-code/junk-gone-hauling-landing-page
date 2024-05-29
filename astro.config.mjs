// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});
import { defineConfig, passthroughImageService } from "astro/config";
// import tailwind from "@astrojs/tailwind";
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
});
