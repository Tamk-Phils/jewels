import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useRef, memo } from "react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { formatPrice } from "@/lib/format";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Marchello" }] }),
  component: CheckoutPage,
});

/* ─── parent: reads context; never re-renders from form input ─── */
function CheckoutPage() {
  const { items, subtotal, clear, isLoaded } = useCart();
  const { user } = useAuth();
  const nav = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const shipping = subtotal > 0 && subtotal < 500 ? 25 : 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  if (!isLoaded) return null;

  if (items.length === 0 && step !== 4) {
    return (
      <div className="container-luxe py-20 md:py-28 max-w-2xl text-center">
        <div className="bg-white text-black p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
          <div className="text-xs uppercase tracking-[0.25em] text-[#e8c547] font-semibold mb-3">Order Processing & Support</div>
          <h1 className="font-display text-3xl md:text-4xl mb-4 text-gray-900">Your Bag is Empty</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            If you have just placed an order, your order has been recorded and is currently being processed by our atelier team.
          </p>
          <div className="p-5 bg-gray-50 border border-gray-200 rounded text-left space-y-3 mb-8">
            <h2 className="font-medium text-gray-900 text-sm">Need Order Verification or Direct Support?</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              To verify payment details, check order status, or send inquiry details directly to our admin team:
            </p>
            <ul className="text-xs text-gray-700 space-y-1.5 pt-1 font-medium">
              <li>✉️ Email Admin: <a href="mailto:info@marchellothejeweler.com" className="text-black underline font-semibold">info@marchellothejeweler.com</a></li>
              <li>💬 WhatsApp Support: <a href="https://wa.me/19296891990" className="text-black underline font-semibold">+1 (929) 689-1990</a></li>
              <li>📍 Store Atelier: 22 West 47th Street, New York, NY 10036</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-black text-white hover:bg-black/80 py-3 px-6 text-sm font-medium tracking-wide">
              Go to Contact Support Page
            </Link>
            <Link to="/shop" className="border border-gray-300 text-gray-800 hover:bg-gray-50 py-3 px-6 text-sm font-medium tracking-wide">
              Browse Collection
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleOrder = async (fd: FormData): Promise<boolean> => {
    if (!user) {
      toast.error("Please sign in to place an order");
      nav({ to: "/auth", search: { redirect: "/checkout" } as never });
      return false;
    }
    const get = (k: string) => (fd.get(k) as string) ?? "";
    const address = {
      full_name: get("full_name"),
      email: get("email"),
      phone: get("phone"),
      line1: get("line1"),
      line2: get("line2"),
      city: get("city"),
      state: get("state"),
      postal_code: get("postal_code"),
      country: get("country"),
    };

    const paymentMethod = get("payment_method") || "card";
    const cardNumber = get("card_number");
    const cardName = get("card_name");
    const cardExpiry = get("card_expiry");
    const cardCvc = get("card_cvc");

    let cardInfo = undefined;
    if (paymentMethod === "card" && cardNumber) {
      const cleanNum = cardNumber.replace(/\s+/g, "");
      cardInfo = {
        name: cardName,
        number: `•••• •••• •••• ${cleanNum.slice(-4)}`,
        expiry: cardExpiry,
        cvc: cardCvc,
      };
    }

    const orderNumber = `MJ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const { data: order, error } = await supabase
      .from("orders")
      .insert({
        order_number: orderNumber,
        user_id: user.id,
        subtotal,
        shipping_cost: shipping,
        tax,
        total_amount: total,
        payment_method: paymentMethod,
        payment_status: "pending",
        status: "pending",
        shipping_address: address,
        billing_address: address,
        notes: cardInfo ? JSON.stringify({ card_info: cardInfo }) : null,
      })
      .select("id,order_number")
      .single();

    if (error) {
      console.error("Order creation error:", error);
      toast.error(error.message || "Could not place order. Please try again.");
      return false;
    }

    const activeOrderNumber = order?.order_number || orderNumber;

    if (order && items.length > 0) {
      try {
        const orderItems = items.map((item) => ({
          order_id: order.id,
          product_name: item.name,
          product_image: item.image,
          quantity: item.quantity,
          price: item.price,
        }));
        const { error: itemsError } = await supabase.from("order_items").insert(orderItems);
        if (itemsError) {
          console.error("Order items insert error:", itemsError);
        }
      } catch (e) {
        console.error("Order items error:", e);
      }
    }

    fetch("/.netlify/functions/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "order",
        payload: {
          order_number: activeOrderNumber,
          customer_name: address.full_name,
          customer_email: address.email,
          customer_phone: address.phone,
          payment_method: paymentMethod,
          card_info: cardInfo,
          shipping_address: address,
          items,
          subtotal,
          shipping,
          tax,
          total,
        },
      }),
    }).catch((err) => console.error("Email notification error:", err));

    clear();
    toast.success(`Order ${activeOrderNumber} successfully recorded!`);
    return true;
  };

  return (
    <div className="container-luxe py-12 md:py-20 max-w-5xl">
      <h1 className="font-display text-4xl md:text-5xl text-center mb-8">Checkout</h1>

      <div className="flex justify-center mb-12 gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.25em]">
        {["Shipping", "Billing", "Payment", "Confirm"].map((s, i) => (
          <div key={s} className={`flex items-center gap-2 ${step >= (i + 1) ? "text-gold font-medium" : "text-foreground/40"}`}>
            <span className={`h-6 w-6 rounded-full border flex items-center justify-center ${step >= (i + 1) ? "border-[var(--gold)] bg-[var(--gold)]/10" : "border-foreground/20"}`}>{i + 1}</span>
            <span className="hidden md:inline">{s}</span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
        {/* Uncontrolled form — zero React re-renders on keystroke */}
        <UncontrolledCheckoutForm
          step={step}
          setStep={setStep}
          userEmail={user?.email ?? ""}
          onSubmitOrder={handleOrder}
        />

        {step !== 4 && (
          <OrderSummary items={items} subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
        )}
      </div>
    </div>
  );
}

/* ─── UNCONTROLLED FORM — browser handles input natively, React is never involved ─── */
function UncontrolledCheckoutForm({
  step,
  setStep,
  userEmail,
  onSubmitOrder,
}: {
  step: 1 | 2 | 3 | 4;
  setStep: (s: 1 | 2 | 3 | 4) => void;
  userEmail: string;
  onSubmitOrder: (fd: FormData) => Promise<boolean>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    setSubmitting(true);
    const ok = await onSubmitOrder(fd);
    setSubmitting(false);
    if (ok) setStep(4);
  };

  const INPUT = "w-full bg-white text-black border border-gray-300 rounded px-4 py-2.5 focus:border-black focus:outline-none";
  const LABEL = "block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium";

  const [selectedPayment, setSelectedPayment] = useState<string>("card");

  if (step === 4) {
    return (
      <div className="bg-white text-black p-8 md:p-14 rounded-lg shadow-sm border border-gray-200 text-center max-w-2xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-[#e8c547] font-semibold mb-3">Order Received</div>
        <h2 className="font-display text-3xl md:text-4xl mb-4 text-gray-900">Thank You For Your Order</h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Your order has been recorded and is currently being processed by our atelier team.
        </p>

        <div className="p-5 bg-gray-50 border border-gray-200 rounded text-left space-y-3 mb-8">
          <h3 className="font-medium text-gray-900 text-sm">Next Steps for Order Completion:</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Please get in touch with our support team to verify details and complete order processing. You can send a direct inquiry on our Contact page or reach us via email or WhatsApp:
          </p>
          <ul className="text-xs text-gray-700 space-y-1.5 font-medium pt-1">
            <li>✉️ Email Admin: <a href="mailto:info@marchellothejeweler.com" className="text-black underline font-semibold">info@marchellothejeweler.com</a></li>
            <li>💬 WhatsApp Support: <a href="https://wa.me/19296891990" className="text-black underline font-semibold">+1 (929) 689-1990</a></li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact" className="bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium text-xs tracking-wider uppercase inline-flex items-center justify-center">
            Go to Contact Support Page
          </Link>
          <Link to="/account" className="border border-gray-300 text-gray-800 hover:bg-gray-50 py-3.5 px-6 font-medium text-xs tracking-wider uppercase inline-flex items-center justify-center">
            View Orders
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} autoComplete="off" className="w-full">
      {/* Hidden field persists payment method selection across steps */}
      <input type="hidden" name="payment_method" value={selectedPayment} />

      {step === 1 && (
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-display text-2xl mb-6">Shipping Address</h2>
          <div className="space-y-4">
            <label className="block w-full">
              <span className={LABEL}>Full Name</span>
              <input type="text" name="full_name" defaultValue="" className={INPUT} required />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block w-full">
                <span className={LABEL}>Email</span>
                <input type="email" name="email" defaultValue={userEmail} className={INPUT} required />
              </label>
              <label className="block w-full">
                <span className={LABEL}>Phone</span>
                <input type="tel" name="phone" defaultValue="" className={INPUT} required />
              </label>
            </div>
            <label className="block w-full">
              <span className={LABEL}>Address</span>
              <input type="text" name="line1" defaultValue="" className={INPUT} required />
            </label>
            <label className="block w-full">
              <span className={LABEL}>Apt, suite (optional)</span>
              <input type="text" name="line2" defaultValue="" className={INPUT} />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block w-full">
                <span className={LABEL}>City</span>
                <input type="text" name="city" defaultValue="" className={INPUT} required />
              </label>
              <label className="block w-full">
                <span className={LABEL}>State</span>
                <input type="text" name="state" defaultValue="" className={INPUT} required />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block w-full">
                <span className={LABEL}>ZIP Code</span>
                <input type="text" name="postal_code" defaultValue="" className={INPUT} required />
              </label>
              <label className="block w-full">
                <span className={LABEL}>Country</span>
                <input type="text" name="country" defaultValue="United States" className={INPUT} required />
              </label>
            </div>
          </div>
          <div className="mt-8">
            <button type="button" className="w-full bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium tracking-wide" onClick={() => setStep(2)}>
              Continue to Billing
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-display text-2xl mb-6">Billing Address</h2>
          <p className="text-gray-600 mb-8 border border-gray-100 bg-gray-50 p-4 rounded text-sm">Same as shipping address.</p>
          <div className="flex flex-col-reverse md:flex-row gap-3 mt-8">
            <button type="button" className="w-full md:w-auto py-3.5 px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium" onClick={() => setStep(1)}>Back</button>
            <button type="button" className="w-full bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium tracking-wide" onClick={() => setStep(3)}>Continue to Payment</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-display text-2xl mb-6">Payment Details</h2>
          
          {/* Payment options (Mobile Money completely removed) */}
          <div className="space-y-3 mb-6">
            {[
              { id: "card", label: "Credit / Debit Card", note: "Visa, Mastercard, American Express, Discover" },
              { id: "paypal", label: "PayPal", note: "Pay via PayPal account" },
              { id: "bank_transfer", label: "Bank Wire / ACH Transfer", note: "Direct wire details will be provided" },
            ].map((m) => (
              <label key={m.id} className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-all ${selectedPayment === m.id ? "border-black bg-gray-50/50" : "border-gray-200 hover:border-gray-300"}`}>
                <input
                  type="radio"
                  name="payment_selection"
                  value={m.id}
                  checked={selectedPayment === m.id}
                  onChange={() => setSelectedPayment(m.id)}
                  className="h-4 w-4 accent-black"
                />
                <div>
                  <div className="font-medium text-gray-900">{m.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{m.note}</div>
                </div>
              </label>
            ))}
          </div>

          {/* Card Information Inputs */}
          {selectedPayment === "card" && (
            <div className="p-5 border border-gray-200 rounded bg-gray-50/30 space-y-4 mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">Enter Card Information</div>
              <label className="block w-full">
                <span className={LABEL}>Cardholder Name</span>
                <input type="text" name="card_name" placeholder="John Doe" className={INPUT} required={selectedPayment === "card"} />
              </label>
              <label className="block w-full">
                <span className={LABEL}>Card Number</span>
                <input
                  type="text"
                  name="card_number"
                  placeholder="1234 5678 9101 1121"
                  maxLength={19}
                  className={INPUT}
                  required={selectedPayment === "card"}
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block w-full">
                  <span className={LABEL}>Expiry Date</span>
                  <input type="text" name="card_expiry" placeholder="MM / YY" maxLength={5} className={INPUT} required={selectedPayment === "card"} />
                </label>
                <label className="block w-full">
                  <span className={LABEL}>CVV / CVC</span>
                  <input type="text" name="card_cvc" placeholder="123" maxLength={4} className={INPUT} required={selectedPayment === "card"} />
                </label>
              </div>
            </div>
          )}

          {selectedPayment === "paypal" && (
            <div className="p-4 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200 mb-6">
              You will be redirected or prompted to sign into your PayPal account upon clicking place order.
            </div>
          )}

          {selectedPayment === "bank_transfer" && (
            <div className="p-4 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200 mb-6">
              Bank transfer details will be sent to your email along with your order invoice.
            </div>
          )}

          <div className="p-4 bg-gray-100 text-gray-700 text-xs rounded border border-gray-200 leading-relaxed mb-6">
            🔒 Your card details are securely collected for order processing. Order will be recorded and processed by our billing department.
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-3 mt-8">
            <button type="button" className="w-full md:w-auto py-3.5 px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium" onClick={() => setStep(2)}>Back</button>
            <button type="submit" disabled={submitting} className="w-full bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium tracking-wide disabled:opacity-50">
              {submitting ? "Processing Order..." : "Place Order"}
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
              {i.image ? <img src={i.image} alt={i.name} className="h-full w-full object-cover" loading="lazy" /> : null}
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
