import type { Status } from '@/lib/types'

const LABEL: Record<Status, string> = { live: 'Live', roadmap: 'Roadmap', suite: 'erp.io' }
const TITLE: Record<Status, string> = {
  live: 'Built and usable in app.erp.io today',
  roadmap: 'Planned in the Service module, not built yet',
  suite: 'Delivered by another erp.io module that is live today',
}
const TONE: Record<Status, string> = {
  live: 'bg-ok-2 text-ok',
  roadmap: 'bg-[#ecebe5] text-ink-2',
  suite: 'bg-steel-2 text-steel',
}

export function StatusPill({ status, dark = false }: { status: Status; dark?: boolean }) {
  const tone = dark
    ? status === 'live' ? 'bg-hivis text-ink' : 'bg-white/10 text-white/80'
    : TONE[status]
  return (
    <span className={`status-pill ${tone}`} title={TITLE[status]}>
      <svg viewBox="0 0 8 8" className="size-1.5" aria-hidden>
        {status === 'roadmap' ? <circle cx="4" cy="4" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" /> : <circle cx="4" cy="4" r="4" fill="currentColor" />}
      </svg>
      {LABEL[status]}
    </span>
  )
}

export const STATUS_EXPLAINED = TITLE
