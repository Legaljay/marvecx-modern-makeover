import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Registers GSAP plugins once, in the browser only. */
export function ensureGsap() {
  if (typeof window === "undefined") return gsap;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export { gsap, ScrollTrigger };

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
