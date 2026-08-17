import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-sm border border-primary/50 bg-primary/15 font-display text-sm font-semibold text-primary"
            >
              M
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.14em]">
              Marvecx
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/60">
            A forward-looking African aerospace company advancing design, research, and education
            for a sustainable and spacefaring future.
          </p>
        </div>

        <div>
          <h2 className="label-tech">Explore</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-foreground/70">
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/events" className="transition-colors hover:text-primary">
                ISTC events
              </Link>
            </li>
            <li>
              <Link to="/education/guide" className="transition-colors hover:text-primary">
                Education guide
              </Link>
            </li>
            <li>
              <Link to="/team" className="transition-colors hover:text-primary">
                Team
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="label-tech">Stay in orbit</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex overflow-hidden rounded-md border border-border bg-background/60"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@orbit.com"
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Join
            </button>
          </form>
          <p className="mt-3 text-xs text-foreground/45">
            Quarterly updates on research, programmes, and ISTC.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border px-5 py-6 text-xs text-foreground/45 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} MARVECX Aerospace. All rights reserved.</p>
        <p className="label-tech">LAT 06.5244° N · LNG 3.3792° E</p>
      </div>
    </footer>
  );
}
