import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/site/PageShell";
import { Events } from "@/components/site/Events";
import { PageHeader } from "@/components/site/PageHeader";
import { eventsQueryOptions } from "@/lib/sanity";

const URL = "https://marvecx-makeover-ai.lovable.app/events";

export const Route = createFileRoute("/events/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(eventsQueryOptions),
  head: () => ({
    meta: [
      { title: "ISTC Events — MARVECX Space Technology Convention" },
      {
        name: "description",
        content:
          "Every edition of the International Space Technology Convention (ISTC) — speakers, sessions, resources, and registration for Africa's aerospace gathering.",
      },
      { property: "og:title", content: "ISTC — International Space Technology Convention" },
      {
        property: "og:description",
        content: "Editions of ISTC connecting Africa with the global space community.",
      },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "ISTC Series — International Space Technology Convention",
          url: URL,
        }),
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { data: events } = useSuspenseQuery(eventsQueryOptions);

  return (
    <PageShell>
      <PageHeader
        eyebrow="International Space Technology Convention"
        title="The ISTC series"
        description="Connecting pioneering voices in aerospace, sustainability, and STEM across Africa and the world — every edition, in full."
      />
      <Events heading={false} events={events} />
    </PageShell>
  );
}
