import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { JsonLd, softwareLd, faqLd, webPageLd } from '@/lib/schema'
import { SOLUTION_LINKS, PRODUCT_LINKS } from '@/data/nav'
import { PLANS, PHONY_PER_MIN } from '@/data/pricing'
import { Visual } from '@/components/visuals'
import { Icon, Arrow } from '@/components/icons'
import { StatusPill } from '@/components/status'
import { Faqs } from '@/components/sections'
import { CtaBand } from '@/components/page-view'
import type { Faq, IconKey, Status, VisualKey } from '@/lib/types'

const META = {
  metaTitle: 'BIKE.co — Bike Shop Software for Repairs & Service',
  metaDescription: 'Shop software for bike repair businesses: quotes, work orders, scheduling, checklists, timesheets and invoices, plus an AI receptionist. 30-day free trial.',
}

export const metadata: Metadata = {
  title: META.metaTitle,
  description: META.metaDescription,
  alternates: { canonical: '/' },
}

const CHAIN: { t: string; b: string; icon: IconKey; status: Status }[] = [
  { t: 'Request', b: 'A rider asks for a repair. It lands in one inbox, not a sticky note.', icon: 'text', status: 'live' },
  { t: 'Quote', b: 'Line items, optional extras, tax. Approve it and it becomes a job.', icon: 'quote', status: 'live' },
  { t: 'Job', b: 'A numbered work order with visits, a mechanic and a required checklist.', icon: 'kanban', status: 'live' },
  { t: 'Checklist', b: 'Tune-up or safety check with photos and a signature, saved as a PDF.', icon: 'clipboard', status: 'live' },
  { t: 'Invoice', b: 'One click from the finished job. Discounts, tax, terms.', icon: 'invoice', status: 'live' },
  { t: 'Paid & picked up', b: 'Pay links, QR codes and "your bike is ready" texts are next.', icon: 'card', status: 'roadmap' },
]

const SHOWCASE: { eyebrow: string; title: string; body: string; visual: VisualKey; href: string; status: Status; points: string[] }[] = [
  {
    eyebrow: 'Shop floor', title: 'Every job, start to invoice.', visual: 'job-detail', href: '/product/work-orders', status: 'live',
    body: 'Work orders in Service are numbered jobs with visits, an assigned mechanic and a checklist that has to be done before the job closes. When the bike is finished, the invoice is one click away.',
    points: ['Numbered jobs with visits and assignees', 'Required checklist before a job can close', 'Bill the finished job in one click'],
  },
  {
    eyebrow: 'Standards', title: 'The same tune-up, every time.', visual: 'checklist', href: '/product/service-checklists', status: 'live',
    body: 'Build your tune-up, safety inspection and e-bike diagnostic as versioned checklists: pass/fail items, measurements, photos and the customer signature. Every submission becomes a PDF and a row in a report you can export.',
    points: ['Eight question types, including photo and signature', 'Versions never change under old submissions', 'PDF for the customer, CSV for you'],
  },
  {
    eyebrow: 'The week', title: 'See the week before it happens.', visual: 'schedule', href: '/product/scheduling', status: 'live',
    body: 'Plan the week by mechanic, park work that has no day yet in a queue, and give everyone a Today list. Mechanics clock in against the job so you know where the hours went.',
    points: ['Week view and unscheduled queue', 'Today list for each mechanic', 'Timesheets approved weekly'],
  },
  {
    eyebrow: 'Beyond Jobber', title: 'Parts that know which bike they are on.', visual: 'parts-table', href: '/product/parts-inventory', status: 'roadmap',
    body: 'General field-service tools stop at a price list. Parts inventory in Service is planned: stock in the shop and in every van, parts consumed on the work order, reorder points that draft the purchase order. It is on the roadmap, and we say so.',
    points: ['Stock by location, shop and van', 'Reorder points that draft a PO', 'Parts cost on every job'],
  },
]

const FAQS: Faq[] = [
  { q: 'What is BIKE.co?', a: 'BIKE.co is shop-management software for bike repair businesses. It runs on erp.io, so the same login covers repairs, phones, accounting, hiring and training. It is software for shop owners, not a bike shop.' },
  { q: 'What can I use today?', a: 'Today Service has a requests inbox, quotes, jobs with visits, a week schedule, timesheets, invoices, reports and checklists with photos, signatures and PDFs, plus an installable field app. Parts inventory, bike records with serials, card payments and customer texts are on the roadmap. The roadmap page lists every item.' },
  { q: 'How much does it cost?', a: 'Every workspace starts with a 30-day free trial with no card and every module switched on. After that, Starter is $20 per user per month for two modules, Growth is $99 a month with 10 users and five modules, and Scale is $399 a month with 50 users and ten modules. Extra users are $20 each.' },
  { q: 'Is there a phone app?', a: 'The field app is an installable web app. You add it to the home screen from the browser and it keeps working with no signal. There is no App Store app, and that also means no Tap to Pay: card payments will be by pay link or QR code.' },
  { q: 'Can it answer the shop phone?', a: `Yes, with Phony, the erp.io AI receptionist. It answers from what you teach it, routes calls, warm-transfers to a person and saves the caller to your CRM. It costs $${PHONY_PER_MIN.toFixed(2)} per minute of call time on any plan. Looking up a bike's status inside a call is on the roadmap.` },
  { q: 'Is BIKE.co a point-of-sale system?', a: 'No. BIKE.co is service-first: it runs the workshop, not the showroom till. Shops that sell a lot of retail usually keep their POS for the counter and run the service department in BIKE.co.' },
]

export default function Home() {
  return (
    <>
      <JsonLd data={[softwareLd(), webPageLd(META, '/'), faqLd(FAQS)]} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-asphalt text-white">
        <video className="absolute inset-0 -z-20 size-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/video/hero-poster.jpg" aria-hidden>
          <source src="/video/hero-1080.mp4" type="video/mp4" media="(min-width: 1280px)" />
          <source src="/video/hero-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,18,20,.92)_0%,rgba(17,18,20,.78)_45%,rgba(17,18,20,.35)_100%)]" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pb-28">
          <p className="eyebrow text-hivis">Bike shop software · on erp.io</p>
          <h1 className="display mt-5 max-w-4xl text-[3rem] sm:text-7xl lg:text-[5.6rem]">Every repair<br />you take in.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Requests, quotes, work orders, the week&apos;s schedule, checklists and invoices in one place, built for the service side of a bike shop. And an AI receptionist for the phone you can&apos;t answer with a bleed kit in your hand.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={SITE.signUp} className="btn btn-hivis">Start free trial <Arrow /></a>
            <Link href="/product" className="btn btn-ghost text-white">See the product</Link>
          </div>
          <p className="mt-6 text-sm text-white/60">30 days free · no card · every module switched on</p>
        </div>
        <div className="border-t border-white/10 bg-asphalt/70 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 text-sm sm:px-6">
            <span className="flex items-center gap-2"><StatusPill status="live" dark /><span className="text-white/60">today:</span></span>
            {PRODUCT_LINKS.filter(l => l.status === 'live').map(l => <Link key={l.href} href={l.href} className="text-white/85 hover:text-hivis">{l.label}</Link>)}
            <Link href="/roadmap" className="ml-auto text-white/55 underline underline-offset-2 hover:text-white">What&apos;s next</Link>
          </div>
        </div>
        <div className="tape" aria-hidden />
      </section>

      {/* The chain */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <h2 className="display-soft text-3xl sm:text-4xl">From &ldquo;can you look at my bike?&rdquo; to paid, without retyping.</h2>
          <div className="prose-bike">
            <p>Most shops run service on three things that don&apos;t talk to each other: a retail POS that treats a repair like a product, paper tags on the bikes, and a phone that rings every time someone wants to know if their bike is ready. Details get copied from one to the next, and something always goes missing between the counter and the stand.</p>
            <p>BIKE.co keeps the whole repair as one record. The request becomes the quote, the approved quote becomes the job, the job carries its checklist and the mechanic&apos;s hours, and the finished job becomes the invoice. Nobody types the same bike twice.</p>
          </div>
        </div>
        <ol className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-6">
          {CHAIN.map((c, i) => (
            <li key={c.t} className="relative flex flex-col bg-paper p-5">
              <div className="flex items-center justify-between"><span className="mono text-xs text-ink-3">{String(i + 1).padStart(2, '0')}</span><StatusPill status={c.status} /></div>
              <span className="mt-4 grid size-10 place-items-center rounded-lg bg-ink text-hivis"><Icon name={c.icon} /></span>
              <h3 className="mt-3 font-extrabold uppercase italic">{c.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-2">{c.b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Showcase */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6">
          {SHOWCASE.map((s, i) => (
            <div key={s.title} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={`min-w-0 ${i % 2 ? 'lg:order-2' : ''}`}><Visual name={s.visual} /></div>
              <div>
                <div className="flex items-center gap-3"><p className="eyebrow text-ink-3">{s.eyebrow}</p><StatusPill status={s.status} /></div>
                <h2 className="display mt-3 text-3xl sm:text-5xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-2">{s.body}</p>
                <ul className="mt-6 space-y-2">{s.points.map(p => <li key={p} className="flex gap-3"><Icon name="check" className="mt-0.5 size-5 shrink-0" />{p}</li>)}</ul>
                <Link href={s.href} className="mt-7 inline-flex items-center gap-2 font-bold uppercase italic">Learn more <Arrow /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phony */}
      <section className="relative overflow-hidden bg-asphalt text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3"><p className="eyebrow text-hivis">Phony · AI receptionist</p><StatusPill status="suite" dark /></div>
            <h2 className="display mt-4 text-4xl sm:text-6xl">The phone, answered.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Saturday morning, two bikes on the stands, a line at the counter, and the phone going again. Phony answers every call on the shop line, handles the questions you have taught it — hours, what a tune-up includes, how drop-off works — and puts the caller through to a person or books a callback when it matters.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Answers from your own knowledge base', 'Warm transfer to the service desk', 'Callbacks, not voicemail', 'Every caller saved to your CRM'].map(p => <li key={p} className="flex gap-2 text-white/85"><Icon name="check" className="mt-0.5 size-5 shrink-0 text-hivis" />{p}</li>)}
            </ul>
            <p className="mt-6 text-sm text-white/55">${PHONY_PER_MIN.toFixed(2)} per minute of call time on every plan. Checking a bike&apos;s repair status inside a call is on the roadmap.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/ai-receptionist" className="btn btn-hivis">AI receptionist <Arrow /></Link>
              <Link href="/platform/phony" className="btn btn-ghost text-white">About Phony</Link>
            </div>
          </div>
          <div className="min-w-0 text-ink"><Visual name="phony-call" /></div>
        </div>
      </section>

      {/* Suite */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow text-ink-3">One login</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">The rest of the business comes with it.</h2>
          <div className="prose-bike mt-5">
            <p>BIKE.co is the bike-shop face of erp.io. Service runs the workshop; the modules around it run everything else a shop owner ends up doing after close. Accounting for the books. CFO for the slow months. ATS to hire a mechanic before spring. Courses to train them on your tune-up standard. Chat so the counter can ask the bench a question without shouting.</p>
            <p>Plans count modules, not features, so nothing inside a module is held back for a bigger plan.</p>
          </div>
          <Link href="/platform" className="btn btn-ink mt-8">Tour the suite <Arrow /></Link>
        </div>
        <div className="min-w-0"><Visual name="suite-grid" /></div>
      </section>

      {/* Solutions */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-soft text-3xl sm:text-4xl">Built for the way your shop works.</h2>
            <Link href="/solutions" className="inline-flex items-center gap-2 font-bold uppercase italic">All solutions <Arrow /></Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="group flex items-center gap-4 rounded-xl border border-line bg-chalk p-5 hover:border-ink">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-ink text-hivis"><Icon name={l.icon} /></span>
                <span className="min-w-0 flex-1"><span className="block font-bold">{l.label}</span><span className="block text-sm text-ink-2">{l.blurb}</span></span>
                <Arrow className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <div>
            <p className="eyebrow text-ink-3">Pricing</p>
            <h2 className="display-soft mt-1 text-3xl sm:text-4xl">Priced on people and modules. That&apos;s it.</h2>
            <p className="mt-4 leading-relaxed text-ink-2">Every workspace starts with 30 days free, no card, with every module switched on. After that you pick a plan by how many people sign in and how many modules they use.</p>
            <Link href="/pricing" className="btn btn-ink mt-6">Full pricing <Arrow /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {PLANS.map(p => (
              <div key={p.key} className={`rounded-xl border p-5 ${p.key === 'growth' ? 'border-ink bg-hivis/20' : 'border-line bg-paper'}`}>
                <p className="font-extrabold uppercase italic">{p.name}</p>
                <p className="mono mt-1 text-2xl font-bold">{p.base === null ? 'Quote' : p.key === 'starter' ? '$20' : `$${p.base}`}<span className="text-sm font-normal text-ink-3">{p.base === null ? '' : p.key === 'starter' ? ' /user/mo' : ' /mo'}</span></p>
                <p className="mt-1 text-sm text-ink-2">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6"><Faqs faqs={FAQS} /></div>
      <CtaBand />
    </>
  )
}
