import { SEED_CATEGORIES, SEED_PRODUCTS, type SeedCategory, type SeedProduct } from "./seed-catalog";

const CUSTOM_PRODUCTS_KEY = "lumina_luxe_custom_products";
const CUSTOM_CATEGORIES_KEY = "lumina_luxe_custom_categories";
const DELETED_PRODUCT_IDS_KEY = "lumina_luxe_deleted_product_ids";

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

function getStoredCustomProducts(): SeedProduct[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function getDeletedProductIds(): Set<string> {
  if (!isBrowser()) return new Set();
  try {
    const raw = localStorage.getItem(DELETED_PRODUCT_IDS_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function getStoredCustomCategories(): SeedCategory[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(CUSTOM_CATEGORIES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getCatalogCategories(): SeedCategory[] {
  const customCats = getStoredCustomCategories();
  const catMap = new Map<string, SeedCategory>();
  SEED_CATEGORIES.forEach((c) => catMap.set(c.id, c));
  customCats.forEach((c) => catMap.set(c.id, c));
  return Array.from(catMap.values()).sort((a, b) => a.sort_order - b.sort_order);
}

export function getCatalogProducts(options?: {
  category_id?: string;
  category_slug?: string;
  slug?: string;
  is_published?: boolean;
  is_featured?: boolean;
  is_bestseller?: boolean;
  is_new?: boolean;
  search?: string;
  limit?: number;
}): SeedProduct[] {
  const customProducts = getStoredCustomProducts();
  const deletedIds = getDeletedProductIds();
  const categories = getCatalogCategories();

  const prodMap = new Map<string, SeedProduct>();

  // Load seeds first
  SEED_PRODUCTS.forEach((p) => {
    if (!deletedIds.has(p.id)) {
      prodMap.set(p.id, p);
    }
  });

  // Override or add custom products
  customProducts.forEach((p) => {
    if (!deletedIds.has(p.id)) {
      // Ensure category object is attached
      const cat = categories.find((c) => c.id === p.category_id);
      prodMap.set(p.id, {
        ...p,
        category: cat ? { id: cat.id, slug: cat.slug, name: cat.name } : p.category || null,
      });
    }
  });

  let list = Array.from(prodMap.values());

  if (options) {
    if (options.slug) {
      list = list.filter((p) => p.slug === options.slug);
    }

    if (options.is_published !== undefined) {
      list = list.filter((p) => p.is_published === options.is_published);
    }

    if (options.is_featured) {
      list = list.filter((p) => p.is_featured);
    }

    if (options.is_bestseller) {
      list = list.filter((p) => p.is_bestseller);
    }

    if (options.is_new) {
      list = list.filter((p) => p.is_new);
    }

    if (options.category_id && options.category_id !== "all") {
      list = list.filter((p) => p.category_id === options.category_id);
    }

    if (options.category_slug) {
      list = list.filter((p) => p.category?.slug === options.category_slug);
    }

    if (options.search) {
      const q = options.search.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      );
    }

    if (options.limit && options.limit > 0) {
      list = list.slice(0, options.limit);
    }
  }

  return list;
}

export function getCatalogProductBySlug(slug: string): SeedProduct | null {
  const products = getCatalogProducts({ slug });
  return products.length > 0 ? products[0] : null;
}

export function upsertCatalogProduct(
  input: Partial<SeedProduct> & { name: string; price: number }
): SeedProduct {
  const categories = getCatalogCategories();
  const customProducts = getStoredCustomProducts();
  const slug =
    input.slug ||
    input.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const id = input.id || `custom-prod-${Date.now()}`;
  const category_id = input.category_id || categories[0]?.id || "11111111-1111-1111-1111-111111111111";
  const catObj = categories.find((c) => c.id === category_id);

  const newProd: SeedProduct = {
    id,
    name: input.name,
    slug,
    description: input.description || "",
    price: Number(input.price),
    sale_price: input.sale_price ? Number(input.sale_price) : null,
    images: Array.isArray(input.images) ? input.images : [],
    is_published: input.is_published !== undefined ? input.is_published : true,
    stock: input.stock !== undefined ? Number(input.stock) : 10,
    category_id,
    gender: input.gender || "Unisex",
    material: input.material || "18k Gold",
    is_bestseller: !!input.is_bestseller,
    is_featured: !!input.is_featured,
    is_new: !!input.is_new,
    created_at: input.created_at || new Date().toISOString(),
    category: catObj ? { id: catObj.id, slug: catObj.slug, name: catObj.name } : null,
  };

  const existingIdx = customProducts.findIndex((p) => p.id === id || p.slug === slug);
  if (existingIdx >= 0) {
    customProducts[existingIdx] = newProd;
  } else {
    customProducts.unshift(newProd);
  }

  if (isBrowser()) {
    try {
      localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(customProducts));
    } catch (e) {
      console.error("Failed to save product to localStorage:", e);
    }
  }

  return newProd;
}

export function deleteCatalogProduct(id: string): void {
  if (!isBrowser()) return;
  const deletedIds = getDeletedProductIds();
  deletedIds.add(id);
  try {
    localStorage.setItem(DELETED_PRODUCT_IDS_KEY, JSON.stringify(Array.from(deletedIds)));
    const customProducts = getStoredCustomProducts().filter((p) => p.id !== id);
    localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(customProducts));
  } catch (e) {
    console.error("Failed to delete product from localStorage:", e);
  }
}
