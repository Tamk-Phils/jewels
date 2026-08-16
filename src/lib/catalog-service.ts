import { supabase } from "@/integrations/supabase/client";
import {
  getCatalogProducts,
  getCatalogProductBySlug,
  getCatalogCategories,
  upsertCatalogProduct,
  deleteCatalogProduct,
} from "@/data/catalog-store";
import type { SeedProduct } from "@/data/seed-catalog";

export async function fetchCategories() {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("sort_order");
    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn("Supabase fetchCategories failed, using catalog store fallback:", err);
  }
  return getCatalogCategories();
}

export async function fetchProducts(options?: {
  category_id?: string;
  category_slug?: string;
  slug?: string;
  is_published?: boolean;
  is_featured?: boolean;
  is_bestseller?: boolean;
  is_new?: boolean;
  search?: string;
  limit?: number;
  gender?: string;
  material?: string;
  minPrice?: number;
  maxPrice?: number;
}) {
  try {
    let query = supabase
      .from("products")
      .select(
        "id,name,slug,description,price,sale_price,images,media,is_published,stock,category_id,gender,material,is_bestseller,is_featured,is_new,created_at,category:categories(id,slug,name)"
      );

    if (options?.is_published !== undefined) {
      query = query.eq("is_published", options.is_published);
    } else {
      query = query.eq("is_published", true);
    }

    if (options?.slug) {
      query = query.eq("slug", options.slug);
    }

    if (options?.is_featured) {
      query = query.eq("is_featured", true);
    }

    if (options?.is_bestseller) {
      query = query.eq("is_bestseller", true);
    }

    if (options?.is_new) {
      query = query.eq("is_new", true);
    }

    if (options?.category_id && options.category_id !== "all") {
      query = query.eq("category_id", options.category_id);
    }

    if (options?.limit && options.limit > 0) {
      query = query.limit(options.limit);
    }

    query = query.order("created_at", { ascending: false });

    const { data, error } = await query;

    if (!error && data && data.length > 0) {
      let filtered = data as any[];

      if (options?.category_slug) {
        filtered = filtered.filter((p) => p.category?.slug === options.category_slug);
      }

      if (options?.search) {
        const q = options.search.toLowerCase().trim();
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.slug.toLowerCase().includes(q) ||
            (p.description && p.description.toLowerCase().includes(q))
        );
      }

      if (options?.gender && options.gender !== "all") {
        filtered = filtered.filter((p) => p.gender === options.gender);
      }

      if (options?.material && options.material !== "all") {
        filtered = filtered.filter(
          (p) => p.material && p.material.toLowerCase().includes(options.material!.toLowerCase())
        );
      }

      if (options?.minPrice !== undefined) {
        filtered = filtered.filter((p) => Number(p.sale_price ?? p.price) >= options.minPrice!);
      }

      if (options?.maxPrice !== undefined) {
        filtered = filtered.filter((p) => Number(p.sale_price ?? p.price) <= options.maxPrice!);
      }

      if (filtered.length > 0) {
        return filtered;
      }
    }
  } catch (err) {
    console.warn("Supabase fetchProducts failed, using catalog store fallback:", err);
  }

  // Fallback to local catalog store
  let fallbackList = getCatalogProducts(options);

  if (options?.gender && options.gender !== "all") {
    fallbackList = fallbackList.filter((p) => p.gender === options.gender);
  }

  if (options?.material && options.material !== "all") {
    fallbackList = fallbackList.filter(
      (p) => p.material && p.material.toLowerCase().includes(options.material!.toLowerCase())
    );
  }

  if (options?.minPrice !== undefined) {
    fallbackList = fallbackList.filter((p) => (p.sale_price ?? p.price) >= options.minPrice!);
  }

  if (options?.maxPrice !== undefined) {
    fallbackList = fallbackList.filter((p) => (p.sale_price ?? p.price) <= options.maxPrice!);
  }

  return fallbackList;
}

export async function fetchProductBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*,category:categories(id,slug,name)")
      .eq("slug", slug)
      .maybeSingle();

    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.warn("Supabase fetchProductBySlug failed, using catalog store fallback:", err);
  }

  return getCatalogProductBySlug(slug);
}

export async function saveProductToStore(product: Partial<SeedProduct> & { name: string; price: number }) {
  // Always update local store so posts never vanish
  const updated = upsertCatalogProduct(product);

  try {
    await supabase.from("products").upsert({
      id: updated.id.startsWith("seed-prod-") || updated.id.startsWith("custom-prod-") ? undefined : updated.id,
      name: updated.name,
      slug: updated.slug,
      description: updated.description,
      price: updated.price,
      sale_price: updated.sale_price,
      images: updated.images,
      is_published: updated.is_published,
      stock: updated.stock,
      category_id: updated.category_id,
      gender: updated.gender,
      material: updated.material,
      is_bestseller: updated.is_bestseller,
      is_featured: updated.is_featured,
      is_new: updated.is_new,
    });
  } catch (err) {
    console.warn("Supabase save product failed, kept in catalog store:", err);
  }

  return updated;
}

export async function removeProductFromStore(id: string) {
  deleteCatalogProduct(id);
  try {
    await supabase.from("products").delete().eq("id", id);
  } catch (err) {
    console.warn("Supabase remove product failed, removed from catalog store:", err);
  }
}
