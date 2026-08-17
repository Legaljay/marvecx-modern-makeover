import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-gsap";
import { SectionHeading } from "./SectionHeading";
import { EventStatusBadge } from "./EventStatusBadge";
import { formatEventDates, type EventDoc } from "@/lib/sanity";

export function Events({ heading = true, events }: { heading?: boolean; events: EventDoc[] }) {
  const ref = useReveal([events.length]);

  return (
    <section ref={ref} className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {heading && (
          <SectionHeading
            eyebrow="Convention series"
            title="The ISTC series"
            description="International Space Technology Convention — bridging research, industry, and emerging talent."
          />
        )}

        <div className={`grid gap-6 md:grid-cols-3 ${heading ? "mt-14" : ""}`}>
          {events.map((e, i) => (
            <article
              key={e._id}
              data-reveal
              data-reveal-delay={i * 0.08}
              className="group flex flex-col overflow-hidden rounded-md border border-border bg-surface/25 transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                {e.coverImage?.url ? (
                  <img
                    src={e.coverImage.url}
                    alt={e.coverImage.alt ?? e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className="blueprint-grid h-full w-full opacity-70"
                    aria-hidden
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <EventStatusBadge status={e.status} />
                  {e.edition && <span className="label-tech">{e.edition}</span>}
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {e.title}
                </h3>
                <p className="label-tech mt-2">{formatEventDates(e.startDate, e.endDate)}</p>

                {e.excerpt && (
                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-foreground/60">
                    {e.excerpt}
                  </p>
                )}

                <Link
                  to="/events/$slug"
                  params={{ slug: e.slug }}
                  className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary"
                >
                  View event
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
