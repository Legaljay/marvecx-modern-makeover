export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-surface/30 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-brand font-display text-sm font-bold italic text-white">
              M
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-tight">
              Marvec<span className="text-accent">x</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            A forward-looking African aerospace company advancing design, research, and education
            for a sustainable and spacefaring future.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white/40">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/events" className="hover:text-white">ISTC Events</a></li>
            <li><a href="/team" className="hover:text-white">Team</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white/40">
            Stay in orbit
          </h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-background/50"
          >
            <input
              type="email"
              required
              placeholder="you@orbit.com"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-brand px-5 text-xs font-bold uppercase tracking-widest text-white"
            >
              Join
            </button>
          </form>
          <p className="mt-3 text-xs text-white/40">
            Quarterly updates on launches, research, and ISTC.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} MARVECX Aerospace. All rights reserved.</p>
        <p className="font-mono tracking-widest">LAT 06.5244° N · LNG 3.3792° E</p>
      </div>
    </footer>
  );
}
