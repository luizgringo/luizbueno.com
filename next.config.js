module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  plugins: [
    "@fullhuman/postcss-purgecss",
    process.env.NODE_ENV === "production" ?
    {
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    } :
    false
  ]
}
