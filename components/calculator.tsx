'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'
import { Arrow } from '@/components/icons'

type Field = { key: keyof State; label: string; unit: string; step: number; min: number; max: number; hint: string }
type State = { minutes: number; rate: number; parts: number; markup: number; tax: number }

const FIELDS: Field[] = [
  { key: 'minutes', label: 'Labor time', unit: 'min', step: 5, min: 0, max: 600, hint: 'Book time for the job, not the fastest you have ever done it.' },
  { key: 'rate', label: 'Shop labor rate', unit: '$/h', step: 1, min: 0, max: 400, hint: 'Use the labor rate guide to work yours out.' },
  { key: 'parts', label: 'Parts cost', unit: '$', step: 1, min: 0, max: 5000, hint: 'What you paid, before markup.' },
  { key: 'markup', label: 'Parts markup', unit: '%', step: 5, min: 0, max: 300, hint: 'Markup is on cost. 60% markup is a 37.5% margin.' },
  { key: 'tax', label: 'Sales tax', unit: '%', step: 0.25, min: 0, max: 15, hint: 'Applied to the whole subtotal here. Check your state rules.' },
]

const money = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

export function Calculator() {
  const [s, set] = useState<State>({ minutes: 45, rate: 100, parts: 30, markup: 60, tax: 8 })
  const labor = (s.minutes / 60) * s.rate
  const partsPrice = s.parts * (1 + s.markup / 100)
  const subtotal = labor + partsPrice
  const tax = subtotal * (s.tax / 100)
  const total = subtotal + tax
  const partsMargin = partsPrice > 0 ? ((partsPrice - s.parts) / partsPrice) * 100 : 0

  return (
    <section aria-labelledby="calc-h" className="grid overflow-hidden rounded-2xl border-2 border-ink bg-paper lg:grid-cols-[1.2fr_1fr]">
      <div className="p-6 sm:p-8">
        <p className="eyebrow text-ink-3">Free tool</p>
        <h2 id="calc-h" className="display-soft mt-1 text-2xl">Price a repair</h2>
        <div className="mt-6 space-y-5">
          {FIELDS.map(f => (
            <div key={f.key}>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor={f.key} className="font-bold">{f.label}</label>
                <span className="flex items-center gap-1">
                  <input
                    id={f.key}
                    type="number"
                    inputMode="decimal"
                    min={f.min} max={f.max} step={f.step}
                    value={s[f.key]}
                    onChange={e => set({ ...s, [f.key]: Math.max(0, Number(e.target.value) || 0) })}
                    className="mono w-24 rounded-md border border-line bg-white px-2 py-1.5 text-right font-semibold focus:border-ink focus:outline-none"
                  />
                  <span className="mono w-8 text-xs text-ink-3">{f.unit}</span>
                </span>
              </div>
              <input aria-hidden tabIndex={-1} type="range" min={f.min} max={f.max} step={f.step} value={Math.min(s[f.key], f.max)} onChange={e => set({ ...s, [f.key]: Number(e.target.value) })} className="mt-2 w-full accent-[#16171a]" />
              <p className="mt-1 text-xs text-ink-3">{f.hint}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between bg-asphalt p-6 text-white sm:p-8" aria-live="polite">
        <div>
          <p className="eyebrow text-hivis">Quote</p>
          <dl className="mt-4 space-y-2.5 text-sm">
            {[['Labor', money(labor)], ['Parts (with markup)', money(partsPrice)], ['Subtotal', money(subtotal)], [`Sales tax ${s.tax}%`, money(tax)]].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-dashed border-white/15 pb-2"><dt className="text-white/65">{k}</dt><dd className="mono">{v}</dd></div>
            ))}
          </dl>
          <p className="mt-6 text-white/60">Total to quote</p>
          <p className="display mono text-5xl text-hivis">{money(total)}</p>
          <p className="mt-3 text-sm text-white/55">Parts margin {partsMargin.toFixed(1)}% · labor is {subtotal > 0 ? ((labor / subtotal) * 100).toFixed(0) : 0}% of the subtotal</p>
        </div>
        <a href={SITE.signUp} className="btn btn-hivis mt-8 self-start">Build quotes in Service <Arrow /></a>
      </div>
    </section>
  )
}
