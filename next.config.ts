/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
};
