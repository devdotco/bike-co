import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { COLLECTIONS, getPage, getCompany, type Collection } from '@/lib/content'
import { PageView } from '@/components/page-view'
import { PRODUCT_GROUPS, PLATFORM_GROUPS, SOLUTION_GROUPS, COMPARE_LINKS, RESOURCE_LINKS, type NavGroup } from '@/data/nav'
import { Calculator } from '@/components/calculator'
import { ContactForm } from '@/components/contact-form'
import type { ContentPage } from '@/lib/types'

const INDEX: Record<Collection, NavGroup[]> = {
  product: PRODUCT_GROUPS,
  platform: PLATFORM_GROUPS,
  solutions: SOLUTION_GROUPS,
  compare: [{ title: 'Head to head', links: COMPARE_LINKS }],
  resources: [{ title: 'Free tools & templates', links: RESOURCE_LINKS }],
}

/** Widgets that sit above a page's sections, keyed by href. */
const WIDGETS: Record<string, React.ReactNode> = {
  '/resources/repair-pricing-calculator': <Calculator />,
  '/contact': <ContactForm />,
}

export function meta(page: ContentPage, href: string): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: href },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: href },
  }
}

export function overviewRoute(c: Collection) {
  const page = COLLECTIONS[c].overview
  const href = `/${c}`
  return {
    metadata: meta(page, href),
    Page: () => <PageView page={page} href={href} crumbs={[{ name: COLLECTIONS[c].label, href }]} index={INDEX[c]} ldType="CollectionPage" />,
  }
}

type Props = { params: Promise<{ slug: string }> }

export function detailRoute(c: Collection) {
  return {
    generateStaticParams: () => COLLECTIONS[c].pages.map(p => ({ slug: p.slug })),
    generateMetadata: async ({ params }: Props): Promise<Metadata> => {
      const { slug } = await params
      const page = getPage(c, slug)
      return page ? meta(page, `/${c}/${slug}`) : {}
    },
    Page: async ({ params }: Props) => {
      const { slug } = await params
      const page = getPage(c, slug)
      if (!page) notFound()
      const href = `/${c}/${slug}`
      return (
        <PageView page={page} href={href} crumbs={[{ name: COLLECTIONS[c].label, href: `/${c}` }, { name: page.title, href }]}>
          {WIDGETS[href]}
        </PageView>
      )
    },
  }
}

export function companyRoute(slug: string) {
  const page = getCompany(slug)
  const href = `/${slug}`
  return {
    metadata: meta(page, href),
    Page: () => (
      <PageView page={page} href={href} crumbs={[{ name: page.title, href }]} ldType={slug === 'about' ? 'AboutPage' : slug === 'contact' ? 'ContactPage' : 'WebPage'}>
        {WIDGETS[href]}
      </PageView>
    ),
  }
}
