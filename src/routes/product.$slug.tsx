import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { Heart, Share2, Truck, ShieldCheck, ChevronDown, Play } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { formatPrice } from "@/lib/format";
import { productPrimaryImage, resolveImage } from "@/lib/product-image";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { ProductCard, type ProductCardProduct } from "@/components/product-card";
import type { MediaItem } from "@/lib/media";

export const Route = createFileRoute("/product/$slug")({
  loader: async ({ params }) => {
    const { data } = await supabase
      .from("products")
      .select("name,slug,description,price,sale_price,images,stock,sku,material,category:categories(slug,name)")
      .eq("slug", params.slug)
      .eq("is_published", true)
      .maybeSingle();
    return { product: data };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} | Marchello` : "Product | Marchello";
    const desc = p?.description
      ? p.description.slice(0, 155)
      : "Hand-crafted luxury jewelry in 18k gold and diamonds.";
    const price = p ? Number(p.sale_price ?? p.price) : null;
    const img = p && Array.isArray(p.images) && p.images[0] ? (p.images[0] as string) : undefined;
    const inStock = p ? (p.stock ?? 0) > 0 : false;

    const meta: Array<Record<string, string>> = [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:url", content: `/product/${params.slug}` },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
    ];
    if (img) {
      meta.push({ property: "og:image", content: img });
      meta.push({ name: "twitter:image", content: img });
    }
    if (price != null) {
      meta.push({ property: "product:price:amount", content: String(price) });
      meta.push({ property: "product:price:currency", content: "USD" });
      meta.push({ property: "product:availability", content: inStock ? "in stock" : "out of stock" });
    }

    const scripts = p
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: p.name,
              description: p.description ?? desc,
              image: img ? [img] : undefined,
              sku: p.sku ?? p.slug,
              brand: { "@type": "Brand", name: "Marchello" },
              material: p.material ?? undefined,
              category: p.category?.name,
              offers: {
                "@type": "Offer",
                url: `/product/${params.slug}`,
                priceCurrency: "USD",
                price: price ?? undefined,
                availability: inStock
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
                itemCondition: "https://schema.org/NewCondition",
              },
            }),
          },
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                p.category && {
                  "@type": "ListItem",
                  position: 2,
                  name: p.category.name,
                  item: `/category/${p.category.slug}`,
                },
                { "@type": "ListItem", position: 3, name: p.name, item: `/product/${params.slug}` },
              ].filter(Boolean),
            }),
          },
        ]
      : [];

    return {
      meta,
      links: [{ rel: "canonical", href: `/product/${params.slug}` }],
      scripts,
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const cart = useCart();
  const { user } = useAuth();
  const [openSpec, setOpenSpec] = useState(false);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*,category:categories(slug,name)")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const { data: related = [] } = useQuery({
    enabled: !!product,
    queryKey: ["related", product?.category_id, product?.id],
    queryFn: async () => {
      const { data } = await supabase
        .from("products")
        .select("id,name,slug,price,sale_price,is_new,images,category:categories(slug,name)")
        .eq("is_published", true)
        .eq("category_id", product!.category_id!)
        .neq("id", product!.id)
        .limit(4);
      return (data ?? []) as unknown as ProductCardProduct[];
    },
  });

  if (isLoading) return <div className="container-luxe py-32 text-center text-foreground/50">Loading…</div>;
  if (error || !product) throw notFound();

  const price = Number(product.price);
  const sale = product.sale_price ? Number(product.sale_price) : null;
  const display = sale ?? price;
  const img = productPrimaryImage(product as never);

  const addToWishlist = async () => {
    if (!user) {
      toast.error("Please sign in to save favorites");
      return;
    }
    const { error } = await supabase
      .from("wishlist")
      .insert({ user_id: user.id, product_id: product.id });
    if (error) toast.error("Couldn't add to wishlist");
    else toast.success("Added to wishlist");
  };

  return (
    <>
      <div className="container-luxe py-10 md:py-16">
        <nav className="text-xs text-foreground/40 tracking-widest uppercase mb-6">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          {product.category && (
            <>
              <Link to="/category/$slug" params={{ slug: product.category.slug }} className="hover:text-gold">
                {product.category.name}
              </Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-foreground/70">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <MediaGallery product={product} fallback={img} />


          <div>
            {product.category && (
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{product.category.name}</div>
            )}
            <h1 className="font-display text-4xl md:text-5xl mt-2">{product.name}</h1>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-3xl text-gold">{formatPrice(display)}</span>
              {sale && <span className="text-foreground/40 line-through">{formatPrice(price)}</span>}
            </div>

            <p className="mt-6 text-foreground/70 leading-relaxed">{product.description}</p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  cart.add({
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    price: display,
                    image: img,
                  });
                  toast.success("Added to bag");
                }}
                disabled={product.stock <= 0}
                className="btn-gold flex-1 disabled:opacity-40"
              >
                {product.stock > 0 ? "Add to Bag" : "Out of Stock"}
              </button>
              <button onClick={addToWishlist} className="btn-ghost-gold !px-4" aria-label="Wishlist">
                <Heart className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.share) {
                    navigator.share({ title: product.name, url: window.location.href }).catch(() => {});
                  } else if (typeof navigator !== "undefined") {
                    navigator.clipboard?.writeText(window.location.href);
                    toast.success("Link copied");
                  }
                }}
                className="btn-ghost-gold !px-4" aria-label="Share"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3"><Truck className="h-4 w-4 text-gold" /> Free worldwide over $500</div>
              <div className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-gold" /> Lifetime warranty</div>
            </div>

            <div className="mt-10 border-t border-white/10">
              <button onClick={() => setOpenSpec((v) => !v)} className="w-full py-5 flex justify-between items-center">
                <span className="eyebrow">Specifications</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openSpec ? "rotate-180" : ""}`} />
              </button>
              {openSpec && (
                <dl className="pb-6 space-y-2 text-sm text-foreground/70">
                  {product.material && <Row k="Material" v={product.material} />}
                  {product.gold_type && <Row k="Gold Type" v={product.gold_type} />}
                  {product.diamond_carat && <Row k="Diamond Weight" v={`${product.diamond_carat} ct`} />}
                  {product.weight && <Row k="Weight" v={`${product.weight} g`} />}
                  {product.gender && <Row k="Designed For" v={product.gender} />}
                  <Row k="SKU" v={product.sku ?? product.slug} />
                </dl>
              )}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <div className="text-center mb-10">
              <div className="eyebrow">You may also love</div>
              <h2 className="font-display text-3xl mt-3">Related Pieces</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {related.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-foreground/10 py-2">
      <dt className="text-foreground/40 uppercase tracking-widest text-xs">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}

function MediaGallery({
  product,
  fallback,
}: {
  product: { name: string; images?: unknown; media?: unknown };
  fallback: string;
}) {
  const media: MediaItem[] = Array.isArray(product.media) && product.media.length > 0
    ? (product.media as MediaItem[])
    : (Array.isArray(product.images) ? (product.images as string[]) : [])
        .map((src) => ({ url: resolveImage(src), path: src, type: "image" as const }));

  const items: MediaItem[] = media.length > 0
    ? media
    : [{ url: fallback, path: "fallback", type: "image" }];
  const [active, setActive] = useState(0);
  const cur = items[active];

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-[var(--ink)] overflow-hidden">
        {cur.type === "video" ? (
          <video src={cur.url} controls playsInline poster={cur.poster ?? undefined} className="h-full w-full object-cover" />
        ) : (
          <img src={cur.url} alt={product.name} className="h-full w-full object-cover" />
        )}
      </div>
      {items.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {items.slice(0, 10).map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-square bg-[var(--ink)] overflow-hidden border ${i === active ? "border-[var(--gold)]" : "border-transparent"}`}
            >
              {m.type === "video" ? (
                <>
                  <video src={m.url} className="h-full w-full object-cover" muted />
                  <Play className="absolute inset-0 m-auto h-5 w-5 text-white drop-shadow" />
                </>
              ) : (
                <img src={m.url} alt="" className="h-full w-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

