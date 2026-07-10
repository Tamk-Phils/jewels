import { createFileRoute } from "@tanstack/react-router";
import heroBanner from "@/assets/hero-banner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Marchello The Jeweler" },
      { name: "description", content: "With 35+ years of experience, Marchello The Jeweler specializes in natural earth-mined diamonds at the best prices in the world." },
      { property: "og:title", content: "About Us — Marchello The Jeweler" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="container-luxe py-20 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="eyebrow">About Us</div>
          <h1 className="font-display text-5xl mt-3">Marchello The Jeweler</h1>
          <div className="mt-10 space-y-6 text-foreground/70 leading-relaxed text-lg">
            <p>
              With 35+ years of experience and over 1,000 happy customers, we specialize in natural,
              earth-mined diamonds at some of the best prices in the world. Trusted, reliable, and
              committed to quality.
            </p>
            <p>
              Established in 1991, Marchello The Jeweler has built a reputation for solid gold jewelry,
              luxury watches, and custom pieces crafted with natural diamonds.
            </p>
            <p>Layaway plans available — 25% down payment. Pay over time. No credit needed.</p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={heroBanner} alt="Marchello The Jeweler" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  ),
});
