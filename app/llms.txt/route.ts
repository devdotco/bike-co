import { allPages, COLLECTIONS } from '@/lib/content'
import { getPosts, postSlug } from '@/lib/payload-blog'
import { PLANS, PHONY_PER_MIN } from '@/data/pricing'
import { SITE } from '@/lib/site'

export const revalidate = 3600

/** llms.txt (llmstxt.org): a plain-markdown map of the site for language models. */
export async function GET() {
  const pages = allPages()
  const section = (prefix: string) => pages.filter(p => p.href.startsWith(prefix)).map(p => `- [${p.page.title}](${SITE.url}${p.href}): ${p.page.summary}`).join('\n')
  const posts = (await getPosts()).filter(p => !p.excludeFromSitemap && p.seo?.robotsIndex !== false)
  const plans = PLANS.map(p => `- ${p.name}: ${p.base === null ? 'quote only' : p.key === 'starter' ? '$20 per user per month' : `$${p.base}/month`} — ${p.points.join('; ')}`).join('\n')
  const company = pages.filter(p => !Object.keys(COLLECTIONS).some(c => p.href.startsWith(`/${c}`)))

  const body = `# BIKE.co

> ${SITE.description} BIKE.co is shop-management software for bike shop owners, not a bike shop. It runs on erp.io: sign up at ${SITE.signUp}, log in at ${SITE.logIn}.

Status labels on this site are literal. "Live" means built and usable in app.erp.io today; "Roadmap" means planned in the Service module and not built yet; "erp.io" means another live erp.io module provides it. The field app is an installable web app (no App Store app, no Tap to Pay). See ${SITE.url}/roadmap for the current list.

## Pricing
30-day free trial, no card, every module on during the trial.
${plans}
- Extra users: $20 each. Phony (AI receptionist) adds $${PHONY_PER_MIN.toFixed(2)} per minute of call time on every plan.
- Full details: ${SITE.url}/pricing

## Product
${section('/product')}

## Platform (erp.io modules)
${section('/platform')}

## Solutions
${section('/solutions')}

## Compare
${section('/compare')}

## Resources
${section('/resources')}

## Company
${company.map(p => `- [${p.page.title}](${SITE.url}${p.href}): ${p.page.summary}`).join('\n')}
${posts.length ? `\n## Blog\n${posts.map(p => `- [${p.title}](${SITE.url}/blog/${postSlug(p)})${p.excerpt ? `: ${p.excerpt}` : ''}`).join('\n')}\n` : ''}`
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' } })
}
