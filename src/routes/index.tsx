import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardProduct } from "@/components/product-card";
import { categoryImage } from "@/lib/product-image";
import heroImg from "@/assets/hero-chain.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import { ArrowRight, Award, Diamond, Truck, ShieldCheck, Calendar, CreditCard, Users, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marchello The Jeweler — Trusted by Generations, Loved by Thousands" },
      { name: "description", content: "35 years of natural earth-mined diamonds and solid gold jewelry. Shop chains, pendants, watches, rings, bracelets and earrings. Layaway plans available." },
      { property: "og:title", content: "Marchello The Jeweler — Trusted by Generations, Loved by Thousands" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never,
    ],
  }),
  component: HomePage,
});

const CATS = [
  { slug: "chains", label: "Chains" },
  { slug: "pendants", label: "Pendants" },
  { slug: "watches", label: "Watches" },
  { slug: "rings", label: "Rings" },
  { slug: "bracelets", label: "Bracelets" },
  { slug: "earrings", label: "Earrings" },
];

function HomePage() {
  const { data: products = [] } = useQuery({
    queryKey: ["home-products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id,name,slug,price,sale_price,is_new,is_bestseller,is_featured,images,media,category:categories(slug,name)")
        .eq("is_published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as unknown as (ProductCardProduct & { is_bestseller?: boolean; is_featured?: boolean })[];
    },
  });

  const featured = products.filter((p) => p.is_featured).slice(0, 8);
  const bestsellers = products.filter((p) => p.is_bestseller).slice(0, 4);
  const newArrivals = products.filter((p) => p.is_new).slice(0, 4);

  return (
    <>
      {/* HERO — split, editorial */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div className="relative order-2 md:order-1 min-h-[50vh]">
          <img
            src={heroImg}
            alt="Diamond gold chains — Marchello The Jeweler"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="order-1 md:order-2 flex items-center bg-[oklch(0.97_0.01_85)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="px-8 md:px-16 py-20 max-w-xl mx-auto"
          >
            <div className="text-sm text-foreground/60 mb-4">35 Years, Natural Earth Mined Diamond</div>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Trusted by Generations,<br />
              <span className="text-gold">Loved</span> by Thousands
            </h1>
            <p className="mt-6 text-foreground/70">
              Family jewelers for over three decades — solid gold, natural diamonds,
              and pieces designed to be handed down.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="btn-gold">Shop Now <ArrowRight className="h-3 w-3" /></Link>
              <a href="https://wa.me/19296892205" className="btn-ghost-gold">Book Appointment</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-foreground/10 bg-background">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center">
          {[
            { Icon: Truck, t: "Express Overnight Delivery", d: "Insured & signed for" },
            { Icon: ShieldCheck, t: "Safe & Secure Checkout", d: "Encrypted payments" },
            { Icon: Award, t: "Trusted for 35 Years", d: "Family-run since 1990" },
            { Icon: Diamond, t: "Natural Earth-Mined Diamonds", d: "Certified & conflict-free" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <Icon className="h-6 w-6 text-gold" />
              <div className="font-medium text-sm">{t}</div>
              <div className="text-xs text-foreground/50">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES CAROUSEL */}
      <section className="container-luxe py-20">
        <div className="text-center mb-12">
          <div className="eyebrow">Shop by Category</div>
          <h2 className="font-display text-4xl md:text-5xl mt-3">The Collections</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {CATS.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link to="/category/$slug" params={{ slug: c.slug }} className="group block relative aspect-[3/4] overflow-hidden">
                <img src={categoryImage[c.slug]} alt={c.label} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                  <h3 className="font-display text-2xl md:text-3xl">{c.label}</h3>
                  <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-[var(--gold-soft)] opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="bg-black text-white">
        <div className="container-luxe py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[var(--gold)]">Personal Jewelry Consultant</div>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Make an Appointment</h2>
            <p className="mt-4 text-white/70 max-w-md">
              Schedule an appointment with us to view and purchase high-quality jewelry.
              Our specialists will help you find the perfect piece.
            </p>
            <a href="https://wa.me/19296892205" className="btn-gold mt-8 inline-flex">Book Now</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: Calendar, t: "Schedule Today", d: "In-store or virtual" },
              { Icon: CreditCard, t: "Layaway Available", d: "25% down, no credit needed" },
              { Icon: Users, t: "Family Jewelers", d: "Three generations of expertise" },
              { Icon: Diamond, t: "Custom Design", d: "Made to your vision" },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="border border-white/15 p-5">
                <Icon className="h-5 w-5 text-[var(--gold)] mb-3" />
                <div className="font-medium">{t}</div>
                <div className="text-xs text-white/50 mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured.length > 0 && (
        <section className="container-luxe py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="eyebrow">Featured</div>
              <h2 className="font-display text-4xl mt-3">Trending Now</h2>
            </div>
            <Link to="/shop" className="text-xs tracking-[0.2em] uppercase text-gold hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {featured.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}

      {/* BESTSELLERS */}
      {bestsellers.length > 0 && (
        <section className="container-luxe py-16">
          <div className="text-center mb-10">
            <div className="eyebrow">Loved by all</div>
            <h2 className="font-display text-4xl mt-3">Best Sellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {bestsellers.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}

      {/* NEW */}
      {newArrivals.length > 0 && (
        <section className="container-luxe pb-20">
          <div className="text-center mb-10">
            <div className="eyebrow">Just landed</div>
            <h2 className="font-display text-4xl mt-3">New Arrivals</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {newArrivals.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}

      {/* LAYAWAY BAND */}
      <section className="bg-[var(--ink)] py-16">
        <div className="container-luxe text-center max-w-2xl mx-auto">
          <div className="eyebrow">Layaway Plan Available</div>
          <h2 className="font-display text-3xl md:text-4xl mt-4">
            25% down payment. Pay over time. No credit needed.
          </h2>
          <p className="mt-4 text-foreground/60">
            Reserve your piece today and pay in flexible installments.
            No credit check, no interest, no hassle.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-luxe py-24 text-center">
        <div className="eyebrow">The List</div>
        <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl mx-auto">
          Be first to see new releases.
        </h2>
        <p className="mt-4 text-foreground/60 max-w-lg mx-auto">
          Join the Marchello list for private previews and 10% off your first piece.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 bg-transparent border border-foreground/20 px-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none"
          />
          <button className="btn-gold">Subscribe</button>
        </form>
      </section>
    </>
  );
}
