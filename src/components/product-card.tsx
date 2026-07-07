import { formatPrice } from "@/lib/format";
import { productPrimaryImage } from "@/lib/product-image";
import { Star } from "lucide-react";

export type ProductCardProduct = {
  id: string;
  name: string;
  slug: string;
  price: number | string;
  sale_price: number | string | null;
  is_new?: boolean | null;
  images?: unknown;
  media?: unknown;
  category?: { slug?: string; name?: string } | null;
};

export function ProductCard({
  p,
  showStars = false,
  compact = false,
}: {
  p: ProductCardProduct;
  showStars?: boolean;
  compact?: boolean;
}) {
  const price = Number(p.price);
  const sale = p.sale_price ? Number(p.sale_price) : null;
  const img = productPrimaryImage(p);

  return (
    <a href={`/product/${p.slug}`} className="group block animate-fade-up">
      <div className={`relative overflow-hidden bg-white ${compact ? "aspect-square" : "aspect-[4/5]"}`}>
        <img
          src={img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {p.is_new && (
          <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-black/60 text-white px-2 py-1">
            New
          </span>
        )}
        {sale && (
          <span className="absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase bg-red-600 text-white px-2 py-1">
            Sale
          </span>
        )}
      </div>
      <div className={compact ? "pt-3" : "pt-4"}>
        <h3
          className={`font-display group-hover:text-[#c9a227] transition-colors leading-snug ${
            compact ? "text-sm md:text-base mt-1" : "text-lg mt-1"
          }`}
        >
          {p.name}
        </h3>
        <div className={`flex items-baseline gap-2 ${compact ? "mt-1 text-sm" : "mt-1 text-sm"}`}>
          {sale ? (
            <>
              <span className="text-foreground/80">{formatPrice(sale)}</span>
              <span className="text-foreground/40 line-through text-xs">{formatPrice(price)}</span>
            </>
          ) : (
            <span className="text-foreground/80">{formatPrice(price)}</span>
          )}
        </div>
        {showStars && (
          <div className="flex gap-0.5 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-[#c9a227] text-[#c9a227]" />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
