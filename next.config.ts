import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    // Disable Image Optimization API for static export
    unoptimized: true,
  },
};

export default nextConfig;
