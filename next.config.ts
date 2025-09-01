import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
    unoptimized: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
