import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Team } from "@/components/site/Team";
import { SITE, OG_IMAGE, canonical, ogMeta, twitterMeta } from "@/lib/seo";

const PAGE_TITLE = "Our Team — MARVECX Aerospace";
const PAGE_DESC =
  "Meet the MARVECX team — engineers, researchers, and operators building the future of African aerospace. The people behind the mission.";
const PAGE_URL = canonical("/team");

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "MARVECX team, African aerospace engineers, MARVECX Aerospace leadership, aerospace researchers Africa, Marvelours Ayinde, MARVECX crew",
      },
      ...ogMeta({ title: PAGE_TITLE, description: PAGE_DESC, url: PAGE_URL, image: OG_IMAGE }),
      ...twitterMeta({ title: PAGE_TITLE, description: PAGE_DESC, image: OG_IMAGE }),
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MARVECX",
          alternateName: "MARVECX Aerospace",
          url: SITE,
          member: [
            {
              "@type": "Person",
              name: "Marvelours Ayinde",
              jobTitle: "Founder & CEO",
              worksFor: { "@type": "Organization", name: "MARVECX" },
            },
            {
              "@type": "Person",
              name: "Joshua Egbunu",
              jobTitle: "Chief Project Officer",
              worksFor: { "@type": "Organization", name: "MARVECX" },
            },
            {
              "@type": "Person",
              name: "Francis Adedeji",
              jobTitle: "Chief Research Officer",
              worksFor: { "@type": "Organization", name: "MARVECX" },
            },
            {
              "@type": "Person",
              name: "Okikijesu Olajide",
              jobTitle: "Chief Program Officer",
              worksFor: { "@type": "Organization", name: "MARVECX" },
            },
            {
              "@type": "Person",
              name: "Ayobami Adesina",
              jobTitle: "Chief Information Technology Officer",
              worksFor: { "@type": "Organization", name: "MARVECX" },
            },
            {
              "@type": "Person",
              name: "Princess Ariel",
              jobTitle: "Chief Program Manager",
              worksFor: { "@type": "Organization", name: "MARVECX" },
            },
            {
              "@type": "Person",
              name: "Moses Olunlade",
              jobTitle: "Chief Legal Officer",
              worksFor: { "@type": "Organization", name: "MARVECX" },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Team", item: PAGE_URL },
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
