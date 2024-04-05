import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import gruvboxMaterialDark from "./src/themes/gruvbox-material-dark.json";
import gruvboxMaterialLight from "./src/themes/gruvbox-material-light.json";
import externalize from "./src/plugins/externalize";

import mdx from "@astrojs/mdx";

// TODO: remove plugins
// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon(), solidJs(), mdx()],
	markdown: {
		shikiConfig: {
			themes: {
				light: gruvboxMaterialLight,
				dark: gruvboxMaterialDark,
			},
			defaultColor: false,
			wrap: true,
		},
		rehypePlugins: [
			[
				externalize,
				{
					domain: "trulyao.dev",
				},
			],
		],
	},
	redirects: {
		"/live": {
			status: 302,
			destination: "https://twitch.tv/iamtrulyao",
		},
	},
});
