/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
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
    ],
  },
};

export default nextConfig;
