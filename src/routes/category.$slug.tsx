import { createFileRoute } from "@tanstack/react-router";
import { Shop } from "./shop";

const CATEGORY_META: Record<string, { title: string; desc: string }> = {
  mens: {
    title: "Men's Luxury Diamond & Gold Jewelry | Marchello The Jeweler",
    desc: "Explore solid 14k & 18k gold men's chains, Rolex luxury watches, diamond rings, Cuban link bracelets, and custom pendants.",
  },
  womens: {
    title: "Women's Fine Jewelry — Engagement Rings & Earrings | Marchello",
    desc: "Shop luxury women's engagement rings, diamond hoop earrings, elegant tennis bracelets, and custom diamond pendants.",
  },
  unisex: {
    title: "Unisex Fine Diamond & Gold Jewelry | Marchello",
    desc: "Discover master-crafted unisex gold chains, diamond studs, bracelets, and luxury watches.",
  },
  specials: {
    title: "Special Sales & Featured Luxury Fine Jewelry | Marchello",
    desc: "Shop limited time specials, featured diamond jewelry, and exclusive deals on solid gold chains, rings, and watches.",
  },
  "under-1500": {
    title: "Fine Diamond Jewelry Under $1,500 | Marchello",
    desc: "Browse authentic diamond rings, gold earrings, pendants, and bracelets all priced under $1,500.",
  },
  "lab-collection": {
    title: "Lab-Grown Diamond Jewelry Collection | Marchello",
    desc: "Ethically crafted lab-grown diamond engagement rings, tennis bracelets, and fine jewelry in 14k and 18k gold.",
  },
  chains: {
    title: "Luxury Gold Chains — 18k Cuban, Rope & Figaro | Marchello",
    desc: "Shop solid 18k gold chains: Cuban link, rope, figaro and box. Hand-finished, lifetime warranty, free worldwide shipping over $500.",
  },
  pendants: {
    title: "Diamond Pendants & Gold Necklaces | Marchello",
    desc: "Discover hand-set diamond pendants and 18k gold necklaces. Ethically sourced stones, master-crafted in our atelier.",
  },
  watches: {
    title: "Luxury Watches — Automatic & Diamond Set | Marchello",
    desc: "Marchello automatic and diamond-set luxury watches. Swiss movements, solid gold cases, lifetime warranty.",
  },
  rings: {
    title: "Diamond & Gold Rings — Engagement & Statement | Marchello",
    desc: "Solid 18k gold and diamond rings. Engagement, eternity and statement pieces hand-finished by master jewelers.",
  },
  bracelets: {
    title: "Gold & Diamond Bracelets | Marchello",
    desc: "Tennis bracelets, Cuban link and bangle styles in solid 18k gold. Ethically sourced diamonds, lifetime warranty.",
  },
  earrings: {
    title: "Diamond Earrings & Gold Hoops | Marchello",
    desc: "Hand-set diamond studs, hoops and drops in solid 18k gold. Free worldwide shipping over $500.",
  },
};

function cap(s: string) {
  if (s === "mens") return "Men's Jewelry";
  if (s === "womens") return "Women's Jewelry";
  if (s === "under-1500") return "Under $1,500";
  if (s === "lab-collection") return "Lab Collection";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const m = CATEGORY_META[params.slug] ?? {
      title: `${cap(params.slug)} — Marchello`,
      desc: `Shop ${params.slug} from Marchello — luxury fine jewelry hand-crafted in solid gold.`,
    };
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.desc },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.desc },
        { property: "og:url", content: `/category/${params.slug}` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: m.title },
        { name: "twitter:description", content: m.desc },
      ],
      links: [{ rel: "canonical", href: `/category/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: m.title,
            description: m.desc,
            url: `/category/${params.slug}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Shop", item: "/shop" },
              { "@type": "ListItem", position: 3, name: cap(params.slug), item: `/category/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  return <Shop categorySlug={slug} />;
}
