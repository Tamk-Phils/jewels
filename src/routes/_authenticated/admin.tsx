import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin — Marchello" }] }),
  component: AdminPage,
});

function AdminPage() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

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
      const { data } = await supabase.from("products").select("id,name,slug,price,stock,is_published");
      return data ?? [];
    },
  });
  const { data: orders = [] } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const { data } = await supabase.from("orders").select("id,order_number,total_amount,status,created_at").order("created_at", { ascending: false }).limit(20);
      return data ?? [];
    },
  });

  if (isAdmin === null) return <div className="container-luxe py-20 text-center text-white/50">Loading…</div>;
  if (isAdmin === false) {
    return (
      <div className="container-luxe py-20 text-center">
        <h1 className="font-display text-3xl">Access restricted</h1>
        <p className="mt-3 text-white/60">You need administrator privileges to view this page.</p>
        <p className="mt-2 text-xs text-white/40">
          Grant the admin role to your user via Lovable Cloud → SQL editor:<br/>
          <code className="text-gold">INSERT INTO public.user_roles (user_id, role) VALUES ('{user?.id}', 'admin');</code>
        </p>
        <Link to="/" className="btn-gold mt-8 inline-flex">Home</Link>
      </div>
    );
  }

  const totalRevenue = orders.reduce((s, o) => s + Number(o.total_amount), 0);

  return (
    <div className="container-luxe py-12">
      <h1 className="font-display text-4xl mb-8">Admin Dashboard</h1>
      <div className="grid sm:grid-cols-4 gap-4 mb-12">
        <Stat label="Products" v={String(products.length)} />
        <Stat label="Orders (recent)" v={String(orders.length)} />
        <Stat label="Revenue" v={formatPrice(totalRevenue)} />
        <Stat label="In Stock" v={String(products.filter((p) => p.stock > 0).length)} />
      </div>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Recent Orders</h2>
        <div className="glass overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[10px] uppercase tracking-[0.2em] text-white/50">
              <tr>{["Order","Total","Status","Date"].map((h) => <th key={h} className="p-4">{h}</th>)}</tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-white/10">
                  <td className="p-4 font-mono text-gold">{o.order_number}</td>
                  <td className="p-4">{formatPrice(o.total_amount)}</td>
                  <td className="p-4 capitalize">{o.status}</td>
                  <td className="p-4 text-white/60">{new Date(o.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl mb-4">Products</h2>
        <div className="glass overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-[10px] uppercase tracking-[0.2em] text-white/50">
              <tr>{["Name","Price","Stock","Published"].map((h) => <th key={h} className="p-4">{h}</th>)}</tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-white/10">
                  <td className="p-4">{p.name}</td>
                  <td className="p-4">{formatPrice(p.price)}</td>
                  <td className="p-4">{p.stock}</td>
                  <td className="p-4">{p.is_published ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-white/40">Full CRUD (create/edit/delete) ships in the next phase.</p>
      </section>
    </div>
  );
}

function Stat({ label, v }: { label: string; v: string }) {
  return (
    <div className="glass p-6">
      <div className="eyebrow">{label}</div>
      <div className="font-display text-3xl text-gold mt-2">{v}</div>
    </div>
  );
}

// keep redirect import used to satisfy ts in strict envs
void redirect;
