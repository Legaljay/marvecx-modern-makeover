import { useReveal } from "@/hooks/use-gsap";
import { SectionHeading } from "./SectionHeading";
import { OrbitDiagram } from "./OrbitDiagram";

export function MissionVision() {
  const ref = useReveal();

  return (
    <section ref={ref} className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why we exist"
          title="Mission & vision"
          description="A single directive: make African engineering indispensable to humanity's next era in space."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            <article data-reveal className="bg-background p-8 sm:p-10">
              <div className="label-tech text-primary">Mission</div>
              <p className="mt-5 text-base leading-relaxed text-foreground/80">
                To develop world-class aerospace technologies, promote research for a sustainable
                and multiplanetary future, and empower individuals globally through education,
                collaboration, and innovation.
              </p>
            </article>

            <article data-reveal data-reveal-delay="0.1" className="bg-background p-8 sm:p-10">
              <div className="label-tech text-accent">Vision</div>
              <p className="mt-5 text-base leading-relaxed text-foreground/80">
                To position Africa as a major player in global aerospace and technological
                advancement while leading the transition toward a sustainable and spacefaring
                civilisation.
              </p>
            </article>
          </div>

          <div data-reveal className="flex justify-center">
            <OrbitDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
