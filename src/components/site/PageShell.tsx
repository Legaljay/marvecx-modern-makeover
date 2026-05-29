import { SiteNav } from "./SiteNav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 starfield opacity-40" aria-hidden />
      <SiteNav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
