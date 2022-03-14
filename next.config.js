/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media4.giphy.com",
      "media3.giphy.com",
      "media2.giphy.com",
      "media1.giphy.com",
      "media.giphy.com",
      "www.omnisend.com",
      "metro.co.uk",
      "media4.popsugar-assets.com",
      "acegif.com",
      "i.pinimg.com",
    ],
  },
};

module.exports = nextConfig;
