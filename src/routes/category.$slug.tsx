import { createFileRoute } from "@tanstack/react-router";
import { Shop } from "./shop";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${cap(params.slug)} — Marchello` },
      { name: "description", content: `Shop ${params.slug} from Marchello — luxury fine jewelry collection.` },
      { property: "og:title", content: `${cap(params.slug)} — Marchello` },
      { property: "og:url", content: `/category/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/category/${params.slug}` }],
  }),
  component: CategoryPage,
});

function cap(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }

function CategoryPage() {
  const { slug } = Route.useParams();
  return <Shop categorySlug={slug} />;
}
