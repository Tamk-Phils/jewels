import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardProduct } from "@/components/product-card";
import { SlidersHorizontal } from "lucide-react";

const PAGE_SIZE = 24;

export const Route = createFileRoute("/shop")({
  head: () => {
    const title = "Shop Luxury Fine Jewelry — 18k Gold & Diamonds | Marchello";
    const desc =
      "Browse the full Marchello collection: chains, pendants, watches, rings, bracelets and earrings in solid 18k gold and ethically sourced diamonds.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: "/shop" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: "/shop" }],
    };
  },
  component: ShopPage,
});

function ShopPage() {
  return <Shop />;
}

export function Shop({ categorySlug }: { categorySlug?: string } = {}) {
  const navigate = useNavigate();
  const [sort, setSort] = useState<"new" | "best" | "asc" | "desc">("new");
  const [cat, setCat] = useState<string | "all">(categorySlug ?? "all");
  const [material, setMaterial] = useState<string | "all">("all");
  const [priceMax, setPriceMax] = useState<number>(10000);
  const [gender, setGender] = useState<string | "all">("all");
  const [inStock, setInStock] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [page, setPage] = useState(1);

  const { data: cats = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await supabase.from("categories").select("id,name,slug").order("sort_order");
      return data ?? [];
    },
  });

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["products", page, cat, material, gender, inStock, priceMax, sort],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select(
          "id,name,slug,price,sale_price,stock,material,gold_type,gender,is_new,is_bestseller,images,created_at,category:categories(slug,name)",
          { count: "exact" },
        )
        .eq("is_published", true);

      if (cat !== "all") query = query.filter("category.slug", "eq", cat);
      if (material !== "all") query = query.filter("material", "eq", material);
      if (gender !== "all") query = query.filter("gender", "eq", gender);
      if (inStock) query = query.filter("stock", "gt", 0);
      query = query.filter("price", "lte", priceMax);

      if (sort === "new") query = query.order("created_at", { ascending: false });
      if (sort === "best") query = query.order("is_bestseller", { ascending: false });
      if (sort === "asc") query = query.order("price", { ascending: true });
      if (sort === "desc") query = query.order("price", { ascending: false });

      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { data, error, count } = await query.range(from, to);

      if (error) throw error;

      return {
        products: (data ?? []) as unknown as (ProductCardProduct & {
          stock: number; material: string | null; gender: string | null;
          is_bestseller?: boolean; created_at: string;
        })[],
        count: count ?? 0,
      };
    },
  });

  const products = productsData?.products ?? [];
  const totalCount = productsData?.count ?? 0;

  const filtered = products;

  const hasMore = products.length < totalCount;

  const resetPage = () => setPage(1);

  return (
    <div className="container-luxe py-12 md:py-20">
      <div className="text-center mb-10">
        <div className="eyebrow">Catalog</div>
        <h1 className="font-display text-4xl md:text-5xl mt-3">
          {categorySlug ? cats.find((c) => c.slug === categorySlug)?.name ?? "Shop" : "Shop All"}
        </h1>
        <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
          {totalCount} {totalCount === 1 ? "piece" : "pieces"} available
        </p>
      </div>

      <div className="flex items-center justify-between mb-6 gap-3">
        <button
          onClick={() => setOpenFilters((v) => !v)}
          className="btn-ghost-gold !py-2 !px-4 text-xs md:hidden"
        >
          <SlidersHorizontal className="h-3 w-3" /> Filters
        </button>
        <div className="ml-auto">
          <select
            value={sort}
            onChange={(e) => { setSort(e.target.value as typeof sort); resetPage(); }}
            className="bg-transparent border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.18em] focus:border-[var(--gold)] focus:outline-none"
          >
            <option value="new">Newest</option>
            <option value="best">Best Selling</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-[260px_1fr] gap-8">
        <aside className={`${openFilters ? "block" : "hidden"} md:block space-y-8 text-sm`}>
          {!categorySlug && (
            <Filter title="Category">
              <select value={cat} onChange={(e) => {
                const v = e.target.value;
                resetPage();
                if (v === "all") setCat("all");
                else navigate({ to: "/category/$slug", params: { slug: v } });
              }} className="filter-input">
                <option value="all">All</option>
                {cats.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </select>
            </Filter>
          )}
          <Filter title="Material">
            <select value={material} onChange={(e) => { setMaterial(e.target.value); resetPage(); }} className="filter-input">
              <option value="all">All</option>
              <option value="18k Gold">18k Gold</option>
              <option value="14k Gold">14k Gold</option>
              <option value="Platinum">Platinum</option>
            </select>
          </Filter>
          <Filter title="Gender">
            <select value={gender} onChange={(e) => { setGender(e.target.value); resetPage(); }} className="filter-input">
              <option value="all">All</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Unisex">Unisex</option>
            </select>
          </Filter>
          <Filter title={`Max Price: $${priceMax.toLocaleString()}`}>
            <input type="range" min={500} max={10000} step={100} value={priceMax}
              onChange={(e) => { setPriceMax(Number(e.target.value)); resetPage(); }}
              className="w-full accent-[var(--gold)]" />
          </Filter>
          <Filter title="Availability">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={inStock} onChange={(e) => { setInStock(e.target.checked); resetPage(); }}
                className="accent-[var(--gold)]" />
              In stock only
            </label>
          </Filter>
        </aside>

        <div>
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/5] bg-foreground/5 animate-pulse" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-foreground/50">No pieces match these filters.</div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {products.map((p) => <ProductCard key={p.id} p={p} />)}
              </div>
              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setPage((n) => n + 1)}
                    className="btn-ghost-gold"
                  >
                    Load More ({totalCount - (page * PAGE_SIZE)} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`.filter-input{width:100%;background:transparent;border:1px solid rgba(0,0,0,.15);padding:.5rem .75rem;font-size:.85rem}`}</style>
    </div>
  );
}

function Filter({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-3">{title}</div>
      {children}
    </div>
  );
}
