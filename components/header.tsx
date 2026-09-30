'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { MENUS, type NavMenu } from '@/data/nav'
import { SITE } from '@/lib/site'
import { Icon, Arrow } from '@/components/icons'
import { StatusPill } from '@/components/status'
import { Logo } from '@/components/logo'

export function Header() {
  const [open, setOpen] = useState<string | null>(null)
  const [drawer, setDrawer] = useState(false)
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => { setOpen(null); setDrawer(false) }, [pathname])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setDrawer(false) } }
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick) }
  }, [])
  useEffect(() => { document.body.style.overflow = drawer ? 'hidden' : '' }, [drawer])

  const menu = MENUS.find(m => m.label === open)

  return (
    <header ref={ref} className="sticky top-0 z-50 bg-asphalt text-white" onMouseLeave={() => setOpen(null)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden flex-1 items-center gap-1 lg:flex">
          {MENUS.map(m => (
            <button
              key={m.label}
              type="button"
              aria-expanded={open === m.label}
              aria-controls="mega"
              onMouseEnter={() => setOpen(m.label)}
              onClick={() => setOpen(open === m.label ? null : m.label)}
              className={`flex items-center gap-1 px-3 py-2 text-[0.92rem] font-semibold transition-colors ${open === m.label ? 'text-hivis' : 'text-white/85 hover:text-white'}`}
            >
              {m.label}
              <svg viewBox="0 0 12 12" className={`size-2.5 transition-transform ${open === m.label ? 'rotate-180' : ''}`} aria-hidden><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
            </button>
          ))}
          <Link href="/pricing" onMouseEnter={() => setOpen(null)} className="px-3 py-2 text-[0.92rem] font-semibold text-white/85 hover:text-white">Pricing</Link>
        </nav>
        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <a href={SITE.logIn} className="text-[0.92rem] font-semibold text-white/85 hover:text-white">Log in</a>
          <a href={SITE.signUp} className="btn btn-hivis !py-2.5">Start free trial</a>
        </div>
        <button type="button" className="ml-auto grid size-10 place-items-center lg:hidden" aria-label={drawer ? 'Close menu' : 'Open menu'} aria-expanded={drawer} onClick={() => setDrawer(!drawer)}>
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {drawer ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h12" />}
          </svg>
        </button>
      </div>

      {menu && <Mega menu={menu} />}
      {drawer && <Drawer />}
    </header>
  )
}

const COLS: Record<number, string> = { 1: 'grid-cols-1', 2: 'grid-cols-[2fr_1fr]', 4: 'grid-cols-4', 5: 'grid-cols-3 xl:grid-cols-5' }

function Mega({ menu }: { menu: NavMenu }) {
  return (
    <div id="mega" className="absolute inset-x-0 top-16 hidden border-t border-line-dark bg-asphalt-2 shadow-2xl lg:block">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8" style={{ gridTemplateColumns: menu.feature ? `1fr ${menu.groups.length > 4 ? 210 : 250}px` : '1fr' }}>
        <div className={`grid gap-x-6 gap-y-7 ${COLS[menu.groups.length] ?? 'grid-cols-1'}`}>
          {menu.groups.map(g => (
            <div key={g.title} className={menu.groups.length === 1 ? 'col-span-full' : ''}>
              <p className="eyebrow mb-3 text-hivis">{g.title}</p>
              <ul className={menu.groups.length === 1 ? 'grid grid-cols-2 gap-1 xl:grid-cols-3' : g.links.length > 5 && menu.groups.length === 2 ? 'grid grid-cols-2 gap-1' : 'space-y-1'}>
                {g.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="group flex gap-3 rounded-md p-2 hover:bg-white/5">
                      <Icon name={l.icon} className="mt-0.5 size-5 shrink-0 text-white/50 group-hover:text-hivis" />
                      <span>
                        <span className="block text-[0.9rem] font-semibold leading-snug text-white">{l.label}</span>
                        <span className="block text-[0.8rem] leading-snug text-white/55">{l.status === 'live' && <span className="mr-1.5 inline-block align-[1px]"><StatusPill status="live" dark /></span>}{l.blurb}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {menu.feature && (
          <Link href={menu.feature.href} className="group relative flex flex-col justify-between overflow-hidden rounded-lg bg-hivis p-5 text-ink">
            <span>
              <span className="display-soft block text-xl">{menu.feature.title}</span>
              <span className="mt-2 block text-sm leading-snug text-ink/75">{menu.feature.body}</span>
            </span>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase italic">{menu.feature.cta}<Arrow /></span>
            <svg viewBox="0 0 100 100" className="pointer-events-none absolute -right-8 -top-8 size-32 text-ink/10" aria-hidden><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="6 5" /></svg>
          </Link>
        )}
      </div>
      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-[0.8rem] text-white/55">
          <span>{menu.label === 'Product' ? 'Live = usable today · Roadmap = planned in Service · erp.io = another live module' : 'BIKE.co runs on erp.io — one login for every module.'}</span>
          <Link href={menu.href} className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-hivis">All of {menu.label.toLowerCase()} <Arrow className="size-3.5" /></Link>
        </div>
      </div>
    </div>
  )
}

function Drawer() {
  return (
    <div className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-asphalt px-4 pb-10 lg:hidden">
      {MENUS.map(m => (
        <details key={m.label} className="border-b border-line-dark">
          <summary className="flex items-center justify-between py-4 text-lg font-semibold">
            {m.label}
            <span className="faq-plus text-2xl leading-none text-hivis transition-transform">+</span>
          </summary>
          <div className="pb-4">
            {m.groups.map(g => (
              <div key={g.title} className="mb-4">
                {m.groups.length > 1 && <p className="eyebrow mb-1 text-hivis">{g.title}</p>}
                <ul>
                  {g.links.map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className="flex items-center gap-3 py-2 text-white/85">
                        <Icon name={l.icon} className="size-4 text-white/45" />{l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link href={m.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-hivis">All of {m.label.toLowerCase()} <Arrow className="size-3.5" /></Link>
          </div>
        </details>
      ))}
      <Link href="/pricing" className="block border-b border-line-dark py-4 text-lg font-semibold">Pricing</Link>
      <div className="mt-6 grid gap-3">
        <a href={SITE.signUp} className="btn btn-hivis justify-center">Start free trial</a>
        <a href={SITE.logIn} className="btn btn-ghost justify-center text-white">Log in</a>
      </div>
    </div>
  )
}
