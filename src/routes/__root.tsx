import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SITE, OG_IMAGE, LOGO, TWITTER_SITE } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#05070f" },
      { name: "author", content: "MARVECX Aerospace" },
      { name: "robots", content: "index, follow" },
      {
        name: "googlebot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      // Default title — child routes override this
      { title: "MARVECX — African Aerospace, Research & Education" },
      // Fallback OG/Twitter — child routes override per-page
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MARVECX" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: TWITTER_SITE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Full favicon set
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/marvecx-icon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/marvecx-icon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/marvecx-icon-48x48.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/marvecx-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/marvecx-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/marvecx-icon-512x512.png" },
      // Fonts
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MARVECX Aerospace",
          alternateName: "MARVECX",
          url: SITE,
          logo: LOGO,
          description:
            "A forward-looking African company committed to advancing aerospace design, research, and education with a deep focus on sustainability and innovation.",
          foundingLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "NG",
              addressRegion: "Lagos",
            },
          },
          areaServed: [
            { "@type": "Place", name: "Africa" },
            { "@type": "Place", name: "Global" },
          ],
          industry: "Aerospace Technology",
          knowsAbout: [
            "Aerospace Engineering",
            "Space Technology",
            "Sustainable Innovation",
            "STEM Education",
            "Aerospace Research",
            "Satellite Technology",
            "Launch Systems",
            "Aeronautics",
            "Drone Technology",
          ],
          mission:
            "To develop world-class aerospace technologies, promote research for a sustainable and multiplanetary future, and empower individuals globally through education, collaboration, and innovation.",
          slogan: "Advancing Africa's Future in Space",
          department: [
            {
              "@type": "Organization",
              name: "Education Sector",
              description:
                "Focusing on training, outreach, and knowledge development across Africa and the global aerospace community.",
            },
            {
              "@type": "Organization",
              name: "Research Sector",
              description: "Set to launch in 2026 to drive new scientific exploration.",
              foundingDate: "2026",
            },
            {
              "@type": "Organization",
              name: "Design & Manufacturing Sector",
              description:
                "Future sector focused on full-scale aerospace production and launch capability.",
            },
          ],
          subjectOf: {
            "@type": "WebPage",
            name: "About MARVECX Aerospace",
            url: `${SITE}/about`,
            description:
              "Learn about MARVECX Aerospace's mission, vision, core values, and future outlook in advancing African aerospace technology.",
          },
          sameAs: ["https://x.com/marvecx", "https://www.instagram.com/marvecx"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "MARVECX — African Aerospace",
          url: SITE,
          description:
            "MARVECX advances aerospace design, research, and education from Africa for a sustainable and spacefaring future.",
          potentialAction: {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${SITE}/events?q={search_term_string}` },
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
