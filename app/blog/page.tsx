import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPosts, mediaUrl, formatDate, postSlug } from '@/lib/payload-blog'
import { JsonLd, breadcrumbLd } from '@/lib/schema'
import { SITE } from '@/lib/site'
import { CtaBand } from '@/components/page-view'
import { Arrow, Icon } from '@/components/icons'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Bike Shop Owner Blog — Service, Parts & Profit | BIKE.co',
  description: 'Practical notes for bike shop owners and service managers: running a profitable service department, bench workflow, e-bike service, parts and hiring.',
  alternates: { canonical: '/blog' },
}

const PILLARS = [
  ['Profitable service', 'Labor rates, pricing tune-ups and the numbers behind a service department that pays for itself.', 'trend'],
  ['Bench workflow', 'Intake, work orders, promised dates and getting bikes out the door on the day you said.', 'kanban'],
  ['E-bike service', 'Diagnostics, batteries, motors and the paperwork that comes with warranty work.', 'ebike'],
  ['Parts & inventory', 'What to stock, when to reorder, and how parts margin quietly makes or breaks a job.', 'box'],
  ['Mobile repair', 'Vans, routes and fixing bikes where riders are.', 'van'],
  ['Hiring & training', 'Finding mechanics before the spring rush and training them to your standard.', 'hire'],
] as const

const EDITORIAL = [
  'This blog is written for the person who owns the shop or runs its service department: the one who sets the labor rate, decides what goes on the tune-up menu, answers for the bike that was promised Friday and is still waiting on a hanger, and does the books after close. It is not a riding blog. You will not find trail guides or gear reviews here. You will find the unglamorous parts of running a bench that pays.',
  'Most bike shops were built around retail, and the software followed. The till knows every SKU, but a repair is treated like a product with a price tag, and the real work of a service department — intake, diagnosis, approval, parts, labor, the promised date and the call when it slips — happens on paper tags, whiteboards and memory. That works until the spring rush, when the queue is three weeks long and nobody can say which bike is waiting on what.',
  'So the posts here stay practical. How to work out an hourly rate from your actual costs and the hours your mechanics can really bill, rather than copying the shop down the road. How to write a tune-up menu where each tier is a defined procedure, so the price matches the time. What to write on a work order so the mechanic, the counter and the customer agree on what was asked for. When a checklist is worth making mandatory, and when it just slows the bench down.',
  'E-bikes get their own attention, because they change the economics of a service department. Diagnostic time is longer, warranty work comes with paperwork, batteries need safe handling and storage, and a single missing part can hold a bike for weeks. Mobile repair gets the same treatment: routes, what to carry in the van, working without signal, and getting paid at the curb.',
  'Numbers come up a lot, because they decide whether a service department survives. Parts margin versus markup, what a comeback really costs once you count the bench time, why the cheapest tune-up on the menu is often the least profitable job in the building, and how to read a month of invoices and timesheets to see where the hours went. Where we use example figures, they are labelled as examples, worked through in full so you can put your own in.',
  'We also write about the people. Good mechanics are hard to find and harder to keep, and the shops that grow tend to be the ones that hire before the rush and train to a written standard rather than by watching over a shoulder.',
  'And we write about the tools, including the boring ones. The whiteboard that works better than any screen for a two-person shop. The point at which a spreadsheet stops being enough. What to ask any software vendor before you move your customer list, and how to get your data back out if you leave. The goal is a shop that runs well on whatever it uses, not a shop that depends on us.',
  'Where BIKE.co comes up, we say what is live today and what is still on the roadmap, the same way the rest of this site does. Every post is reviewed before it is published, and none of them will quote customers, invent statistics or promise features that do not exist yet. If a post helps you run a better bench with a notebook and a spreadsheet, it has done its job.',
]

export default async function BlogIndex() {
  const posts = await getPosts()
  return (
    <>
      <JsonLd data={[
        { '@type': 'Blog', '@id': `${SITE.url}/blog#blog`, name: 'BIKE.co Blog', url: `${SITE.url}/blog`, publisher: { '@id': `${SITE.url}/#org` },
          blogPost: posts.slice(0, 20).map(p => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE.url}/blog/${postSlug(p)}`, datePublished: p.publishedAt })) },
        breadcrumbLd([{ name: 'Blog', href: '/blog' }]),
      ]} />
      <section className="bg-asphalt text-white">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6">
          <p className="eyebrow text-hivis">The BIKE.co blog</p>
          <h1 className="display mt-4 max-w-4xl text-[2.4rem] sm:text-6xl">Notes from the service desk.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Written for the people who run bike shops, not the people who ride to them. How to price a tune-up so it pays, how to keep the Saturday drop-off queue moving, what to stock, who to hire, and where software earns its keep on a busy bench.
          </p>
        </div>
        <div className="tape" aria-hidden />
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(p => {
              const img = mediaUrl(p.featuredImage?.url)
              return (
                <Link key={p.id} href={`/blog/${postSlug(p)}`} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-paper transition-colors hover:border-ink">
                  <div className="relative aspect-[16/9] bg-asphalt">
                    {img ? <Image src={img} alt={p.featuredImage?.alt ?? ''} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" /> : <div className="grid h-full place-items-center text-hivis"><Icon name="chainring" className="size-12" /></div>}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="mono text-xs text-ink-3">{formatDate(p.publishedAt)}{p.primaryCategory?.name ? ` · ${p.primaryCategory.name}` : ''}</p>
                    <h2 className="mt-2 text-lg font-bold leading-snug group-hover:underline">{p.title}</h2>
                    {p.excerpt && <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-2">{p.excerpt}</p>}
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold uppercase italic">Read <Arrow className="size-3.5" /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="rounded-xl border-2 border-dashed border-line p-10 text-center">
            <p className="display-soft text-2xl">First posts are on the way.</p>
            <p className="mx-auto mt-2 max-w-lg text-ink-2">In the meantime, the free tools and templates in Resources are the most useful thing on this site for a shop owner.</p>
            <Link href="/resources" className="btn btn-ink mt-6">Free tools &amp; templates <Arrow /></Link>
          </div>
        )}

        <section className="mt-20 grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <h2 className="display-soft text-2xl sm:text-3xl">Who this blog is for</h2>
          <div className="prose-bike">
            {EDITORIAL.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <section className="mt-20">
          <div className="flex items-center gap-3"><h2 className="eyebrow text-ink">What we write about</h2><span className="ticks flex-1 text-ink" /></div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(([t, b, i]) => (
              <div key={t} className="bg-paper p-5">
                <span className="grid size-10 place-items-center rounded-lg bg-ink text-hivis"><Icon name={i} /></span>
                <h3 className="mt-4 font-bold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{b}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CtaBand />
    </>
  )
}
