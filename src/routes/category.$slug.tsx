import { createFileRoute } from "@tanstack/react-router";
import { Shop } from "./shop";

const CATEGORY_META: Record<string, { title: string; desc: string }> = {
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
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const m = CATEGORY_META[params.slug] ?? {
      title: `${cap(params.slug)} — Marchello`,
      desc: `Shop ${params.slug} from Marchello — luxury fine jewelry hand-crafted in 18k gold.`,
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
