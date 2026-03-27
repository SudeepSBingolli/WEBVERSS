/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.sjbit.edu.in',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com', // ✅ ADD THIS
      },
    ],
  },
};

export default nextConfig;