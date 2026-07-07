import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardProduct } from "@/components/product-card";
import { categoryImage } from "@/lib/product-image";
import heroImg from "@/assets/hero-chain.jpg";
import heroBanner from "@/assets/hero-banner.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import specializeImg from "@/assets/about-specialize.jpg";
import collectionMensRings from "@/assets/collection-mens-rings.jpg";
import collectionWomensEarrings from "@/assets/collection-womens-earrings.jpg";
import collectionUnisexEarrings from "@/assets/collection-unisex-earrings.jpg";
import collectionChainCharm from "@/assets/collection-chain-charm.jpg";
import collectionMemory from "@/assets/collection-memory.jpg";
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

const TOP_CATS = [
  { slug: "chains", label: "Chains" },
  { slug: "watches", label: "All Watches" },
  { slug: "bracelets", label: "Bracelets" },
];

const DISCOVER_COLLECTIONS = [
  { slug: "rings", label: "Engagement Rings", image: categoryImage.rings, to: "/category/rings" as const },
  { slug: "rings", label: "Women's Rings", image: categoryImage.rings, to: "/category/rings" as const },
  { slug: "rings", label: "Men's Rings", image: collectionMensRings, to: "/category/rings" as const },
  { slug: "earrings", label: "Women's Earrings", image: collectionWomensEarrings, to: "/category/earrings" as const },
  { slug: "chains", label: "Chains", image: categoryImage.chains, to: "/category/chains" as const },
  { slug: "earrings", label: "Unisex Earrings", image: collectionUnisexEarrings, to: "/category/earrings" as const },
  { slug: "pendants", label: "Charms", image: categoryImage.pendants, to: "/category/pendants" as const },
  { slug: "pendants", label: "Chain and Charm Sets", image: collectionChainCharm, to: "/category/pendants" as const },
  { slug: "watches", label: "All Watches", image: categoryImage.watches, to: "/category/watches" as const },
  { slug: "pendants", label: "Memory Pendants", image: collectionMemory, to: "/category/pendants" as const },
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
      {/* HERO CAROUSEL — full-width auto-scrolling background */}
      <HeroCarousel />

      {/* EDITORIAL SPLIT */}
      <section className="grid md:grid-cols-2 min-h-[60vh]">
        <div className="relative order-2 md:order-1 min-h-[40vh]">
          <img
            src={heroImg}
            alt="Diamond gold chains — Marchello The Jeweler"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2 flex items-center bg-[oklch(0.97_0.01_85)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="px-8 md:px-16 py-20 max-w-xl mx-auto"
          >
            <div className="text-sm text-foreground/60 mb-4">35 Years, Natural Earth Mined Diamond</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Trusted by Generations,<br />
              <span className="text-gold">Loved</span> by Thousands
            </h2>
            <div className="mt-8">
              <Link to="/shop" className="btn-gold">Shop Now <ArrowRight className="h-3 w-3" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-foreground/10 bg-background">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-5 gap-6 py-8 text-center">
          {[
            { Icon: Truck, t: "Express Overnight Delivery", d: "Insured & signed for" },
            { Icon: ShieldCheck, t: "Safe & Secure Checkout", d: "Encrypted payments" },
            { Icon: Award, t: "Trusted for 35 Years", d: "Family-run since 1991" },
            { Icon: Users, t: "Loved by Thousands of Customers", d: "Trusted by generations" },
            { Icon: Diamond, t: "Natural Earth Mined Diamonds", d: "Certified & conflict-free" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <Icon className="h-6 w-6 text-gold" />
              <div className="font-medium text-sm">{t}</div>
              <div className="text-xs text-foreground/50">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP CATEGORY STRIP */}
      <section className="container-luxe py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TOP_CATS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link to="/category/$slug" params={{ slug: c.slug }} className="group block relative aspect-[4/3] overflow-hidden">
                <img src={categoryImage[c.slug]} alt={c.label} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                  <h3 className="font-display text-2xl md:text-3xl">{c.label}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPECIALIZE BAND */}
      <section className="grid md:grid-cols-2 min-h-[50vh]">
        <div className="relative min-h-[40vh]">
          <img
            src={specializeImg}
            alt="Natural earth-mined diamond jewelry by Marchello The Jeweler"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex items-center bg-[oklch(0.97_0.01_85)]">
          <div className="px-8 md:px-16 py-20 max-w-xl mx-auto text-center md:text-left">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              We specialize in natural real earth mined diamonds, at the best prices in the world!
            </h2>
            <p className="mt-6 text-foreground/60 tracking-[0.25em] uppercase text-sm">Established 1991</p>
          </div>
        </div>
      </section>

      {/* DISCOVER THE COLLECTIONS */}
      <section className="container-luxe py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl">Discover the Collections</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
          {DISCOVER_COLLECTIONS.map((c, i) => (
            <motion.div
              key={`${c.label}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            >
              <Link to={c.to} className="group block relative aspect-[3/4] overflow-hidden">
                <img src={c.image} alt={c.label} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-center text-white">
                  <h3 className="font-display text-lg md:text-xl">{c.label}</h3>
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
            <h2 className="font-display text-4xl md:text-5xl mt-4">Make An Appointment</h2>
            <p className="mt-4 text-white/70 max-w-md">
              Schedule an appointment with us to view and purchase high-quality jewelry.
            </p>
            <a href="https://wa.me/19296891990" className="btn-gold mt-8 inline-flex">Schedule an Appointment Today</a>
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

      {/* CONTACT CTA */}
      <section className="bg-black text-white">
        <div className="container-luxe py-20 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl">Ready to make a deal now? Contact us today.</h2>
          <p className="mt-4 text-white/70">Your Personal Jewelry Shopper</p>
          <p className="mt-6 text-white/80">
            For a smooth and confident shopping experience, connect with our personal jewelry shopper
            for assistance with selections and exclusive offers.
          </p>
          <p className="mt-8 text-lg">
            Call / Text / WhatsApp:{" "}
            <a href="tel:+19296891990" className="text-[var(--gold)] hover:underline">+1 (929) 689-1990</a> / Eden
          </p>
          <Link to="/contact" className="btn-gold mt-8 inline-flex">Contact us</Link>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="container-luxe py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">About Us</h2>
          <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
            With 35+ years of experience and over 1,000 happy customers, we specialize in natural,
            earth-mined diamonds at some of the best prices in the world. Trusted, reliable, and
            committed to quality.
          </p>
          <Link to="/about" className="btn-gold mt-8 inline-flex">Explore Now</Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={heroBanner} alt="Marchello The Jeweler showroom" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>
    </>
  );
}

const HERO_SLIDES = [
  {
    img: heroBanner,
    kicker: "35 Years, Natural Earth Mined Diamond",
    title: "Trusted by Generations, Loved by Thousands",
    sub: "",
    cta: { to: "/shop", label: "Shop Now" },
  },
  {
    img: hero2,
    kicker: "Layaway Plan Available",
    title: "25% Down Payment. Pay Over Time. No Credit Needed.",
    sub: "",
    cta: { to: "/contact", label: "Make An Appointment" },
  },
  {
    img: hero3,
    kicker: "All Watches",
    title: "Luxury Timepieces",
    sub: "Rolex, Cartier, Audemars Piguet and more.",
    cta: { to: "/category/watches", label: "Explore Watches" },
  },
  {
    img: hero4,
    kicker: "Engagement Rings",
    title: "Natural Earth Mined Diamonds",
    sub: "Hand-crafted in solid gold.",
    cta: { to: "/category/rings", label: "Shop Rings" },
  },
] as const;

function HeroCarousel() {
  const [i, setI] = useState(0);
  const n = HERO_SLIDES.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);

  const slide = HERO_SLIDES[i];

  return (
    <section className="relative h-[70vh] min-h-[480px] md:h-[85vh] overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="h-full w-full object-cover"
            fetchPriority={i === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full container-luxe flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl text-white"
          >
            <div className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[var(--gold)] mb-4">
              {slide.kicker}
            </div>
            <h1 className="font-display text-3xl md:text-5xl leading-[1.08]">{slide.title}</h1>
            {slide.sub ? <p className="mt-5 text-white/80 max-w-md">{slide.sub}</p> : null}
            <Link to={slide.cta.to} className="btn-gold mt-8 inline-flex">
              {slide.cta.label} <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual controls */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 transition-all ${idx === i ? "w-8 bg-[var(--gold)]" : "w-4 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
