'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'
import { Arrow } from '@/components/icons'

const TOPICS = ['Questions before a trial', 'Enterprise or multi-location', 'Switching from other shop software', 'Partnerships', 'Something else']

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error ?? 'Something went wrong.')
      setState('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border-2 border-ink bg-paper p-8">
        <p className="display-soft text-2xl">Got it. We will reply by email.</p>
        <p className="mt-2 text-ink-2">Want to look around in the meantime? The trial is free for 30 days and needs no card.</p>
        <a href={SITE.signUp} className="btn btn-ink mt-6">Start free trial <Arrow /></a>
      </div>
    )
  }

  const input = 'mt-1.5 w-full rounded-md border border-line bg-white px-3 py-2.5 focus:border-ink focus:outline-none'
  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border-2 border-ink bg-paper p-6 sm:grid-cols-2 sm:p-8">
      <div className="sm:col-span-2"><p className="eyebrow text-ink-3">Contact</p><h2 className="display-soft mt-1 text-2xl">Talk to us</h2></div>
      <label className="text-sm font-bold">Name<input name="name" required maxLength={120} autoComplete="name" className={input} /></label>
      <label className="text-sm font-bold">Work email<input name="email" type="email" required maxLength={200} autoComplete="email" className={input} /></label>
      <label className="text-sm font-bold">Shop name<input name="shop" maxLength={160} autoComplete="organization" className={input} /></label>
      <label className="text-sm font-bold">Topic
        <select name="topic" className={input} defaultValue={TOPICS[0]}>{TOPICS.map(t => <option key={t}>{t}</option>)}</select>
      </label>
      <label className="text-sm font-bold sm:col-span-2">Message<textarea name="message" required rows={5} maxLength={4000} className={input} /></label>
      {/* Honeypot: people never see it, bots fill it in. */}
      <label className="hidden" aria-hidden>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={state === 'sending'} className="btn btn-ink disabled:opacity-60">{state === 'sending' ? 'Sending…' : 'Send message'} <Arrow /></button>
        {state === 'error' && <p role="alert" className="text-sm font-semibold text-warn">{error}</p>}
      </div>
    </form>
  )
}
