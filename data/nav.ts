import type { IconKey, Status } from '@/lib/types'

/**
 * The information architecture. Every slug on the site is declared here once;
 * the data files must provide a page for each, and the sitemap and mega menu
 * both read from this file.
 */

export type NavLink = { label: string; href: string; blurb: string; icon: IconKey; status?: Status }
export type NavGroup = { title: string; links: NavLink[] }
export type NavMenu = { label: string; href: string; groups: NavGroup[]; feature?: { title: string; body: string; href: string; cta: string } }

export const PRODUCT_GROUPS: NavGroup[] = [
  {
    title: 'Win work',
    links: [
      { label: 'Online repair booking', href: '/product/online-booking', blurb: 'Drop-off slots riders pick themselves', icon: 'calendar', status: 'roadmap' },
      { label: 'Repair quotes', href: '/product/repair-quotes', blurb: 'Line items, options and approval to job', icon: 'quote', status: 'live' },
      { label: 'Customer & bike records', href: '/product/customer-bike-records', blurb: 'Serials, sizes and every past repair', icon: 'bike', status: 'roadmap' },
      { label: 'AI receptionist', href: '/product/ai-receptionist', blurb: 'Answers the shop phone when your hands are full', icon: 'phone', status: 'suite' },
    ],
  },
  {
    title: 'Shop floor',
    links: [
      { label: 'Work orders', href: '/product/work-orders', blurb: 'Numbered jobs, visits and checklist gates', icon: 'kanban', status: 'live' },
      { label: 'Service checklists', href: '/product/service-checklists', blurb: 'Build tune-up, safety and e-bike checks', icon: 'clipboard', status: 'live' },
      { label: 'Scheduling', href: '/product/scheduling', blurb: 'Week view, unscheduled queue, today list', icon: 'calendar', status: 'live' },
      { label: 'Technician time tracking', href: '/product/time-tracking', blurb: 'Clock in on the job, approve the week', icon: 'stopwatch', status: 'live' },
      { label: 'Mobile repair & routing', href: '/product/mobile-repair-routing', blurb: 'Van stops in the shortest order', icon: 'van', status: 'roadmap' },
    ],
  },
  {
    title: 'Parts & inventory',
    links: [
      { label: 'Parts inventory', href: '/product/parts-inventory', blurb: 'Stock in the shop and in every van', icon: 'box', status: 'roadmap' },
      { label: 'Purchase orders & reorder', href: '/product/purchase-orders', blurb: 'Reorder points that write the PO', icon: 'barcode', status: 'roadmap' },
      { label: 'Job costing', href: '/product/job-costing', blurb: 'Labor and parts against the price', icon: 'chart', status: 'roadmap' },
    ],
  },
  {
    title: 'Get paid',
    links: [
      { label: 'Invoicing', href: '/product/invoicing', blurb: 'From the finished job in one click', icon: 'invoice', status: 'live' },
      { label: 'Payments', href: '/product/payments', blurb: 'Pay links and QR codes at pickup', icon: 'card', status: 'roadmap' },
      { label: '"Your bike is ready" texts', href: '/product/customer-updates', blurb: 'Status texts riders actually read', icon: 'text', status: 'roadmap' },
    ],
  },
  {
    title: 'Run the shop',
    links: [
      { label: 'Reporting', href: '/product/reporting', blurb: 'Work, money, hours and checklists by month', icon: 'trend', status: 'live' },
      { label: 'Customer portal', href: '/product/customer-portal', blurb: 'Riders see quotes, history and invoices', icon: 'portal', status: 'roadmap' },
      { label: 'Team & permissions', href: '/product/team-permissions', blurb: 'Role-based permissions across the shop', icon: 'team', status: 'live' },
      { label: 'Accounting sync', href: '/product/accounting-sync', blurb: 'Invoices and parts land in the ledger', icon: 'ledger', status: 'roadmap' },
    ],
  },
]

export const PLATFORM_GROUPS: NavGroup[] = [
  {
    title: 'Answer & win',
    links: [
      { label: 'Phony', href: '/platform/phony', blurb: 'AI receptionist and AI sales developer', icon: 'phone', status: 'suite' },
      { label: 'CRM', href: '/platform/crm', blurb: 'Every rider, fleet and sponsor account', icon: 'crm', status: 'suite' },
      { label: 'Marketing', href: '/platform/marketing', blurb: 'Campaigns, reviews, SEO and social', icon: 'megaphone', status: 'suite' },
      { label: 'Client Portal', href: '/platform/client-portal', blurb: 'A branded space for each customer', icon: 'portal', status: 'suite' },
    ],
  },
  {
    title: 'Money',
    links: [
      { label: 'Accounting', href: '/platform/accounting', blurb: 'Books, invoicing and cash flow', icon: 'ledger', status: 'suite' },
      { label: 'CFO', href: '/platform/cfo', blurb: 'Forecasts for the busy and quiet seasons', icon: 'trend', status: 'suite' },
      { label: 'Pey', href: '/platform/pey', blurb: 'Reconcile payouts, catch supplier discounts', icon: 'reconcile', status: 'suite' },
      { label: 'Sign', href: '/platform/sign', blurb: 'Waivers, rental and fleet agreements', icon: 'sign', status: 'suite' },
    ],
  },
  {
    title: 'Team',
    links: [
      { label: 'Chat', href: '/platform/chat', blurb: 'Front counter to back bench, in threads', icon: 'chat', status: 'suite' },
      { label: 'Projects', href: '/platform/projects', blurb: 'Custom builds, events and shop projects', icon: 'kanban', status: 'suite' },
      { label: 'ATS', href: '/platform/ats', blurb: 'Hire mechanics before the spring rush', icon: 'hire', status: 'suite' },
      { label: 'Courses', href: '/platform/courses', blurb: 'Train new mechanics on your standards', icon: 'course', status: 'suite' },
    ],
  },
  {
    title: 'Build & protect',
    links: [
      { label: 'PLM', href: '/platform/plm', blurb: 'Custom builds and parts BOMs', icon: 'bom', status: 'suite' },
      { label: 'Legal', href: '/platform/legal', blurb: 'Waivers, leases and warranty questions', icon: 'scale', status: 'suite' },
      { label: 'Canvas', href: '/platform/canvas', blurb: 'Plan the shop floor and the season', icon: 'canvas', status: 'suite' },
    ],
  },
]

export const SOLUTION_GROUPS: NavGroup[] = [
  {
    title: 'By shop type',
    links: [
      { label: 'Repair shops', href: '/solutions/repair-shops', blurb: 'Service-first shops with a full bench', icon: 'wrench' },
      { label: 'E-bike shops', href: '/solutions/e-bike-shops', blurb: 'Diagnostics, batteries and motors', icon: 'ebike' },
      { label: 'Mobile repair', href: '/solutions/mobile-repair', blurb: 'Vans, routes and roadside fixes', icon: 'van' },
      { label: 'Retail + service shops', href: '/solutions/retail-service-shops', blurb: 'The workshop behind the showroom', icon: 'store' },
      { label: 'Rental & fleet operators', href: '/solutions/rental-fleet', blurb: 'Rental fleets, bike share, corporate fleets', icon: 'stack' },
      { label: 'Multi-location', href: '/solutions/multi-location', blurb: 'Several shops, one set of numbers', icon: 'pin' },
    ],
  },
  {
    title: 'By size',
    links: [
      { label: 'Solo mechanic', href: '/solutions/solo-mechanic', blurb: 'One person, one stand, no admin', icon: 'hex' },
      { label: 'Small shop (2–10)', href: '/solutions/small-shops', blurb: 'A counter, a bench and a few mechanics', icon: 'team' },
      { label: 'Growing shop (10–50)', href: '/solutions/growing-shops', blurb: 'Several benches, vans or locations', icon: 'trend' },
    ],
  },
]

export const COMPARE_LINKS: NavLink[] = [
  { label: 'BIKE.co vs Lightspeed', href: '/compare/lightspeed', blurb: 'Retail POS with a workorder add-on', icon: 'store' },
  { label: 'BIKE.co vs Ascend', href: '/compare/ascend', blurb: 'Bike retail POS', icon: 'store' },
  { label: 'BIKE.co vs Bikedesk', href: '/compare/bikedesk', blurb: 'Workshop booking software', icon: 'calendar' },
  { label: 'BIKE.co vs Jobber', href: '/compare/jobber', blurb: 'General field-service software', icon: 'van' },
  { label: 'BIKE.co vs Housecall Pro', href: '/compare/housecall-pro', blurb: 'Home-services software', icon: 'van' },
]

export const RESOURCE_LINKS: NavLink[] = [
  { label: 'Repair pricing calculator', href: '/resources/repair-pricing-calculator', blurb: 'Price a job from labor, parts and margin', icon: 'quote' },
  { label: 'Tune-up checklist', href: '/resources/tune-up-checklist', blurb: 'A printable standard for every tune-up', icon: 'clipboard' },
  { label: 'Safety inspection checklist', href: '/resources/safety-inspection-checklist', blurb: 'The M-check, written down', icon: 'shield' },
  { label: 'E-bike diagnostic checklist', href: '/resources/ebike-diagnostic-checklist', blurb: 'Battery, motor, display and wiring', icon: 'bolt' },
  { label: 'Work order template', href: '/resources/work-order-template', blurb: 'What every repair ticket should capture', icon: 'tag' },
  { label: 'Shop labor rate guide', href: '/resources/labor-rate-guide', blurb: 'Work out an hourly rate that pays', icon: 'stopwatch' },
]

export const COMPANY_LINKS: NavLink[] = [
  { label: 'About', href: '/about', blurb: 'Why BIKE.co exists', icon: 'bike' },
  { label: 'Roadmap', href: '/roadmap', blurb: 'What is live and what is next', icon: 'route' },
  { label: 'Contact', href: '/contact', blurb: 'Talk to us', icon: 'chat' },
  { label: 'Privacy', href: '/privacy', blurb: 'Privacy policy', icon: 'shield' },
  { label: 'Terms', href: '/terms', blurb: 'Terms of use', icon: 'scale' },
]

export const MENUS: NavMenu[] = [
  {
    label: 'Product', href: '/product', groups: PRODUCT_GROUPS,
    feature: { title: 'Request to invoice is live', body: 'Quotes, jobs, the week schedule, timesheets, invoices and checklists with photos and signatures are in Service today.', href: '/roadmap', cta: 'See what is live' },
  },
  {
    label: 'Platform', href: '/platform', groups: PLATFORM_GROUPS,
    feature: { title: 'One login, the whole business', body: 'Service sits on erp.io — phones, books, hiring and training in the same workspace.', href: '/platform', cta: 'Tour the suite' },
  },
  {
    label: 'Solutions', href: '/solutions', groups: SOLUTION_GROUPS,
    feature: { title: 'Mobile repair vans', body: 'Plan the week by van, work offline at the curb, and bill the job when it is done.', href: '/solutions/mobile-repair', cta: 'Mobile repair' },
  },
  { label: 'Compare', href: '/compare', groups: [{ title: 'Compare', links: COMPARE_LINKS }] },
  { label: 'Resources', href: '/resources', groups: [{ title: 'Free tools & templates', links: RESOURCE_LINKS }] },
]

export const PRODUCT_LINKS = PRODUCT_GROUPS.flatMap(g => g.links)
export const PLATFORM_LINKS = PLATFORM_GROUPS.flatMap(g => g.links)
export const SOLUTION_LINKS = SOLUTION_GROUPS.flatMap(g => g.links)

export const slugOf = (href: string) => href.split('/').pop() as string
