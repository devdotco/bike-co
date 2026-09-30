import type { IconKey } from '@/lib/types'

/**
 * The icon set, drawn for this site on a 24px grid with a 1.75 stroke.
 * Bike-shop objects where one exists (hex key, chainring, tire lever), plain
 * geometry where it doesn't.
 */
const P: Record<IconKey, React.ReactNode> = {
  wrench: <path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z" />,
  hex: <><path d="M6 4h3v12H6zM9 13h9v3H9z" /><path d="M6 20l3-4" /></>,
  chainring: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.2" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" /></>,
  wheel: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="1.6" /><path d="M12 3v7.4M12 13.6V21M3 12h7.4M13.6 12H21M5.6 5.6l5.3 5.3M13.1 13.1l5.3 5.3" /></>,
  bike: <><circle cx="5.5" cy="16" r="3.5" /><circle cx="18.5" cy="16" r="3.5" /><path d="M5.5 16L9 9h7l2.5 7M9 9l3 7h-6.5M12 16l4-7M8 6.5h3M15 6.5h2.5L16 9" /></>,
  ebike: <><circle cx="5.5" cy="16.5" r="3.5" /><circle cx="18.5" cy="16.5" r="3.5" /><path d="M5.5 16.5L9 10h7l2.5 6.5M9 10l3 6.5M12 16.5l4-6.5" /><path d="M12.5 3l-2 3.5h3L11.5 10" /></>,
  van: <><path d="M2.5 7h11v9h-11zM13.5 10h4l3 3v3h-7z" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="16.5" cy="17.5" r="1.8" /><path d="M5 10h5" /></>,
  route: <><circle cx="5" cy="18" r="2" /><circle cx="19" cy="6" r="2" /><path d="M7 18h8a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h8" /></>,
  clipboard: <><path d="M8 4.5H6v16h12v-16h-2" /><path d="M9 3h6v3H9zM9 11l1.5 1.5L13 10M9 16h6" /></>,
  calendar: <><path d="M4 6h16v14H4zM4 10h16M8 3.5v4M16 3.5v4" /><path d="M8 14h2M14 14h2M8 17h2" /></>,
  phone: <><path d="M5 4h4l1.5 4.5-2.5 1.5a11 11 0 0 0 6 6l1.5-2.5L20 15v4a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 3.5 5.5 1.5 1.5 0 0 1 5 4z" /></>,
  text: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></>,
  card: <><path d="M3 6h18v12H3zM3 10h18M6.5 14.5h4" /></>,
  qr: <><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" /><path d="M14 14h2v2h-2zM18 14h2M14 18h2M18 18h2v2M16 16h2v2" /></>,
  box: <><path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" /><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9M7.8 5.3l8.5 4.5" /></>,
  barcode: <><path d="M4 5v14M7 5v14M9.5 5v14M13 5v14M15 5v14M18 5v14M20 5v14" /></>,
  stopwatch: <><circle cx="12" cy="13.5" r="7" /><path d="M12 13.5V9.5M10 3h4M12 3v3.5M18 7l1.5-1.5" /></>,
  chart: <><path d="M4 4v16h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
  team: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><circle cx="17" cy="9" r="2.3" /><path d="M16 14a4.5 4.5 0 0 1 5 4.5" /></>,
  shield: <><path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z" /><path d="M9 12l2 2 4-4" /></>,
  pin: <><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></>,
  sign: <><path d="M4 18c2.5-4 4-9 6-9s-1 7 1 7 2.5-3 4-3 1 2 2.5 2" /><path d="M3 21h18" /></>,
  chat: <><path d="M4 5h11v8H8l-4 3z" /><path d="M15 9h5v8l-3-2.5h-6V13" /></>,
  course: <><path d="M2.5 9L12 4.5 21.5 9 12 13.5z" /><path d="M6.5 11v5c3 2.3 8 2.3 11 0v-5M21.5 9v5" /></>,
  scale: <><path d="M12 4v16M7 20h10M5 7h14M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z" /></>,
  canvas: <><path d="M3.5 4.5h17v12h-17zM8 20.5l4-4 4 4" /><path d="M7 12.5c2-3 3.5-3 5-1.5s3 1.5 5-2" /></>,
  ledger: <><path d="M5 3.5h12.5v17H5zM8.5 3.5v17" /><path d="M11 8h4M11 11.5h4M11 15h2.5" /></>,
  trend: <><path d="M3.5 17l5.5-5.5 4 4 7-7.5" /><path d="M15 8h5v5" /></>,
  reconcile: <><path d="M5 8h11l-3-3M19 16H8l3 3" /><circle cx="19" cy="8" r="1.5" /><circle cx="5" cy="16" r="1.5" /></>,
  megaphone: <><path d="M4 10v4h3l8 4V6L7 10z" /><path d="M18 9.5a3.5 3.5 0 0 1 0 5M7 14l1.5 5h2.5L10 15" /></>,
  crm: <><circle cx="12" cy="9" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /><path d="M18.5 4.5l1.5 1.5 2.5-3" /></>,
  portal: <><path d="M3.5 4.5h17v15h-17zM3.5 8.5h17" /><circle cx="6" cy="6.5" r=".4" /><path d="M7 12h5v4H7zM14.5 12h3M14.5 15h3" /></>,
  kanban: <><path d="M3.5 4h5v16h-5zM9.5 4h5v10h-5zM15.5 4h5v7h-5z" /></>,
  hire: <><circle cx="10" cy="8" r="3.5" /><path d="M3.5 20a6.5 6.5 0 0 1 11-4.6M18 14v6M15 17h6" /></>,
  bom: <><path d="M4 4h6v4H4zM14 10h6v4h-6zM14 17h6v4h-6zM7 8v11h7M7 12h7" /></>,
  quote: <><path d="M6 3.5h9l3.5 3.5v13.5H6z" /><path d="M14.5 3.5V7h4M9 11h6M9 14.5h6M9 18h3.5" /></>,
  invoice: <><path d="M6 3.5h12v17l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5z" /><path d="M9 8h6M9 11.5h6M13 15h2" /></>,
  tag: <><path d="M3.5 12.5V4h8.5l8.5 8.5-8.5 8.5z" /><circle cx="8" cy="8.5" r="1.5" /></>,
  bolt: <><path d="M13.5 2.5L5 13.5h6l-1 8 8.5-11h-6z" /></>,
  store: <><path d="M3.5 9.5L5 4.5h14l1.5 5M4.5 9.5v10h15v-10" /><path d="M3.5 9.5a2.8 2.8 0 0 0 5.5 0 2.8 2.8 0 0 0 5.5 0 2.8 2.8 0 0 0 5.5 0M9.5 19.5v-5h5v5" /></>,
  stack: <><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M6 17l3-6h6l3 6M9 11l3 6M12 17l3-6" /><path d="M5 6h14M7 3h10" /></>,
  camera: <><path d="M3.5 8h4l1.5-2.5h6L16.5 8h4v11h-17z" /><circle cx="12" cy="13" r="3.5" /></>,
  check: <path d="M4.5 12.5l5 5 10-11" />,
  star: <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.3-4.1 5.9-.8z" />,
  search: <><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5.5 5.5" /></>,
  cog: <><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></>,
  link: <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
}

export function Icon({ name, className = 'size-5', title }: { name: IconKey; className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden={title ? undefined : true} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      {P[name]}
    </svg>
  )
}

export function Arrow({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="square" className={className} aria-hidden>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}
