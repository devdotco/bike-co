/**
 * App screens drawn in HTML/CSS. Illustrative data only — names, bikes and
 * numbers are made up to show the layout, and nothing here is a screenshot.
 */
import { Icon } from '@/components/icons'

export function Chrome({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`screen ${className}`}>
      <div className="screen-bar"><i /><i /><i /><span className="mono ml-2 truncate text-[10px] text-ink-3">app.erp.io/service · {title}</span></div>
      {children}
    </div>
  )
}

export function Phone({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-[260px] rounded-[34px] border-[7px] border-ink bg-ink shadow-2xl ${className}`}>
      <div className="relative overflow-hidden rounded-[27px] bg-paper">
        <div className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <div className="flex justify-between px-5 pb-1 pt-2 text-[9px] font-semibold"><span>9:41</span><span className="mono">5G ▮▮▮</span></div>
        {children}
      </div>
    </div>
  )
}

const COLS = [
  { t: 'Checked in', n: 4, cards: [['WO-2291', 'Trek Fuel EX 8', 'Tune-up · Standard', 'Today 5pm'], ['WO-2294', 'Specialized Turbo Vado', 'E-bike diagnostic', 'Fri']] },
  { t: 'Waiting on parts', n: 2, cards: [['WO-2279', 'Santa Cruz Hightower', 'Rear hanger · SRAM UDH', 'ETA Thu'], ['WO-2283', 'Cannondale Topstone', 'BB replace · T47', 'ETA Wed']] },
  { t: 'On the stand', n: 3, cards: [['WO-2288', 'Giant Revolt', 'Hydraulic bleed F/R', 'Bench 2'], ['WO-2290', 'Rad Radster', 'Brake pads + rotor', 'Bench 1']] },
  { t: 'Ready for pickup', n: 5, cards: [['WO-2276', 'Canyon Grizl', 'Tubeless setup', 'Texted 2:14'], ['WO-2281', 'Kids 24" MTB', 'Safety check', 'Texted 11:02']] },
]

export function BenchBoard() {
  return (
    <Chrome title="work orders">
      <div className="flex items-center justify-between border-b border-[#eceae3] px-4 py-2.5">
        <div className="flex items-center gap-2 text-sm font-bold"><Icon name="kanban" className="size-4" />Bench board</div>
        <div className="flex gap-1.5 text-[10px]"><span className="rounded bg-ink px-2 py-1 font-semibold text-white">All benches</span><span className="rounded bg-[#efede6] px-2 py-1">Today</span></div>
      </div>
      <div className="grid grid-cols-2 gap-2 bg-[#f7f6f2] p-3 sm:grid-cols-4">
        {COLS.map((c, i) => (
          <div key={c.t} className="min-w-0">
            <div className="mb-1.5 flex items-center justify-between px-0.5 text-[10px] font-bold uppercase tracking-wide text-ink-2">
              <span className="truncate">{c.t}</span><span className="mono rounded bg-white px-1">{c.n}</span>
            </div>
            <div className="space-y-1.5">
              {c.cards.map(([id, bike, job, when]) => (
                <div key={id} className={`rounded-md border bg-white p-2 ${i === 3 ? 'border-ok/40' : i === 1 ? 'border-warn/40' : 'border-[#e6e3da]'}`}>
                  <div className="mono text-[9px] text-ink-3">{id}</div>
                  <div className="truncate text-[11px] font-semibold leading-tight">{bike}</div>
                  <div className="truncate text-[10px] text-ink-2">{job}</div>
                  <div className={`mt-1 text-[9px] font-semibold ${i === 3 ? 'text-ok' : i === 1 ? 'text-warn' : 'text-steel'}`}>{when}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Chrome>
  )
}

export function IntakePhone() {
  const slots = [['Tue 8:00', 1], ['Tue 9:30', 0], ['Wed 8:00', 1], ['Wed 12:00', 1], ['Thu 8:00', 0], ['Thu 9:30', 1]] as const
  return (
    <Phone>
      <div className="px-4 pb-5 pt-2">
        <div className="mb-3 flex items-center gap-2"><span className="grid size-6 place-items-center rounded bg-ink text-[10px] font-black italic text-hivis">B</span><span className="text-[11px] font-bold">Book a repair</span></div>
        <p className="mono text-[8px] uppercase tracking-widest text-ink-3">Step 2 of 3 · Drop-off</p>
        <p className="mt-1 text-[13px] font-extrabold italic leading-tight">Standard tune-up<br /><span className="font-semibold not-italic text-ink-2">Road · gravel · MTB</span></p>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {slots.map(([s, ok], i) => (
            <div key={s} className={`rounded-md border px-2 py-1.5 text-center text-[10px] font-semibold ${i === 2 ? 'border-ink bg-ink text-white' : ok ? 'border-[#dcd9cf] bg-white' : 'border-dashed border-[#dcd9cf] text-ink-3 line-through'}`}>{s}</div>
          ))}
        </div>
        <div className="mt-3 rounded-md border border-[#e3e0d6] bg-white p-2 text-[10px]">
          <div className="flex justify-between"><span className="text-ink-3">Bike</span><span className="font-semibold">Trek Domane SL6 · 56</span></div>
          <div className="mt-1 flex justify-between"><span className="text-ink-3">Serial</span><span className="mono">WTU284C1934K</span></div>
          <div className="mt-1 flex justify-between"><span className="text-ink-3">Issue</span><span className="font-semibold">Skipping in 11–12</span></div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-md bg-[#f1efe8] p-2 text-[9px] text-ink-2"><Icon name="camera" className="size-3.5" /><span>Add a photo of the problem</span></div>
        <div className="mt-3 rounded-md bg-hivis py-2 text-center text-[11px] font-black uppercase italic">Confirm drop-off</div>
      </div>
    </Phone>
  )
}

const PARTS = [
  ['CN-11S-116', 'Chain 11s 116L', 'Shop', 14, 6, 'ok'],
  ['PD-SH-J05A', 'Brake pads resin (J05A)', 'Shop', 3, 8, 'low'],
  ['PD-SH-J05A', 'Brake pads resin (J05A)', 'Van 1', 2, 4, 'low'],
  ['TB-700-35', 'Tube 700×28–35 Presta 48', 'Shop', 41, 20, 'ok'],
  ['HG-UDH', 'Derailleur hanger UDH', 'Shop', 0, 3, 'out'],
  ['SL-TUB-1L', 'Tubeless sealant 1L', 'Van 1', 1, 1, 'ok'],
] as const

export function PartsTable() {
  return (
    <Chrome title="parts">
      <div className="flex items-center justify-between border-b border-[#eceae3] px-4 py-2.5">
        <div className="flex items-center gap-2 text-sm font-bold"><Icon name="box" className="size-4" />Parts · all locations</div>
        <span className="rounded bg-warn-2 px-2 py-1 text-[10px] font-semibold text-warn">3 below reorder point</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[440px] text-left text-[11px]">
          <thead className="bg-[#f7f6f2] text-[9px] uppercase tracking-wider text-ink-3">
            <tr><th className="px-3 py-2 font-semibold">SKU</th><th className="px-2 py-2 font-semibold">Part</th><th className="px-2 py-2 font-semibold">Where</th><th className="px-2 py-2 text-right font-semibold">On hand</th><th className="px-3 py-2 text-right font-semibold">Reorder at</th></tr>
          </thead>
          <tbody>
            {PARTS.map(([sku, name, loc, qty, rop, st], i) => (
              <tr key={i} className="border-t border-[#efede6]">
                <td className="mono px-3 py-2 text-[10px] text-ink-3">{sku}</td>
                <td className="px-2 py-2 font-semibold">{name}</td>
                <td className="px-2 py-2"><span className="inline-flex items-center gap-1">{loc === 'Van 1' && <Icon name="van" className="size-3" />}{loc}</span></td>
                <td className={`mono px-2 py-2 text-right font-semibold ${st === 'out' ? 'text-warn' : st === 'low' ? 'text-warn' : ''}`}>{qty}</td>
                <td className="px-3 py-2 text-right"><span className="mono text-ink-3">{rop}</span>{st !== 'ok' && <span className="ml-2 rounded bg-warn-2 px-1.5 py-0.5 text-[9px] font-bold uppercase text-warn">{st === 'out' ? 'Out' : 'Low'}</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-[#eceae3] bg-[#fbfaf7] px-4 py-2.5 text-[10px]">
        <span className="text-ink-3">WO-2279 is waiting on HG-UDH</span>
        <span className="rounded bg-ink px-2.5 py-1 font-bold text-white">Draft purchase order →</span>
      </div>
    </Chrome>
  )
}

export function PurchaseOrder() {
  const lines = [['PD-SH-J05A', 'Brake pads resin (J05A)', 10, 9.4], ['HG-UDH', 'Derailleur hanger UDH', 4, 17.5], ['CB-SHIFT-SS', 'Shift cable stainless 2100mm', 25, 1.9]] as const
  const sub = lines.reduce((s, l) => s + l[2] * l[3], 0)
  return (
    <Chrome title="purchase orders">
      <div className="grid gap-4 p-4 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="mono text-[10px] text-ink-3">PO-0418 · DRAFT</p>
          <p className="text-base font-extrabold italic">Purchase order</p>
          <p className="text-[11px] text-ink-2">Supplier: <b>Your distributor</b> · Ship to: Shop</p>
        </div>
        <div className="flex items-start gap-1.5 text-[10px]"><span className="rounded bg-steel-2 px-2 py-1 font-semibold text-steel">From reorder points</span></div>
      </div>
      <table className="w-full text-[11px]">
        <thead className="bg-[#f7f6f2] text-[9px] uppercase tracking-wider text-ink-3"><tr><th className="px-4 py-2 text-left">Part</th><th className="px-2 py-2 text-right">Qty</th><th className="px-2 py-2 text-right">Unit cost</th><th className="px-4 py-2 text-right">Line</th></tr></thead>
        <tbody>{lines.map(([sku, n, q, c]) => (
          <tr key={sku} className="border-t border-[#efede6]"><td className="px-4 py-2"><span className="font-semibold">{n}</span><span className="mono block text-[9px] text-ink-3">{sku}</span></td><td className="mono px-2 py-2 text-right">{q}</td><td className="mono px-2 py-2 text-right">${c.toFixed(2)}</td><td className="mono px-4 py-2 text-right font-semibold">${(q * c).toFixed(2)}</td></tr>
        ))}</tbody>
      </table>
      <div className="flex items-center justify-between border-t border-[#eceae3] px-4 py-3 text-[11px]">
        <span className="text-ink-3">Receiving updates stock at the shop</span>
        <span className="mono text-sm font-bold">${sub.toFixed(2)}</span>
      </div>
    </Chrome>
  )
}

export function Invoice() {
  const lines = [['Standard tune-up', '1', '$95.00'], ['Chain 11s 116L', '1', '$42.00'], ['Brake pads resin (J05A)', '2', '$38.00'], ['Labor · hydraulic bleed rear', '0.5 h', '$45.00']]
  return (
    <Chrome title="invoices">
      <div className="grid gap-0 sm:grid-cols-[1fr_150px]">
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div><p className="mono text-[10px] text-ink-3">INV-1187 · from WO-2291</p><p className="text-base font-extrabold italic">Invoice</p></div>
            <span className="status-pill bg-warn-2 text-warn">Due at pickup</span>
          </div>
          <div className="mt-3 space-y-1.5 text-[11px]">
            {lines.map(([n, q, a]) => <div key={n} className="flex justify-between gap-2 border-b border-dashed border-[#e6e3da] pb-1.5"><span>{n} <span className="text-ink-3">× {q}</span></span><span className="mono">{a}</span></div>)}
            <div className="flex justify-between pt-1 text-ink-2"><span>Sales tax</span><span className="mono">$18.20</span></div>
            <div className="flex justify-between text-sm font-bold"><span>Total</span><span className="mono">$238.20</span></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 border-t border-[#eceae3] bg-[#f7f6f2] p-4 sm:border-l sm:border-t-0">
          <span className="w-full rounded bg-ink px-2 py-1.5 text-center text-[9px] font-bold text-white">Record payment</span>
          <div className="relative mt-1 opacity-40"><QrArt className="size-16" /></div>
          <p className="text-center text-[9px] leading-tight text-ink-3">Pay link + QR<br /><span className="font-bold uppercase tracking-wide">on the roadmap</span></p>
        </div>
      </div>
    </Chrome>
  )
}

/** A decorative QR-like grid — deliberately not a scannable code. */
export function QrArt({ className = '' }: { className?: string }) {
  const cells: [number, number][] = []
  for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
    const finder = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13)
    if (!finder && ((x * 7 + y * 13 + x * y) % 5 < 2)) cells.push([x, y])
  }
  const Finder = ({ x, y }: { x: number; y: number }) => <><rect x={x} y={y} width="7" height="7" fill="#16171a" /><rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" /><rect x={x + 2} y={y + 2} width="3" height="3" fill="#16171a" /></>
  return (
    <svg viewBox="-1 -1 23 23" className={className} aria-hidden shapeRendering="crispEdges">
      <rect x="-1" y="-1" width="23" height="23" fill="#fff" />
      {cells.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#16171a" />)}
      <Finder x={0} y={0} /><Finder x={14} y={0} /><Finder x={0} y={14} />
    </svg>
  )
}

export function Schedule() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const techs = ['Sam', 'Priya', 'Luis']
  const jobs: Record<string, [string, string][]> = {
    'Sam-0': [['JOB-1040', 'Tune-up']], 'Sam-1': [['JOB-1042', 'Pro tune-up'], ['JOB-1043', 'Pads + rotor']], 'Sam-3': [['JOB-1047', 'Drivetrain']],
    'Priya-1': [['JOB-1044', 'E-bike diagnostic']], 'Priya-2': [['JOB-1042', 'Quality check']], 'Priya-4': [['JOB-1049', 'Bleed F/R']],
    'Luis-0': [['JOB-1038', 'Fleet · 3 bikes']], 'Luis-2': [['JOB-1045', 'Tubeless']], 'Luis-3': [['JOB-1046', 'Flat + check']],
  }
  return (
    <Chrome title="schedule">
      <div className="flex items-center justify-between border-b border-[#eceae3] px-4 py-2.5 text-sm font-bold"><span className="flex items-center gap-2"><Icon name="calendar" className="size-4" />Week of Oct 5</span><span className="flex gap-1.5 text-[10px] font-normal"><span className="rounded bg-ink px-2 py-1 font-semibold text-white">Week</span><span className="rounded bg-[#efede6] px-2 py-1">Today</span></span></div>
      <div className="grid grid-cols-[1fr_92px]">
        <div className="overflow-x-auto">
          <div className="grid min-w-[360px] grid-cols-[44px_repeat(5,1fr)] text-[10px]">
            <div />
            {days.map(d => <div key={d} className="border-l border-[#efede6] px-1.5 py-1.5 font-semibold">{d}</div>)}
            {techs.map(t => (
              <div key={t} className="contents">
                <div className="border-t border-[#efede6] px-1.5 py-2 font-semibold">{t}</div>
                {days.map((d, di) => (
                  <div key={d} className="min-h-[58px] space-y-1 border-l border-t border-[#efede6] p-1">
                    {(jobs[`${t}-${di}`] ?? []).map(([id, w]) => (
                      <div key={id + w} className={`rounded border-l-[3px] px-1 py-0.5 ${t === 'Luis' ? 'border-steel bg-steel-2' : 'border-ink bg-[#f1efe8]'}`}><div className="mono text-[8px] text-ink-3">{id}</div><div className="truncate text-[9px] font-semibold leading-tight">{w}</div></div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="border-l border-[#eceae3] bg-[#f7f6f2] p-2 text-[10px]">
          <p className="font-bold">Unscheduled <span className="mono rounded bg-white px-1">3</span></p>
          {[['JOB-1050', 'Hanger · waiting part'], ['JOB-1051', 'Kids safety check'], ['JOB-1052', 'Build · frameset']].map(([id, w]) => (
            <div key={id} className="mt-1.5 rounded border border-dashed border-[#cfccc2] bg-white px-1.5 py-1"><div className="mono text-[8px] text-ink-3">{id}</div><div className="text-[9px] font-semibold leading-tight">{w}</div></div>
          ))}
        </div>
      </div>
    </Chrome>
  )
}

export function BikeRecord() {
  const history = [['Mar 12', 'Standard tune-up', 'Sam'], ['Jun 03', 'Rear derailleur hanger', 'Priya'], ['Aug 21', 'Tubeless setup · 29×2.4', 'Luis'], ['Today', 'Pro tune-up · fork lowers', 'Sam']]
  return (
    <Chrome title="bikes">
      <div className="grid sm:grid-cols-[190px_1fr]">
        <div className="border-b border-[#eceae3] bg-[#f7f6f2] p-4 sm:border-b-0 sm:border-r">
          <BikeLine className="w-full text-ink" />
          <p className="mt-2 text-sm font-extrabold italic leading-tight">Santa Cruz Hightower</p>
          <dl className="mt-2 space-y-1 text-[10px]">
            {[['Size', 'L · 29"'], ['Serial', 'SC2381174'], ['Color', 'Gloss gold'], ['Owner', 'J. Rivera'], ['Fork', 'Fox 36 · 150mm'], ['Drivetrain', 'SRAM GX AXS']].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-2"><dt className="text-ink-3">{k}</dt><dd className={`text-right font-semibold ${k === 'Serial' ? 'mono' : ''}`}>{v}</dd></div>
            ))}
          </dl>
        </div>
        <div className="p-4">
          <p className="eyebrow text-ink-3">Service history</p>
          <ol className="mt-2 space-y-0">
            {history.map(([d, w, t], i) => (
              <li key={d} className="relative flex gap-3 pb-3 text-[11px]">
                <span className={`relative z-10 mt-1 size-2.5 shrink-0 rounded-full ${i === history.length - 1 ? 'bg-hivis ring-2 ring-ink' : 'bg-ink'}`} />
                {i < history.length - 1 && <span className="absolute left-[4.5px] top-3 h-full w-px bg-[#dcd9cf]" />}
                <div><span className="mono text-[9px] text-ink-3">{d}</span><p className="font-semibold leading-tight">{w}</p><p className="text-[10px] text-ink-3">{t}</p></div>
              </li>
            ))}
          </ol>
          <p className="rounded bg-steel-2 px-2 py-1.5 text-[10px] text-steel">Fork lower service due — 50 h since last</p>
        </div>
      </div>
    </Chrome>
  )
}

/** A line drawing of a trail bike, used as a spot illustration. */
export function BikeLine({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="45" cy="80" r="32" /><circle cx="155" cy="80" r="32" />
      <circle cx="45" cy="80" r="3" /><circle cx="155" cy="80" r="3" />
      <path d="M45 80l40-44h52l18 44M85 36l16 44 36-44M101 80H45" />
      <path d="M85 36l-6-14M72 22h16M137 36l-4-14h14" />
      <circle cx="101" cy="80" r="8" strokeWidth="2.5" />
    </svg>
  )
}
