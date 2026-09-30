import type { NextConfig } from 'next'
import { LEGACY_REDIRECTS } from './data/redirects'

/**
 * Every old Shopify URL 301s somewhere useful. The explicit list comes from
 * the old sitemap; the catch-alls after it pick up Shopify's system paths and
 * anything the sitemap never listed. Order matters: first match wins.
 */
const SHOPIFY_CATCH_ALL = [
  { source: '/policies/privacy-policy', destination: '/privacy' },
  { source: '/policies/terms-of-service', destination: '/terms' },
  { source: '/policies/:path*', destination: '/terms' },
  { source: '/collections/all', destination: '/product' },
  { source: '/collections/:path*', destination: '/product' },
  { source: '/products/:path*', destination: '/product' },
  { source: '/pages/:path*', destination: '/' },
  { source: '/blogs/:blog/tagged/:tag*', destination: '/blog' },
  { source: '/blogs/:path*', destination: '/blog' },
  { source: '/cart/:path*', destination: '/pricing' },
  { source: '/cart', destination: '/pricing' },
  { source: '/checkout/:path*', destination: '/pricing' },
  { source: '/checkouts/:path*', destination: '/pricing' },
  { source: '/account/:path*', destination: 'https://app.erp.io' },
  { source: '/account', destination: 'https://app.erp.io' },
  { source: '/search', destination: '/' },
  { source: '/sitemap_:name.xml', destination: '/sitemap.xml' },
]

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'payload.dev.co' }],
  },
  async redirects() {
    // www → apex first, so every other rule only ever sees bike.co.
    const www = { source: '/:path*', has: [{ type: 'host' as const, value: 'www.bike.co' }], destination: 'https://bike.co/:path*' }
    return [www, ...LEGACY_REDIRECTS, ...SHOPIFY_CATCH_ALL].map(r => ({ ...r, statusCode: 301 as const }))
  },
}

export default nextConfig
