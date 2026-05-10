/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Production optimizations
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
