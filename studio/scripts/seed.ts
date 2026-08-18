/**
 * One-off seed for the MARVECX ISTC editions.
 *
 * Idempotent: uses fixed document IDs with createIfNotExists, so running it
 * twice never duplicates and never overwrites content you edited in the Studio.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=<editor token> npm run seed
 */
import { createClient } from "@sanity/client";

const token = process.env["SANITY_WRITE_TOKEN"];
if (!token) {
  console.error("Missing SANITY_WRITE_TOKEN. Create an Editor token at sanity.io/manage.");
  process.exit(1);
}

const client = createClient({
  projectId: "fsmhaobl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

type SeedEvent = {
  _id: string;
  title: string;
  slug: string;
  edition: string;
  theme?: string;
  status: "open" | "ongoing" | "closed";
  startDate: string;
  endDate?: string;
  location: string;
  excerpt: string;
  registrationUrl?: string;
};

const events: SeedEvent[] = [
  {
    _id: "istc-2023",
    title: "ISTC 2023",
    slug: "istc-2023",
    edition: "Inaugural Edition",
    status: "closed",
    startDate: "2023-06-01",
    location: "Lagos, Nigeria",
    excerpt:
      "The inaugural edition, bringing together pioneering voices in space science and technology to connect Africa with the global space community.",
  },
  {
    _id: "istc-2024",
    title: "ISTC 2024",
    slug: "istc-2024",
    edition: "Second Edition",
    status: "closed",
    startDate: "2024-11-01",
    location: "Lagos, Nigeria",
    excerpt:
      "Expanding the conversation, strengthening international partnerships, and spotlighting advancements in aerospace, sustainability, and STEM.",
  },
  {
    _id: "istc-2025",
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
  },
  {
    _id: "istc-2026",
    title: "ISTC 2026 — Emergence",
    slug: "istc-2026",
    edition: "Fourth Edition",
    theme: "Emergence",
    status: "ongoing",
    startDate: "2026-11-01",
    location: "Lagos, Nigeria · Hybrid",
    excerpt:
      "The fourth edition of the International Space Technology Convention — exploring transformative ideas across space exploration, planetary science, robotics, aviation, and next-generation technologies.",
    registrationUrl: "https://www.marvecx.com",
  },
];

async function run() {
  const tx = client.transaction();
  for (const e of events) {
    const { _id, slug, ...rest } = e;
    tx.createIfNotExists({
      _id,
      _type: "event",
      ...rest,
      slug: { _type: "slug", current: slug },
    });
  }
  const result = await tx.commit();
  console.log(`Seed complete. ${result.results.length} document(s) processed.`);
  const all = await client.fetch<{ title: string; status: string }[]>(
    '*[_type == "event"]|order(startDate desc){title, status}',
  );
  console.table(all);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
