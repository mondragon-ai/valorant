/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpapers.com",
      },
      {
        protocol: "https",
        hostname: "tiermaker.com",
      },
      {
        protocol: "https",
        hostname: "*.nocookie.net",
      },
      {
        protocol: "https",
        hostname: "images.contentstack.io",
      },
      {
        protocol: "https",
        hostname: "images.contentstack.io",
      },
      {
        protocol: "https",
        hostname: "dotesports.com",
      },
      {
        protocol: "https",
        hostname: "valorantstats.xyz",
      },
      {
        protocol: "https",
        hostname: "*.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
