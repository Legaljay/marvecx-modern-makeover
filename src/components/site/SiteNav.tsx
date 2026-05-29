import { Link, useRouterState } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
] as const;

export function SiteNav() {
  const { location } = useRouterState();
  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-fit">
      <div className="flex items-center gap-3 sm:gap-8 rounded-full border border-white/10 bg-surface/70 px-3 py-2 sm:px-6 backdrop-blur-xl shadow-2xl shadow-black/40">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand font-display text-xs font-bold italic text-white"
          >
            M
          </span>
          <span className="font-display text-sm sm:text-base font-bold uppercase tracking-tight">
            Marvec<span className="text-accent">x</span>
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-6 text-xs sm:text-sm font-medium">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-2 py-1 transition-colors ${
                  active ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-brand" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
