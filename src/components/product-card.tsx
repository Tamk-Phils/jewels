import { formatPrice } from "@/lib/format";
import { productPrimaryImage, resolveImage } from "@/lib/product-image";
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
  
  let imagesList: string[] = [];
  if (Array.isArray(p.media) && p.media.length > 0) {
    imagesList = p.media.filter(m => (m as any).type !== 'video').map(m => (m as any).url || (m as any).path).map(resolveImage);
  } else if (Array.isArray(p.images) && p.images.length > 0) {
    imagesList = p.images.map(img => resolveImage(img as string));
  } else {
    imagesList = [productPrimaryImage(p)];
  }

  if (imagesList.length === 0) {
    imagesList = [productPrimaryImage(p)];
  }

  return (
    <div className="group block animate-fade-up" style={{ contentVisibility: "auto" }}>
      <div className={`relative overflow-hidden bg-white ${compact ? "aspect-square" : "aspect-[4/5]"}`}>
        <div className="flex overflow-x-auto snap-x snap-mandatory h-full w-full scrollbar-hide">
          {imagesList.map((imgSrc, i) => (
            <a 
              key={i} 
              href={`/product/${p.slug}`} 
              className="shrink-0 h-full w-full snap-start relative"
            >
              <img
                src={imgSrc}
                alt={`${p.name} image ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
              />
            </a>
          ))}
        </div>
        {p.is_new && (
          <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase bg-black/60 text-white px-2 py-1 pointer-events-none">
            New
          </span>
        )}
        {sale && (
          <span className="absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase bg-red-600 text-white px-2 py-1 pointer-events-none">
            Sale
          </span>
        )}
        {imagesList.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
            {imagesList.map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-black/20" />
            ))}
          </div>
        )}
      </div>
      <a href={`/product/${p.slug}`} className={compact ? "pt-3 block" : "pt-4 block"}>
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
      </a>
    </div>
  );
}
