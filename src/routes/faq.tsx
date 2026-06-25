import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Are your diamonds ethically sourced?", a: "Every Marchello diamond is conflict-free and accompanied by full provenance documentation." },
  { q: "What's your warranty?", a: "We offer a lifetime warranty against manufacturing defects on all fine jewelry." },
  { q: "Do you ship internationally?", a: "Yes. Complimentary insured shipping worldwide on orders over $500." },
  { q: "Can I return an item?", a: "Unworn pieces may be returned within 30 days for a full refund. Custom and engraved pieces are final sale." },
  { q: "Do you offer custom design?", a: "Yes — our concierge can guide you through a custom commission. Lead time is typically 6–8 weeks." },
  { q: "How should I care for my jewelry?", a: "Store pieces individually in their pouch, avoid contact with perfume or chlorine, and have us clean and inspect them annually." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Marchello" },
      { name: "description", content: "Frequently asked questions about Marchello fine jewelry." },
      { property: "og:title", content: "FAQ — Marchello" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="container-luxe py-20 max-w-3xl">
      <div className="eyebrow text-center">Help</div>
      <h1 className="font-display text-5xl text-center mt-3">Frequently Asked</h1>
      <div className="mt-12 divide-y divide-white/10">
        {faqs.map((f, i) => (
          <div key={i}>
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-6 flex justify-between items-center text-left">
              <span className="font-display text-xl">{f.q}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="pb-6 text-white/70 leading-relaxed">{f.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
