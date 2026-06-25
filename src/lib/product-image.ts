import chains from "@/assets/cat-chains.jpg";
import pendants from "@/assets/cat-pendants.jpg";
import watches from "@/assets/cat-watches.jpg";
import rings from "@/assets/cat-rings.jpg";
import bracelets from "@/assets/cat-bracelets.jpg";
import earrings from "@/assets/cat-earrings.jpg";
import hero from "@/assets/hero-chain.jpg";

const map: Record<string, string> = {
  "/__assets/cat-chains": chains,
  "/__assets/cat-pendants": pendants,
  "/__assets/cat-watches": watches,
  "/__assets/cat-rings": rings,
  "/__assets/cat-bracelets": bracelets,
  "/__assets/cat-earrings": earrings,
  "/__assets/hero-chain": hero,
};

export const categoryImage: Record<string, string> = {
  chains, pendants, watches, rings, bracelets, earrings,
};

export function resolveImage(src: string | undefined | null): string {
  if (!src) return hero;
  return map[src] ?? src;
}

export function productPrimaryImage(p: { images?: unknown; category?: { slug?: string } | null }): string {
  const arr = Array.isArray(p.images) ? (p.images as string[]) : [];
  if (arr[0]) return resolveImage(arr[0]);
  const slug = p.category?.slug;
  if (slug && categoryImage[slug]) return categoryImage[slug];
  return hero;
}
