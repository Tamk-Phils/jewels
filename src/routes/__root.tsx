import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/lib/cart";
import { AuthProvider } from "@/lib/auth";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-background">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-3 text-sm text-foreground/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-gold mt-8">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-background">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <p className="mt-3 text-sm text-foreground/60">An unexpected error occurred.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold">Try again</button>
          <a href="/" className="btn-ghost-gold">Home</a>
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
      { name: "theme-color", content: "#D4AF37" },
      { title: "Marchello — Luxury Fine Jewelry | 18k Gold & Diamonds" },
      { name: "description", content: "Hand-crafted 18k gold and diamond jewelry. Shop chains, pendants, watches, rings, bracelets, and earrings with lifetime warranty and free worldwide shipping over $500." },
      { name: "author", content: "Marchello The Jeweler" },
      { name: "keywords", content: "luxury jewelry, 18k gold jewelry, diamond jewelry, gold chains, fine jewelry, designer pendants, luxury watches, diamond rings, gold bracelets" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:site_name", content: "Marchello" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "Marchello — Luxury Fine Jewelry | 18k Gold & Diamonds" },
      { property: "og:description", content: "Hand-crafted 18k gold and diamond jewelry. Chains, pendants, watches, rings, bracelets, and earrings." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@marchello" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Marchello The Jeweler",
          alternateName: "Marchello",
          description: "Luxury fine jewelry house crafting 18k gold and ethically sourced diamond pieces.",
          url: "/",
          logo: "/favicon.ico",
          foundingDate: "1991",
          sameAs: [
            "https://instagram.com/marchello",
            "https://facebook.com/marchello",
            "https://twitter.com/marchello",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            availableLanguage: ["English"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Marchello",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: "/shop?q={search_term_string}" },
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

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
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
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="flex-1"><Outlet /></main>
            <SiteFooter />
          </div>
          <Toaster theme="light" position="bottom-right" />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
