import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Shopping Bag — Marchello" }, { name: "description", content: "Your shopping bag." }] }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shipping = subtotal > 0 && subtotal < 500 ? 25 : 0;
  const tax = Math.round((subtotal - discount) * 0.08);
  const total = Math.max(0, subtotal - discount + shipping + tax);

  if (items.length === 0) {
    return (
      <div className="container-luxe py-32 text-center">
        <h1 className="font-display text-4xl">Your bag is empty</h1>
        <p className="mt-3 text-white/60">Discover hand-crafted pieces made to last a lifetime.</p>
        <Link to="/shop" className="btn-gold mt-8">Shop the Collection</Link>
      </div>
    );
  }

  return (
    <div className="container-luxe py-16">
      <h1 className="font-display text-4xl md:text-5xl mb-10">Shopping Bag</h1>
      <div className="grid lg:grid-cols-[1fr_380px] gap-12">
        <ul className="space-y-6">
          {items.map((i) => (
            <li key={i.id} className="flex gap-5 border-b border-white/10 pb-6">
              <Link to="/product/$slug" params={{ slug: i.slug }} className="w-24 h-32 bg-[var(--ink)] overflow-hidden flex-shrink-0">
                <img src={i.image} alt={i.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex-1">
                <Link to="/product/$slug" params={{ slug: i.slug }} className="font-display text-lg hover:text-gold">{i.name}</Link>
                <div className="mt-1 text-sm text-white/60">{formatPrice(i.price)}</div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="inline-flex items-center border border-white/20">
                    <button onClick={() => setQty(i.id, i.quantity - 1)} className="p-2"><Minus className="h-3 w-3" /></button>
                    <span className="px-3 text-sm">{i.quantity}</span>
                    <button onClick={() => setQty(i.id, i.quantity + 1)} className="p-2"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(i.id)} className="text-white/40 hover:text-gold p-2" aria-label="Remove">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="text-right text-gold font-display">{formatPrice(i.price * i.quantity)}</div>
            </li>
          ))}
        </ul>

        <aside className="glass p-6 h-fit space-y-4">
          <div className="eyebrow">Order Summary</div>
          <Row k="Subtotal" v={formatPrice(subtotal)} />
          <div>
            <div className="flex gap-2">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Coupon code"
                className="flex-1 bg-transparent border border-white/20 px-3 py-2 text-sm focus:border-[var(--gold)] focus:outline-none"
              />
              <button
                onClick={() => {
                  if (code === "WELCOME10" && subtotal >= 200) setDiscount(Math.round(subtotal * 0.1));
                  else if (code === "LUXE50" && subtotal >= 500) setDiscount(50);
                  else setDiscount(0);
                }}
                className="btn-ghost-gold !py-2 !px-4 text-xs"
              >Apply</button>
            </div>
            {discount > 0 && <div className="text-xs text-gold mt-2">Code applied: −{formatPrice(discount)}</div>}
          </div>
          <Row k="Shipping" v={shipping === 0 ? "Free" : formatPrice(shipping)} />
          <Row k="Tax (est.)" v={formatPrice(tax)} />
          <div className="border-t border-white/10 pt-4 flex justify-between font-display text-lg">
            <span>Total</span><span className="text-gold">{formatPrice(total)}</span>
          </div>
          <Link to="/checkout" className="btn-gold w-full">Checkout</Link>
          <Link to="/shop" className="block text-center text-xs uppercase tracking-[0.2em] text-white/60 hover:text-gold">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex justify-between text-sm"><span className="text-white/60">{k}</span><span>{v}</span></div>;
}
