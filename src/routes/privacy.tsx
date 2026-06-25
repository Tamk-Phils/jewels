import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Marchello" },
      { name: "description", content: "How Marchello handles your personal information." },
      { property: "og:title", content: "Privacy Policy — Marchello" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <div className="container-luxe py-20 max-w-3xl">
      <div className="eyebrow">Legal</div>
      <h1 className="font-display text-5xl mt-3">Privacy Policy</h1>
      <div className="mt-10 space-y-6 text-white/70 leading-relaxed">
        <p>This page describes how we collect, use, and protect your personal information when you visit our site or purchase from us.</p>
        <p>We collect the information you provide at checkout (name, address, email) and basic device data for analytics. We do not sell your data to third parties.</p>
        <p>Payments are processed by our PCI-compliant payment providers; we do not store full card details on our servers.</p>
        <p>For requests regarding your data, contact concierge@marchello.example.</p>
      </div>
    </div>
  ),
});
