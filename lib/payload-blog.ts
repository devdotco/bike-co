import sanitizeHtml from "sanitize-html";

/**
 * Blog posts from the shared Payload CMS at payload.dev.co, scoped to this
 * site's tenant. Same contract as the rest of the DEV.co portfolio
 * (PAYLOAD_URL + PAYLOAD_TENANT_ID, server-side only). Unlike the older
 * copies, body HTML is sanitised before rendering: the CMS is shared by
 * many tenants, so its output is treated as untrusted.
 */
const BASE = (process.env.PAYLOAD_URL || "https://payload.dev.co").replace(/\/$/, "");
const TENANT = process.env.PAYLOAD_TENANT_ID || "";
/** payload.dev.co sits behind Cloudflare, which 403s (error 1010) a request without a browser-ish User-Agent. */
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

export type BlogPost = {
  id: string | number;
  title: string;
  slug: string;
  /** Where the On-site pipeline published it, e.g. "/blog/how-to-price-a-tune-up". */
  fullPath?: string | null;
  excerpt?: string;
  seo?: { metaTitle?: string | null; metaDescription?: string | null; canonicalUrl?: string | null; robotsIndex?: boolean | null } | null;
  excludeFromSitemap?: boolean | null;
  bodyHtml?: string;
  publishedAt?: string;
  updatedAt?: string;
  featuredImage?: { url?: string; alt?: string; width?: number; height?: number } | null;
  /**
   * depth=1 populates these; the page renders a short bio card under each
   * article, so a byline is a person rather than just a name.
   */
  authors?: Array<{
    id?: string | number;
    name?: string;
    jobTitle?: string;
    biography?: string;
    headshot?: { url?: string; alt?: string } | null;
  }>;
  primaryCategory?: { name?: string; slug?: string } | null;
};

export function blogEnabled(): boolean {
  // The tenant id is numeric; anything else would reach Postgres as a malformed filter.
  return /^\d+$/.test(TENANT);
}

async function query(qs: string): Promise<BlogPost[]> {
  if (!blogEnabled()) return [];
  try {
    const res = await fetch(
      `${BASE}/api/posts?where[tenant][equals]=${TENANT}&where[_status][equals]=published&depth=1&limit=200&${qs}`,
      { headers: { "User-Agent": UA }, next: { revalidate: 300 } },
    );
    if (!res.ok) return [];
    return ((await res.json()).docs ?? []) as BlogPost[];
  } catch {
    return [];
  }
}

export const getPosts = () => query("sort=-publishedAt");

/** The public slug of a post: the last segment of its stored path, else its slug. */
export function postSlug(p: BlogPost): string {
  const fromPath = p.fullPath?.split("/").filter(Boolean).pop();
  return fromPath && /^[a-z0-9-]{1,200}$/.test(fromPath) ? fromPath : p.slug;
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  if (!/^[a-z0-9-]{1,200}$/.test(slug)) return null;
  // The pipeline publishes at /blog/<slug>; match the stored path first so a post whose
  // slug and path disagree still resolves to the URL the sitemap advertises.
  const byPath = await query(`where[fullPath][equals]=${encodeURIComponent(`/blog/${slug}`)}`);
  if (byPath[0]) return byPath[0];
  return (await query(`where[slug][equals]=${encodeURIComponent(slug)}`))[0] ?? null;
}

/** Absolute image URLs: Payload may return paths relative to its own origin. */
export function mediaUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `${BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

/**
 * SVG element set the On-site pipeline's charts are drawn from. Listed in full
 * rather than trimmed to what today's posts happen to use, because the chart
 * catalogue has many shapes and a missing tag does not fail loudly — the chart
 * simply vanishes and leaves its <figcaption> describing a picture that is not
 * there.
 *
 * Deliberately absent: `foreignObject` (re-opens the HTML parser inside SVG),
 * `use` (can reference an external document) and `script`/`animate*`.
 */
const SVG_TAGS = [
  "svg",
  "g",
  "defs",
  "symbol",
  "title",
  "desc",
  "path",
  "rect",
  "circle",
  "ellipse",
  "line",
  "polyline",
  "polygon",
  "text",
  "tspan",
  "textpath",
  "marker",
  "pattern",
  "mask",
  "clippath",
  "lineargradient",
  "radialgradient",
  "stop",
  "filter",
  "fegaussianblur",
  "feoffset",
  "feblend",
  "femerge",
  "femergenode",
  "fecolormatrix",
  "fedropshadow",
];

/**
 * Presentation attributes used by those shapes. sanitize-html lower-cases
 * attribute names; that is safe here because these are parsed in an HTML
 * document, where the parser restores the camelCase SVG spellings (viewBox,
 * clipPath, gradientUnits) from their lower-case forms.
 */
const SVG_ATTRS = [
  "xmlns",
  "viewbox",
  "preserveaspectratio",
  "width",
  "height",
  "x",
  "y",
  "x1",
  "y1",
  "x2",
  "y2",
  "cx",
  "cy",
  "r",
  "rx",
  "ry",
  "d",
  "points",
  "transform",
  "offset",
  "gradientunits",
  "gradienttransform",
  "fill",
  "fill-opacity",
  "fill-rule",
  "stroke",
  "stroke-width",
  "stroke-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "opacity",
  "stop-color",
  "stop-opacity",
  "color",
  "font-size",
  "font-family",
  "font-weight",
  "font-style",
  "letter-spacing",
  "text-anchor",
  "dominant-baseline",
  "alignment-baseline",
  "baseline-shift",
  "clip-path",
  "mask",
  "filter",
  "marker-end",
  "marker-start",
  "vector-effect",
  "patternunits",
  "maskunits",
  "clippathunits",
  "stddeviation",
  "dx",
  "dy",
];

export function cleanHtml(html: string | undefined): string {
  return sanitizeHtml(html ?? "", {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img",
      "figure",
      "figcaption",
      "h1",
      "h2",
      "h3",
      "h4",
      "iframe",
      // The On-site pipeline wraps each article in <div class="onsite-body">
      // and ships a <style> block scoped to it that owns the article's vertical
      // rhythm. Drop either and every element falls back to one flat margin,
      // which is what "the spacing is off" looks like.
      "style",
      ...SVG_TAGS,
    ],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "width", "height", "loading", "style"],
      a: ["href", "name", "target", "rel"],
      iframe: ["src", "width", "height", "allow", "allowfullscreen", "title"],
      // class carries the wrapper the <style> block selects on; style carries
      // per-figure chart skinning. Both are first-party content out of our own
      // CMS, and sanitize-html still strips every on* handler and javascript:
      // URL regardless of what is allowed here.
      "*": ["id", "class", "style", "role", "aria-*", "data-*", ...SVG_ATTRS],
    },
    // sanitize-html discards the TEXT of every tag in nonTextTags, and `style`
    // is in that list by default — so allowing the tag without this yields an
    // empty <style></style> and the spacing bug survives the fix. `script` and
    // the form tags stay in the list.
    nonTextTags: ["script", "textarea", "option", "noscript"],
    // allowedStyles is deliberately NOT set: providing it filters declarations
    // against an allowlist, and an empty object strips every style attribute.
    allowVulnerableTags: true,
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com", "player.vimeo.com"],
    transformTags: {
      a: (tag, attribs) => ({
        tagName: "a",
        attribs:
          attribs.href?.startsWith("http") && !/^https?:\/\/(www\.)?bike\.co(\/|$)/.test(attribs.href)
            ? { ...attribs, rel: "noopener noreferrer", target: "_blank" }
            : attribs,
      }),
      img: (tag, attribs) => ({
        tagName: "img",
        attribs: { ...attribs, src: mediaUrl(attribs.src) ?? "", loading: "lazy" },
      }),
    },
  });
}

export function formatDate(iso?: string): string {
  return iso
    ? new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "";
}
