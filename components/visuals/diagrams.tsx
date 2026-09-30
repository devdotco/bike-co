/** Diagrams drawn in SVG. */
import { Icon } from '@/components/icons'
import { Chrome } from './screens-a'
import { PLATFORM_LINKS } from '@/data/nav'

export function RouteMap() {
  const stops = [[70, 250, 'Shop'], [150, 150, '1'], [290, 110, '2'], [400, 190, '3'], [330, 290, '4']] as const
  const path = 'M70 250 C 90 200, 120 170, 150 150 S 240 100, 290 110 S 380 150, 400 190 S 370 280, 330 290 S 140 300, 70 250'
  return (
    <Chrome title="routes">
      <div className="relative bg-[#eeede6]">
        <svg viewBox="0 0 470 340" className="block w-full" role="img" aria-label="Map of a mobile repair van route with four stops">
          <defs><pattern id="blk" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#eeede6" /><rect x="3" y="3" width="34" height="34" rx="3" fill="#e4e2d9" /></pattern></defs>
          <rect width="470" height="340" fill="url(#blk)" />
          <path d="M0 200 C 120 180, 200 240, 470 210" stroke="#fff" strokeWidth="14" fill="none" />
          <path d="M240 0 C 230 120, 260 220, 230 340" stroke="#fff" strokeWidth="10" fill="none" />
          <path d="M20 40 C 140 70, 320 30, 460 70" stroke="#c9dccb" strokeWidth="26" fill="none" opacity=".8" />
          <path d={path} fill="none" stroke="#16171a" strokeWidth="4" strokeDasharray="1 0" />
          <path d={path} fill="none" stroke="#f2e500" strokeWidth="2" strokeDasharray="8 8" />
          {stops.map(([x, y, l]) => (
            <g key={l} transform={`translate(${x} ${y})`}>
              <circle r={l === 'Shop' ? 15 : 12} fill={l === 'Shop' ? '#f2e500' : '#16171a'} stroke="#16171a" strokeWidth="2" />
              <text textAnchor="middle" dy="4" fontSize={l === 'Shop' ? 8 : 11} fontWeight="800" fill={l === 'Shop' ? '#16171a' : '#fff'} fontFamily="var(--font-mono)">{l === 'Shop' ? 'SHOP' : l}</text>
            </g>
          ))}
        </svg>
        <div className="absolute bottom-3 right-3 w-44 rounded-md bg-white p-2.5 text-[10px] shadow-lg">
          <p className="font-bold">Van 1 · Tuesday</p>
          {['Office park · 3 fleet bikes', 'Home · flat + check', 'Trailhead · tubeless', 'Apartment · brakes'].map((s, i) => <p key={s} className="mt-1 flex gap-1.5 text-ink-2"><span className="mono font-bold text-ink">{i + 1}</span>{s}</p>)}
        </div>
      </div>
    </Chrome>
  )
}

export function Reports() {
  const bars = [18, 22, 19, 27, 31, 36, 29]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const line = [62, 58, 66, 71, 69, 74, 78, 76, 81]
  const max = 40
  return (
    <Chrome title="reports">
      <div className="grid gap-3 p-4 sm:grid-cols-3">
        {[['Invoiced this month', '$18,420'], ['Collected', '$15,960'], ['Overdue', '$1,140']].map(([k, v]) => (
          <div key={k} className="rounded-md bg-[#f7f6f2] p-3"><p className="text-[10px] text-ink-3">{k}</p><p className="mono text-xl font-bold">{v}</p></div>
        ))}
        <div className="rounded-md border border-[#eceae3] p-3 sm:col-span-2">
          <p className="text-[10px] font-semibold">Jobs completed</p>
          <svg viewBox="0 0 280 110" className="mt-1 w-full" role="img" aria-label="Bar chart of work orders closed per day">
            {[0, 1, 2, 3].map(i => <line key={i} x1="0" x2="280" y1={10 + i * 30} y2={10 + i * 30} stroke="#efede6" />)}
            {bars.map((b, i) => <rect key={i} x={10 + i * 38} y={100 - (b / max) * 90} width="24" height={(b / max) * 90} rx="3" fill={i === 5 ? '#f2e500' : '#16171a'} stroke={i === 5 ? '#16171a' : 'none'} />)}
            {days.map((d, i) => <text key={i} x={22 + i * 38} y="109" fontSize="7" textAnchor="middle" fill="#75777c">{d}</text>)}
          </svg>
        </div>
        <div className="rounded-md border border-[#eceae3] p-3">
          <p className="text-[10px] font-semibold">Hours logged</p>
          <svg viewBox="0 0 120 110" className="mt-1 w-full" role="img" aria-label="Line chart of hours logged by week">
            <polyline points={line.map((v, i) => `${5 + i * 13.5},${100 - v}`).join(' ')} fill="none" stroke="#3b6e8f" strokeWidth="2.5" strokeLinejoin="round" />
            {line.map((v, i) => i === line.length - 1 && <circle key={i} cx={5 + i * 13.5} cy={100 - v} r="3.5" fill="#3b6e8f" />)}
          </svg>
        </div>
      </div>
    </Chrome>
  )
}

/** Service at the hub, the other modules around it — the suite on one login. */
export function SuiteGrid() {
  const mods = PLATFORM_LINKS
  const R = 150, cx = 200, cy = 190
  return (
    <div className="relative rounded-xl bg-asphalt p-4 text-white">
      <svg viewBox="0 0 400 380" className="w-full" role="img" aria-label="The erp.io modules arranged around Service">
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="#34373c" strokeDasharray="3 6" />
        <circle cx={cx} cy={cy} r={R - 55} fill="none" stroke="#26292d" />
        {mods.map((m, i) => {
          const a = (i / mods.length) * Math.PI * 2 - Math.PI / 2
          const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R
          return <line key={m.href} x1={cx} y1={cy} x2={x} y2={y} stroke="#34373c" />
        })}
        <polygon points={`${cx - 58},${cy - 26} ${cx + 64},${cy - 26} ${cx + 58},${cy + 26} ${cx - 64},${cy + 26}`} fill="#f2e500" />
        <text x={cx} y={cy - 3} textAnchor="middle" fontSize="16" fontWeight="900" fontStyle="italic" fill="#16171a" fontFamily="var(--font-archivo)">SERVICE</text>
        <text x={cx} y={cy + 13} textAnchor="middle" fontSize="7.5" fill="#16171a" fontFamily="var(--font-mono)" letterSpacing="1.5">THE BIKE.CO CORE</text>
      </svg>
      {mods.map((m, i) => {
        const a = (i / mods.length) * Math.PI * 2 - Math.PI / 2
        const left = ((cx + Math.cos(a) * R) / 400) * 100, top = ((cy + Math.sin(a) * R) / 380) * 100
        return (
          <span key={m.href} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5" style={{ left: `calc(${left}% * 0.96 + 2%)`, top: `calc(${top}% * 0.96 + 2%)` }}>
            <span className="grid size-8 place-items-center rounded-lg border border-line-dark bg-asphalt-2 text-hivis sm:size-9"><Icon name={m.icon} className="size-4" /></span>
            <span className="whitespace-nowrap text-[9px] font-semibold text-white/75 sm:text-[10px]">{m.label}</span>
          </span>
        )
      })}
    </div>
  )
}

export function BuildBom() {
  const rows: [number, string, string, string][] = [
    [0, 'Custom gravel build · 56', 'BLD-0042 rev B', ''],
    [1, 'Frameset', 'Steel · 56 · T47 · UDH', '1'],
    [1, 'Groupset', '12s mech · 1× 40T', '1'],
    [2, 'Rear derailleur', 'UDH direct mount', '1'],
    [2, 'Cassette', '10–51T', '1'],
    [1, 'Wheelset', '700c · 12×142 / 12×100', '1'],
    [2, 'Tires', '700×45 tubeless', '2'],
    [1, 'Cockpit', 'Bar 44 · stem 90 · internal route', '1'],
  ]
  return (
    <Chrome title="plm · builds">
      <div className="flex items-center justify-between border-b border-[#eceae3] px-4 py-2.5">
        <span className="flex items-center gap-2 text-sm font-bold"><Icon name="bom" className="size-4" />Bill of materials</span>
        <span className="flex gap-1.5 text-[10px]"><span className="rounded bg-[#efede6] px-2 py-1">rev A</span><span className="rounded bg-ink px-2 py-1 font-semibold text-white">rev B</span></span>
      </div>
      <ul className="py-1 text-[11px]">
        {rows.map(([d, n, spec, q], i) => (
          <li key={i} className="flex items-center gap-2 px-4 py-1.5">
            <span style={{ width: d * 16 }} className="shrink-0" />
            {d > 0 && <svg viewBox="0 0 10 10" className="size-2.5 shrink-0 text-ink-3" aria-hidden><path d="M1 0v5h9" fill="none" stroke="currentColor" /></svg>}
            <span className={`font-semibold ${d === 0 ? 'text-[12px]' : ''}`}>{n}</span>
            <span className="truncate text-[10px] text-ink-3">{spec}</span>
            {q && <span className="mono ml-auto text-[10px]">×{q}</span>}
          </li>
        ))}
      </ul>
      <div className="border-t border-[#eceae3] bg-[#fbfaf7] px-4 py-2 text-[10px] text-ink-2">rev B: cassette 10–52 → 10–51 · approved</div>
    </Chrome>
  )
}

export function CompareGrid() {
  const cols = ['Retail POS', 'Field service', 'BIKE.co']
  type V = 0 | 1 | 2 | 3
  const rows: [string, V[]][] = [
    ['Point of sale + hardware', [2, 0, 0]], ['Workshop tickets / jobs', [2, 1, 2]], ['Checklists with photos + signature', [0, 1, 2]],
    ['Scheduling + dispatch', [1, 2, 2]], ['Bike records + serials', [1, 0, 3]], ['Parts on the work order', [2, 1, 3]], ['Books, hiring, training', [0, 0, 2]],
  ]
  const Dot = ({ v }: { v: V }) => (
    <svg viewBox="0 0 16 16" className="mx-auto size-4" aria-label={['No', 'Partly', 'Yes', 'On the roadmap'][v]}>
      {v === 2 ? <circle cx="8" cy="8" r="7" fill="#16171a" /> : v === 1 ? <><circle cx="8" cy="8" r="6.2" fill="none" stroke="#16171a" strokeWidth="1.6" /><path d="M8 1.8a6.2 6.2 0 0 1 0 12.4z" fill="#16171a" /></> : v === 3 ? <circle cx="8" cy="8" r="6.2" fill="none" stroke="#16171a" strokeWidth="1.6" strokeDasharray="2.2 2" /> : <circle cx="8" cy="8" r="6.2" fill="none" stroke="#c9c6bc" strokeWidth="1.6" />}
    </svg>
  )
  return (
    <div className="screen">
      <table className="w-full text-[11px]">
        <thead><tr className="bg-ink text-white">{['', ...cols].map((c, i) => <th key={c + i} className={`px-3 py-2.5 text-[10px] font-bold uppercase italic ${i === 3 ? 'bg-hivis text-ink' : ''}`}>{c}</th>)}</tr></thead>
        <tbody>{rows.map(([r, v]) => (
          <tr key={r} className="border-t border-[#efede6]"><td className="px-3 py-2 font-semibold">{r}</td>{v.map((x, i) => <td key={i} className={`py-2 ${i === 2 ? 'bg-hivis/15' : ''}`}><Dot v={x} /></td>)}</tr>
        ))}</tbody>
      </table>
      <p className="border-t border-[#eceae3] px-3 py-2 text-[9.5px] text-ink-3">Categories, not products. Filled = yes, half = partly, dashed = on the BIKE.co roadmap.</p>
    </div>
  )
}
