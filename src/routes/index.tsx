import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardProduct } from "@/components/product-card";
import { categoryImage } from "@/lib/product-image";
import heroImg from "@/assets/hero-chain.jpg";
import { ArrowRight, Award, Diamond, Truck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marchello — Luxury Fine Jewelry" },
      { name: "description", content: "Hand-crafted 18k gold and diamond jewelry. Shop chains, pendants, watches, rings and more." },
      { property: "og:title", content: "Marchello — Luxury Fine Jewelry" },
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
        .select("id,name,slug,price,sale_price,is_new,is_bestseller,is_featured,images,category:categories(slug,name)")
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
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Diamond Cuban link chain on black marble"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="container-luxe relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="eyebrow mb-6">Fall Collection — 2026</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
              Crafted in <span className="gold-gradient">solid gold.</span><br/>
              Set with brilliance.
            </h1>
            <p className="mt-6 text-foreground/70 max-w-md text-lg">
              Iconic pieces designed for those who appreciate the difference.
              Hand-finished by master jewelers, ethically sourced diamonds.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/shop" className="btn-gold">Shop the Collection <ArrowRight className="h-3 w-3" /></Link>
              <Link to="/category/chains" className="btn-ghost-gold">Explore Chains</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-luxe py-24">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <h3 className="font-display text-2xl md:text-3xl">{c.label}</h3>
                  <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Discover →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      {featured.length > 0 && (
        <section className="container-luxe py-16">
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

      {/* PROMISE */}
      <section className="bg-[var(--ink)] py-20 mt-16">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { Icon: Diamond, t: "Lifetime Warranty", d: "On all fine jewelry" },
            { Icon: Truck, t: "Free Shipping", d: "Worldwide over $500" },
            { Icon: ShieldCheck, t: "Secure Payment", d: "Encrypted checkout" },
            { Icon: Award, t: "Ethically Sourced", d: "Conflict-free diamonds" },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex flex-col items-center">
              <Icon className="h-8 w-8 text-gold mb-3" />
              <div className="font-display text-lg">{t}</div>
              <div className="text-xs text-foreground/50 mt-1">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      {bestsellers.length > 0 && (
        <section className="container-luxe py-24">
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
        <section className="container-luxe pb-24">
          <div className="text-center mb-10">
            <div className="eyebrow">Just landed</div>
            <h2 className="font-display text-4xl mt-3">New Arrivals</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {newArrivals.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      <section className="bg-[var(--ink)] py-24">
        <div className="container-luxe">
          <div className="text-center mb-12">
            <div className="eyebrow">Voices</div>
            <h2 className="font-display text-4xl mt-3">Why our clients return</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "Olivia M.", q: "The craftsmanship is unmatched. My pendant arrived in a velvet box that felt like a gift to myself." },
              { n: "James R.", q: "I've collected fine watches for 20 years. The Marchello Automatic is now my daily wear." },
              { n: "Aisha K.", q: "Customer care walked me through every step. The piece is even more beautiful in person." },
            ].map((t) => (
              <div key={t.n} className="glass p-8 rounded-md">
                <p className="font-display text-lg leading-relaxed">"{t.q}"</p>
                <div className="mt-6 text-xs tracking-[0.2em] uppercase text-gold">— {t.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-luxe py-24 text-center">
        <div className="eyebrow">The List</div>
        <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl mx-auto">
          Be first to see new releases.
        </h2>
        <p className="mt-4 text-foreground/60 max-w-lg mx-auto">
          Join the Marchello list for private previews, atelier stories, and 10% off your first piece.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none"
          />
          <button className="btn-gold">Subscribe</button>
        </form>
      </section>
    </>
  );
}
