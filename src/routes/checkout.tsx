import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, memo } from "react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { formatPrice } from "@/lib/format";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Marchello" }] }),
  component: CheckoutPage,
});

type CheckoutFormData = {
  full_name: string;
  email: string;
  phone: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  payment_method: string;
};

/* ─── parent: only reads cart + auth, never re-renders from form state ─── */
function CheckoutPage() {
  const { items, subtotal, clear, isLoaded } = useCart();
  const { user } = useAuth();
  const nav = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const shipping = subtotal > 0 && subtotal < 500 ? 25 : 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  if (!isLoaded) return null;

  if (items.length === 0) {
    return (
      <div className="container-luxe py-32 text-center">
        <h1 className="font-display text-3xl">Your bag is empty.</h1>
        <Link to="/shop" className="btn-gold mt-8 inline-flex">Browse Collection</Link>
      </div>
    );
  }

  const handleOrder = async (data: CheckoutFormData) => {
    if (!user) {
      toast.error("Please sign in to place an order");
      nav({ to: "/auth", search: { redirect: "/checkout" } as never });
      return false;
    }
    const address = { ...data };
    const { data: order, error } = await supabase
      .from("orders")
      .insert({
        user_id: user.id,
        subtotal,
        shipping_cost: shipping,
        tax,
        total_amount: total,
        payment_method: data.payment_method,
        payment_status: "pending",
        status: "pending",
        shipping_address: address,
        billing_address: address,
      })
      .select("id,order_number")
      .single();

    if (error || !order) {
      toast.error("Could not place order");
      return false;
    }

    // fire-and-forget email notification
    fetch("/.netlify/functions/order-confirmation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payload: {
          order_number: order.order_number,
          customer_email: data.email,
          customer_name: data.full_name,
          subtotal,
          total,
        }
      })
    }).catch((err) => console.error("Email notification failed:", err));

    clear();
    toast.success(`Order ${order.order_number} placed`);
    return true;
  };

  return (
    <div className="container-luxe py-12 md:py-20 max-w-5xl">
      <h1 className="font-display text-4xl md:text-5xl text-center mb-8">Checkout</h1>

      <StepIndicator step={step} />

      <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
        <CheckoutForm
          step={step}
          setStep={setStep}
          userEmail={user?.email ?? ""}
          onSubmitOrder={handleOrder}
        />

        {step !== 4 && (
          <OrderSummary
            items={items}
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
          />
        )}
      </div>
    </div>
  );
}

/* ─── Step indicator – pure, no state ─── */
const StepIndicator = memo(function StepIndicator({ step }: { step: number }) {
  return (
    <div className="flex justify-center mb-12 gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.25em]">
      {["Shipping", "Billing", "Payment", "Confirm"].map((s, i) => (
        <div key={s} className={`flex items-center gap-2 ${step >= (i + 1) ? "text-gold font-medium" : "text-foreground/40"}`}>
          <span className={`h-6 w-6 rounded-full border flex items-center justify-center ${step >= (i + 1) ? "border-[var(--gold)] bg-[var(--gold)]/10" : "border-foreground/20"}`}>{i + 1}</span>
          <span className="hidden md:inline">{s}</span>
        </div>
      ))}
    </div>
  );
});

/* ─── ISOLATED form component — keystrokes ONLY re-render this ─── */
function CheckoutForm({
  step,
  setStep,
  userEmail,
  onSubmitOrder,
}: {
  step: 1 | 2 | 3 | 4;
  setStep: (s: 1 | 2 | 3 | 4) => void;
  userEmail: string;
  onSubmitOrder: (data: CheckoutFormData) => Promise<boolean>;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<CheckoutFormData>({
    full_name: "",
    email: userEmail,
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "United States",
    payment_method: "stripe",
  });

  const set = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const ok = await onSubmitOrder(form);
    setSubmitting(false);
    if (ok) setStep(4);
  };

  const INPUT = "w-full bg-white text-black border border-gray-300 rounded px-4 py-2.5 focus:border-black focus:outline-none";

  if (step === 4) {
    return (
      <div className="bg-white text-black p-10 md:p-16 rounded-lg shadow-sm border border-gray-200 text-center">
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Thank you</div>
        <h2 className="font-display text-4xl mb-4">Order Received</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We've received your order and are preparing it for shipment. A confirmation has been sent to your email.
        </p>
        <Link to="/account" className="bg-black text-white hover:bg-black/80 py-3.5 px-8 font-medium tracking-wide transition-colors inline-flex">
          View Orders
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" spellCheck="false" className="w-full">
      {step === 1 && (
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-display text-2xl mb-6">Shipping Address</h2>
          <div className="space-y-4">
            <label className="block w-full">
              <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Full Name</span>
              <input type="text" name="full_name" value={form.full_name} onChange={set} className={INPUT} required />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block w-full">
                <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Email</span>
                <input type="email" name="email" value={form.email} onChange={set} className={INPUT} required />
              </label>
              <label className="block w-full">
                <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Phone</span>
                <input type="tel" name="phone" value={form.phone} onChange={set} className={INPUT} required />
              </label>
            </div>
            <label className="block w-full">
              <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Address</span>
              <input type="text" name="line1" value={form.line1} onChange={set} className={INPUT} required />
            </label>
            <label className="block w-full">
              <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Apt, suite (optional)</span>
              <input type="text" name="line2" value={form.line2} onChange={set} className={INPUT} />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block w-full">
                <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">City</span>
                <input type="text" name="city" value={form.city} onChange={set} className={INPUT} required />
              </label>
              <label className="block w-full">
                <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">State</span>
                <input type="text" name="state" value={form.state} onChange={set} className={INPUT} required />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block w-full">
                <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">ZIP Code</span>
                <input type="text" name="postal_code" value={form.postal_code} onChange={set} className={INPUT} required />
              </label>
              <label className="block w-full">
                <span className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Country</span>
                <input type="text" name="country" value={form.country} onChange={set} className={INPUT} required />
              </label>
            </div>
          </div>
          <div className="mt-8">
            <button type="button" className="w-full bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium tracking-wide transition-colors" onClick={() => setStep(2)}>
              Continue to Billing
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-display text-2xl mb-6">Billing Address</h2>
          <p className="text-gray-600 mb-8 border border-gray-100 bg-gray-50 p-4 rounded text-sm">
            Same as shipping address.
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-3 mt-8">
            <button type="button" className="w-full md:w-auto py-3.5 px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium" onClick={() => setStep(1)}>Back</button>
            <button type="button" className="w-full bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium tracking-wide transition-colors" onClick={() => setStep(3)}>Continue to Payment</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-display text-2xl mb-6">Payment Method</h2>
          <div className="space-y-3">
            {[
              { id: "stripe", label: "Credit / Debit Card", note: "Secured by Stripe" },
              { id: "paypal", label: "PayPal", note: "Pay with your PayPal account" },
              { id: "mobile_money", label: "Mobile Money", note: "M-Pesa, MTN, Airtel" },
              { id: "bank_transfer", label: "Bank Transfer", note: "Wire / ACH" },
            ].map((m) => (
              <label key={m.id} className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-all ${form.payment_method === m.id ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-300"}`}>
                <input
                  type="radio"
                  name="payment_method"
                  value={m.id}
                  checked={form.payment_method === m.id}
                  onChange={set}
                  className="h-4 w-4 text-black focus:ring-black border-gray-300"
                />
                <div>
                  <div className="font-medium text-gray-900">{m.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{m.note}</div>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 text-yellow-800 text-sm rounded border border-yellow-100">
            Live payment processing will be enabled in the next phase. For now, your order is recorded as "pending".
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-3 mt-8">
            <button type="button" className="w-full md:w-auto py-3.5 px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium" onClick={() => setStep(2)}>Back</button>
            <button type="submit" disabled={submitting} className="w-full bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium tracking-wide transition-colors disabled:opacity-50">
              {submitting ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

/* ─── memoized sidebar — never re-renders during typing ─── */
const OrderSummary = memo(function OrderSummary({
  items, subtotal, shipping, tax, total,
}: {
  items: { id: string; image: string; name: string; price: number; quantity: number }[];
  subtotal: number; shipping: number; tax: number; total: number;
}) {
  return (
    <aside className="bg-gray-50 text-black border border-gray-200 p-6 rounded-lg h-fit">
      <h3 className="font-display text-xl mb-6">Order Summary</h3>
      <div className="space-y-4 mb-6">
        {items.map((i) => (
          <div key={i.id} className="flex gap-4 items-start">
            <div className="h-16 w-16 bg-gray-200 rounded overflow-hidden shrink-0">
              {i.image ? <img src={i.image} alt={i.name} className="h-full w-full object-cover" /> : null}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium leading-snug">{i.name}</div>
              <div className="text-xs text-gray-500 mt-1">Qty: {i.quantity}</div>
            </div>
            <div className="text-sm font-medium">{formatPrice(i.price * i.quantity)}</div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4 space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span className="font-medium">{formatPrice(subtotal)}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Shipping</span><span className="font-medium">{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Estimated Tax</span><span className="font-medium">{formatPrice(tax)}</span></div>
      </div>
      <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-display text-xl">
        <span>Total</span>
        <span className="text-black">{formatPrice(total)}</span>
      </div>
    </aside>
  );
});
