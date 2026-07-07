import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marchello The Jeweler" },
      { name: "description", content: "Contact Marchello The Jeweler. Call, text, or WhatsApp Eden for personal jewelry shopping assistance." },
      { property: "og:title", content: "Contact — Marchello The Jeweler" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <div className="container-luxe py-20 grid md:grid-cols-2 gap-16 max-w-5xl">
      <div>
        <div className="eyebrow">Get in touch</div>
        <h1 className="font-display text-5xl mt-3">Your Personal Jewelry Shopper</h1>
        <p className="mt-6 text-foreground/70 leading-relaxed">
          For a smooth and confident shopping experience, connect with our personal jewelry shopper
          for assistance with selections and exclusive offers.
        </p>
        <ul className="mt-10 space-y-4 text-sm text-foreground/70">
          <li className="flex gap-3">
            <Phone className="h-4 w-4 text-gold mt-0.5" />
            <span>
              Call / Text / WhatsApp Eden:{" "}
              <a href="tel:+19296891990" className="hover:text-gold">+1 (929) 689-1990</a>
            </span>
          </li>
          <li className="flex gap-3">
            <Phone className="h-4 w-4 text-gold mt-0.5" />
            <span>
              Store: <a href="tel:+17185586139" className="hover:text-gold">+1 (718) 558-6139</a>
            </span>
          </li>
          <li className="flex gap-3">
            <MapPin className="h-4 w-4 text-gold mt-0.5" />
            Jamaica, New York
          </li>
          <li className="flex gap-3">
            <Mail className="h-4 w-4 text-gold mt-0.5" />
            <a href="https://wa.me/19296891990" className="hover:text-gold">Chat on WhatsApp</a>
          </li>
        </ul>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Message sent. We'll be in touch."); setForm({ name: "", email: "", message: "" }); }} className="space-y-4">
        <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="contact-i" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="contact-i" />
        <textarea required placeholder="Your message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="contact-i" />
        <button className="btn-gold">Send Message</button>
        <style>{`.contact-i{width:100%;background:transparent;border:1px solid rgba(255,255,255,.18);padding:.85rem 1rem;color:white;font-size:.9rem}.contact-i:focus{outline:none;border-color:var(--gold)}`}</style>
      </form>
    </div>
  );
}
