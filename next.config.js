/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Temporarily ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
    unoptimized: false,
  },
  webpack: (config) => {
    // Important: return the modified config
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime.js': 'react/jsx-runtime',
      'react/jsx-dev-runtime.js': 'react/jsx-dev-runtime',
    };
    
    // Handle canvas (used by Three.js)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      canvas: false,
    };

    return config;
  },
  // Add transpile packages if needed
  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'postprocessing',
    '@react-three/postprocessing',
  ],
};

module.exports = nextConfig;
