import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { PLANS, monthly, SEAT_PRICE, PHONY_PER_MIN, PHONY_TRANSFER_PER_MIN, TRIAL_DAYS } from '@/data/pricing'
import { JsonLd, softwareLd, faqLd, webPageLd, breadcrumbLd } from '@/lib/schema'
import { Faqs } from '@/components/sections'
import { CtaBand } from '@/components/page-view'
import { Icon, Arrow } from '@/components/icons'
import type { Faq } from '@/lib/types'

const META = {
  metaTitle: 'BIKE.co Pricing — Bike Shop Software Plans',
  metaDescription: '30-day free trial, no card. Starter $20 per user a month, Growth $99 a month with 10 users, Scale $399 a month with 50 users. Phony $0.12 per minute.',
}

export const metadata: Metadata = { title: META.metaTitle, description: META.metaDescription, alternates: { canonical: '/pricing' } }

const USERS = [1, 2, 3, 5, 8, 10, 15, 25, 50]

const SETUPS = [
  { shop: 'Solo mechanic or a mobile van', people: 1, modules: 'Service + Phony', plan: 'Starter', why: 'Two modules is exactly Starter. One person, no base fee: $20 a month plus Phony call minutes.' },
  { shop: 'Two-stand shop with a counter', people: 3, modules: 'Service + Accounting', plan: 'Starter', why: 'Three people on Starter is $60 a month. Adding a third module means moving to Growth.' },
  { shop: 'Shop with a bench, a counter and a van', people: 6, modules: 'Service, Phony, Accounting, CRM + Marketing, Chat', plan: 'Growth', why: 'Five modules and six people fit inside Growth at $99. CRM and Marketing share one module slot.' },
  { shop: 'Two locations, twelve people', people: 12, modules: 'Service, Phony, Accounting, CFO, ATS', plan: 'Growth', why: '$99 plus two extra users at $20 each: $139 a month.' },
  { shop: 'Regional group or franchise', people: 40, modules: 'Up to ten modules, white-label', plan: 'Scale', why: '50 users and ten modules for $399, with your own branding. Beyond that, Enterprise is quoted.' },
]

const FAQS: Faq[] = [
  { q: 'Is there a free trial?', a: `Yes. Every new workspace gets ${TRIAL_DAYS} days free with no card, and every module is switched on during the trial so you can try the whole suite, not a cut-down version of it.` },
  { q: 'What counts as a module?', a: 'A module is one erp.io application: Service, Phony, Accounting, CFO, Chat and so on. Starter includes two, Growth five, Scale ten, and Enterprise all of them. CRM and Marketing share one slot. Nothing inside a module is locked to a bigger plan.' },
  { q: 'How are users counted?', a: `A user is a person who signs in. Starter charges $${SEAT_PRICE} for each one. Growth includes 10 and Scale includes 50, and every user beyond that is $${SEAT_PRICE} a month on either plan.` },
  { q: 'What does Phony cost?', a: `Phony, the AI receptionist, adds $${PHONY_PER_MIN.toFixed(2)} per minute of call time on every plan. Speech, model and voice are included. Warm transfers to a person are $${PHONY_TRANSFER_PER_MIN.toFixed(2)} a minute on Phony telephony, and telephony is billed at carrier cost, never marked up.` },
  { q: 'Do I pay extra for card processing?', a: 'BIKE.co does not take card payments inside Service yet. Pay links and QR codes are on the roadmap and will run through your own Stripe account at Stripe’s rates. Today, payments are recorded against the invoice by hand.' },
  { q: 'Can I change plans later?', a: 'Yes. Plans are sized on people and modules, so moving up is a matter of adding either. Enterprise is quote-only for groups that need a contract.' },
]

const money = (n: number | null) => (n === null ? '—' : `$${n.toLocaleString('en-US')}`)

export default function Pricing() {
  return (
    <>
      <JsonLd data={[softwareLd(), webPageLd(META, '/pricing'), breadcrumbLd([{ name: 'Pricing', href: '/pricing' }]), faqLd(FAQS)]} />
      <section className="relative overflow-hidden bg-asphalt text-white">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6">
          <p className="eyebrow text-hivis">Pricing</p>
          <h1 className="display mt-4 max-w-4xl text-[2.4rem] sm:text-6xl">People and modules. Nothing else.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Start with {TRIAL_DAYS} days free, no card, every module on. Then pay for how many people sign in and how many modules they use. No feature inside a module is held back for a bigger plan, and there is no charge by revenue or by bikes serviced.
          </p>
        </div>
        <div className="tape" aria-hidden />
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map(p => {
            const hot = p.key === 'growth'
            return (
              <div key={p.key} className={`relative flex flex-col rounded-2xl p-6 ${hot ? 'bg-ink text-white ring-4 ring-hivis' : 'border border-line bg-paper'}`}>
                {hot && <span className="status-pill absolute -top-3 left-6 bg-hivis text-ink">Most shops</span>}
                <p className="text-lg font-extrabold uppercase italic">{p.name}</p>
                <p className="mt-2 flex items-baseline gap-1">
                  <span className="display mono text-5xl">{p.base === null ? 'Quote' : p.key === 'starter' ? `$${SEAT_PRICE}` : `$${p.base}`}</span>
                  <span className={hot ? 'text-white/60' : 'text-ink-3'}>{p.base === null ? '' : p.key === 'starter' ? '/user/mo' : '/mo'}</span>
                </p>
                <p className={`mt-3 text-sm ${hot ? 'text-white/70' : 'text-ink-2'}`}>{p.blurb}</p>
                <ul className="mt-5 space-y-2 text-sm">{p.points.map(x => <li key={x} className="flex gap-2"><Icon name="check" className={`mt-0.5 size-4 shrink-0 ${hot ? 'text-hivis' : ''}`} />{x}</li>)}</ul>
                <p className={`mt-4 border-t pt-3 text-xs ${hot ? 'border-white/15 text-white/55' : 'border-line text-ink-3'}`}>+ ${PHONY_PER_MIN.toFixed(2)}/min of Phony call time</p>
                <div className="mt-auto pt-6">
                  {p.base === null ? <Link href="/contact" className={`btn w-full justify-center ${hot ? 'btn-hivis' : 'btn-ink'}`}>Talk to us</Link>
                    : <a href={SITE.signUp} className={`btn w-full justify-center ${hot ? 'btn-hivis' : 'btn-ink'}`}>Start free trial</a>}
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-4 text-sm text-ink-3">Prices in US dollars, billed monthly, before tax. The trial includes up to 25 people and every module.</p>

        <section className="mt-20">
          <div className="grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
            <h2 className="display-soft text-2xl sm:text-3xl">What a month costs, by team size</h2>
            <div className="prose-bike"><p>Starter is pure per-person pricing and suits one to four people using two modules. Growth has a flat base that covers ten people, so it is the cheaper plan from five people up — and the only one of the two with room for a third module. Scale covers fifty people and ten modules, and at twenty-five people costs the same as Growth. The table is the arithmetic, before Phony minutes.</p></div>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-paper">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead><tr className="bg-ink text-white"><th className="px-4 py-3 text-xs font-bold uppercase">People</th>{PLANS.filter(p => p.base !== null).map(p => <th key={p.key} className="px-4 py-3 text-xs font-bold uppercase">{p.name} · {p.modules} modules</th>)}</tr></thead>
              <tbody>{USERS.map(u => {
                const costs = PLANS.filter(p => p.base !== null).map(p => monthly(p, u))
                const best = Math.min(...costs.map(c => c ?? Infinity))
                return (
                  <tr key={u} className="border-t border-line">
                    <td className="mono px-4 py-2.5 font-semibold">{u}</td>
                    {costs.map((c, i) => <td key={i} className={`mono px-4 py-2.5 ${c === best ? 'font-bold' : 'text-ink-2'}`}>{money(c)}{c === best && <span className="ml-2 rounded bg-hivis px-1.5 py-0.5 text-[10px] font-bold text-ink">lowest</span>}</td>)}
                  </tr>
                )
              })}</tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-ink-3">&ldquo;Lowest&rdquo; compares price only. Starter allows 2 modules, Growth 5, Scale 10.</p>
        </section>

        <section className="mt-20">
          <div className="max-w-3xl">
            <h2 className="display-soft text-2xl sm:text-3xl">Typical bike-shop setups</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-2">Most shops start with Service and add Phony for the phone. Here is how common setups land on the ladder.</p>
          </div>
          <div className="mt-8 grid gap-3 lg:grid-cols-5">
            {SETUPS.map(s => (
              <div key={s.shop} className="flex flex-col rounded-xl border border-line bg-paper p-5">
                <p className="font-bold leading-snug">{s.shop}</p>
                <p className="mono mt-2 text-xs text-ink-3">{s.people} {s.people === 1 ? 'person' : 'people'}</p>
                <p className="mt-2 text-sm text-ink-2">{s.modules}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{s.why}</p>
                <span className="mt-auto pt-4"><span className="status-pill bg-ink text-hivis">{s.plan}</span></span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 rounded-2xl bg-asphalt p-8 text-white md:grid-cols-[1fr_1.2fr] md:p-12">
          <div>
            <p className="eyebrow text-hivis">Phony usage</p>
            <h2 className="display-soft mt-2 text-2xl sm:text-3xl">${PHONY_PER_MIN.toFixed(2)} a minute, on every plan.</h2>
          </div>
          <div className="space-y-3 text-white/75">
            <p>Phony meters the minutes it actually talks, with speech, model and voice included. The rate is the same on Starter as on Scale, so a bigger plan is a bigger company and never a better price per minute.</p>
            <p>Warm transfers to a person are ${PHONY_TRANSFER_PER_MIN.toFixed(2)} a minute on Phony telephony and nothing at all on your own carrier. Telephony is billed at carrier cost, never marked up. A shop that turns Phony off pays nothing for it.</p>
            <Link href="/platform/phony" className="inline-flex items-center gap-2 font-bold uppercase italic text-hivis">About Phony <Arrow /></Link>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <h2 className="display-soft text-2xl sm:text-3xl">What you are paying for today</h2>
          <div className="prose-bike">
            <p>Service today covers the repair from request to invoice: a requests inbox, quotes with line items and optional extras, jobs with visits and a required checklist, a week schedule with a queue for unscheduled work, timesheets, invoices, monthly reports, and checklists with photos, signatures and PDFs. The field app installs from the browser and keeps working without signal.</p>
            <p>Parts inventory, bike records with serial numbers, card payments by pay link or QR, and customer texts are on the roadmap. The price does not change when they arrive: new features inside a module come with the module. The roadmap page lists what is live and what is next.</p>
            <p><Link href="/roadmap" className="font-bold underline underline-offset-2">See the roadmap</Link></p>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <h2 className="display-soft text-2xl sm:text-3xl">How billing works</h2>
          <div className="prose-bike">
            <p>Your workspace is billed monthly by erp.io. The trial runs for {TRIAL_DAYS} days from the day you create the workspace, with no card on file, and nothing is charged until you choose a plan. If the trial ends without one, the workspace turns read-only: every screen and record stays visible, nothing is charged, and choosing a plan switches editing back on.</p>
            <p>When you choose a plan, you pick the modules to keep switched on. On Starter that is two, on Growth five, on Scale ten. People are counted from who can sign in, and the count updates whenever you add or remove someone, so a seasonal mechanic you remove in September stops counting from then.</p>
            <p>Phony minutes are metered separately and appear as their own line on the same invoice. Taxes are added where they apply. Enterprise customers are invoiced under their own agreement.</p>
          </div>
        </section>

        <div className="mt-20"><Faqs faqs={FAQS} /></div>
      </div>
      <CtaBand />
    </>
  )
}
