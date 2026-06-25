import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { formatPrice } from "@/lib/format";
import { productPrimaryImage } from "@/lib/product-image";

export const Route = createFileRoute("/_authenticated/account")({
  head: () => ({ meta: [{ title: "Account — Marchello" }] }),
  component: AccountPage,
});

type Tab = "overview" | "orders" | "wishlist" | "addresses" | "profile";

function AccountPage() {
  const { user, signOut } = useAuth();
  const [tab, setTab] = useState<Tab>("overview");

  const { data: profile } = useQuery({
    queryKey: ["profile", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("profiles").select("*").eq("id", user!.id).maybeSingle();
      return data;
    },
  });

  const { data: orders = [] } = useQuery({
    queryKey: ["orders", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("orders").select("*,order_items(*)").eq("user_id", user!.id).order("created_at", { ascending: false });
      return data ?? [];
    },
  });

  const { data: wishlist = [] } = useQuery({
    queryKey: ["wishlist", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("wishlist").select("*,product:products(id,name,slug,price,sale_price,images,category:categories(slug,name))").eq("user_id", user!.id);
      return data ?? [];
    },
  });

  const { data: addresses = [] } = useQuery({
    queryKey: ["addresses", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase.from("addresses").select("*").eq("user_id", user!.id);
      return data ?? [];
    },
  });

  return (
    <div className="container-luxe py-12 md:py-16">
      <div className="flex flex-wrap justify-between items-end mb-10 gap-4">
        <div>
          <div className="eyebrow">Your Account</div>
          <h1 className="font-display text-4xl mt-2">Hello, {profile?.full_name || user?.email?.split("@")[0]}</h1>
        </div>
        <button onClick={() => signOut().then(() => toast.success("Signed out"))} className="btn-ghost-gold !py-2 !px-4 text-xs">Sign out</button>
      </div>

      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        <nav className="flex md:flex-col gap-1 overflow-x-auto">
          {(["overview","orders","wishlist","addresses","profile"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`text-left px-4 py-3 text-sm uppercase tracking-[0.2em] border-l-2 transition ${tab === t ? "border-[var(--gold)] text-gold bg-white/5" : "border-transparent text-white/60 hover:text-white"}`}
            >{t}</button>
          ))}
        </nav>

        <div>
          {tab === "overview" && (
            <div className="grid sm:grid-cols-3 gap-4">
              <Stat label="Orders" value={String(orders.length)} />
              <Stat label="Wishlist" value={String(wishlist.length)} />
              <Stat label="Loyalty Points" value={String(profile?.loyalty_points ?? 0)} />
            </div>
          )}

          {tab === "orders" && (
            orders.length === 0 ? <Empty msg="No orders yet" cta /> :
            <ul className="space-y-4">
              {orders.map((o) => (
                <li key={o.id} className="glass p-5">
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <div className="font-display text-lg">{o.order_number}</div>
                      <div className="text-xs text-white/50">{new Date(o.created_at).toLocaleDateString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gold">{formatPrice(o.total_amount)}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">{o.status}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    {(o.order_items as { product_name: string; quantity: number }[] | null)?.map((it, i) => (
                      <div key={i}>{it.quantity} × {it.product_name}</div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {tab === "wishlist" && (
            wishlist.length === 0 ? <Empty msg="Your wishlist is empty" cta /> :
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {wishlist.map((w) => {
                const p = (w as { product: never }).product as { id: string; name: string; slug: string; price: number; sale_price: number | null; images: unknown; category: { slug: string; name: string } | null } | null;
                if (!p) return null;
                return (
                  <Link key={(w as { id: string }).id} to="/product/$slug" params={{ slug: p.slug }} className="block group">
                    <div className="aspect-[4/5] bg-[var(--ink)] overflow-hidden">
                      <img src={productPrimaryImage(p)} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="pt-3 text-sm">
                      <div className="font-display group-hover:text-gold">{p.name}</div>
                      <div className="text-white/60">{formatPrice(p.sale_price ?? p.price)}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {tab === "addresses" && (
            addresses.length === 0
              ? <Empty msg="No saved addresses" />
              : <ul className="grid sm:grid-cols-2 gap-4">
                  {addresses.map((a) => (
                    <li key={a.id} className="glass p-5 text-sm">
                      <div className="font-display text-lg">{a.full_name}</div>
                      <div className="text-white/60 mt-1">{a.line1}{a.line2 ? `, ${a.line2}` : ""}</div>
                      <div className="text-white/60">{a.city}, {a.state} {a.postal_code}</div>
                      <div className="text-white/60">{a.country}</div>
                    </li>
                  ))}
                </ul>
          )}

          {tab === "profile" && <ProfileForm profile={profile} userEmail={user?.email ?? ""} />}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass p-6">
      <div className="eyebrow">{label}</div>
      <div className="font-display text-4xl text-gold mt-2">{value}</div>
    </div>
  );
}
function Empty({ msg, cta }: { msg: string; cta?: boolean }) {
  return (
    <div className="text-center py-16 text-white/50">
      <p>{msg}</p>
      {cta && <Link to="/shop" className="btn-gold mt-6 inline-flex">Browse Collection</Link>}
    </div>
  );
}

function ProfileForm({ profile, userEmail }: { profile: { full_name?: string | null; phone?: string | null } | null | undefined; userEmail: string }) {
  const { user } = useAuth();
  const [name, setName] = useState(profile?.full_name ?? "");
  const [phone, setPhone] = useState(profile?.phone ?? "");
  const [busy, setBusy] = useState(false);
  const save = async () => {
    if (!user) return;
    setBusy(true);
    const { error } = await supabase.from("profiles").upsert({ id: user.id, full_name: name, phone, email: userEmail });
    setBusy(false);
    if (error) toast.error(error.message); else toast.success("Profile updated");
  };
  return (
    <div className="max-w-lg space-y-4">
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Full Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} className="auth-input" />
      </label>
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Email</span>
        <input value={userEmail} disabled className="auth-input opacity-60" />
      </label>
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Phone</span>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="auth-input" />
      </label>
      <button onClick={save} disabled={busy} className="btn-gold">Save Changes</button>
      <style>{`.auth-input{width:100%;background:transparent;border:1px solid rgba(255,255,255,.18);padding:.75rem .9rem;color:white;font-size:.9rem;margin-top:.25rem}.auth-input:focus{outline:none;border-color:var(--gold)}`}</style>
    </div>
  );
}
