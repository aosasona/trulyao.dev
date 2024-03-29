import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

import gruvboxMaterialTheme from "./src/themes/gruvbox-material-dark.json";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), solidJs()],
  markdown: {
    shikiConfig: {
      theme: gruvboxMaterialTheme,
    },
  },
  redirects: {
    "/live": {
      status: 302,
      destination: "https://twitch.tv/iamtrulyao",
    },
  },
});
