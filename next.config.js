const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  distDir: "build",
};

/** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config.js");

// const nextConfig = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ["ru", "en"],
//     defaultLocale: "ru",
//   },
//   webpack: (config) => {
//     config.resolve.fallback = {
//       fs: false,
//     };

//     return config;
//   },
// };

// module.exports = nextConfig;
