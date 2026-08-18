import { useReveal } from "@/hooks/use-gsap";
import { SectionHeading } from "./SectionHeading";

import imgMarvelours from "@/assets/team-photos/MarveloursOAyinde_.png";
import imgJoshua from "@/assets/team-photos/JoshuaOjochegbeEgbunu.png";
import imgFrancis from "@/assets/team-photos/AdedejiFrancisAyomide.jpg";
import imgOkikijesu from "@/assets/team-photos/OkikijesuOlajide.jpg";
import imgAyobami from "@/assets/team-photos/AyobamiBAdesina.png";
import imgPrincess from "@/assets/team-photos/PrincessNlemogu.png";
import imgMoses from "@/assets/team-photos/BarristerMosesOlunlade.png";

const TEAM = [
  { name: "Marvelours Ayinde", role: "Founder & CEO", img: imgMarvelours },
  { name: "Joshua Egbunu", role: "Chief Project Officer", img: imgJoshua },
  { name: "Francis Adedeji", role: "Chief Research Officer", img: imgFrancis },
  { name: "Okikijesu Olajide", role: "Chief Program Officer", img: imgOkikijesu },
  { name: "Ayobami Adesina", role: "Chief Information Technology Officer", img: imgAyobami },
  { name: "Princess Ariel", role: "Chief Program Manager", img: imgPrincess },
  { name: "Moses Olunlade", role: "Chief Legal Officer", img: imgMoses },
] as const;

export function Team({ heading = true, limit }: { heading?: boolean; limit?: number }) {
  const people = typeof limit === "number" ? TEAM.slice(0, limit) : TEAM;
  const ref = useReveal([limit]);

  return (
    <section ref={ref} className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {heading && (
          <SectionHeading
            eyebrow="The crew"
            title="Meet our team"
            description="Engineers, researchers, and operators building the future of African aerospace."
          />
        )}

        <div className={`grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 ${heading ? "mt-14" : ""}`}>
          {people.map((p, i) => {
            const initials = p.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("");
            return (
              <figure
                key={p.name}
                data-reveal
                data-reveal-delay={(i % 4) * 0.07}
                className="group overflow-hidden rounded-md border border-border bg-surface/30"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-5xl font-semibold text-foreground/15">
                      {initials}
                    </span>
                  </div>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="border-t border-border px-4 py-4">
                  <h3 className="font-display text-sm font-semibold sm:text-base">{p.name}</h3>
                  <p className="label-tech mt-1.5 text-primary">{p.role}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
