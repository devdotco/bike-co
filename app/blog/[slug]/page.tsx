import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPost, getPosts, cleanHtml, mediaUrl, formatDate } from '@/lib/payload-blog'
import { JsonLd, breadcrumbLd } from '@/lib/schema'
import { SITE } from '@/lib/site'
import { CtaBand } from '@/components/page-view'
import { Arrow } from '@/components/icons'

export const revalidate = 300

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return (await getPosts()).map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  const img = mediaUrl(post.featuredImage?.url)
  return {
    title: `${post.title} | BIKE.co`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.excerpt, url: `/blog/${post.slug}`, publishedTime: post.publishedAt, images: img ? [img] : undefined },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()
  const img = mediaUrl(post.featuredImage?.url)
  const authors = (post.authors ?? []).filter(a => a?.name)

  return (
    <>
      <JsonLd data={[
        {
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: img,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
          mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
          author: authors.length ? authors.map(a => ({ '@type': 'Person', name: a.name, jobTitle: a.jobTitle })) : { '@id': `${SITE.url}/#org` },
          publisher: { '@id': `${SITE.url}/#org` },
        },
        breadcrumbLd([{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]),
      ]} />
      <article>
        <header className="bg-asphalt text-white">
          <div className="mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white"><Arrow className="size-3.5 rotate-180" />Blog</Link>
            <p className="mono mt-6 text-xs text-hivis">{formatDate(post.publishedAt)}{post.primaryCategory?.name ? ` · ${post.primaryCategory.name}` : ''}</p>
            <h1 className="display-soft mt-3 text-3xl sm:text-5xl">{post.title}</h1>
            {post.excerpt && <p className="mt-5 text-lg leading-relaxed text-white/70">{post.excerpt}</p>}
            {authors.length > 0 && <p className="mt-5 text-sm text-white/60">By {authors.map(a => a.name).join(', ')}</p>}
          </div>
          <div className="tape" aria-hidden />
        </header>
        {img && (
          <div className="mx-auto -mb-2 mt-10 max-w-4xl px-4 sm:px-6">
            <Image src={img} alt={post.featuredImage?.alt ?? ''} width={post.featuredImage?.width ?? 1600} height={post.featuredImage?.height ?? 900} sizes="(min-width:896px) 896px, 100vw" className="w-full rounded-xl" priority />
          </div>
        )}
        <div className="blog-body mx-auto max-w-3xl px-4 py-12 sm:px-6" dangerouslySetInnerHTML={{ __html: cleanHtml(post.bodyHtml) }} />
        {authors.some(a => a.biography) && (
          <div className="mx-auto max-w-3xl space-y-4 px-4 pb-14 sm:px-6">
            {authors.filter(a => a.biography).map(a => (
              <div key={a.name} className="flex gap-4 rounded-xl border border-line bg-paper p-5">
                {a.headshot?.url && <Image src={mediaUrl(a.headshot.url)!} alt={a.name ?? ''} width={56} height={56} className="size-14 rounded-full object-cover" />}
                <div><p className="font-bold">{a.name}{a.jobTitle ? <span className="font-normal text-ink-3"> · {a.jobTitle}</span> : null}</p><p className="mt-1 text-sm leading-relaxed text-ink-2">{a.biography}</p></div>
              </div>
            ))}
          </div>
        )}
      </article>
      <CtaBand />
    </>
  )
}
