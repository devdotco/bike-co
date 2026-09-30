# bike.co content brief (read all of it before writing)

bike.co is being rebuilt as **shop-management software for bike shop owners** — a
Jobber/Housecall-Pro-style ERP for bike repair businesses, running on the **erp.io**
suite. It is a pure software site. The old Bentonville repair shop that used this
domain is closing; never mention it, never sell bikes, parts or merch, never write
consumer-facing ride/trail content.

## The audience
Owners and service managers of independent bike shops (1–50 people): service-first
repair shops, e-bike specialists, mobile repair vans, retail stores with a workshop,
rental / bike-share / corporate fleet operators, multi-location groups. They know
bikes cold (M-check, bottom brackets, hydraulic bleeds, Di2/AXS, tubeless, Bosch/
Shimano/Brose motors). Write like a service manager who has run a busy bench in May,
not like a SaaS marketer. Concrete shop moments beat abstractions: the Saturday
drop-off queue, a bike waiting three days on a derailleur hanger, the phone ringing
with "is my bike ready?" while you have a bleed kit in your hand.

## Voice
Match the erp.io co-brand: headline "Every repair you take in." Plain, direct,
confident, short sentences, second person ("your bench", "your mechanics"). **US
spelling** (labor, optimize, color, center). No exclamation marks. No "revolutionize",
"seamless", "cutting-edge", "game-changer", "unlock", "empower", "in today's fast-paced".

## HONESTY RULES — non-negotiable
1. Product = the erp.io **Service** module (~/service-erp-io). Read README.md,
   docs/plan/PLAN.md and docs/plan/PARITY.md. **What is built today:** checklist
   templates (builder, 8 question types, immutable versions), filling one in (photos,
   signatures, required answers), the checklists report (+CSV), the submission PDF,
   public checklists at a link (optionally behind an email code, Turnstile spam
   protection), capability-based permissions (an admin grants named permissions such as
   `forms.build`, `forms.publish`), and embedding a checklist in another erp.io module.
   **Everything else in Service is planned, not built** (all 258 PARITY.md rows are
   `planned`; parts inventory/POs are phase P8).
2. Every `FeatureItem` and every page gets the right `status`:
   `live` (built today), `roadmap` (planned in Service, not built), `suite` (done by
   another erp.io module that is live today). When a page is about a roadmap feature,
   say so plainly in the copy ("This is on the Service roadmap; here is how it will
   work") — describe the design from PLAN/PARITY, in the future tense or present tense
   clearly framed as the plan. Never imply a roadmap feature can be used today. Include
   one `callout` with tone `honest` on every roadmap page saying what exists now and
   what doesn't (e.g. "Today you can run tune-up checklists in Service; the work-order
   board is on the roadmap.").
3. The field app is **web only** (decision D5): an installable PWA, offline-first, web
   push, camera and signature in the browser. **No Tap to Pay, no App Store/Play app, no
   CarPlay/Android Auto, no background GPS.** Card-present payment = Stripe payment link
   or QR code, or card entry. Location = foreground check-in when the tech opens the job.
4. **No** testimonials, quotes from customers, customer counts, "trusted by", ratings,
   review stars, uptime numbers, "X% faster" stats, awards, or made-up case studies. No
   invented integrations. If you are unsure a claim is true, leave it out.
5. **Pricing** (only these numbers, from ~/app-erp-io/lib/billing/plans.ts): 30-day free
   trial, no card, every module included during the trial. Starter $20/user/mo (2
   modules). Growth $99/mo incl. 10 users, 5 modules. Scale $399/mo incl. 50 users, 10
   modules, white-label. Enterprise: quote only. Extra users $20 each. Phony adds $0.12
   per minute of call time on every plan (warm transfers to a person $0.04/min on Phony
   telephony; telephony billed at carrier cost). Nothing inside a module is gated by plan.
6. Competitor pages: no competitor prices; only claims you can support from the
   competitor's own public site; date them "as of October 2026".

## CTAs
Sign-up: https://app.erp.io/sign-up/bike ("Start free trial" / "Start your 30-day trial").
Log in: https://app.erp.io. You do not need to put CTAs in the data — templates add them.

## The format
Write a TypeScript data file of `ContentPage` objects (type in `lib/types.ts` — read it;
read `data/nav.ts` for every slug, label, icon and status). Rules:
- `import type { ContentPage } from '@/lib/types'` — **type-only import, nothing else
  imported**, so `node scripts/words.mjs <file>` can run it.
- Slugs must equal the last path segment of the nav href. Overview pages use slug `''`.
- **≥ 850 words per page** as counted by `node scripts/words.mjs <your file>` (run it; fix
  every SHORT). metaTitle ≤ 60 chars, metaDescription ≤ 158 chars (the script flags these).
- Mix section kinds: every page needs ≥ 3 `prose` sections (2–4 paragraphs each), plus
  a `features` or `steps` section, at least one `visual` section (pick the VisualKey that
  fits; don't reuse the hero `visual` if another fits), and 4–6 FAQs with substantive
  answers (these become FAQPage structured data — answer the question in the first
  sentence). `table` is good for comparisons and specs.
- Only use `IconKey` and `VisualKey` values that exist in `lib/types.ts`.
- `related`: 3–4 internal hrefs that exist in `data/nav.ts` (or '/pricing', '/roadmap').
- Inline links are not supported in strings; don't write markdown.
- Use plain ASCII quotes inside strings or escape properly; the file must type-check:
  run `npx tsc --noEmit 2>&1 | grep <your file>` from ~/bike-co and fix every error
  (ignore errors in files that aren't yours — other agents are writing in parallel).
- Touch **only your own file(s)**. Do not edit nav.ts, types.ts or anything else; if you
  believe a nav entry is wrong (e.g. a status), say so in your final report.

## Final report
Reply with: file path, the words.mjs output, and any claim you were unsure about and
left out, or any status you think is wrong in nav.ts.
