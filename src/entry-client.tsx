import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/10">
        <div className="container-luxe py-6 flex items-center justify-between">
          <h1 className="font-display text-3xl">Marchello</h1>
          <a href="/shop" className="btn-gold">Shop Now</a>
        </div>
      </header>

      <main className="container-luxe py-20 text-center">
        <h2 className="font-display text-4xl md:text-6xl">Luxury Fine Jewelry</h2>
        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
          The site is now running in stable client mode for deployment reliability.
          Your storefront content is available after we complete router runtime reconciliation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/shop" className="btn-gold">Browse Collection</a>
          <a href="/contact" className="btn-ghost-gold">Contact Us</a>
        </div>
      </main>
    </div>
  </StrictMode>,
);
