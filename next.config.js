/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable server-side features since we're doing a static export
  trailingSlash: true,
}

module.exports = nextConfig 