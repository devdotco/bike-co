import Image from 'next/image'
import Link from 'next/link'

/** The live bike.co wordmark (white PNG). `dark` inverts it for light backgrounds. */
export function Logo({ dark = false, className = 'h-[18px] w-auto' }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="BIKE.co home" className="inline-flex items-center">
      <Image src="/brand/bike-logo-white.png" alt="BIKE.co" width={203} height={27} priority className={`${className} ${dark ? 'invert' : ''}`} />
    </Link>
  )
}
