import { createFileRoute } from "@tanstack/react-router";

const make = (slug: string, title: string, body: { h: string; p: string }[]) => createFileRoute(slug as never)({
  head: () => ({
    meta: [
      { title: `${title} — Marchello` },
      { name: "description", content: `${title} for Marchello jewelry purchases.` },
      { property: "og:title", content: `${title} — Marchello` },
      { property: "og:url", content: slug },
    ],
    links: [{ rel: "canonical", href: slug }],
  }),
  component: () => (
    <div className="container-luxe py-20 max-w-3xl">
      <div className="eyebrow">Policy</div>
      <h1 className="font-display text-5xl mt-3">{title}</h1>
      <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
        {body.map((s, i) => (
          <section key={i}>
            <h2 className="font-display text-2xl text-white">{s.h}</h2>
            <p className="mt-3">{s.p}</p>
          </section>
        ))}
      </div>
    </div>
  ),
});

export const Route = make("/shipping", "Shipping Policy", [
  { h: "Complimentary worldwide shipping", p: "Free insured shipping on orders over $500. Standard rates apply to smaller orders." },
  { h: "Processing time", p: "Most orders ship within 1–2 business days. Custom pieces require 6–8 weeks." },
  { h: "Tracking & insurance", p: "Every shipment is fully insured and requires signature on delivery." },
]);
