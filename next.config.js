/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/rooms',
        destination: '/flipbook',
        permanent: false,
      },
      {
        source: '/rooms/:path*',
        destination: '/flipbook',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
