import Link from 'next/link'
import { Arrow } from '@/components/icons'

export default function NotFound() {
  return (
    <section className="bg-asphalt text-white">
      <div className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
        <p className="eyebrow text-hivis">404 · dropped chain</p>
        <h1 className="display mt-4 text-5xl sm:text-7xl">This page isn&apos;t on the stand.</h1>
        <p className="mx-auto mt-6 max-w-lg text-white/70">BIKE.co is now shop software for bike repair businesses. If you were looking for the old repair shop, it has closed.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-hivis">Home <Arrow /></Link>
          <Link href="/product" className="btn btn-ghost text-white">The product</Link>
        </div>
      </div>
      <div className="tape" aria-hidden />
    </section>
  )
}
