import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'BIKE.co — Every repair you take in.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OG() {
  const logo = await readFile(join(process.cwd(), 'public/brand/bike-logo-white.png'))
  const src = `data:image/png;base64,${logo.toString('base64')}`
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#111214', color: '#fff', padding: 72 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={406} height={54} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 100, fontWeight: 900, fontStyle: 'italic', lineHeight: 0.95, letterSpacing: -3, textTransform: 'uppercase' }}>Every repair</div>
          <div style={{ fontSize: 100, fontWeight: 900, fontStyle: 'italic', lineHeight: 0.95, letterSpacing: -3, textTransform: 'uppercase', color: '#F2E500' }}>you take in.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: 'rgba(255,255,255,.7)' }}>Bike shop software on erp.io — quotes, work orders, checklists, invoices, AI receptionist.</div>
        </div>
        <div style={{ height: 16, background: 'repeating-linear-gradient(-45deg,#F2E500 0 20px,#16171a 20px 40px)', margin: '0 -72px -72px' }} />
      </div>
    ),
    size,
  )
}
