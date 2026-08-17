import * as React from "react";
import { ensureGsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Runs a GSAP setup function scoped to a container ref, cleaning up on unmount.
 * SSR-safe: nothing runs until the effect fires in the browser.
 */
export function useGsap(
  setup: (ctx: { gsap: ReturnType<typeof ensureGsap>; root: HTMLElement }) => void,
  deps: React.DependencyList = [],
) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const gsap = ensureGsap();
    const ctx = gsap.context(() => setup({ gsap, root }), root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

/**
 * Scroll-reveal for every element carrying `data-reveal` inside the container.
 * Elements are hidden via GSAP (not CSS) so no-JS / reduced-motion users still
 * see the content.
 */
export function useReveal(deps: React.DependencyList = []) {
  return useGsap(({ gsap, root }) => {
    if (prefersReducedMotion()) return;
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", root);
    items.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    });
  }, deps);
}
