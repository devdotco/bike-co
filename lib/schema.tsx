import { SITE } from '@/lib/site'
import { PLANS } from '@/data/pricing'
import type { ContentPage, Faq } from '@/lib/types'

type Ld = Record<string, unknown>

export function JsonLd({ data }: { data: Ld | Ld[] }) {
  const graph = Array.isArray(data) ? data : [data]
  return (
    <script
      type="application/ld+json"
      // JSON.stringify escapes quotes; `<` is escaped so a string can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }}
    />
  )
}

export const organizationLd = (): Ld => ({
  '@type': 'Organization',
  '@id': `${SITE.url}/#org`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/brand/bike-logo-white.png`,
  parentOrganization: { '@type': 'Organization', name: 'erp.io', url: SITE.erp },
})

export const websiteLd = (): Ld => ({
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': `${SITE.url}/#org` },
})

export const breadcrumbLd = (trail: { name: string; href: string }[]): Ld => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', href: '/' }, ...trail].map((t, i) => ({
    '@type': 'ListItem', position: i + 1, name: t.name, item: `${SITE.url}${t.href === '/' ? '' : t.href}`,
  })),
})

export const faqLd = (faqs: Faq[]): Ld => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

export const webPageLd = (page: Pick<ContentPage, 'metaTitle' | 'metaDescription'>, href: string, type = 'WebPage'): Ld => ({
  '@type': type,
  '@id': `${SITE.url}${href}#page`,
  url: `${SITE.url}${href}`,
  name: page.metaTitle,
  description: page.metaDescription,
  isPartOf: { '@id': `${SITE.url}/#website` },
  publisher: { '@id': `${SITE.url}/#org` },
})

/** The product, priced from the real ladder. No ratings, ever. */
export const softwareLd = (): Ld => ({
  '@type': 'SoftwareApplication',
  '@id': `${SITE.url}/#software`,
  name: 'BIKE.co',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Bike shop management software',
  operatingSystem: 'Web browser (installable web app)',
  url: SITE.url,
  publisher: { '@id': `${SITE.url}/#org` },
  offers: PLANS.filter(p => p.base !== null).map(p => ({
    '@type': 'Offer',
    name: p.name,
    priceCurrency: 'USD',
    price: p.key === 'starter' ? '20' : String(p.base),
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      priceCurrency: 'USD',
      price: p.key === 'starter' ? 20 : p.base,
      unitText: p.key === 'starter' ? 'user per month' : 'month',
    },
    url: `${SITE.url}/pricing`,
  })),
})
