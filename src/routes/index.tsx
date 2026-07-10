import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardProduct } from "@/components/product-card";
import { categoryImage, productPrimaryImage } from "@/lib/product-image";
import heroJeweler from "@/assets/hero-jeweler.jpg";
import storefrontImg from "@/assets/storefront.jpg";
import aboutContactImg from "@/assets/about-contact.jpg";
import custom1 from "@/assets/custom-1.jpg";
import custom2 from "@/assets/custom-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";
import collectionMensRings from "@/assets/collection-mens-rings.jpg";
import collectionWomensEarrings from "@/assets/collection-womens-earrings.jpg";
import collectionUnisexEarrings from "@/assets/collection-unisex-earrings.jpg";
import collectionMemory from "@/assets/collection-memory.jpg";
import {
  ArrowRight,
  Gem,
  Watch,
  Globe,
  Sparkles,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marchello The Jeweler — Trusted by Generations, Loved by Thousands" },
      {
        name: "description",
        content:
          "35 years of natural earth-mined diamonds and solid gold jewelry. Shop chains, pendants, watches, rings, bracelets and earrings.",
      },
      { property: "og:title", content: "Marchello The Jeweler — Trusted by Generations, Loved by Thousands" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroJeweler, fetchpriority: "high" } as never,
    ],
  }),
  component: HomePage,
});

type HomeProduct = ProductCardProduct & {
  is_bestseller?: boolean;
  is_featured?: boolean;
};

const SERVICE_ICONS = [
  { Icon: Gem, label: "Custom Made Piece" },
  { Icon: Watch, label: "Fine Luxury Watches" },
  { Icon: Globe, label: "Worldwide Shipping" },
  { Icon: Sparkles, label: "Upgrade Your Diamonds" },
];

const DISCOVER_COLLECTIONS = [
  { slug: "rings", label: "Engagement Rings", image: categoryImage.rings, to: "/category/rings" as const },
  { slug: "rings", label: "Wedding Rings", image: categoryImage.rings, to: "/category/rings" as const },
  { slug: "rings", label: "Men's Rings", image: collectionMensRings, to: "/category/rings" as const },
  { slug: "earrings", label: "Earrings", image: collectionWomensEarrings, to: "/category/earrings" as const },
  { slug: "pendants", label: "Pendants", image: categoryImage.pendants, to: "/category/pendants" as const },
  { slug: "pendants", label: "Crosses", image: collectionMemory, to: "/category/pendants" as const },
  { slug: "chains", label: "Chains", image: categoryImage.chains, to: "/category/chains" as const },
  { slug: "watches", label: "Watches", image: categoryImage.watches, to: "/category/watches" as const },
  { slug: "bracelets", label: "Bracelets", image: categoryImage.bracelets, to: "/category/bracelets" as const },
  { slug: "earrings", label: "Grills", image: collectionUnisexEarrings, to: "/category/earrings" as const },
];

const VIDEO_ITEMS = [
  { img: video1, title: "Bridal Set with Pear Diamond" },
  { img: video2, title: "Rolex Two-Tone Jubilee" },
  { img: video3, title: "Diamond Cuban Link Ring" },
  { img: gallery2, title: "Audemars Piguet Royal Oak" },
  { img: gallery3, title: "Custom Diamond Chain" },
];

const CUSTOM_ORDERS = [
  {
    img: custom1,
    title: "Custom Gold & Diamond Name Pendant",
    desc: "Personalized nameplate jewelry in yellow, white, or rose gold.",
    href: "/contact",
  },
  {
    img: custom2,
    title: "Design Your Own Custom Jewelry",
    desc: "Any design. Any budget. Made just for you.",
    href: "/contact",
  },
];

function effectivePrice(p: HomeProduct) {
  const sale = p.sale_price ? Number(p.sale_price) : null;
  const price = Number(p.price);
  return sale ?? price;
}

function categorySlug(p: HomeProduct) {
  return p.category?.slug ?? "";
}

function HomePage() {
  const { data: products = [] } = useQuery({
    queryKey: ["home-products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id,name,slug,price,sale_price,is_new,is_bestseller,is_featured,images,media,category:categories(slug,name)")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(50);
      if (error) throw error;
      return (data ?? []) as unknown as HomeProduct[];
    },
  });

  const [productTab, setProductTab] = useState<"popular" | "all" | "bestsellers">("popular");
  const [watchTab, setWatchTab] = useState<"mens" | "womens" | "diamond">("mens");

  const tabProducts =
    productTab === "popular"
      ? products.filter((p) => p.is_featured).slice(0, 8)
      : productTab === "bestsellers"
        ? products.filter((p) => p.is_bestseller).slice(0, 8)
        : products.slice(0, 8);

  const displayProducts = tabProducts.length > 0 ? tabProducts : products.slice(0, 8);

  const ringsUnder5000 = products
    .filter((p) => categorySlug(p) === "rings" && effectivePrice(p) < 5000)
    .slice(0, 5);
  const ringFeatured = ringsUnder5000[0];
  const ringGrid = ringsUnder5000.slice(1, 5);

  const watches = products.filter((p) => categorySlug(p) === "watches");
  const watchProducts = watches.slice(0, 10);

  return (
    <>
      {/* SPLIT HERO — 60/40 split matching marchellothejeweler.com slideshow */}
      <section className="flex flex-col md:flex-row md:h-[95vh] min-h-[520px]">
        <div className="relative w-full md:w-3/5 min-h-[55vh] md:min-h-0 md:h-full overflow-hidden bg-[#c9c9c9]">
          <img
            src={heroJeweler}
            alt="Marchello The Jeweler — in-store consultation"
            width={1400}
            height={933}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </div>
        <div className="w-full md:w-2/5 flex items-center justify-center bg-[#fff9f4] md:h-full">
          <div className="w-full text-center px-6 md:px-10 lg:px-14 py-10 md:py-12 max-w-2xl">
            <p className="text-[0.99rem] md:text-[1.1rem] text-foreground/80 leading-tight mb-2">
              35 Years, Natural Earth Mined Diamond
            </p>
            <h1 className="font-display text-[1.575rem] md:text-[3.15rem] leading-tight mt-1">
              Trusted by Generations, Loved by Thousands
            </h1>
            <Link to="/shop" className="btn-gold mt-6 md:mt-9 inline-flex">
              Shop Now <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE ICON BAR */}
      <section className="bg-[#ebe4d6] border-y border-foreground/8">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-6 py-10 text-center">
          {SERVICE_ICONS.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 px-2">
              <Icon className="h-7 w-7 text-[#c9a227]" strokeWidth={1.5} />
              <div className="text-sm font-medium leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MAKE AN APPOINTMENT */}
      <section className="bg-[#f3ece0] py-16 md:py-20">
        <div className="container-luxe text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl">Make An Appointment</h2>
          <p className="mt-4 text-foreground/65">
            Personalized service for your jewelry needs. Schedule an appointment with us to view and
            purchase high-quality jewelry.
          </p>
          <a href="https://wa.me/19296891990" className="btn-gold mt-8 inline-flex">
            Schedule
          </a>
        </div>
      </section>

      {/* PRODUCT GRID WITH TABS */}
      {displayProducts.length > 0 && (
        <section className="container-luxe py-16 md:py-20">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 border-b border-foreground/10 pb-4">
            {(
              [
                ["popular", "Popular"],
                ["all", "All Products"],
                ["bestsellers", "Best Sellers"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setProductTab(key)}
                className={`text-sm md:text-base pb-2 border-b-2 transition-colors ${
                  productTab === key
                    ? "border-[#c9a227] text-foreground font-medium"
                    : "border-transparent text-foreground/50 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {displayProducts.map((p) => (
              <ProductCard key={p.id} p={p} showStars />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="btn-gold inline-flex">
              View All
            </Link>
          </div>
        </section>
      )}

      {/* STOREFRONT + SPECIALIZE */}
      <section className="bg-[#f3ece0]">
        <div className="relative w-full aspect-[21/9] md:aspect-[3/1] min-h-[220px]">
          <img
            src={storefrontImg}
            alt="Marchello The Jeweler storefront"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container-luxe py-14 md:py-16 text-center max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-4xl leading-snug">
            We specialize in natural real earth mined diamonds, at the best prices in the world!
          </h2>
          <p className="mt-4 text-sm tracking-[0.25em] uppercase text-foreground/50">Established 1991</p>
        </div>
      </section>

      {/* DISCOVER COLLECTIONS — circular thumbnails */}
      <section className="container-luxe py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-10">Discover the Collections</h2>
        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {DISCOVER_COLLECTIONS.map((c, i) => (
            <Link
              key={`${c.label}-${i}`}
              to={c.to}
              className="group flex flex-col items-center gap-3 shrink-0 w-24 md:w-28 snap-start"
            >
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden ring-1 ring-foreground/10 group-hover:ring-[#c9a227] transition-all">
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-xs md:text-sm text-center leading-tight group-hover:text-[#c9a227] transition-colors">
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* DIAMOND RINGS UNDER $5000 */}
      {ringsUnder5000.length > 0 && (
        <section className="bg-[#f3ece0] py-16 md:py-20">
          <div className="container-luxe">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-10">
              Diamond Rings Under $5,000
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {ringFeatured && (
                <a href={`/product/${ringFeatured.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <img
                      src={productPrimaryImage(ringFeatured)}
                      alt={ringFeatured.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-xl mt-4 group-hover:text-[#c9a227]">{ringFeatured.name}</h3>
                  <StarRow />
                </a>
              )}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {ringGrid.map((p) => (
                  <ProductCard key={p.id} p={p} showStars compact />
                ))}
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/category/rings" className="btn-gold inline-flex">
                View All
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* LUXURY WATCHES */}
      {watchProducts.length > 0 && (
        <section className="container-luxe py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-8">Luxury Watches</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 border-b border-foreground/10 pb-4">
            {(
              [
                ["mens", "Men's Watches"],
                ["womens", "Women's Watches"],
                ["diamond", "Diamond Watches"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setWatchTab(key)}
                className={`text-sm md:text-base pb-2 border-b-2 transition-colors ${
                  watchTab === key
                    ? "border-[#c9a227] text-foreground font-medium"
                    : "border-transparent text-foreground/50 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
            {watchProducts.map((p) => (
              <ProductCard key={p.id} p={p} showStars compact />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/category/watches" className="btn-gold inline-flex">
              View All
            </Link>
          </div>
        </section>
      )}

      {/* CUSTOM ORDERS */}
      <section className="bg-[#f3ece0] py-16 md:py-20">
        <div className="container-luxe">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-10">Custom Orders</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {CUSTOM_ORDERS.map((item) => (
              <div key={item.title} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 text-center">
                  <h3 className="font-display text-xl md:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm text-foreground/60">{item.desc}</p>
                  <a href={item.href} className="btn-gold mt-6 inline-flex">
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SHOPPING */}
      <section className="container-luxe py-16 md:py-20">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-10">Video Shopping</h2>
        <div className="flex gap-4 md:gap-5 overflow-x-auto pb-2 snap-x snap-mandatory">
          {VIDEO_ITEMS.map((v) => (
            <div key={v.title} className="shrink-0 w-36 md:w-44 snap-start group cursor-pointer">
              <div className="relative aspect-[9/16] overflow-hidden bg-black rounded-sm">
                <img
                  src={v.img}
                  alt={v.title}
                  className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT + ABOUT SPLIT */}
      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[360px] bg-black">
          <img
            src={aboutContactImg}
            alt="Contact Marchello The Jeweler"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
            <div className="text-white text-center max-w-md">
              <h2 className="font-display text-2xl md:text-3xl">
                Ready to make a deal now? Contact us today.
              </h2>
              <p className="mt-4 text-white/75 text-sm">Your Personal Jewelry Shopper</p>
              <p className="mt-4 text-sm">
                Call / Text / WhatsApp:{" "}
                <a href="tel:+19296891990" className="text-[#e8c547] hover:underline">
                  +1 (929) 689-1990
                </a>{" "}
                / Eden
              </p>
              <a href="tel:+19296891990" className="btn-gold mt-6 inline-flex">
                Call Us
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-[#f3ece0] px-8 md:px-14 py-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">About Us</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              With 35+ years of experience and over 1,000 happy customers, we specialize in natural,
              earth-mined diamonds at some of the best prices in the world. Trusted, reliable, and
              committed to quality.
            </p>
            <Link to="/about" className="btn-gold mt-8 inline-flex">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL GALLERY */}
      <section className="py-4 bg-white">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {[gallery1, gallery2, gallery3, gallery1, gallery2, gallery3].map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <img src={src} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5 mt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3 w-3 fill-[#c9a227] text-[#c9a227]" />
      ))}
    </div>
  );
}
