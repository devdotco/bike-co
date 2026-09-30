import Link from 'next/link'
import type { Section, Faq } from '@/lib/types'
import { Icon, Arrow } from '@/components/icons'
import { StatusPill } from '@/components/status'
import { Visual } from '@/components/visuals'

export function SectionView({ s, i }: { s: Section; i: number }) {
  switch (s.kind) {
    case 'prose':
      return (
        <section className="grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
          <h2 className="display-soft text-2xl sm:text-3xl">{s.heading}</h2>
          <div className="prose-bike">{s.body.map((p, j) => <p key={j}>{p}</p>)}</div>
        </section>
      )
    case 'features':
      return (
        <section>
          <Head heading={s.heading} intro={s.intro} />
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map(f => (
              <div key={f.title} className="flex flex-col bg-paper p-5">
                <div className="flex items-start justify-between gap-2">
                  <span className="grid size-10 place-items-center rounded-lg bg-ink text-hivis"><Icon name={f.icon} /></span>
                  {f.status && <StatusPill status={f.status} />}
                </div>
                <h3 className="mt-4 text-[1.05rem] font-bold leading-snug">{f.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-2">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      )
    case 'steps':
      return (
        <section>
          <Head heading={s.heading} intro={s.intro} />
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {s.steps.map((st, j) => (
              <li key={st.title} className="relative flex gap-4 rounded-xl border border-line bg-paper p-5">
                <span className="display mono shrink-0 text-3xl text-ink/15" aria-hidden>{String(j + 1).padStart(2, '0')}</span>
                <div><h3 className="font-bold">{st.title}</h3><p className="mt-1 text-[0.95rem] leading-relaxed text-ink-2">{st.body}</p></div>
              </li>
            ))}
          </ol>
        </section>
      )
    case 'checklist':
      return (
        <section>
          <Head heading={s.heading} intro={s.intro} />
          <div className="mt-8 columns-1 gap-4 md:columns-2">
            {s.groups.map(g => (
              <div key={g.title} className="mb-4 break-inside-avoid rounded-xl border-2 border-ink bg-paper">
                <p className="flex items-center justify-between border-b-2 border-ink bg-hivis px-4 py-2 text-sm font-extrabold uppercase italic">{g.title}<span className="mono text-[10px] not-italic">{g.items.length}</span></p>
                <ul className="divide-y divide-line">
                  {g.items.map(it => (
                    <li key={it} className="flex gap-3 px-4 py-2.5 text-[0.93rem] leading-snug">
                      <span className="mt-0.5 size-4 shrink-0 rounded-[3px] border-2 border-ink" aria-hidden />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <PrintButton />
        </section>
      )
    case 'table':
      return (
        <section>
          <Head heading={s.heading} intro={s.intro} />
          <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-paper">
            <table className="w-full min-w-[560px] text-left text-[0.92rem]">
              <thead><tr className="bg-ink text-white">{s.columns.map(c => <th key={c} className="px-4 py-3 text-xs font-bold uppercase tracking-wide">{c}</th>)}</tr></thead>
              <tbody>{s.rows.map((r, j) => (
                <tr key={j} className="border-t border-line align-top even:bg-chalk/60">
                  {r.map((c, k) => <td key={k} className={`px-4 py-3 ${k === 0 ? 'font-semibold' : 'text-ink-2'}`}><Cell v={c} /></td>)}
                </tr>
              ))}</tbody>
            </table>
          </div>
          {s.note && <p className="mt-3 text-sm text-ink-3">{s.note}</p>}
        </section>
      )
    case 'callout':
      return (
        <aside className={`relative overflow-hidden rounded-xl p-6 sm:p-8 ${s.tone === 'honest' ? 'border-2 border-ink bg-paper' : 'bg-asphalt text-white'}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className={`grid size-11 shrink-0 place-items-center rounded-lg ${s.tone === 'honest' ? 'bg-hivis text-ink' : 'bg-white/10 text-hivis'}`}>
              <Icon name={s.tone === 'honest' ? 'clipboard' : 'link'} />
            </span>
            <div className="flex-1">
              <p className={`eyebrow ${s.tone === 'honest' ? 'text-ink-3' : 'text-hivis'}`}>{s.tone === 'honest' ? 'Straight answer' : 'On erp.io'}</p>
              <h2 className="display-soft mt-1 text-xl sm:text-2xl">{s.heading}</h2>
              <p className={`mt-2 leading-relaxed ${s.tone === 'honest' ? 'text-ink-2' : 'text-white/75'}`}>{s.body}</p>
              {s.href && <Link href={s.href} className={`mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase italic ${s.tone === 'honest' ? 'text-ink' : 'text-hivis'}`}>{s.cta ?? 'Learn more'} <Arrow /></Link>}
            </div>
          </div>
        </aside>
      )
    case 'visual':
      return (
        <figure className={`grid items-center gap-8 ${i % 2 ? 'md:grid-cols-[1fr_1.3fr]' : 'md:grid-cols-[1.3fr_1fr]'}`}>
          <div className={`min-w-0 ${i % 2 ? 'md:order-2' : ''}`}><Visual name={s.visual} /></div>
          <figcaption>
            {s.heading && <h2 className="display-soft text-2xl sm:text-3xl">{s.heading}</h2>}
            <p className="mt-3 leading-relaxed text-ink-2">{s.caption}</p>
            <p className="eyebrow mt-4 text-ink-3">Illustration · sample data</p>
          </figcaption>
        </figure>
      )
  }
}

/** Status words inside table cells render as pills. */
function Cell({ v }: { v: string }) {
  const t = v.trim()
  if (t === 'Live') return <StatusPill status="live" />
  if (t === 'Roadmap') return <StatusPill status="roadmap" />
  if (/^Via erp\.io/.test(t)) return <span className="inline-flex flex-wrap items-center gap-1.5"><StatusPill status="suite" /><span className="text-xs">{t.replace(/^Via erp\.io\s*/, '')}</span></span>
  return <>{v}</>
}

function Head({ heading, intro }: { heading: string; intro?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="display-soft text-2xl sm:text-3xl">{heading}</h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-ink-2">{intro}</p>}
    </div>
  )
}

export function Faqs({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null
  return (
    <section className="grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
      <div><p className="eyebrow text-ink-3">FAQ</p><h2 className="display-soft mt-1 text-2xl sm:text-3xl">Questions shop owners ask</h2></div>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map(f => (
          <details key={f.q} className="group py-4">
            <summary className="flex items-start justify-between gap-4 text-[1.05rem] font-bold">{f.q}<span className="faq-plus mt-0.5 text-2xl leading-none transition-transform">+</span></summary>
            <p className="mt-3 leading-relaxed text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function PrintButton() {
  return (
    <p className="no-print mt-2 text-sm text-ink-3">Print this page (⌘/Ctrl + P) for a clean paper copy, or build it as a template in Service.</p>
  )
}
