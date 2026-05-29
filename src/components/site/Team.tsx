const TEAM = [
  {
    name: "Marvelours Ayinde",
    role: "Founder & CEO",
    img: "https://www.marvecx.com/001cini.jpeg",
  },
  {
    name: "Joshua Egbunu",
    role: "Tech & Project Lead",
    img: "https://www.marvecx.com/002cini.jpeg",
  },
  {
    name: "Francis Adedeji",
    role: "Research Lead",
    img: "https://www.marvecx.com/0005cini.jpeg",
  },
  {
    name: "Okikijesu Olajide",
    role: "Assistant Tech Lead",
    img: "https://www.marvecx.com/004cini.jpeg",
  },
  {
    name: "Ayobami Adesina",
    role: "IT Lead",
    img: "https://www.marvecx.com/DigitalPhoto_Ayobami.png",
  },
  {
    name: "Princess Ariel",
    role: "Assistant IT & Program Coordinator",
    img: "https://www.marvecx.com/003cin.png",
  },
] as const;

export function Team({ heading = true, limit }: { heading?: boolean; limit?: number }) {
  const people = typeof limit === "number" ? TEAM.slice(0, limit) : TEAM;
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {heading && (
          <div className="mb-14 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
              The crew
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Meet our <span className="text-gradient-brand">team</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55">
              Engineers, researchers, and operators building the future of African aerospace.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {people.map((p) => {
            const initials = p.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("");
            return (
              <figure key={p.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-surface to-background">
                  {/* Initials fallback layer */}
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-6xl font-extrabold text-gradient-brand opacity-70">
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
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <figcaption className="absolute bottom-3 left-4 right-4">
                    <h4 className="font-display text-sm font-bold text-white sm:text-base">
                      {p.name}
                    </h4>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {p.role}
                    </p>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
