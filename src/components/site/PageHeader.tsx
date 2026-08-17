import { useGsap } from "@/hooks/use-gsap";
import { prefersReducedMotion } from "@/lib/gsap";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}) {
  const ref = useGsap(({ gsap }) => {
    if (prefersReducedMotion()) return;
    gsap.from("[data-ph]", {
      opacity: 0,
      y: 24,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden px-5 pt-32 pb-14 sm:px-8 sm:pt-40 sm:pb-16">
      <div className="blueprint-grid blueprint-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <p data-ph className="label-tech text-primary">
          {eyebrow}
        </p>
        <h1
          data-ph
          className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        >
          {title}
        </h1>
        {description && (
          <p data-ph className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65">
            {description}
          </p>
        )}
        {children && <div data-ph className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
