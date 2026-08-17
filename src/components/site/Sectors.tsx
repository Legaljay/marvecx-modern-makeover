import { useReveal } from "@/hooks/use-gsap";
import { SectionHeading } from "./SectionHeading";

const SECTORS = [
  {
    n: "01",
    title: "Education",
    status: "Active",
    statusClass: "border-primary/40 text-primary",
    body: "Training, outreach, and knowledge development across Africa and the global aerospace community — our operating engine today.",
    points: ["ISTC convention series", "STEM outreach & mentorship", "Career pathway guidance"],
  },
  {
    n: "02",
    title: "Research",
    status: "Launching 2026",
    statusClass: "border-border text-foreground/70",
    body: "Driving new scientific exploration in orbital science, sustainability, and planetary systems.",
    points: ["Orbital & planetary science", "Sustainability studies", "Academic partnerships"],
  },
  {
    n: "03",
    title: "Design & manufacturing",
    status: "Planned",
    statusClass: "border-accent/40 text-accent",
    body: "Expanding the technological infrastructure to design and build aerospace systems on the continent.",
    points: ["Systems engineering", "Prototyping & test", "Local supply chain"],
  },
] as const;

export function Sectors() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative border-t border-border px-5 py-20 sm:px-8 sm:py-28">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What we do"
          title="Three sectors, one ecosystem"
          description="A holistic aerospace ecosystem integrating engineering excellence, scientific discovery, and human capacity development."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {SECTORS.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-reveal-delay={i * 0.08}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-surface/50"
            >
              <div className="flex items-center justify-between">
                <span className="label-tech">Sector {s.n}</span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] ${s.statusClass}`}
                >
                  {s.status}
                </span>
              </div>

              <h3 className="mt-8 font-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">{s.body}</p>

              <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-foreground/70">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
