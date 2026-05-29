import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/Hero";
import { MissionVision } from "@/components/site/MissionVision";
import { Sectors } from "@/components/site/Sectors";
import { Events } from "@/components/site/Events";
import { Team } from "@/components/site/Team";

export const Route = createFileRoute("/")({
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
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <MissionVision />
      <Sectors />
      <Events />
      <Team limit={4} />
    </PageShell>
  );
}
