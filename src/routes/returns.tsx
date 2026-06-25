import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "Return Policy — Marchello" },
      { name: "description", content: "Marchello return policy. 30-day returns on unworn pieces." },
      { property: "og:title", content: "Return Policy — Marchello" },
      { property: "og:url", content: "/returns" },
    ],
    links: [{ rel: "canonical", href: "/returns" }],
  }),
  component: () => (
    <div className="container-luxe py-20 max-w-3xl">
      <div className="eyebrow">Policy</div>
      <h1 className="font-display text-5xl mt-3">Return Policy</h1>
      <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
        <p>Unworn pieces may be returned within 30 days of delivery for a full refund. Items must be in original packaging and accompanied by all documentation.</p>
        <p>Custom commissions, engraved pieces, and final-sale items are not eligible for return.</p>
        <p>Contact concierge@marchello.example to initiate a return. We will arrange insured pickup at no cost.</p>
      </div>
    </div>
  ),
});
