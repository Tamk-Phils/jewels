import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { formatPrice } from "@/lib/format";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Marchello" }] }),
  component: CheckoutPage,
});

type Step = 1 | 2 | 3 | 4;

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const { user } = useAuth();
  const nav = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    full_name: "", email: user?.email ?? "", phone: "",
    line1: "", line2: "", city: "", state: "", postal_code: "", country: "United States",
    payment_method: "stripe",
  });

  const shipping = subtotal > 0 && subtotal < 500 ? 25 : 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="container-luxe py-32 text-center">
        <h1 className="font-display text-3xl">Your bag is empty.</h1>
        <Link to="/shop" className="btn-gold mt-8">Browse Collection</Link>
      </div>
    );
  }

  const placeOrder = async () => {
    if (!user) {
      toast.error("Please sign in to place an order");
      nav({ to: "/auth", search: { redirect: "/checkout" } as never });
      return;
    }
    setSubmitting(true);
    const address = { ...form };
    const { data: order, error } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        subtotal, shipping_cost: shipping, tax, total_amount: total,
        payment_method: form.payment_method,
        payment_status: "pending", status: "pending",
        shipping_address: address, billing_address: address,
      })
      .select("id,order_number")
      .single();
    if (error || !order) {
      toast.error("Could not place order");
      setSubmitting(false);
      return;
    }
    const items_payload = items.map((i) => ({
      order_id: order.id,
      product_id: i.id,
      product_name: i.name,
      product_image: i.image,
      quantity: i.quantity,
      price: i.price,
    }));
    const { error: itErr } = await supabase.from("order_items").insert(items_payload);
    if (itErr) {
      toast.error("Order saved but items failed");
    }
    clear();
    setStep(4);
    setSubmitting(false);
    toast.success(`Order ${order.order_number} placed`);
  };

  return (
    <div className="container-luxe py-12 md:py-20 max-w-4xl">
      <h1 className="font-display text-4xl md:text-5xl text-center mb-8">Checkout</h1>
      <div className="flex justify-center mb-12 gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.25em]">
        {["Shipping","Billing","Payment","Confirm"].map((s, i) => (
          <div key={s} className={`flex items-center gap-2 ${step >= (i+1) ? "text-gold" : "text-white/40"}`}>
            <span className={`h-6 w-6 rounded-full border flex items-center justify-center ${step >= (i+1) ? "border-[var(--gold)]" : "border-white/30"}`}>{i+1}</span>
            <span className="hidden md:inline">{s}</span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10">
        <div>
          {step === 1 && (
            <Fieldset title="Shipping Address">
              <Field label="Full Name" v={form.full_name} on={(v) => setForm({ ...form, full_name: v })} />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Email" v={form.email} on={(v) => setForm({ ...form, email: v })} />
                <Field label="Phone" v={form.phone} on={(v) => setForm({ ...form, phone: v })} />
              </div>
              <Field label="Address" v={form.line1} on={(v) => setForm({ ...form, line1: v })} />
              <Field label="Apt, suite (optional)" v={form.line2} on={(v) => setForm({ ...form, line2: v })} />
              <div className="grid grid-cols-2 gap-4">
                <Field label="City" v={form.city} on={(v) => setForm({ ...form, city: v })} />
                <Field label="State" v={form.state} on={(v) => setForm({ ...form, state: v })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="ZIP" v={form.postal_code} on={(v) => setForm({ ...form, postal_code: v })} />
                <Field label="Country" v={form.country} on={(v) => setForm({ ...form, country: v })} />
              </div>
              <button className="btn-gold mt-4" onClick={() => setStep(2)}>Continue</button>
            </Fieldset>
          )}
          {step === 2 && (
            <Fieldset title="Billing Address">
              <p className="text-sm text-white/60 mb-4">Using same as shipping address.</p>
              <div className="flex gap-3">
                <button className="btn-ghost-gold" onClick={() => setStep(1)}>Back</button>
                <button className="btn-gold" onClick={() => setStep(3)}>Continue</button>
              </div>
            </Fieldset>
          )}
          {step === 3 && (
            <Fieldset title="Payment Method">
              {[
                { id: "stripe", label: "Credit / Debit Card", note: "Secured by Stripe" },
                { id: "paypal", label: "PayPal", note: "Pay with your PayPal account" },
                { id: "mobile_money", label: "Mobile Money", note: "M-Pesa, MTN, Airtel" },
                { id: "bank_transfer", label: "Bank Transfer", note: "Wire / ACH" },
              ].map((m) => (
                <label key={m.id} className={`block border p-4 cursor-pointer transition ${form.payment_method === m.id ? "border-[var(--gold)]" : "border-white/15 hover:border-white/30"}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="pm" value={m.id} checked={form.payment_method === m.id}
                      onChange={() => setForm({ ...form, payment_method: m.id })} className="accent-[var(--gold)]" />
                    <div>
                      <div className="font-medium">{m.label}</div>
                      <div className="text-xs text-white/50">{m.note}</div>
                    </div>
                  </div>
                </label>
              ))}
              <p className="text-xs text-white/40 mt-4">
                Live payment processing will be enabled in the next phase. For now, your order is recorded as "pending".
              </p>
              <div className="flex gap-3 mt-4">
                <button className="btn-ghost-gold" onClick={() => setStep(2)}>Back</button>
                <button className="btn-gold" disabled={submitting} onClick={placeOrder}>
                  {submitting ? "Placing…" : "Place Order"}
                </button>
              </div>
            </Fieldset>
          )}
          {step === 4 && (
            <div className="text-center py-16 glass p-10">
              <div className="eyebrow">Thank you</div>
              <h2 className="font-display text-3xl mt-2">Order received</h2>
              <p className="mt-3 text-white/60">A confirmation has been sent to your email.</p>
              <Link to="/account" className="btn-gold mt-8 inline-flex">View Orders</Link>
            </div>
          )}
        </div>

        <aside className="glass p-6 h-fit space-y-3 text-sm">
          <div className="eyebrow mb-2">Your Order</div>
          {items.map((i) => (
            <div key={i.id} className="flex justify-between gap-2">
              <span className="text-white/70">{i.name} × {i.quantity}</span>
              <span>{formatPrice(i.price * i.quantity)}</span>
            </div>
          ))}
          <div className="border-t border-white/10 pt-3 space-y-2">
            <Row k="Subtotal" v={formatPrice(subtotal)} />
            <Row k="Shipping" v={shipping === 0 ? "Free" : formatPrice(shipping)} />
            <Row k="Tax" v={formatPrice(tax)} />
          </div>
          <div className="border-t border-white/10 pt-3 flex justify-between font-display text-lg">
            <span>Total</span><span className="text-gold">{formatPrice(total)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Fieldset({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl">{title}</h2>
      {children}
    </div>
  );
}
function Field({ label, v, on }: { label: string; v: string; on: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">{label}</span>
      <input value={v} onChange={(e) => on(e.target.value)}
        className="w-full bg-transparent border border-white/15 px-3 py-2 mt-1 focus:border-[var(--gold)] focus:outline-none" />
    </label>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex justify-between"><span className="text-white/60">{k}</span><span>{v}</span></div>;
}
