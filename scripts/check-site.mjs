// node scripts/check-site.mjs http://127.0.0.1:3021
// 1) every legacy Shopify URL (+ system paths) 301s to a page that answers 200
// 2) every internal link on every sitemap page answers 200
import { readFileSync } from 'node:fs'
const base = process.argv[2] ?? 'http://127.0.0.1:3021'
const legacy = readFileSync(new URL('./legacy-urls.txt', import.meta.url), 'utf8').split('\n').filter(Boolean)
const extra = ['/cart', '/account/login', '/collections/all', '/products/some-unknown-thing', '/pages/unknown', '/policies/refund-policy', '/blogs/news/tagged/tips', '/search?q=x', '/sitemap_products_1.xml']
let fail = 0
for (const p of [...legacy, ...extra]) {
  const r = await fetch(base + p, { redirect: 'manual' })
  const loc = r.headers.get('location')
  if (r.status !== 301) { console.log('NO-REDIRECT', r.status, p); fail++; continue }
  if (!loc) { fail++; continue }
  if (loc.startsWith('https://app.erp.io')) continue
  const f = await fetch(new URL(loc, base))
  if (f.status !== 200) { console.log('BAD-TARGET', f.status, p, '->', loc); fail++ }
}
console.log(`redirects: ${legacy.length + extra.length} checked, ${fail} failed`)

const sm = await (await fetch(base + '/sitemap.xml')).text()
const pages = [...sm.matchAll(/<loc>https:\/\/bike\.co([^<]*)<\/loc>/g)].map(m => m[1] || '/')
const links = new Set()
for (const p of pages) {
  const html = await (await fetch(base + p)).text()
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) if (!m[1].startsWith('/_next')) links.add(m[1])
}
let bad = 0
for (const l of links) { const r = await fetch(base + l); if (r.status !== 200) { console.log('BROKEN', r.status, l); bad++ } }
console.log(`sitemap pages: ${pages.length}, internal links: ${links.size}, broken: ${bad}`)
process.exit(fail + bad ? 1 : 0)
