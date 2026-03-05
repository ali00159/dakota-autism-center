import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React strict mode is enabled for development
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'niqavdltlskzigmrnave.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
