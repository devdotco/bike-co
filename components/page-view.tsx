import Link from 'next/link'
import type { ContentPage } from '@/lib/types'
import type { NavGroup } from '@/data/nav'
import { SITE } from '@/lib/site'
import { titleFor } from '@/lib/content'
import { JsonLd, breadcrumbLd, faqLd, webPageLd } from '@/lib/schema'
import { SectionView, Faqs } from '@/components/sections'
import { Visual } from '@/components/visuals'
import { StatusPill } from '@/components/status'
import { Icon, Arrow } from '@/components/icons'

type Crumb = { name: string; href: string }

export function PageView({ page, href, crumbs, index, children, ldType }: {
  page: ContentPage
  href: string
  crumbs: Crumb[]
  /** Overview pages list their children as cards. */
  index?: NavGroup[]
  /** Rendered between the hero and the sections (calculator, contact form). */
  children?: React.ReactNode
  ldType?: string
}) {
  return (
    <>
      <JsonLd data={[webPageLd(page, href, ldType), breadcrumbLd(crumbs), ...(page.faqs.length ? [faqLd(page.faqs)] : [])]} />
      <Hero page={page} crumbs={crumbs} />
      {children && <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">{children}</div>}
      {index && <IndexGrid groups={index} />}
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 sm:py-20">
        {page.sections.map((s, i) => <SectionView key={i} s={s} i={i} />)}
        <Faqs faqs={page.faqs} />
        <Related hrefs={page.related} />
      </div>
      <CtaBand />
    </>
  )
}

function Hero({ page, crumbs }: { page: ContentPage; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-asphalt text-white">
      <SpokeArt />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-20">
        <div>
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            {crumbs.map(c => <span key={c.href} className="flex items-center gap-1.5"><span aria-hidden>/</span>{c.href === crumbs.at(-1)?.href ? <span className="text-white/80">{c.name}</span> : <Link href={c.href} className="hover:text-white">{c.name}</Link>}</span>)}
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow text-hivis">{page.eyebrow}</p>
            {page.status && <StatusPill status={page.status} dark />}
          </div>
          <h1 className="display mt-4 text-[2.4rem] sm:text-5xl lg:text-[3.6rem]">{page.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{page.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.signUp} className="btn btn-hivis">Start free trial <Arrow /></a>
            <Link href="/pricing" className="btn btn-ghost text-white">Pricing</Link>
          </div>
          {page.status === 'roadmap' && <p className="mt-5 max-w-lg text-sm text-white/50">On the Service roadmap — this page explains how it will work. <Link href="/roadmap" className="underline underline-offset-2 hover:text-white">See what is live today</Link>.</p>}
        </div>
        <div className="min-w-0 text-ink"><Visual name={page.visual} /></div>
      </div>
      <div className="tape" aria-hidden />
    </section>
  )
}

/** A chainring-and-spokes watermark drawn behind every hero. */
function SpokeArt() {
  return (
    <svg viewBox="0 0 600 600" className="pointer-events-none absolute -right-40 -top-40 size-[640px] text-white/[0.04]" aria-hidden>
      <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="18" />
      <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="30" strokeDasharray="8 16" />
      {Array.from({ length: 32 }).map((_, i) => {
        const a = (i / 32) * Math.PI * 2
        return <line key={i} x1={300} y1={300} x2={300 + Math.cos(a) * 270} y2={300 + Math.sin(a + 0.35) * 270} stroke="currentColor" strokeWidth="2" />
      })}
      <circle cx="300" cy="300" r="40" fill="currentColor" />
    </svg>
  )
}

function IndexGrid({ groups }: { groups: NavGroup[] }) {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 pt-16 sm:px-6">
      {groups.map(g => (
        <section key={g.title}>
          <div className="flex items-center gap-3"><h2 className="eyebrow text-ink">{g.title}</h2><span className="ticks flex-1 text-ink" /></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {g.links.map(l => (
              <Link key={l.href} href={l.href} className="group flex gap-4 rounded-xl border border-line bg-paper p-5 transition-colors hover:border-ink">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-ink text-hivis"><Icon name={l.icon} /></span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-2 font-bold">{l.label}{l.status && <StatusPill status={l.status} />}</span>
                  <span className="mt-1 block text-sm leading-snug text-ink-2">{l.blurb}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function Related({ hrefs }: { hrefs: string[] }) {
  const items = hrefs.map(h => ({ h, t: titleFor(h) })).filter(x => x.t)
  if (!items.length) return null
  return (
    <section>
      <div className="flex items-center gap-3"><h2 className="eyebrow text-ink">Keep reading</h2><span className="ticks flex-1 text-ink" /></div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ h, t }) => (
          <Link key={h} href={h} className="group flex flex-col justify-between rounded-xl bg-ink p-5 text-white">
            <span><span className="font-bold leading-snug">{t!.title}</span><span className="mt-2 block text-sm leading-snug text-white/60">{t!.summary}</span></span>
            <Arrow className="mt-5 size-5 text-hivis transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-hivis text-ink">
      <svg viewBox="0 0 200 120" className="pointer-events-none absolute -bottom-10 right-0 h-64 text-ink/10 sm:right-10" aria-hidden fill="none" stroke="currentColor" strokeWidth="6"><circle cx="45" cy="80" r="32" /><circle cx="155" cy="80" r="32" /><path d="M45 80l40-44h52l18 44M85 36l16 44 36-44M101 80H45" /></svg>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-3xl sm:text-4xl">Take in your next repair on BIKE.co.</p>
          <p className="mt-2 max-w-xl text-ink/70">30 days free, no card, every erp.io module switched on. Start with a request, end with an invoice.</p>
        </div>
        <a href={SITE.signUp} className="btn btn-ink shrink-0">Start free trial <Arrow /></a>
      </div>
    </section>
  )
}
