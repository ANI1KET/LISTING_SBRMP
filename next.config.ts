import type { NextConfig } from "next";

const DOMAIN_BASE_URL = process.env.DOMAIN_BASE_URL;

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${DOMAIN_BASE_URL}/api/auth/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/afnosansaar/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
