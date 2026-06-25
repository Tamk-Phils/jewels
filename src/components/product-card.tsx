import { Link } from "@tanstack/react-router";
import { formatPrice } from "@/lib/format";
import { productPrimaryImage } from "@/lib/product-image";

export type ProductCardProduct = {
  id: string;
  name: string;
  slug: string;
  price: number | string;
  sale_price: number | string | null;
  is_new?: boolean | null;
  images?: unknown;
  category?: { slug?: string; name?: string } | null;
};

export function ProductCard({ p }: { p: ProductCardProduct }) {
  const price = Number(p.price);
  const sale = p.sale_price ? Number(p.sale_price) : null;
  const img = productPrimaryImage(p);

  return (
    <Link
      to="/product/$slug"
      params={{ slug: p.slug }}
      className="group block animate-fade-up"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ink)]">
        <img
          src={img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {p.is_new && (
          <span className="absolute top-3 left-3 eyebrow bg-black/60 px-2 py-1">New</span>
        )}
        {sale && (
          <span className="absolute top-3 right-3 eyebrow bg-[var(--gold)]/95 text-black px-2 py-1">Sale</span>
        )}
      </div>
      <div className="pt-4">
        {p.category?.name && (
          <div className="text-[10px] tracking-[0.25em] uppercase text-white/40">{p.category.name}</div>
        )}
        <h3 className="font-display text-lg mt-1 group-hover:text-gold transition-colors">{p.name}</h3>
        <div className="mt-1 text-sm flex items-baseline gap-2">
          {sale ? (
            <>
              <span className="text-gold">{formatPrice(sale)}</span>
              <span className="text-white/40 line-through text-xs">{formatPrice(price)}</span>
            </>
          ) : (
            <span className="text-white/80">{formatPrice(price)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
