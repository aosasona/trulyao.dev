/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	plugins: [require("tailwindcss/nesting")],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#e4af5d",
					text: {
						light: "#1b1a18",
						dark: "#faf1da",
					},
					50: "#fdf9ef",
					100: "#faf1da",
					200: "#f3e0b5",
					300: "#ebca86",
					400: "#e4af5d",
					500: "#dc9333",
					600: "#ce7b28",
					700: "#ab6023",
					800: "#894d23",
					900: "#6e4020",
					950: "#3b1f0f",
				},
				secondary: {
					light: "#fdf9ef",
					dark: "#1b1a18",
					outline: "#a9a49f",
					50: "#f7f7f6",
					100: "#e5e3e2",
					200: "#cbc7c4",
					300: "#a9a49f",
					400: "#86827b",
					500: "#6c6660",
					600: "#55514c",
					700: "#46443f",
					800: "#3a3835",
					900: "#33302e",
					950: "#1b1a18",
				},
			},
		},
	},
};
