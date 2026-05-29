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
