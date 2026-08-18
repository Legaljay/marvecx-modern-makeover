import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MissionVision } from "@/components/site/MissionVision";
import { Sectors } from "@/components/site/Sectors";
import { SITE, OG_IMAGE, LOGO, canonical, ogMeta, twitterMeta } from "@/lib/seo";

const PAGE_TITLE = "About MARVECX Aerospace — Leading African Space Technology & Innovation";
const PAGE_DESC =
  "MARVECX Aerospace is pioneering aerospace design, research, and education in Africa. Committed to sustainability and innovation, we're building Africa's future in space technology through education, research, and manufacturing excellence.";
const PAGE_URL = canonical("/about");
const PAGE_KEYWORDS =
  "MARVECX Aerospace, African aerospace company, space technology Africa, aerospace education Africa, sustainable aerospace innovation, African space industry, aerospace research Africa, space technology Nigeria, aerospace manufacturing Africa, STEM education aerospace, multiplanetary future, African space hub, aerospace design Africa, satellite technology Africa, space innovation Africa, aerospace engineering Africa, sustainable space development, African launch capabilities, Marvecx, Aeronautics, Drone Technology";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: PAGE_KEYWORDS },
      ...ogMeta({
        title: "About MARVECX Aerospace — Pioneering African Space Technology",
        description:
          "Building Africa's aerospace future through innovation, education, and sustainable technology. Discover how MARVECX is positioning Africa as a major player in global space exploration.",
        url: PAGE_URL,
        image: OG_IMAGE,
      }),
      ...twitterMeta({
        title: "About MARVECX Aerospace — Leading African Space Innovation",
        description:
          "Advancing aerospace design, research, and education in Africa. Building a sustainable, multiplanetary future through excellence and collaboration.",
        image: OG_IMAGE,
      }),
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MARVECX Aerospace",
          description: PAGE_DESC,
          url: SITE,
          logo: LOGO,
          foundingLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "NG",
              addressRegion: "Lagos",
            },
          },
          areaServed: [
            { "@type": "Place", name: "Africa" },
            { "@type": "Place", name: "Global" },
          ],
          industry: "Aerospace Technology",
          knowsAbout: [
            "Aerospace Engineering",
            "Space Technology",
            "Sustainable Innovation",
            "STEM Education",
            "Aerospace Research",
            "Satellite Technology",
            "Launch Systems",
            "Aeronautics",
            "Drone Technology",
          ],
          mission:
            "To develop world-class aerospace technologies, promote research for a sustainable and multiplanetary future, and empower individuals globally through education, collaboration, and innovation.",
          slogan: "Advancing Africa's Future in Space",
          department: [
            {
              "@type": "Organization",
              name: "Education Sector",
              description:
                "Focusing on training, outreach, and knowledge development across Africa and the global aerospace community.",
            },
            {
              "@type": "Organization",
              name: "Research Sector",
              description: "Set to launch in 2026 to drive new scientific exploration.",
              foundingDate: "2026",
            },
            {
              "@type": "Organization",
              name: "Design & Manufacturing Sector",
              description:
                "Future sector focused on full-scale aerospace production and launch capability.",
            },
          ],
          subjectOf: {
            "@type": "WebPage",
            name: "About MARVECX Aerospace",
            url: PAGE_URL,
            description:
              "Learn about MARVECX Aerospace's mission, vision, core values, and future outlook in advancing African aerospace technology.",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { t: "Innovation", b: "Pioneering creative solutions for aerospace and sustainability." },
  {
    t: "Excellence",
    b: "Upholding the highest standards in education, research, and engineering.",
  },
  { t: "Collaboration", b: "Building global partnerships that unite talent and technology." },
  { t: "Sustainability", b: "Promoting green engineering and responsible development." },
  { t: "Empowerment", b: "Inspiring and equipping the next generation of innovators." },
] as const;

function AboutPage() {
  return (
    <PageShell>
      <section className="px-6 pt-40 pb-16">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
            About us
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            An African company building <span className="text-primary">beyond Earth</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            MARVECX advances aerospace design, research, and education with a deep focus on
            sustainability and innovation — bridging engineering, environmental responsibility, and
            human capacity development.
          </p>
        </div>
      </section>

      <MissionVision />
      <Sectors />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
              How we operate
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Core <span className="text-primary">values</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <div
                key={v.t}
                className="group rounded-2xl border border-white/5 bg-surface/40 p-6 transition-colors hover:border-white/15"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-surface/20 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Roadmap
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Future <span className="text-primary">outlook</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                tag: "Short-term",
                body: "Strengthen the Education Sector and expand global partnerships.",
              },
              {
                tag: "Mid-term · 2026",
                body: "Launch the Research Sector to drive breakthrough discoveries.",
              },
              {
                tag: "Long-term",
                body: "Establish Design & Manufacturing to build aerospace systems on the continent.",
              },
            ].map((m) => (
              <div key={m.tag} className="rounded-2xl border border-white/5 bg-background/50 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-accent">
                  {m.tag}
                </div>
                <p className="mt-3 text-base leading-relaxed text-white/75">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
