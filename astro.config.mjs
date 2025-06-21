import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import externalize from "./src/plugins/externalize";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

import mdx from "@astrojs/mdx";

// TODO: remove plugins
// https://astro.build/config
export default defineConfig({
	site: "https://trulyao.dev",
	integrations: [tailwind(), icon(), solidJs(), mdx()],
	markdown: {
		syntaxHighlight: "prism",
		rehypePlugins: [[externalize, { domain: "trulyao.dev" }], rehypeHeadingIds],
	},
	redirects: {
		"/live": { status: 302, destination: "https://twitch.tv/3x3cv3" },
	},
});
