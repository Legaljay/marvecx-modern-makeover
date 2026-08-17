import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Team } from "@/components/site/Team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — MARVECX Aerospace" },
      {
        name: "description",
        content:
          "Meet the MARVECX team — engineers, researchers, and operators building the future of African aerospace.",
      },
      { property: "og:title", content: "The MARVECX team" },
      {
        property: "og:description",
        content: "Leadership and crew behind MARVECX Aerospace.",
      },
      { property: "og:url", content: "https://marvecx-makeover-ai.lovable.app/team" },
    ],
    links: [
      { rel: "canonical", href: "https://marvecx-makeover-ai.lovable.app/team" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MARVECX",
          alternateName: "MARVECX Aerospace",
          url: "https://marvecx-makeover-ai.lovable.app",
          member: [
            { "@type": "Person", name: "Marvelours Ayinde", jobTitle: "Founder & CEO" },
            { "@type": "Person", name: "Joshua Egbunu", jobTitle: "Tech & Project Lead" },
            { "@type": "Person", name: "Francis Adedeji", jobTitle: "Research Lead" },
            { "@type": "Person", name: "Okikijesu Olajide", jobTitle: "Assistant Tech Lead" },
            { "@type": "Person", name: "Ayobami Adesina", jobTitle: "IT Lead" },
            { "@type": "Person", name: "Princess Ariel", jobTitle: "Assistant IT & Program Coordinator" },
          ],
        }),
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageShell>
      <section className="px-6 pt-40 pb-8">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
            The crew
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            Meet our <span className="text-primary">team</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Guided by experts across aerospace engineering, research, and technical strategy.
          </p>
        </div>
      </section>
      <Team heading={false} />
    </PageShell>
  );
}
