import { NextResponse } from 'next/server'

/**
 * Contact form → SendGrid. Without SENDGRID_API_KEY the form answers 503
 * rather than pretending to have sent anything.
 */
/** Comma-separated. */
const TO = (process.env.CONTACT_TO ?? 'nate@dev.co,res@dev.co,eric@dev.co').split(',').map(e => e.trim()).filter(Boolean)
const FROM = process.env.CONTACT_FROM ?? 'noreply@bike.co'

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const escape = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Bad request.' }, { status: 400 }) }

  if (clean(body.website, 200)) return NextResponse.json({ ok: true }) // honeypot

  const name = clean(body.name, 120)
  const email = clean(body.email, 200)
  const shop = clean(body.shop, 160)
  const topic = clean(body.topic, 80)
  const message = clean(body.message, 4000)
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please add your name, a valid email and a message.' }, { status: 422 })
  }

  const key = process.env.SENDGRID_API_KEY
  if (!key) return NextResponse.json({ error: 'The form is not configured yet. Please start a trial and message us from inside the app.' }, { status: 503 })

  const lines = [['Name', name], ['Email', email], ['Shop', shop || '—'], ['Topic', topic || '—']]
  const html = `<h2>bike.co contact form</h2><table>${lines.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escape(v)}</td></tr>`).join('')}</table><p>${escape(message).replace(/\n/g, '<br>')}</p>`

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      personalizations: [{ to: TO.map(email => ({ email })) }],
      from: { email: FROM, name: 'BIKE.co' },
      reply_to: { email, name },
      subject: `bike.co · ${topic || 'Contact'} · ${shop || name}`,
      content: [{ type: 'text/plain', value: `${lines.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${message}` }, { type: 'text/html', value: html }],
    }),
  })
  if (!res.ok) return NextResponse.json({ error: 'We could not send that just now. Please try again in a minute.' }, { status: 502 })
  return NextResponse.json({ ok: true })
}
