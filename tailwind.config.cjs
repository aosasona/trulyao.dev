/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  plugins: [require("tailwindcss/nesting")],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "100%",
        md: "90%",
        lg: "848px",
        xl: "848px",
        "2xl": "848px",
      },
    },
    extend: {
      fontFamily: {
        header: ["var(--header-font-family)"],
        alt: ["var(--alt-font-family)"],
        body: ["var(--body-font-family)"],
      },
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
          outline: "#91867f",
          50: "#f6f5f5",
          100: "#e8e6e5",
          200: "#d4d0cd",
          300: "#b6aeaa",
          400: "#91867f",
          500: "#766b64",
          600: "#645c56",
          700: "#544e4a",
          800: "#494541",
          900: "#403d39",
          950: "#100f0e",
        },
      },
    },
  },
};
