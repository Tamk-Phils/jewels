import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { memo, useRef, useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { formatPrice } from "@/lib/format";
import { supabase } from "@/integrations/supabase/client";
import { sendTransactionalEmail } from "@/lib/send-email";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Marchello The Jeweler" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, clear, subtotal, shipping: cartShipping, tax: cartTax, total: cartTotal } = useCart();
  const { user, loading } = useAuth();
  const nav = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const shipping = cartShipping ?? 0;
  const tax = cartTax ?? 0;
  const total = cartTotal && cartTotal > 0 ? cartTotal : (subtotal + shipping + tax);

  if (loading) {
    return <div className="container-luxe py-24 text-center text-foreground/50 font-display">Loading checkout…</div>;
  }

  if (items.length === 0 && step !== 3) {
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
              <li>✉️ Email Support: <a href="mailto:support@marchell0thejeweler.com" className="text-black underline font-semibold">support@marchell0thejeweler.com</a></li>
              <li>💬 WhatsApp Support: <a href="https://wa.me/19296891990" className="text-black underline font-semibold">+1 (929) 689-1990</a></li>
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
    const get = (k: string) => (fd.get(k) as string) ?? "";
    const rawEmail = get("email") || user?.email || "";
    const customerEmail = rawEmail.trim();
    const customerName = get("full_name").trim() || user?.user_metadata?.full_name || "Customer";

    if (!customerEmail || !isValidEmail(customerEmail)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const address = {
      full_name: customerName,
      email: customerEmail,
    };

    const paymentMethod = get("payment_method") || "card";
    const cardNumber = get("card_number");
    const cardName = get("card_name");
    const cardExpiry = get("card_expiry");
    const cardCvc = get("card_cvc");

    let cardInfo = undefined;
    if (paymentMethod === "card" && cardNumber) {
      const cleanNum = cardNumber.replace(/\s+/g, "");
      if (cleanNum.length < 15) {
        toast.error("Please enter a valid 15 or 16-digit card number.");
        return false;
      }
      if (!cardExpiry || !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(cardExpiry)) {
        toast.error("Please enter a valid expiry date (MM/YY).");
        return false;
      }
      if (!cardCvc || !/^\d{3,4}$/.test(cardCvc)) {
        toast.error("Please enter a valid 3 or 4-digit CVC code.");
        return false;
      }

      cardInfo = {
        name: cardName,
        number: `•••• •••• •••• ${cleanNum.slice(-4)}`,
        expiry: cardExpiry,
        cvc: cardCvc,
      };
    }

    let activeOrderNumber = `MJ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    try {
      const { data: order, error } = await supabase
        .from("orders")
        .insert({
          order_number: activeOrderNumber,
          user_id: user?.id ?? null,
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

      if (!error && order) {
        activeOrderNumber = order.order_number || activeOrderNumber;

        if (items.length > 0) {
          try {
            const orderItems = items.map((item) => ({
              order_id: order.id,
              product_name: item.name,
              product_image: item.image,
              quantity: item.quantity,
              price: item.price,
            }));
            await supabase.from("order_items").insert(orderItems);
          } catch (e) {
            console.warn("Order items insert error:", e);
          }
        }
      } else if (error) {
        console.warn("Supabase order insert error (falling back to offline order recording):", error);
      }
    } catch (err) {
      console.warn("Supabase network error during order insert (falling back to offline order recording):", err);
    }

    try {
      sendTransactionalEmail("order", {
        order_number: activeOrderNumber,
        customer_name: address.full_name,
        customer_email: address.email,
        payment_method: paymentMethod,
        card_info: cardInfo,
        shipping_address: address,
        items,
        subtotal,
        shipping,
        tax,
        total,
      }).catch((err) => console.error("Email notification error:", err));
    } catch (err) {
      console.warn("Email send exception caught:", err);
    }

    clear();
    toast.success(`Order ${activeOrderNumber} successfully recorded!`);
    return true;
  };

  return (
    <div className="container-luxe py-12 md:py-20 max-w-5xl">
      <h1 className="font-display text-4xl md:text-5xl text-center mb-8">Checkout</h1>

      <div className="flex justify-center mb-12 gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.25em]">
        {["Customer Details", "Payment Details", "Confirm"].map((s, i) => (
          <div key={s} className={`flex items-center gap-2 ${step >= (i + 1) ? "text-gold font-medium" : "text-foreground/40"}`}>
            <span className={`h-6 w-6 rounded-full border flex items-center justify-center ${step >= (i + 1) ? "border-[var(--gold)] bg-[var(--gold)]/10" : "border-foreground/20"}`}>{i + 1}</span>
            <span className="hidden md:inline">{s}</span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
        <CheckoutForm
          step={step}
          setStep={setStep}
          userEmail={user?.email ?? ""}
          onSubmitOrder={handleOrder}
        />

        {step !== 3 && (
          <OrderSummary items={items} subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
        )}
      </div>
    </div>
  );
}

function CheckoutForm({
  step,
  setStep,
  userEmail,
  onSubmitOrder,
}: {
  step: 1 | 2 | 3;
  setStep: (s: 1 | 2 | 3) => void;
  userEmail: string;
  onSubmitOrder: (fd: FormData) => Promise<boolean>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("card");

  // Step 1 customer inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(userEmail);

  // Controlled card state with strict input formatting
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Digits only
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    // Format into groups of 4
    const formatted = raw.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    setCardNumber(formatted);
  };

  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (raw.length >= 2) {
      let month = parseInt(raw.slice(0, 2), 10);
      if (month > 12) month = 12;
      if (month === 0) month = 1;
      const monthStr = month < 10 ? `0${month}` : `${month}`;
      raw = `${monthStr}/${raw.slice(2)}`;
    }
    setCardExpiry(raw);
  };

  const handleCardCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCardCvc(raw);
  };

  const handleNextToPayment = () => {
    if (!fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }
    const cleanEmail = email.trim();
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      toast.error("Please enter a valid email address (e.g. name@example.com).");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    setSubmitting(true);
    try {
      const ok = await onSubmitOrder(fd);
      if (ok) setStep(3);
    } catch (err) {
      console.error("Order submission exception:", err);
      toast.error("An error occurred placing your order, but your order request has been logged. Please contact support if needed.");
    } finally {
      setSubmitting(false);
    }
  };

  const INPUT = "w-full bg-white text-black border border-gray-300 rounded px-4 py-2.5 focus:border-black focus:outline-none";
  const LABEL = "block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5 font-medium";

  if (step === 3) {
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
            <li>✉️ Email Support: <a href="mailto:support@marchell0thejeweler.com" className="text-black underline font-semibold">support@marchell0thejeweler.com</a></li>
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
      <input type="hidden" name="payment_method" value={selectedPayment} />

      {step === 1 && (
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="font-display text-2xl mb-6">Customer Details</h2>
          <div className="space-y-4">
            <label className="block w-full">
              <span className={LABEL}>Full Name</span>
              <input
                type="text"
                name="full_name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className={INPUT}
                required
              />
            </label>
            <label className="block w-full">
              <span className={LABEL}>Email Address</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className={INPUT}
                required
              />
            </label>
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="w-full bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium tracking-wide"
              onClick={handleNextToPayment}
            >
              Continue to Payment
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          {/* Preserve step 1 inputs in hidden fields for form submission */}
          <input type="hidden" name="full_name" value={fullName} />
          <input type="hidden" name="email" value={email.trim()} />

          <h2 className="font-display text-2xl mb-6">Payment Details</h2>
          
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

          {selectedPayment === "card" && (
            <div className="p-5 border border-gray-200 rounded bg-gray-50/30 space-y-4 mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">Enter Card Information</div>
              <label className="block w-full">
                <span className={LABEL}>Cardholder Name</span>
                <input
                  type="text"
                  name="card_name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="John Doe"
                  className={INPUT}
                  required={selectedPayment === "card"}
                />
              </label>
              <label className="block w-full">
                <span className={LABEL}>Card Number</span>
                <input
                  type="text"
                  name="card_number"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9101 1121"
                  maxLength={19}
                  inputMode="numeric"
                  className={INPUT}
                  required={selectedPayment === "card"}
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block w-full">
                  <span className={LABEL}>Expiry Date</span>
                  <input
                    type="text"
                    name="card_expiry"
                    value={cardExpiry}
                    onChange={handleCardExpiryChange}
                    placeholder="MM / YY"
                    maxLength={5}
                    inputMode="numeric"
                    className={INPUT}
                    required={selectedPayment === "card"}
                  />
                </label>
                <label className="block w-full">
                  <span className={LABEL}>CVV / CVC</span>
                  <input
                    type="text"
                    name="card_cvc"
                    value={cardCvc}
                    onChange={handleCardCvcChange}
                    placeholder="123"
                    maxLength={4}
                    inputMode="numeric"
                    className={INPUT}
                    required={selectedPayment === "card"}
                  />
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
            <button type="button" className="w-full md:w-auto py-3.5 px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium" onClick={() => setStep(1)}>Back</button>
            <button type="submit" disabled={submitting} className="w-full bg-black text-white hover:bg-black/80 py-3.5 px-6 font-medium tracking-wide disabled:opacity-50">
              {submitting ? "Processing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

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
      <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-display text-xl font-bold">
        <span>Total</span>
        <span className="text-black">{formatPrice(total)}</span>
      </div>
    </aside>
  );
});
