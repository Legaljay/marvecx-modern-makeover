import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Events } from "@/components/site/Events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ISTC Series · MARVECX" },
      {
        name: "description",
        content:
          "The International Space Technology Convention (ISTC) series — 2023, 2024, and the ongoing 2025 Knowledge Series themed Emergence.",
      },
      { property: "og:title", content: "ISTC — International Space Technology Convention" },
      {
        property: "og:description",
        content: "Three editions of ISTC connecting Africa with the global space community.",
      },
      { property: "og:url", content: "https://marvecx-makeover-ai.lovable.app/events" },
    ],
    links: [
      { rel: "canonical", href: "https://marvecx-makeover-ai.lovable.app/events" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "ISTC Series — International Space Technology Convention",
          description:
            "Three editions of ISTC connecting Africa with the global space community — 2023, 2024, and the ongoing 2025 Knowledge Series themed Emergence.",
          url: "https://marvecx-makeover-ai.lovable.app/events",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Event",
                  name: "ISTC 2023",
                  description:
                    "The inaugural edition, bringing together pioneering voices in space science and technology to connect Africa with the global space community.",
                  startDate: "2023-06-01",
                  eventStatus: "https://schema.org/EventScheduled",
                  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Event",
                  name: "ISTC 2024",
                  description:
                    "Expanding the conversation, strengthening international partnerships, and spotlighting advancements in aerospace, sustainability, and STEM.",
                  startDate: "2024-11-01",
                  eventStatus: "https://schema.org/EventScheduled",
                  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Event",
                  name: "ISTC 2025 — Emergence",
                  description:
                    "Exploring transformative ideas in space exploration, planetary science, robotics, aviation, and next-generation technologies.",
                  startDate: "2025-01-01",
                  eventStatus: "https://schema.org/EventScheduled",
                  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageShell>
      <section className="px-6 pt-40 pb-12">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
            International Space Technology Convention
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            The <span className="text-gradient-brand">ISTC</span> series
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Three editions and counting — connecting pioneering voices in aerospace, sustainability,
            and STEM across Africa and the world.
          </p>
        </div>
      </section>
      <Events heading={false} />
    </PageShell>
  );
}
