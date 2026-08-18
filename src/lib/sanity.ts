/**
 * Sanity content layer for MARVECX events.
 *
 * Reads come from the public Sanity CDN endpoint, so they work both during SSR
 * and in the browser with no secrets. If the dataset is unreachable or empty
 * (e.g. before the Studio is populated) the site falls back to the built-in
 * ISTC editions so pages never render blank.
 */

export const SANITY_PROJECT_ID = "fsmhaobl";
export const SANITY_DATASET = "production";
const API_VERSION = "2024-01-01";

export type EventStatus = "open" | "ongoing" | "closed";

export interface SanityImage {
  url: string | null;
  alt?: string;
}

export interface Speaker {
  name: string;
  role?: string;
  organization?: string;
  photo?: SanityImage;
  keynote?: boolean;
}

export interface Session {
  title: string;
  start?: string;
  end?: string;
  day?: string;
  speaker?: string;
  keynote?: boolean;
}

export interface EventResource {
  title: string;
  url: string;
  type?: string;
}

export interface EventDoc {
  _id: string;
  title: string;
  slug: string;
  edition?: string;
  theme?: string;
  status: EventStatus;
  startDate?: string;
  endDate?: string;
  location?: string;
  excerpt?: string;
  registrationUrl?: string;
  coverImage?: SanityImage;
  gallery?: SanityImage[];
  speakers?: Speaker[];
  sessions?: Session[];
  resources?: EventResource[];
  body?: unknown[];
}

/* ---------------------------------- utils --------------------------------- */

/** Turns a Sanity asset `_ref` into a CDN image URL. */
export function imageUrlFromRef(ref?: string | null, width = 1600): string | null {
  if (!ref) return null;
  const [, id, dimensions, format] = ref.split("-");
  if (!id || !dimensions || !format) return null;
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dimensions}.${format}?w=${width}&auto=format&fit=max`;
}

export function formatEventDates(start?: string, end?: string) {
  if (!start) return "Dates to be announced";
  const fmt = (d: string, withYear = true) =>
    new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      ...(withYear ? { year: "numeric" } : {}),
    });
  if (!end || end === start) return fmt(start);
  return `${fmt(start, false)} – ${fmt(end)}`;
}

export const STATUS_LABEL: Record<EventStatus, string> = {
  open: "Registration open",
  ongoing: "Ongoing",
  closed: "Closed",
};

/* --------------------------------- queries -------------------------------- */

const IMAGE_PROJECTION = `{ "ref": asset._ref, alt }`;

const EVENT_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  edition,
  theme,
  status,
  startDate,
  endDate,
  location,
  excerpt,
  registrationUrl,
  "coverImage": coverImage${IMAGE_PROJECTION},
  "gallery": gallery[]${IMAGE_PROJECTION},
  "speakers": speakers[]{ name, role, organization, keynote, "photo": photo${IMAGE_PROJECTION} },
  "sessions": sessions[]{ title, start, end, day, speaker, keynote },
  "resources": resources[]{ title, url, type },
  body
`;

type RawImage = { ref?: string; alt?: string } | null | undefined;

function mapImage(img: RawImage, width = 1600): SanityImage | undefined {
  if (!img?.ref) return undefined;
  const url = imageUrlFromRef(img.ref, width);
  return url ? { url, alt: img.alt } : undefined;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapEvent(raw: any): EventDoc {
  return {
    ...raw,
    status: (raw.status ?? "closed") as EventStatus,
    coverImage: mapImage(raw.coverImage, 1920),
    gallery: (raw.gallery ?? []).map((g: RawImage) => mapImage(g, 1200)).filter(Boolean),
    speakers: (raw.speakers ?? []).map((s: any) => ({ ...s, photo: mapImage(s.photo, 600) })),
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

async function groq<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  const url = new URL(
    `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${SANITY_DATASET}`,
  );
  url.searchParams.set("query", query);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v));

  try {
    const res = await fetch(url.toString(), { headers: { Accept: "application/json" } });
    if (!res.ok) return null;
    const json = (await res.json()) as { result?: T };
    return json.result ?? null;
  } catch {
    return null;
  }
}

export async function fetchEvents(): Promise<EventDoc[]> {
  const result = await groq<unknown[]>(
    `*[_type == "event"] | order(coalesce(startDate, _createdAt) desc){${EVENT_FIELDS}}`,
  );
  if (!result || result.length === 0) return FALLBACK_EVENTS;
  return result.map(mapEvent);
}

export async function fetchEvent(slug: string): Promise<EventDoc | null> {
  const result = await groq<unknown>(`*[_type == "event" && slug.current == $slug][0]{${EVENT_FIELDS}}`, {
    slug,
  });
  if (!result) return FALLBACK_EVENTS.find((e) => e.slug === slug) ?? null;
  return mapEvent(result);
}

export const eventsQueryOptions = {
  queryKey: ["events"] as const,
  queryFn: fetchEvents,
  staleTime: 5 * 60_000,
};

export const eventQueryOptions = (slug: string) => ({
  queryKey: ["event", slug] as const,
  queryFn: () => fetchEvent(slug),
  staleTime: 5 * 60_000,
});

/* -------------------------------- fallbacks ------------------------------- */

export const FALLBACK_EVENTS: EventDoc[] = [
  {
    _id: "fallback-istc-2026",
    title: "ISTC 2026 — Emergence",
    slug: "istc-2026",
    edition: "Fourth Edition",
    theme: "Emergence",
    status: "ongoing",
    startDate: "2025-11-01",
    location: "Lagos, Nigeria · Hybrid",
    excerpt:
      "A knowledge series exploring transformative ideas in space exploration, planetary science, robotics, aviation, and next-generation technologies.",
    registrationUrl: "https://www.marvecx.com",
    body: [],
  },
  {
    _id: "fallback-istc-2025",
    title: "ISTC 2025 — Emergence",
    slug: "istc-2025",
    edition: "Third Edition",
    theme: "Emergence",
    status: "closed",
    startDate: "2025-11-01",
    location: "Lagos, Nigeria · Hybrid",
    excerpt:
      "A knowledge series exploring transformative ideas in space exploration, planetary science, robotics, aviation, and next-generation technologies.",
    registrationUrl: "https://www.marvecx.com",
    body: [],
  },
  {
    _id: "fallback-istc-2024",
    title: "ISTC 2024",
    slug: "istc-2024",
    edition: "Second Edition",
    status: "closed",
    startDate: "2024-11-01",
    location: "Lagos, Nigeria",
    excerpt:
      "Expanding the conversation, strengthening international partnerships, and spotlighting advancements in aerospace, sustainability, and STEM.",
    body: [],
  },
  {
    _id: "fallback-istc-2023",
    title: "ISTC 2023",
    slug: "istc-2023",
    edition: "Inaugural Edition",
    status: "closed",
    startDate: "2023-06-01",
    location: "Lagos, Nigeria",
    excerpt:
      "The inaugural edition, bringing together pioneering voices in space science and technology to connect Africa with the global space community.",
    body: [],
  },
];
