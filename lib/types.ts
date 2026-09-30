/**
 * The content model. Every page except the home page, pricing and the
 * calculator is a `ContentPage` rendered by one template, so a page's words
 * live in `data/` and nowhere else.
 */

/**
 * Whether a capability exists today.
 *  - `live`    — built and usable in app.erp.io now.
 *  - `roadmap` — planned in the Service module (docs/plan/PARITY.md) and not built.
 *  - `suite`   — delivered by another erp.io module that is live today.
 */
export type Status = 'live' | 'roadmap' | 'suite'

/** Custom SVG icons — see components/icons.tsx. */
export type IconKey =
  | 'wrench' | 'hex' | 'chainring' | 'wheel' | 'bike' | 'ebike' | 'van' | 'route'
  | 'clipboard' | 'calendar' | 'phone' | 'text' | 'card' | 'qr' | 'box' | 'barcode'
  | 'stopwatch' | 'chart' | 'team' | 'shield' | 'pin' | 'sign' | 'chat' | 'course'
  | 'scale' | 'canvas' | 'ledger' | 'trend' | 'reconcile' | 'megaphone' | 'crm'
  | 'portal' | 'kanban' | 'hire' | 'bom' | 'quote' | 'invoice' | 'tag' | 'bolt'
  | 'store' | 'stack' | 'camera' | 'check' | 'star' | 'search' | 'cog' | 'link'

/** App screens drawn in HTML/CSS and diagrams drawn in SVG — see components/visuals. */
export type VisualKey =
  | 'bench-board'   // work orders as a kanban by bench/status
  | 'intake-phone'  // repair intake / booking on a phone (PWA)
  | 'parts-table'   // parts inventory with reorder flags
  | 'purchase-order'
  | 'invoice'       // invoice with Stripe pay link + QR
  | 'schedule'      // day schedule, techs as columns
  | 'bike-record'   // one bike: serial, owner, service history
  | 'checklist'     // tune-up checklist being filled
  | 'quote'         // repair quote with good/better/best
  | 'phony-call'    // AI receptionist call transcript
  | 'ready-text'    // "your bike is ready" SMS thread
  | 'route-map'     // SVG map with van stops
  | 'timeclock'     // technician time on a work order
  | 'job-costing'   // labour + parts vs price
  | 'reports'       // SVG charts dashboard
  | 'portal'        // customer portal
  | 'suite-grid'    // erp.io modules around Service
  | 'build-bom'     // PLM custom build bill of materials
  | 'fleet'         // rental/fleet bikes list with due service
  | 'compare-grid'  // generic side-by-side
  | 'job-detail'    // one job: visits, assignee, checklist gate, bill job (built today)
  | 'requests'      // requests inbox (built today)

export type FeatureItem = { title: string; body: string; icon: IconKey; status?: Status }

export type Section =
  /** Paragraphs of prose. The bulk of every page's word count lives here. */
  | { kind: 'prose'; heading: string; body: string[] }
  | { kind: 'features'; heading: string; intro?: string; items: FeatureItem[] }
  | { kind: 'steps'; heading: string; intro?: string; steps: { title: string; body: string }[] }
  /** A printable checklist, e.g. a tune-up template. */
  | { kind: 'checklist'; heading: string; intro?: string; groups: { title: string; items: string[] }[] }
  | { kind: 'table'; heading: string; intro?: string; columns: string[]; rows: string[][]; note?: string }
  /** `honest` = a plain statement of a limit; `suite` = points to another module. */
  | { kind: 'callout'; tone: 'honest' | 'suite'; heading: string; body: string; href?: string; cta?: string }
  | { kind: 'visual'; visual: VisualKey; heading?: string; caption: string }

export type Faq = { q: string; a: string }

export type ContentPage = {
  slug: string
  /** The H1. */
  title: string
  /** <title>, ≤ 60 chars. The layout appends nothing. */
  metaTitle: string
  /** ≤ 158 chars. */
  metaDescription: string
  eyebrow: string
  /** One or two sentences under the H1. */
  lede: string
  status?: Status
  /** The app screen or diagram beside the hero. */
  visual: VisualKey
  icon?: IconKey
  /** One line for menus and index cards. */
  summary: string
  sections: Section[]
  faqs: Faq[]
  /** Internal hrefs, e.g. '/product/work-orders'. 3–4 of them. */
  related: string[]
}
