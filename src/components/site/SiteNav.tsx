import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/education/guide", label: "Education" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
] as const;

export function SiteNav() {
  const { location } = useRouterState();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => setOpen(false), [location.pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-sm border border-primary/50 bg-primary/15 font-display text-xs font-semibold text-primary"
          >
            M
          </span>
          <span className="font-display text-base font-semibold uppercase tracking-[0.14em]">
            Marvecx
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative py-1 text-sm transition-colors ${
                isActive(item.to)
                  ? "text-foreground"
                  : "text-foreground/55 hover:text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.to) && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
              )}
            </Link>
          ))}
          <Link
            to="/events"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            ISTC 2025
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 pb-6 pt-2 backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block border-b border-border/60 py-3.5 text-sm ${
                isActive(item.to) ? "text-primary" : "text-foreground/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
