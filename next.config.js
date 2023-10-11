/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: [],
    path: '/_next/image',
    loader: 'default',
  },
}

module.exports = nextConfig
