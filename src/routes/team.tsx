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
            Meet our <span className="text-gradient-brand">team</span>
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
