import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@merit-systems/echo-next-sdk'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shirt-slop.myshopify.com',
        pathname: '/cdn/shop/files/**',
      },
    ],
  },
};

export default nextConfig;
