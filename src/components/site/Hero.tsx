import * as React from "react";
import { Link } from "@tanstack/react-router";
import heroPoster from "@/assets/hero-earth.jpg";
import heroVideo from "@/assets/hero-orbit.mp4";
import { useGsap } from "@/hooks/use-gsap";
import { prefersReducedMotion } from "@/lib/gsap";

const STATS = [
  { k: "03", v: "ISTC editions delivered" },
  { k: "2026", v: "Research sector launch" },
  { k: "01", v: "Continent, global mission" },
];

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const ref = useGsap(({ gsap }) => {
    if (prefersReducedMotion()) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from("[data-hero-eyebrow]", { opacity: 0, y: 14, duration: 0.7 })
      .from("[data-hero-line]", { opacity: 0, y: 40, duration: 1, stagger: 0.12 }, "-=0.35")
      .from("[data-hero-copy]", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
      .from("[data-hero-cta]", { opacity: 0, y: 16, duration: 0.6, stagger: 0.1 }, "-=0.5")
      .from("[data-hero-stat]", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, "-=0.35");

    gsap.to("[data-hero-media]", {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
    });
  }, []);

  React.useEffect(() => {
    // Some browsers ignore autoplay on hydration; nudge it once.
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      ref={ref}
      data-hero
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pt-32 pb-16 sm:px-8 sm:pb-24"
    >
      <div data-hero-media className="absolute inset-0 -z-10 h-[112%]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-60"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--background)_55%,transparent),color-mix(in_oklab,var(--background)_40%,transparent)_45%,var(--background))]"
        aria-hidden
      />
      <div className="blueprint-grid blueprint-fade absolute inset-0 -z-10 opacity-60" aria-hidden />

      <div className="mx-auto w-full max-w-6xl">
        <p data-hero-eyebrow className="label-tech flex items-center gap-2 text-foreground/70">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
          African aerospace · ISTC 2026 live
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          <span data-hero-line className="block">
            Engineering the
          </span>
          <span data-hero-line className="block text-primary">
            multiplanetary future
          </span>
          <span data-hero-line className="block">
            from Africa.
          </span>
        </h1>

        <p
          data-hero-copy
          className="mt-7 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg"
        >
          MARVECX bridges aerospace design, research, and education — building a sustainable
          spacefaring civilisation grounded in African talent and global collaboration.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            data-hero-cta
            to="/events"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore ISTC 2025
            <span aria-hidden>→</span>
          </Link>
          <Link
            data-hero-cta
            to="/about"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface"
          >
            About MARVECX
          </Link>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.v} data-hero-stat className="bg-background/70 px-5 py-5 backdrop-blur">
              <div className="font-display text-2xl font-semibold text-foreground">{s.k}</div>
              <div className="label-tech mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
