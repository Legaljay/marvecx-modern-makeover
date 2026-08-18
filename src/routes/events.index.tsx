import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/site/PageShell";
import { Events } from "@/components/site/Events";
import { PageHeader } from "@/components/site/PageHeader";
import { eventsQueryOptions } from "@/lib/sanity";
import { SITE, OG_IMAGE, canonical, ogMeta, twitterMeta } from "@/lib/seo";

const PAGE_TITLE = "ISTC Events — International Space Technology Convention | MARVECX";
const PAGE_DESC =
  "Every edition of the International Space Technology Convention (ISTC) — speakers, sessions, resources, and registration for Africa's flagship aerospace gathering.";
const PAGE_URL = canonical("/events");
const PAGE_KEYWORDS =
  "ISTC, International Space Technology Convention, MARVECX events, African space conference, aerospace convention Africa, ISTC 2025, ISTC 2026, space technology summit Nigeria, aerospace summit Africa";

export const Route = createFileRoute("/events/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(eventsQueryOptions),
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: PAGE_KEYWORDS },
      ...ogMeta({ title: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL, image: OG_IMAGE }),
      ...twitterMeta({ title: PAGE_TITLE, description: PAGE_DESC, image: OG_IMAGE }),
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "ISTC Series — International Space Technology Convention",
          description: PAGE_DESC,
          url: PAGE_URL,
          image: OG_IMAGE,
          publisher: { "@type": "Organization", name: "MARVECX Aerospace", url: SITE },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Events", item: PAGE_URL },
          ],
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
