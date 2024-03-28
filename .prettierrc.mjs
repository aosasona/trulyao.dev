/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  astroAllowShorthand: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
