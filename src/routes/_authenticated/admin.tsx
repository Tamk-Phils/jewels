import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Edit3, Trash2, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { formatPrice } from "@/lib/format";
import { MediaUploader } from "@/components/media-uploader";
import type { MediaItem } from "@/lib/media";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin — Marchello" }] }),
  component: AdminPage,
});

type ProductRow = {
  id: string;
  name: string;
  slug: string;
  price: number;
  sale_price: number | null;
  stock: number;
  is_published: boolean;
  is_new?: boolean | null;
  is_bestseller?: boolean | null;
  is_featured?: boolean | null;
  description?: string | null;
  material?: string | null;
  category_id?: string | null;
  media?: MediaItem[] | null;
};

function AdminPage() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Partial<ProductRow> | null>(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);

  const { data: products = [] } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-products"],
    queryFn: async () => {
      const { data } = await supabase
        .from("products")
        .select("id,name,slug,price,sale_price,stock,is_published,is_new,is_bestseller,is_featured,description,material,category_id,media")
        .order("created_at", { ascending: false });
      return (data ?? []) as ProductRow[];
    },
  });

  const { data: categories = [] } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-categories"],
    queryFn: async () => {
      const { data } = await supabase.from("categories").select("id,name,slug").order("sort_order");
      return data ?? [];
    },
  });

  const { data: orders = [] } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const { data } = await supabase
        .from("orders")
        .select("id,order_number,total_amount,status,created_at")
        .order("created_at", { ascending: false })
        .limit(20);
      return data ?? [];
    },
  });

  if (isAdmin === null) return <div className="container-luxe py-20 text-center text-foreground/50">Loading…</div>;
  if (isAdmin === false) {
    return (
      <div className="container-luxe py-20 text-center">
        <h1 className="font-display text-3xl">Access restricted</h1>
        <p className="mt-3 text-foreground/60">You need administrator privileges to view this page.</p>
        <p className="mt-2 text-xs text-foreground/40">
          Grant admin role via Backend → SQL editor:<br />
          <code className="text-gold">INSERT INTO public.user_roles (user_id, role) VALUES ('{user?.id}', 'admin');</code>
        </p>
        <Link to="/" className="btn-gold mt-8 inline-flex">Home</Link>
      </div>
    );
  }

  const totalRevenue = orders.reduce((s, o) => s + Number(o.total_amount), 0);

  const remove = async (id: string) => {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      qc.invalidateQueries({ queryKey: ["admin-products"] });
    }
  };

  return (
    <div className="container-luxe py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-4xl">Admin Dashboard</h1>
        <button
          onClick={() => setEditing({ name: "", slug: "", price: 0, stock: 1, is_published: true, media: [] })}
          className="btn-gold"
        >
          <Plus className="h-4 w-4" /> New product
        </button>
      </div>

      <div className="grid sm:grid-cols-4 gap-4 mb-12">
        <Stat label="Products" v={String(products.length)} />
        <Stat label="Orders (recent)" v={String(orders.length)} />
        <Stat label="Revenue" v={formatPrice(totalRevenue)} />
        <Stat label="In Stock" v={String(products.filter((p) => p.stock > 0).length)} />
      </div>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Products</h2>
        <div className="bg-white/60 border border-foreground/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              <tr>{["Media","Name","Price","Stock","Published",""].map((h) => <th key={h} className="p-3">{h}</th>)}</tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const cover = Array.isArray(p.media) ? p.media.find((m) => m.type === "image") ?? p.media[0] : null;
                return (
                  <tr key={p.id} className="border-t border-foreground/10">
                    <td className="p-3">
                      {cover?.url ? (
                        cover.type === "video" ? (
                          <video src={cover.url} className="h-12 w-12 object-cover rounded" muted />
                        ) : (
                          <img src={cover.url} alt="" className="h-12 w-12 object-cover rounded" />
                        )
                      ) : <div className="h-12 w-12 bg-foreground/10 rounded" />}
                    </td>
                    <td className="p-3 font-medium">{p.name}</td>
                    <td className="p-3">{formatPrice(p.price)}</td>
                    <td className="p-3">{p.stock}</td>
                    <td className="p-3">{p.is_published ? "Yes" : "No"}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => setEditing(p)} className="p-1.5 hover:text-gold" aria-label="Edit">
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button onClick={() => remove(p.id)} className="p-1.5 hover:text-red-600" aria-label="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Categories</h2>
        <CategoriesManager />
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Recent Orders</h2>
        <div className="bg-white/60 border border-foreground/10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              <tr>{["Order","Total","Status","Date"].map((h) => <th key={h} className="p-4">{h}</th>)}</tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-foreground/10">
                  <td className="p-4 font-mono text-gold">{o.order_number}</td>
                  <td className="p-4">{formatPrice(o.total_amount)}</td>
                  <td className="p-4">
                    <OrderStatus id={o.id} status={o.status} />
                  </td>
                  <td className="p-4 text-foreground/60">{new Date(o.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr><td colSpan={4} className="p-6 text-center text-foreground/50">No orders yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {editing && (
        <ProductEditor
          initial={editing}
          categories={categories}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            qc.invalidateQueries({ queryKey: ["admin-products"] });
          }}
        />
      )}
    </div>
  );
}

function Stat({ label, v }: { label: string; v: string }) {
  return (
    <div className="bg-white/60 border border-foreground/10 p-6">
      <div className="eyebrow">{label}</div>
      <div className="font-display text-3xl text-gold mt-2">{v}</div>
    </div>
  );
}

function ProductEditor({
  initial,
  categories,
  onClose,
  onSaved,
}: {
  initial: Partial<ProductRow>;
  categories: { id: string; name: string; slug: string }[];
  onClose: () => void;
  onSaved: () => void;
}) {
  const [form, setForm] = useState<Partial<ProductRow>>({
    ...initial,
    media: Array.isArray(initial.media) ? initial.media : [],
  });
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof ProductRow>(k: K, v: ProductRow[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const save = async () => {
    if (!form.name || !form.slug) {
      toast.error("Name and slug are required");
      return;
    }
    setSaving(true);
    const payload = {
      name: form.name,
      slug: form.slug,
      description: form.description ?? null,
      price: Number(form.price ?? 0),
      sale_price: form.sale_price != null && String(form.sale_price).length > 0 ? Number(form.sale_price) : null,
      stock: Number(form.stock ?? 0),
      material: form.material ?? null,
      category_id: form.category_id ?? null,
      is_published: !!form.is_published,
      is_new: !!form.is_new,
      is_bestseller: !!form.is_bestseller,
      is_featured: !!form.is_featured,
      media: (form.media ?? []) as unknown as never,
    };
    const q = form.id
      ? supabase.from("products").update(payload).eq("id", form.id)
      : supabase.from("products").insert(payload);
    const { error } = await q;
    setSaving(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Saved");
      onSaved();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start md:items-center justify-center p-4 overflow-y-auto">
      <div className="bg-background w-full max-w-4xl rounded-md shadow-2xl my-8">
        <div className="flex items-center justify-between border-b border-foreground/10 p-5">
          <h2 className="font-display text-2xl">{form.id ? "Edit product" : "New product"}</h2>
          <button onClick={onClose} className="p-2 hover:text-gold" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="eyebrow block mb-3">Photos & Videos</label>
            <MediaUploader
              value={(form.media ?? []) as MediaItem[]}
              onChange={(m) => set("media", m as unknown as ProductRow["media"])}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name">
              <input className="input" value={form.name ?? ""} onChange={(e) => set("name", e.target.value)} />
            </Field>
            <Field label="Slug (URL)">
              <input className="input" value={form.slug ?? ""}
                onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-"))} />
            </Field>
            <Field label="Category">
              <select className="input" value={form.category_id ?? ""} onChange={(e) => set("category_id", e.target.value || null)}>
                <option value="">— None —</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </Field>
            <Field label="Material">
              <input className="input" value={form.material ?? ""} onChange={(e) => set("material", e.target.value)} />
            </Field>
            <Field label="Price (USD)">
              <input type="number" step="0.01" className="input" value={form.price ?? 0} onChange={(e) => set("price", Number(e.target.value))} />
            </Field>
            <Field label="Sale price (optional)">
              <input type="number" step="0.01" className="input" value={form.sale_price ?? ""} onChange={(e) => set("sale_price", e.target.value ? Number(e.target.value) : null)} />
            </Field>
            <Field label="Stock">
              <input type="number" className="input" value={form.stock ?? 0} onChange={(e) => set("stock", Number(e.target.value))} />
            </Field>
          </div>

          <Field label="Description">
            <textarea rows={4} className="input" value={form.description ?? ""} onChange={(e) => set("description", e.target.value)} />
          </Field>

          <div className="flex flex-wrap gap-4">
            <Toggle label="Published" v={!!form.is_published} onChange={(v) => set("is_published", v)} />
            <Toggle label="New" v={!!form.is_new} onChange={(v) => set("is_new", v)} />
            <Toggle label="Best seller" v={!!form.is_bestseller} onChange={(v) => set("is_bestseller", v)} />
            <Toggle label="Featured" v={!!form.is_featured} onChange={(v) => set("is_featured", v)} />
          </div>
        </div>

        <div className="border-t border-foreground/10 p-5 flex justify-end gap-3">
          <button onClick={onClose} className="btn-ghost-gold">Cancel</button>
          <button onClick={save} disabled={saving} className="btn-gold disabled:opacity-50">
            {saving ? "Saving…" : "Save product"}
          </button>
        </div>
      </div>
      <style>{`.input{width:100%;background:transparent;border:1px solid color-mix(in oklab, currentColor 15%, transparent);padding:.6rem .75rem;font-size:.9rem;border-radius:4px}.input:focus{outline:none;border-color:var(--gold)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-foreground/50 block mb-2">{label}</label>
      {children}
    </div>
  );
}

function Toggle({ label, v, onChange }: { label: string; v: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-sm">
      <input type="checkbox" checked={v} onChange={(e) => onChange(e.target.checked)} className="accent-[var(--gold)]" />
      {label}
    </label>
  );
}

const ORDER_STATUSES = ["pending", "paid", "processing", "shipped", "delivered", "cancelled", "refunded"] as const;

function OrderStatus({ id, status }: { id: string; status: string }) {
  const qc = useQueryClient();
  const [val, setVal] = useState(status);
  const [saving, setSaving] = useState(false);
  const change = async (v: string) => {
    setVal(v);
    setSaving(true);
    const { error } = await supabase.from("orders").update({ status: v }).eq("id", id);
    setSaving(false);
    if (error) {
      toast.error(error.message);
      setVal(status);
    } else {
      toast.success("Status updated");
      qc.invalidateQueries({ queryKey: ["admin-orders"] });
    }
  };
  return (
    <select
      value={val}
      disabled={saving}
      onChange={(e) => change(e.target.value)}
      className="bg-transparent border border-foreground/15 rounded px-2 py-1 text-xs capitalize focus:border-[var(--gold)] focus:outline-none"
    >
      {ORDER_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
    </select>
  );
}

function CategoriesManager() {
  const qc = useQueryClient();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const { data: cats = [] } = useQuery({
    queryKey: ["admin-categories-full"],
    queryFn: async () => {
      const { data } = await supabase.from("categories").select("id,name,slug,sort_order").order("sort_order");
      return data ?? [];
    },
  });
  const add = async () => {
    if (!name || !slug) return toast.error("Name and slug required");
    const { error } = await supabase.from("categories").insert({ name, slug, sort_order: cats.length });
    if (error) return toast.error(error.message);
    setName(""); setSlug("");
    toast.success("Category added");
    qc.invalidateQueries({ queryKey: ["admin-categories-full"] });
    qc.invalidateQueries({ queryKey: ["admin-categories"] });
  };
  const remove = async (id: string) => {
    if (!confirm("Delete this category?")) return;
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) return toast.error(error.message);
    qc.invalidateQueries({ queryKey: ["admin-categories-full"] });
    qc.invalidateQueries({ queryKey: ["admin-categories"] });
  };
  return (
    <div className="bg-white/60 border border-foreground/10 p-5">
      <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-3 mb-4">
        <input
          className="bg-transparent border border-foreground/15 rounded px-3 py-2 text-sm focus:border-[var(--gold)] focus:outline-none"
          placeholder="Category name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (!slug) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-"));
          }}
        />
        <input
          className="bg-transparent border border-foreground/15 rounded px-3 py-2 text-sm focus:border-[var(--gold)] focus:outline-none"
          placeholder="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-"))}
        />
        <button onClick={add} className="btn-gold"><Plus className="h-4 w-4" /> Add</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <div key={c.id} className="flex items-center gap-2 border border-foreground/15 rounded px-3 py-1.5 text-sm">
            <span className="font-medium">{c.name}</span>
            <span className="text-foreground/50 text-xs">/{c.slug}</span>
            <button onClick={() => remove(c.id)} className="text-foreground/40 hover:text-red-600" aria-label="Delete">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
        {cats.length === 0 && <div className="text-sm text-foreground/50">No categories yet.</div>}
      </div>
    </div>
  );
}
