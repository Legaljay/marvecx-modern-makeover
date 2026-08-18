import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/site/PageShell";
import { EventStatusBadge } from "@/components/site/EventStatusBadge";
import { EventBody } from "@/components/site/EventBody";
import { useReveal } from "@/hooks/use-gsap";
import { eventQueryOptions, formatEventDates, type EventDoc } from "@/lib/sanity";
import { SITE, OG_IMAGE, canonical, ogMeta, twitterMeta } from "@/lib/seo";

const EVENTS_URL = canonical("/events");

export const Route = createFileRoute("/events/$slug")({
  loader: async ({ context, params }) => {
    const event = await context.queryClient.ensureQueryData(eventQueryOptions(params.slug));
    if (!event) throw notFound();
    return event;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Event unavailable — MARVECX" },
          { name: "robots", content: "noindex, nofollow" },
        ],
      };
    }
    const url = canonical(`/events/${params.slug}`);
    const description = (
      loaderData.excerpt ?? `${loaderData.title} — an ISTC convention hosted by MARVECX.`
    ).slice(0, 158);
    const image = loaderData.coverImage?.url ?? OG_IMAGE;
    const eventTitle = `${loaderData.title} — MARVECX`;
    const eventStatus =
      loaderData.status === "ongoing"
        ? "https://schema.org/EventScheduled"
        : loaderData.status === "open"
          ? "https://schema.org/EventScheduled"
          : "https://schema.org/EventCancelled";
    const keywords = [
      loaderData.title,
      loaderData.edition ?? "",
      loaderData.theme ?? "",
      "ISTC",
      "International Space Technology Convention",
      "MARVECX event",
      "African space conference",
      loaderData.location ?? "",
    ]
      .filter(Boolean)
      .join(", ");

    return {
      meta: [
        { title: eventTitle },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        ...ogMeta({ title: loaderData.title, description, url, image, type: "article" }),
        ...twitterMeta({ title: loaderData.title, description, image }),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: loaderData.title,
            description,
            url,
            image,
            startDate: loaderData.startDate,
            endDate: loaderData.endDate ?? loaderData.startDate,
            eventStatus,
            eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
            location: loaderData.location
              ? { "@type": "Place", name: loaderData.location }
              : undefined,
            organizer: { "@type": "Organization", name: "MARVECX", url: SITE },
            ...(loaderData.speakers && loaderData.speakers.length > 0
              ? {
                  performer: loaderData.speakers.map((s) => ({
                    "@type": "Person",
                    name: s.name,
                    jobTitle: s.role,
                    affiliation: s.organization
                      ? { "@type": "Organization", name: s.organization }
                      : undefined,
                  })),
                }
              : {}),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Events", item: EVENTS_URL },
              { "@type": "ListItem", position: 3, name: loaderData.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: EventDetail,
  notFoundComponent: EventNotFound,
});

function EventNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-5 pt-40 pb-24 sm:px-8">
        <p className="label-tech text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold">Event not found</h1>
        <p className="mt-4 text-foreground/60">
          This edition isn't published yet. Browse the full convention series instead.
        </p>
        <Link
          to="/events"
          className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          All ISTC events
        </Link>
      </div>
    </PageShell>
  );
}

function EventDetail() {
  const { slug } = Route.useParams();
  const { data } = useSuspenseQuery(eventQueryOptions(slug));
  const event = data as EventDoc;
  const ref = useReveal([slug]);

  const keynotes = (event.speakers ?? []).filter((s) => s.keynote);
  const speakers = (event.speakers ?? []).filter((s) => !s.keynote);
  const showRegistration = event.status !== "closed" && Boolean(event.registrationUrl);

  return (
    <PageShell>
      <article ref={ref}>
        {/* Cover */}
        <header className="relative overflow-hidden px-5 pt-32 pb-14 sm:px-8 sm:pt-40">
          {event.coverImage?.url ? (
            <>
              <img
                src={event.coverImage.url}
                alt={event.coverImage.alt ?? event.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
              />
              <div
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--background)_60%,transparent),var(--background))]"
                aria-hidden
              />
            </>
          ) : (
            <div
              className="blueprint-grid blueprint-fade pointer-events-none absolute inset-0"
              aria-hidden
            />
          )}

          <div className="relative mx-auto max-w-6xl">
            <Link to="/events" className="label-tech transition-colors hover:text-primary">
              ← ISTC series
            </Link>

            <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
              <EventStatusBadge status={event.status} />
              {event.edition && <span className="label-tech">{event.edition}</span>}
            </div>

            <h1
              data-reveal
              className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
            >
              {event.title}
            </h1>

            {event.theme && (
              <p data-reveal className="mt-4 text-lg text-primary">
                Theme — {event.theme}
              </p>
            )}

            {event.excerpt && (
              <p
                data-reveal
                className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70"
              >
                {event.excerpt}
              </p>
            )}

            <dl
              data-reveal
              className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3"
            >
              <div className="bg-background px-5 py-4">
                <dt className="label-tech">Dates</dt>
                <dd className="mt-2 text-sm text-foreground/85">
                  {formatEventDates(event.startDate, event.endDate)}
                </dd>
              </div>
              <div className="bg-background px-5 py-4">
                <dt className="label-tech">Location</dt>
                <dd className="mt-2 text-sm text-foreground/85">
                  {event.location ?? "To be announced"}
                </dd>
              </div>
              <div className="bg-background px-5 py-4">
                <dt className="label-tech">Sessions</dt>
                <dd className="mt-2 text-sm text-foreground/85">
                  {event.sessions?.length
                    ? `${event.sessions.length} scheduled`
                    : "Programme pending"}
                </dd>
              </div>
            </dl>

            {showRegistration && (
              <a
                data-reveal
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Register for {event.title}
                <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </header>

        {/* Keynotes */}
        {keynotes.length > 0 && (
          <Section title="Keynote speakers" eyebrow="Headliners">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {keynotes.map((s) => (
                <SpeakerCard key={s.name} speaker={s} featured />
              ))}
            </div>
          </Section>
        )}

        {/* Sessions */}
        {(event.sessions?.length ?? 0) > 0 && (
          <Section title="Sessions & timings" eyebrow="Programme">
            <ol className="overflow-hidden rounded-md border border-border">
              {event.sessions!.map((s, i) => (
                <li
                  key={`${s.title}-${i}`}
                  data-reveal
                  className="flex flex-col gap-2 border-b border-border bg-surface/20 px-5 py-5 last:border-b-0 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="label-tech shrink-0 sm:w-40">
                    {[s.day, [s.start, s.end].filter(Boolean).join("–")]
                      .filter(Boolean)
                      .join(" · ") || "TBA"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base font-semibold">{s.title}</p>
                    {s.speaker && <p className="mt-1 text-sm text-foreground/60">{s.speaker}</p>}
                  </div>
                  {s.keynote && <span className="label-tech shrink-0 text-accent">Keynote</span>}
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* Speakers */}
        {speakers.length > 0 && (
          <Section title="Speakers" eyebrow="Line-up">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {speakers.map((s) => (
                <SpeakerCard key={s.name} speaker={s} />
              ))}
            </div>
          </Section>
        )}

        {/* Body */}
        {(event.body?.length ?? 0) > 0 && (
          <Section title="Overview" eyebrow="The record">
            <EventBody value={event.body!} />
          </Section>
        )}

        {/* Resources */}
        {(event.resources?.length ?? 0) > 0 && (
          <Section title="Resources shared" eyebrow="Downloads">
            <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {event.resources!.map((r) => (
                <li key={r.url} className="bg-background">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between gap-4 px-5 py-5 transition-colors hover:bg-surface/50"
                  >
                    <span>
                      <span className="block text-sm font-medium">{r.title}</span>
                      {r.type && <span className="label-tech mt-1.5 block">{r.type}</span>}
                    </span>
                    <span aria-hidden className="text-primary">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Gallery */}
        {(event.gallery?.length ?? 0) > 0 && (
          <Section title="Gallery" eyebrow="From the floor">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {event.gallery!.map((img, i) =>
                img?.url ? (
                  <img
                    key={i}
                    data-reveal
                    src={img.url}
                    alt={img.alt ?? `${event.title} photo ${i + 1}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-md border border-border object-cover"
                  />
                ) : null,
              )}
            </div>
          </Section>
        )}

        {showRegistration && (
          <section className="border-t border-border px-5 py-16 sm:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-md border border-primary/30 bg-primary/5 p-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold">Join {event.title}</h2>
                <p className="mt-2 text-sm text-foreground/65">
                  Registration is {event.status === "ongoing" ? "still open" : "now open"} — secure
                  your place.
                </p>
              </div>
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Register now
              </a>
            </div>
          </section>
        )}
      </article>
    </PageShell>
  );
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="label-tech text-primary">
          {eyebrow}
        </p>
        <h2
          data-reveal
          className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h2>
        <div data-reveal className="mt-9">
          {children}
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({
  speaker,
  featured = false,
}: {
  speaker: NonNullable<EventDoc["speakers"]>[number];
  featured?: boolean;
}) {
  const initials = speaker.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <figure
      data-reveal
      className={`overflow-hidden rounded-md border bg-surface/25 ${
        featured ? "border-primary/30" : "border-border"
      }`}
    >
      <div className="relative aspect-[4/5] bg-surface">
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-4xl font-semibold text-foreground/15">{initials}</span>
        </div>
        {speaker.photo?.url && (
          <img
            src={speaker.photo.url}
            alt={speaker.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <figcaption className="border-t border-border px-4 py-4">
        <h3 className="font-display text-sm font-semibold sm:text-base">{speaker.name}</h3>
        {speaker.role && <p className="label-tech mt-1.5 text-primary">{speaker.role}</p>}
        {speaker.organization && (
          <p className="mt-1.5 text-xs text-foreground/50">{speaker.organization}</p>
        )}
      </figcaption>
    </figure>
  );
}
