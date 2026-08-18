import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/Hero";
import { Telemetry } from "@/components/site/Telemetry";
import { MissionVision } from "@/components/site/MissionVision";
import { Sectors } from "@/components/site/Sectors";
import { Events } from "@/components/site/Events";
import { Team } from "@/components/site/Team";
import { eventsQueryOptions } from "@/lib/sanity";
import { SITE, OG_IMAGE, BASE_KEYWORDS, canonical, ogMeta, twitterMeta } from "@/lib/seo";

const PAGE_TITLE = "MARVECX — African Aerospace, Research & Education";
const PAGE_DESC =
  "MARVECX is a forward-looking African aerospace company advancing design, research, and education for a sustainable and spacefaring future.";

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(eventsQueryOptions),
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content: `${BASE_KEYWORDS}, African spacefaring, multiplanetary, aerospace innovation`,
      },
      ...ogMeta({ title: PAGE_TITLE, description: PAGE_DESC, url: SITE, image: OG_IMAGE }),
      ...twitterMeta({ title: PAGE_TITLE, description: PAGE_DESC, image: OG_IMAGE }),
    ],
    links: [{ rel: "canonical", href: canonical("/") }],
  }),
  component: Index,
});

function Index() {
  const { data: events } = useSuspenseQuery(eventsQueryOptions);

  return (
    <PageShell>
      <Hero />
      <Telemetry />
      <MissionVision />
      <Sectors />
      <Events events={events.slice(0, 3)} />
      <Team limit={4} />
    </PageShell>
  );
}
