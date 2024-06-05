/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  astroAllowShorthand: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        printWidth: 180,
        wrap: "preserve",
        useTabs: false,
        trailingComma: "es5",
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: "always",
        proseWrap: "preserve",
        endOfLine: "auto",
        htmlWhitespaceSensitivity: "ignore",
        parser: "astro",
      },
    },
  ],
};
