/**
 * Shared SEO constants consumed by every route's head() function.
 *
 * Update SITE when the production domain goes live and the staging
 * domain is replaced.
 */

export const SITE = "https://www.marvecx.com";

/** Primary OG/social share image (1200×630, served from /public) */
export const OG_IMAGE = `${SITE}/og-image-1200x630.jpg`;

/** Brand logo URL (public asset) */
export const LOGO = `${SITE}/marvecx-icon-512x512.png`;

/** Twitter / X handle */
export const TWITTER_SITE = "@marvecx";
export const TWITTER_CREATOR = "@marvecx";

/** Site-wide brand keywords — used as a base for every page */
export const BASE_KEYWORDS = [
  "MARVECX",
  "MARVECX Aerospace",
  "African aerospace",
  "space technology Africa",
  "aerospace education Africa",
  "ISTC",
  "International Space Technology Convention",
  "aerospace research Africa",
  "space technology Nigeria",
  "aerospace engineering Africa",
  "sustainable aerospace",
  "multiplanetary future",
  "African space hub",
  "Marvecx",
  "Aeronautics",
  "Drone Technology",
].join(", ");

/** Builds a full canonical URL from a path (no trailing slash on root). */
export function canonical(path: string): string {
  return path === "/" ? SITE : `${SITE}${path}`;
}

/** Builds a full set of Open Graph meta tags. */
export function ogMeta(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
}) {
  return [
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: opts.url },
    { property: "og:image", content: opts.image ?? OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: opts.title },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:site_name", content: "MARVECX" },
    { property: "og:locale", content: "en_US" },
  ] as const;
}

/** Builds a full set of Twitter Card meta tags. */
export function twitterMeta(opts: {
  title: string;
  description: string;
  image?: string;
}) {
  return [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_SITE },
    { name: "twitter:creator", content: TWITTER_CREATOR },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: opts.image ?? OG_IMAGE },
    { name: "twitter:image:alt", content: opts.title },
  ] as const;
}
