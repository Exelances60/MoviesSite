/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "image.tmdb.org" }],
    deviceSizes: [500, 968],
    imageSizes: [475, 768],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
