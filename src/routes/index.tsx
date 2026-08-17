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

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(eventsQueryOptions),
  head: () => ({
    meta: [
      { title: "MARVECX — African Aerospace, Research & Education" },
      {
        name: "description",
        content:
          "MARVECX is a forward-looking African aerospace company advancing design, research, and education for a sustainable and spacefaring future.",
      },
      { property: "og:title", content: "MARVECX — African Aerospace" },
      {
        property: "og:description",
        content:
          "Engineering the multiplanetary future from Africa. Design, research, education, and the ISTC convention series.",
      },
      { property: "og:url", content: "https://marvecx-makeover-ai.lovable.app/" },
      { property: "og:image", content: "https://marvecx-makeover-ai.lovable.app/og-image.jpg" },
      { property: "twitter:image", content: "https://marvecx-makeover-ai.lovable.app/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://marvecx-makeover-ai.lovable.app/" }],
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
