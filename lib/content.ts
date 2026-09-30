import type { ContentPage } from '@/lib/types'
import { productOverview, productPagesA } from '@/data/product-a'
import { productPagesB } from '@/data/product-b'
import { platformOverview, platformPagesA } from '@/data/platform-a'
import { platformPagesB } from '@/data/platform-b'
import { solutionsOverview, solutionPages } from '@/data/solutions'
import { compareOverview, comparePages } from '@/data/compare'
import { resourcesOverview, resourcePages } from '@/data/resources'
import { companyPages } from '@/data/company'

export type Collection = 'product' | 'platform' | 'solutions' | 'compare' | 'resources'

export const COLLECTIONS: Record<Collection, { label: string; overview: ContentPage; pages: ContentPage[] }> = {
  product: { label: 'Product', overview: productOverview, pages: [...productPagesA, ...productPagesB] },
  platform: { label: 'Platform', overview: platformOverview, pages: [...platformPagesA, ...platformPagesB] },
  solutions: { label: 'Solutions', overview: solutionsOverview, pages: solutionPages },
  compare: { label: 'Compare', overview: compareOverview, pages: comparePages },
  resources: { label: 'Resources', overview: resourcesOverview, pages: resourcePages },
}

export const COMPANY = companyPages

export function getPage(collection: Collection, slug: string) {
  return COLLECTIONS[collection].pages.find(p => p.slug === slug)
}

export function getCompany(slug: string) {
  const p = COMPANY.find(p => p.slug === slug)
  if (!p) throw new Error(`Missing company page: ${slug}`)
  return p
}

/** Every content page with its href — feeds the sitemap, llms.txt and link checks. */
export function allPages(): { href: string; page: ContentPage }[] {
  const out: { href: string; page: ContentPage }[] = []
  for (const [key, c] of Object.entries(COLLECTIONS)) {
    out.push({ href: `/${key}`, page: c.overview })
    for (const p of c.pages) out.push({ href: `/${key}/${p.slug}`, page: p })
  }
  for (const p of COMPANY) out.push({ href: `/${p.slug}`, page: p })
  return out
}

/** Title for a related-link card, found by href. */
export function titleFor(href: string): { title: string; summary: string } | undefined {
  const hit = allPages().find(x => x.href === href)
  if (hit) return { title: hit.page.title, summary: hit.page.summary }
  if (href === '/pricing') return { title: 'Pricing', summary: '30-day free trial, then from $20 per user a month.' }
  if (href === '/blog') return { title: 'Blog', summary: 'Notes on running a profitable service department.' }
  return undefined
}
