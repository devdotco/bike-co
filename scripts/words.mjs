// Usage: node scripts/words.mjs data/solutions.ts  — word count per exported ContentPage.
import { pathToFileURL } from 'node:url'
const file = process.argv[2]
const mod = await import(pathToFileURL(file).href)
const text = v => typeof v === 'string' ? v : Array.isArray(v) ? v.map(text).join(' ') : v && typeof v === 'object' ? Object.entries(v).filter(([k]) => !['slug','visual','icon','status','kind','tone','href','related','metaTitle','metaDescription'].includes(k)).map(([, x]) => text(x)).join(' ') : ''
const pages = Object.values(mod).flatMap(v => Array.isArray(v) ? v : [v]).filter(p => p && p.slug !== undefined && p.sections)
let bad = 0
for (const p of pages) {
  const n = text(p).split(/\s+/).filter(Boolean).length
  if (n < 850) bad++
  console.log(`${n < 850 ? 'SHORT' : 'ok   '} ${String(n).padStart(5)}  ${p.slug || '(overview)'}  meta:${p.metaTitle.length}/${p.metaDescription.length}${p.metaTitle.length > 60 || p.metaDescription.length > 158 ? ' META-TOO-LONG' : ''}`)
}
console.log(`${pages.length} pages, ${bad} under 850 words`)
