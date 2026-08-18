/**
 * MARVECX — Sanity seed script
 *
 * Populates project `fsmhaobl` / dataset `production` with the four ISTC
 * event documents.
 *
 * Usage:
 *   npx tsx sanity/seed.ts
 *
 * Requires a Sanity write token passed via the SANITY_TOKEN env variable:
 *   $env:SANITY_TOKEN="sk..."  (PowerShell)
 *   npx tsx sanity/seed.ts
 */

import { createClient, type SanityDocument } from "@sanity/client";

const TOKEN = process.env.SANITY_TOKEN;
if (!TOKEN) {
  console.error("❌  SANITY_TOKEN env variable is not set.");
  console.error(
    "    Get a write token from https://www.sanity.io/manage → your project → API → Tokens",
  );
  process.exit(1);
}

const client = createClient({
  projectId: "fsmhaobl",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

// ---------------------------------------------------------------------------
// Seed documents — each field matches the eventType schema exactly
// ---------------------------------------------------------------------------

type EventSeed = Omit<SanityDocument, "_rev" | "_createdAt" | "_updatedAt"> & {
  _id: string;
  _type: "event";
  title: string;
  slug: { _type: "slug"; current: string };
  edition?: string;
  theme?: string;
  status: "open" | "ongoing" | "closed";
  startDate?: string;
  endDate?: string;
  location?: string;
  excerpt?: string;
  registrationUrl?: string;
  speakers: unknown[];
  sessions: unknown[];
  resources: unknown[];
  gallery: unknown[];
};

const events: EventSeed[] = [
  {
    _id: "istc-2026",
    _type: "event",
    title: "ISTC 2026 — Emergence",
    slug: { _type: "slug", current: "istc-2026" },
    edition: "Fourth Edition",
    theme: "Emergence",
    status: "ongoing",
    startDate: "2026-11-01",
    endDate: "2026-11-03",
    location: "Lagos, Nigeria · Hybrid",
    excerpt:
      "A knowledge series exploring transformative ideas in space exploration, planetary science, robotics, aviation, and next-generation technologies.",
    registrationUrl: "https://www.marvecx.com",
    speakers: [],
    sessions: [],
    resources: [],
    gallery: [],
  },
  {
    _id: "istc-2025",
    _type: "event",
    title: "ISTC 2025 — Emergence",
    slug: { _type: "slug", current: "istc-2025" },
    edition: "Third Edition",
    theme: "Emergence",
    status: "closed",
    startDate: "2025-11-01",
    endDate: "2025-11-03",
    location: "Lagos, Nigeria · Hybrid",
    excerpt:
      "A knowledge series exploring transformative ideas in space exploration, planetary science, robotics, aviation, and next-generation technologies.",
    registrationUrl: "https://www.marvecx.com",
    speakers: [],
    sessions: [],
    resources: [],
    gallery: [],
  },
  {
    _id: "istc-2024",
    _type: "event",
    title: "ISTC 2024",
    slug: { _type: "slug", current: "istc-2024" },
    edition: "Second Edition",
    status: "closed",
    startDate: "2024-11-01",
    endDate: "2024-11-02",
    location: "Lagos, Nigeria",
    excerpt:
      "Expanding the conversation, strengthening international partnerships, and spotlighting advancements in aerospace, sustainability, and STEM.",
    speakers: [],
    sessions: [],
    resources: [],
    gallery: [],
  },
  {
    _id: "istc-2023",
    _type: "event",
    title: "ISTC 2023",
    slug: { _type: "slug", current: "istc-2023" },
    edition: "Inaugural Edition",
    status: "closed",
    startDate: "2023-06-01",
    endDate: "2023-06-02",
    location: "Lagos, Nigeria",
    excerpt:
      "The inaugural edition, bringing together pioneering voices in space science and technology to connect Africa with the global space community.",
    speakers: [],
    sessions: [],
    resources: [],
    gallery: [],
  },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function seed() {
  console.log(`🌱  Seeding ${events.length} events into fsmhaobl/production…\n`);

  for (const doc of events) {
    try {
      // createOrReplace so re-running the script is idempotent
      const result = await client.createOrReplace(doc);
      console.log(`✅  ${result._id}  —  "${doc.title}"`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`❌  Failed to seed "${doc.title}": ${message}`);
    }
  }

  console.log("\n✨  Done.");
}

seed();
