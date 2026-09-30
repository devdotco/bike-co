import type { MetadataRoute } from 'next'
import { allPages } from '@/lib/content'
import { getPosts, postSlug } from '@/lib/payload-blog'
import { SITE } from '@/lib/site'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const top = ['/', '/pricing', '/blog']
  const pages = allPages().map(({ href }) => href)
  const posts = (await getPosts()).filter(p => !p.excludeFromSitemap && p.seo?.robotsIndex !== false)
  return [
    ...top.map(h => ({ url: `${SITE.url}${h === '/' ? '' : h}`, lastModified: now, changeFrequency: 'weekly' as const, priority: h === '/' ? 1 : 0.9 })),
    ...pages.map(h => ({ url: `${SITE.url}${h}`, lastModified: now, changeFrequency: 'monthly' as const, priority: h.split('/').length === 2 ? 0.8 : 0.7 })),
    ...posts.map(p => ({ url: `${SITE.url}/blog/${postSlug(p)}`, lastModified: new Date(p.updatedAt ?? p.publishedAt ?? now), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}
