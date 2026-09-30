/** App screens, second set. Illustrative data only. */
import { Icon } from '@/components/icons'
import { Chrome, Phone } from './screens-a'

export function Checklist() {
  const items: [string, 'yes' | 'no' | 'num' | 'photo' | 'open', string?][] = [
    ['Chain wear under 0.5%', 'yes'], ['Rotor above stamped minimum', 'yes'], ['Brake pad compound (mm)', 'num', '1.8'],
    ['Thru-axles to spec', 'yes'], ['Tire sidewalls — cuts or bulges', 'no'], ['Photo: drivetrain after clean', 'photo'], ['Customer signature', 'open'],
  ]
  return (
    <Chrome title="checklists">
      <div className="flex items-center justify-between border-b border-[#eceae3] px-4 py-2.5">
        <div><p className="text-sm font-bold">Standard tune-up</p><p className="mono text-[9px] text-ink-3">Template v4 · WO-2291 · Sam</p></div>
        <span className="status-pill bg-ok-2 text-ok">5 of 7</span>
      </div>
      <ul className="divide-y divide-[#efede6] text-[11px]">
        {items.map(([q, t, v]) => (
          <li key={q} className="flex items-center justify-between gap-3 px-4 py-2">
            <span className="flex items-center gap-2">{t !== 'open' && t !== 'photo' && <span className="text-[9px] text-warn">*</span>}{q}</span>
            {t === 'yes' && <span className="flex gap-1"><span className="rounded bg-ink px-2 py-0.5 text-[9px] font-bold text-white">Pass</span><span className="rounded border border-[#dcd9cf] px-2 py-0.5 text-[9px]">Fail</span></span>}
            {t === 'no' && <span className="flex gap-1"><span className="rounded border border-[#dcd9cf] px-2 py-0.5 text-[9px]">Pass</span><span className="rounded bg-warn px-2 py-0.5 text-[9px] font-bold text-white">Fail</span></span>}
            {t === 'num' && <span className="mono rounded border border-[#dcd9cf] px-2 py-0.5">{v}</span>}
            {t === 'photo' && <span className="flex items-center gap-1 rounded bg-[#f1efe8] px-2 py-1 text-[9px]"><Icon name="camera" className="size-3" />1 photo</span>}
            {t === 'open' && <svg viewBox="0 0 90 22" className="h-5 w-20 text-ink-3" aria-hidden><path d="M2 16c8-10 12-12 14-8s-4 9 2 8 9-12 13-10-1 8 4 7 7-6 12-5 6 3 12 1" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t border-[#eceae3] bg-[#fbfaf7] px-4 py-2.5 text-[10px]">
        <span className="text-ink-3">Fail on sidewall → add tire to quote</span>
        <span className="flex gap-1.5"><span className="rounded border border-[#dcd9cf] px-2 py-1">PDF</span><span className="rounded bg-ink px-2.5 py-1 font-bold text-white">Submit</span></span>
      </div>
    </Chrome>
  )
}

export function Quote() {
  const lines: [string, string, string, boolean][] = [
    ['Standard tune-up', '1', '$95.00', false], ['Hydraulic bleed, rear', '1', '$45.00', false], ['Chain 11s 116L', '1', '$42.00', false],
    ['Rear tire 700×45 (sidewall cut)', '1', '$58.00', true], ['Tubeless conversion', '1', '$40.00', true],
  ]
  return (
    <Chrome title="quotes">
      <div className="flex items-center justify-between px-4 pb-2 pt-3">
        <div><p className="mono text-[10px] text-ink-3">Q-0731 · from request R-0212</p><p className="text-base font-extrabold italic">Quote</p></div>
        <span className="status-pill bg-steel-2 text-steel">Awaiting approval</span>
      </div>
      <ul className="divide-y divide-[#efede6] border-y border-[#efede6] text-[11px]">
        {lines.map(([n, q, a, opt]) => (
          <li key={n} className="flex items-center gap-2 px-4 py-1.5">
            <span className="flex-1 truncate">{n} <span className="text-ink-3">× {q}</span></span>
            {opt && <span className="rounded bg-hivis/40 px-1.5 py-0.5 text-[8.5px] font-bold uppercase">Optional</span>}
            <span className="mono w-14 text-right">{a}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between px-4 py-2.5 text-[10px]">
        <span className="text-ink-3">Tax 8% · optional lines excluded</span>
        <span className="flex items-center gap-2"><span className="mono text-sm font-bold">$196.56</span><span className="rounded bg-ink px-2 py-1 font-bold text-white">Approve → job</span></span>
      </div>
    </Chrome>
  )
}

export function PhonyCall() {
  const lines: [string, string][] = [
    ['caller', 'Hi — I dropped off a Trek on Saturday. Is it ready?'],
    ['ai', 'Thanks for calling. I can take your name and number and have the service desk call you back within the hour — or I can put you through now.'],
    ['caller', 'Put me through, please.'],
    ['ai', 'Connecting you to the service desk. One moment.'],
  ]
  return (
    <div className="screen">
      <div className="flex items-center justify-between bg-ink px-4 py-3 text-white">
        <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-full bg-hivis text-ink"><Icon name="phone" className="size-3.5" /></span><div><p className="text-[11px] font-bold leading-tight">Inbound · Shop line</p><p className="mono text-[9px] text-white/60">Phony · 00:48</p></div></div>
        <Wave />
      </div>
      <div className="space-y-2 p-4">
        {lines.map(([who, t], i) => (
          <div key={i} className={`flex ${who === 'ai' ? '' : 'justify-end'}`}>
            <p className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${who === 'ai' ? 'rounded-tl-sm bg-[#f1efe8]' : 'rounded-tr-sm bg-ink text-white'}`}>{t}</p>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-md border border-dashed border-[#dcd9cf] px-3 py-2 text-[10px] text-ink-2"><Icon name="link" className="size-3.5" />Warm transfer → Service desk · lead saved to CRM</div>
      </div>
    </div>
  )
}

function Wave() {
  const h = [4, 9, 14, 7, 12, 16, 6, 11, 5, 13, 8, 4]
  return <svg viewBox="0 0 48 20" className="h-5 w-12 text-hivis" aria-hidden>{h.map((v, i) => <rect key={i} x={i * 4} y={10 - v / 2} width="2" height={v} rx="1" fill="currentColor" />)}</svg>
}

export function ReadyText() {
  return (
    <Phone>
      <div className="px-3 pb-5 pt-1">
        <div className="mb-3 border-b border-[#e6e3da] pb-2 text-center"><div className="mx-auto grid size-8 place-items-center rounded-full bg-ink text-[11px] font-black italic text-hivis">B</div><p className="mt-1 text-[10px] font-semibold">Your bike shop</p></div>
        <div className="space-y-2 text-[10.5px] leading-snug">
          <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-[#e9e7e0] px-3 py-2">Hi Jamie — your Revolt is checked in (WO-2288). We&apos;ll text when it&apos;s on the stand.</p>
          <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-[#e9e7e0] px-3 py-2">We found a cut in the rear sidewall. Replace it for $58? Reply YES to approve.</p>
          <p className="ml-auto max-w-[40%] rounded-2xl rounded-br-sm bg-steel px-3 py-2 text-white">YES</p>
          <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-[#e9e7e0] px-3 py-2"><b>Your bike is ready.</b> Pick up any time before 6. Pay ahead here: <span className="text-steel underline">pay.link/…</span></p>
        </div>
      </div>
    </Phone>
  )
}

export function Timeclock() {
  const rows = [['Sam', 'WO-2291', 'Standard tune-up', '0:52', 60], ['Sam', 'WO-2290', 'Pads + rotor', '0:31', 35], ['Priya', 'WO-2294', 'E-bike diagnostic', '1:18', 88], ['Priya', 'WO-2288', 'Bleed F/R', '0:44', 50]] as const
  return (
    <Chrome title="timesheets">
      <div className="flex items-center justify-between border-b border-[#eceae3] px-4 py-2.5">
        <span className="flex items-center gap-2 text-sm font-bold"><Icon name="stopwatch" className="size-4" />Today&apos;s labor</span>
        <span className="flex items-center gap-1.5 rounded-full bg-ok-2 px-2 py-0.5 text-[10px] font-semibold text-ok"><span className="size-1.5 animate-pulse rounded-full bg-ok" />Priya · clocked on WO-2294</span>
      </div>
      <div className="space-y-2 p-4">
        {rows.map(([who, wo, job, t, w]) => (
          <div key={wo} className="grid grid-cols-[48px_1fr_40px] items-center gap-3 text-[11px]">
            <span className="font-semibold">{who}</span>
            <div><div className="flex justify-between text-[10px]"><span className="truncate"><span className="mono text-ink-3">{wo}</span> {job}</span></div><div className="mt-1 h-2 rounded-full bg-[#efede6]"><div className="h-2 rounded-full bg-ink" style={{ width: `${w}%` }} /></div></div>
            <span className="mono text-right font-semibold">{t}</span>
          </div>
        ))}
      </div>
    </Chrome>
  )
}

export function JobCosting() {
  const price = 238.2, labor = 71.5, parts = 48.3
  const margin = price - labor - parts
  const seg = (v: number) => `${(v / price) * 100}%`
  return (
    <Chrome title="job costing">
      <div className="p-4">
        <div className="flex items-baseline justify-between"><p className="text-sm font-bold">WO-2291 · Trek Fuel EX 8</p><p className="mono text-[10px] text-ink-3">closed</p></div>
        <div className="mt-3 flex h-7 overflow-hidden rounded-md text-[9px] font-bold">
          <div className="grid place-items-center bg-ink text-white" style={{ width: seg(labor) }}>Labor</div>
          <div className="grid place-items-center bg-steel text-white" style={{ width: seg(parts) }}>Parts</div>
          <div className="grid place-items-center bg-hivis text-ink" style={{ width: seg(margin) }}>Margin</div>
        </div>
        <dl className="mt-3 grid grid-cols-4 gap-2 text-[10px]">
          {[['Price', price], ['Labor cost', labor], ['Parts cost', parts], ['Margin', margin]].map(([k, v]) => (
            <div key={k as string} className="rounded-md bg-[#f7f6f2] p-2"><dt className="text-ink-3">{k}</dt><dd className="mono text-[12px] font-bold">${(v as number).toFixed(2)}</dd></div>
          ))}
        </dl>
        <p className="mt-3 text-[10px] text-ink-2">Quoted 1.0 h · booked 1.4 h — <b>0.4 h over</b> on the rear bleed.</p>
      </div>
    </Chrome>
  )
}

export function Portal() {
  return (
    <div className="screen">
      <div className="flex items-center justify-between bg-ink px-4 py-3 text-white"><span className="text-[11px] font-bold">Your bike shop · Customer portal</span><span className="mono text-[9px] text-white/60">jamie@…</span></div>
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        <div className="rounded-lg border border-[#e3e0d6] p-3">
          <p className="eyebrow text-ink-3">In the shop</p>
          <p className="mt-1 text-[12px] font-bold">Giant Revolt · WO-2288</p>
          <div className="mt-2 flex gap-1">{['In', 'Bench', 'QC', 'Ready'].map((s, i) => <span key={s} className={`h-1.5 flex-1 rounded-full ${i < 3 ? 'bg-ink' : 'bg-[#e3e0d6]'}`} />)}</div>
          <p className="mt-1.5 text-[10px] text-ink-2">Quality check · ready today</p>
        </div>
        <div className="rounded-lg border border-[#e3e0d6] p-3">
          <p className="eyebrow text-ink-3">To do</p>
          <p className="mt-1 flex justify-between text-[11px]"><span>Approve quote Q-0731</span><span className="mono">$58</span></p>
          <p className="mt-1 flex justify-between text-[11px]"><span>Pay invoice INV-1187</span><span className="mono">$238.20</span></p>
          <p className="mt-2 inline-block rounded bg-hivis px-2 py-1 text-[9px] font-bold uppercase italic">Review</p>
        </div>
        <div className="rounded-lg border border-[#e3e0d6] p-3 sm:col-span-2">
          <p className="eyebrow text-ink-3">Service history</p>
          <div className="mt-1 grid grid-cols-3 gap-2 text-[10px]">{[['Mar', 'Tune-up'], ['Jun', 'Hanger'], ['Aug', 'Tubeless']].map(([m, w]) => <div key={m} className="rounded bg-[#f7f6f2] p-1.5"><span className="mono text-ink-3">{m}</span><p className="font-semibold">{w}</p></div>)}</div>
        </div>
      </div>
    </div>
  )
}

export function Fleet() {
  const bikes = [['R-014', 'Cargo e-bike', '412 km', 'due'], ['R-015', 'Cargo e-bike', '380 km', 'ok'], ['R-021', 'Hybrid M', '1,208 km', 'over'], ['R-022', 'Hybrid L', '96 km', 'ok'], ['R-030', 'Kids 20"', '140 km', 'ok']] as const
  return (
    <Chrome title="fleet">
      <div className="flex items-center justify-between border-b border-[#eceae3] px-4 py-2.5">
        <span className="flex items-center gap-2 text-sm font-bold"><Icon name="stack" className="size-4" />Rental fleet · 5 of 42</span>
        <span className="rounded bg-warn-2 px-2 py-1 text-[10px] font-semibold text-warn">2 need service</span>
      </div>
      <table className="w-full text-[11px]">
        <tbody>{bikes.map(([id, m, km, st]) => (
          <tr key={id} className="border-t border-[#efede6] first:border-t-0">
            <td className="mono px-4 py-2 text-[10px] text-ink-3">{id}</td><td className="py-2 font-semibold">{m}</td><td className="mono py-2 text-right">{km}</td>
            <td className="px-4 py-2 text-right">{st === 'ok' ? <span className="text-[10px] text-ok">OK</span> : <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${st === 'over' ? 'bg-warn text-white' : 'bg-warn-2 text-warn'}`}>{st === 'over' ? 'Overdue' : 'Due'}</span>}</td>
          </tr>
        ))}</tbody>
      </table>
      <div className="border-t border-[#eceae3] bg-[#fbfaf7] px-4 py-2.5 text-[10px] text-ink-2">Service interval: every 400 km or 30 days · safety checklist on each</div>
    </Chrome>
  )
}

export function JobDetail() {
  const visits = [['Tue 9:30', 'Sam', 'Intake + inspection', 'done'], ['Wed 8:00', 'Sam', 'Drivetrain + bleed', 'done'], ['Wed 3:00', 'Priya', 'Quality check', 'open']] as const
  return (
    <Chrome title="jobs">
      <div className="flex items-start justify-between gap-3 border-b border-[#eceae3] px-4 py-3">
        <div><p className="mono text-[10px] text-ink-3">JOB-1042 · from Q-0731</p><p className="text-base font-extrabold italic leading-tight">Pro tune-up + rear bleed</p><p className="text-[10px] text-ink-2">J. Rivera · Santa Cruz Hightower</p></div>
        <span className="status-pill bg-steel-2 text-steel">In progress</span>
      </div>
      <div className="grid sm:grid-cols-[1fr_170px]">
        <div className="p-4">
          <p className="eyebrow text-ink-3">Visits</p>
          <ul className="mt-2 space-y-1.5 text-[11px]">
            {visits.map(([d, who, what, st]) => (
              <li key={d} className="flex items-center gap-2 rounded-md border border-[#ebe8df] px-2.5 py-1.5">
                <span className={`grid size-4 place-items-center rounded-full ${st === 'done' ? 'bg-ok text-white' : 'border-2 border-ink-3'}`}>{st === 'done' && <Icon name="check" className="size-2.5" />}</span>
                <span className="mono w-14 shrink-0 text-[9px] text-ink-3">{d}</span><span className="flex-1 truncate font-semibold">{what}</span><span className="text-[10px] text-ink-2">{who}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2 rounded-md bg-warn-2 px-2.5 py-2 text-[10px] text-warn"><Icon name="clipboard" className="size-3.5" /><b>Required:</b> Safety inspection v3 — not submitted</div>
        </div>
        <div className="flex flex-col gap-2 border-t border-[#eceae3] bg-[#f7f6f2] p-4 text-[10px] sm:border-l sm:border-t-0">
          <div className="flex justify-between"><span className="text-ink-3">Lines</span><span className="mono font-semibold">$238.20</span></div>
          <div className="flex justify-between"><span className="text-ink-3">Hours logged</span><span className="mono font-semibold">1.4 h</span></div>
          <div className="mt-auto rounded bg-[#dcd9cf] px-2 py-1.5 text-center font-bold text-ink-3" title="Blocked until the required checklist is submitted">Bill job</div>
          <p className="text-center text-[9px] text-ink-3">Unlocks when the checklist is in</p>
        </div>
      </div>
    </Chrome>
  )
}

export function Requests() {
  const rows = [['New', 'Web form', 'Creaking BB on gravel bike', '9:12'], ['New', 'Phone', 'Two kids bikes, safety check', '9:40'], ['Quoted', 'Walk-in', 'E-bike error on display', 'Yesterday'], ['Converted', 'Web form', 'Tubeless conversion 29er', 'Mon']] as const
  return (
    <Chrome title="requests">
      <div className="flex items-center justify-between border-b border-[#eceae3] px-4 py-2.5"><span className="flex items-center gap-2 text-sm font-bold"><Icon name="text" className="size-4" />Requests</span><span className="rounded bg-ink px-2 py-1 text-[10px] font-semibold text-white">2 new</span></div>
      <ul className="divide-y divide-[#efede6] text-[11px]">
        {rows.map(([st, src, what, when]) => (
          <li key={what} className="flex items-center gap-3 px-4 py-2.5">
            <span className={`status-pill ${st === 'New' ? 'bg-hivis text-ink' : st === 'Quoted' ? 'bg-steel-2 text-steel' : 'bg-ok-2 text-ok'}`}>{st}</span>
            <span className="min-w-0 flex-1"><span className="block truncate font-semibold">{what}</span><span className="text-[10px] text-ink-3">{src}</span></span>
            <span className="mono text-[10px] text-ink-3">{when}</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-[#eceae3] bg-[#fbfaf7] px-4 py-2 text-[10px] text-ink-2">Request → quote → job → invoice, one record</div>
    </Chrome>
  )
}
