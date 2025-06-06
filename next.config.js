/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable performance optimizations
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Bundle analyzer (uncomment to analyze)
  // ...(process.env.ANALYZE === 'true' && { webpack: require('@next/bundle-analyzer')() }),
}

module.exports = nextConfig
