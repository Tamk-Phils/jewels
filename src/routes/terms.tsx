import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Marchello" },
      { name: "description", content: "Terms of use for the Marchello website and purchases." },
      { property: "og:title", content: "Terms & Conditions — Marchello" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <div className="container-luxe py-20 max-w-3xl">
      <div className="eyebrow">Legal</div>
      <h1 className="font-display text-5xl mt-3">Terms & Conditions</h1>
      <div className="mt-10 space-y-6 text-white/70 leading-relaxed">
        <p>By accessing or using the Marchello site, you agree to these terms.</p>
        <p>All product imagery is for reference; natural variation in gold finish and diamond brilliance is expected.</p>
        <p>Pricing and availability are subject to change without notice. We reserve the right to refuse or cancel orders.</p>
        <p>Marchello retains intellectual property over all designs, photography, and copy on this site.</p>
      </div>
    </div>
  ),
});
