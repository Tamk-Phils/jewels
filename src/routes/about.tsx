import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marchello" },
      { name: "description", content: "The story behind Marchello — master jewelers crafting timeless luxury since 2010." },
      { property: "og:title", content: "About — Marchello" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="container-luxe py-20 max-w-3xl">
      <div className="eyebrow">Our Story</div>
      <h1 className="font-display text-5xl mt-3">A house built on detail.</h1>
      <div className="mt-10 space-y-6 text-white/70 leading-relaxed text-lg">
        <p>Marchello began in a small atelier with one belief: that fine jewelry should feel as exceptional as it looks. Every piece is hand-finished by a master jeweler, set with ethically sourced diamonds, and signed with our mark.</p>
        <p>We work in solid 18k gold — never plated, never hollow. Our diamonds carry full provenance, and every clasp, prong, and weld is inspected by hand before it leaves the bench.</p>
        <p>Our promise is simple: jewelry to inherit.</p>
      </div>
    </div>
  ),
});
