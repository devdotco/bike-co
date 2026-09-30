/**
 * A copy of the erp.io plan ladder, for display only.
 *
 * The authoritative copy is app-erp-io/lib/billing/plans.ts (it charges) and
 * the Phony rate is app-erp-io/lib/billing/usage-rates.ts. Change those first;
 * a number here that disagrees with them is a misquote.
 */
export const TRIAL_DAYS = 30
export const SEAT_PRICE = 20
export const PHONY_PER_MIN = 0.12
export const PHONY_TRANSFER_PER_MIN = 0.04

export type PlanCard = {
  key: 'starter' | 'growth' | 'scale' | 'enterprise'
  name: string
  /** Monthly base in dollars; null for quote-only. */
  base: number | null
  includedUsers: number | null
  modules: number | null
  whiteLabel: boolean
  blurb: string
  points: string[]
}

export const PLANS: PlanCard[] = [
  {
    key: 'starter', name: 'Starter', base: 0, includedUsers: 0, modules: 2, whiteLabel: false,
    blurb: 'Per person, for a mechanic on their own or a two-stand shop.',
    points: ['$20 per user per month', 'Any 2 modules — e.g. Service + Phony', 'Everything inside each module', 'No base fee'],
  },
  {
    key: 'growth', name: 'Growth', base: 99, includedUsers: 10, modules: 5, whiteLabel: false,
    blurb: 'For a shop with a counter, a bench and a few mechanics.',
    points: ['10 users included', 'Any 5 modules', 'Extra users $20 each', 'Everything inside each module'],
  },
  {
    key: 'scale', name: 'Scale', base: 399, includedUsers: 50, modules: 10, whiteLabel: true,
    blurb: 'For several benches, vans or locations.',
    points: ['50 users included', 'Any 10 modules', 'White-label', 'Extra users $20 each'],
  },
  {
    key: 'enterprise', name: 'Enterprise', base: null, includedUsers: null, modules: null, whiteLabel: true,
    blurb: 'For groups and franchises that need a quote and a contract.',
    points: ['Every module', 'Users by agreement', 'White-label', 'Quote only'],
  },
]

/** Monthly cost of a plan for `users` people, or null when quote-only. */
export function monthly(plan: PlanCard, users: number): number | null {
  if (plan.base === null) return null
  return plan.base + Math.max(0, users - (plan.includedUsers ?? 0)) * SEAT_PRICE
}
