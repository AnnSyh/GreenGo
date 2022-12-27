/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    // domains: [
    //   {
    //     domain: "example.ru",
    //     defaultLocale: "rus",
    //   },
    //   {
    //     domain: "example.en",
    //     defaultLocale: "en",
    //   },
    // ],
  },
};

module.exports = nextConfig;
