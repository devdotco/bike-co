import Link from 'next/link'
import { PRODUCT_LINKS, PLATFORM_LINKS, SOLUTION_LINKS, COMPARE_LINKS, RESOURCE_LINKS, COMPANY_LINKS } from '@/data/nav'
import { SITE } from '@/lib/site'
import { Logo } from '@/components/logo'

const COLS = [
  { title: 'Product', links: PRODUCT_LINKS.slice(0, 10) },
  { title: 'More product', links: PRODUCT_LINKS.slice(10) },
  { title: 'Platform', links: PLATFORM_LINKS },
  { title: 'Solutions', links: SOLUTION_LINKS },
  { title: 'Compare & resources', links: [...COMPARE_LINKS, ...RESOURCE_LINKS] },
]

export function Footer() {
  return (
    <footer className="bg-asphalt text-white">
      <div className="tape" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
          {COLS.map(c => (
            <div key={c.title}>
              <p className="eyebrow mb-3 text-white/45">{c.title}</p>
              <ul className="space-y-2 text-sm">
                {c.links.map(l => <li key={l.href}><Link href={l.href} className="text-white/75 hover:text-hivis">{l.label.replace('BIKE.co vs ', 'vs ')}</Link></li>)}
              </ul>
            </div>
          ))}
          <div>
            <p className="eyebrow mb-3 text-white/45">Company</p>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map(l => <li key={l.href}><Link href={l.href} className="text-white/75 hover:text-hivis">{l.label}</Link></li>)}
              <li><Link href="/pricing" className="text-white/75 hover:text-hivis">Pricing</Link></li>
              <li><a href={SITE.logIn} className="text-white/75 hover:text-hivis">Log in</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line-dark pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4"><Logo className="h-[14px] w-auto opacity-70" /><span>Part of <a href={SITE.erp} className="underline decoration-white/30 underline-offset-2 hover:text-white">erp.io</a></span></div>
          <p>© {new Date().getFullYear()} BIKE.co. Shop software for bike repair businesses.</p>
        </div>
      </div>
    </footer>
  )
}

