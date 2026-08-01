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
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/.netlify/functions/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', payload: form }),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Message sent. We'll be in touch.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-luxe py-16 md:py-20 grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl">
      <div>
        <div className="eyebrow">Get in touch</div>
        <h1 className="font-display text-4xl md:text-5xl mt-3 text-gray-900">Your Personal Jewelry Shopper</h1>
        <p className="mt-6 text-foreground/80 leading-relaxed font-normal">
          For a smooth and confident shopping experience, connect with our personal jewelry shopper
          for assistance with selections and exclusive offers.
        </p>
        <ul className="mt-10 space-y-4 text-sm text-foreground/80">
          <li className="flex gap-3 items-center">
            <Phone className="h-5 w-5 text-gold flex-shrink-0" />
            <span>
              Call / Text / WhatsApp Eden:{" "}
              <a href="tel:+19296891990" className="hover:text-gold font-bold text-gray-900">+1 (929) 689-1990</a>
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <Phone className="h-5 w-5 text-gold flex-shrink-0" />
            <span>
              Store: <a href="tel:+17185586139" className="hover:text-gold font-bold text-gray-900">+1 (718) 558-6139</a>
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
            <span className="font-medium text-gray-900">Jamaica, New York</span>
          </li>
          <li className="flex gap-3 items-center">
            <Mail className="h-5 w-5 text-gold flex-shrink-0" />
            <span>
              Email: <a href="mailto:support@marchell0thejeweler.com" className="hover:text-gold font-bold text-gray-900">support@marchell0thejeweler.com</a>
            </span>
          </li>
          <li className="flex gap-3 items-center pt-2">
            <a href="https://wa.me/19296891990" className="btn-gold !py-2.5 !px-5 text-xs font-bold">Chat on WhatsApp</a>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 md:p-8 rounded-lg border-2 border-black shadow-md">
        <h2 className="font-display text-2xl text-gray-900 mb-4">Send Us a Message</h2>
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-gray-900 mb-1.5">Full Name</label>
          <input required placeholder="Enter your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white text-black border-2 border-black rounded px-4 py-3 text-sm focus:border-gold focus:outline-none placeholder:text-gray-500 font-medium" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-gray-900 mb-1.5">Email Address</label>
          <input required type="email" placeholder="Enter your email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white text-black border-2 border-black rounded px-4 py-3 text-sm focus:border-gold focus:outline-none placeholder:text-gray-500 font-medium" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-gray-900 mb-1.5">Your Message</label>
          <textarea required placeholder="Tell us how we can assist you with your inquiry..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white text-black border-2 border-black rounded px-4 py-3 text-sm focus:border-gold focus:outline-none placeholder:text-gray-500 font-medium" />
        </div>
        <button className="btn-gold w-full py-3.5 text-sm font-bold tracking-wider" disabled={submitting}>
          {submitting ? "Sending Message..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
