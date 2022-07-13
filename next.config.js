/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["media-exp2.licdn.com"] },
};

module.exports = nextConfig;
