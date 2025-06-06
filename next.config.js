/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable optimizations for better CLS
    optimizeCss: true,
  },
}

module.exports = nextConfig
