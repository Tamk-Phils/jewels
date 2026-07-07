import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { CartProvider } from "./lib/cart";
import { AuthProvider } from "./lib/auth";
import "./styles.css";

const queryClient = new QueryClient();
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

function AppShell() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="flex-1">
              <div className="container-luxe py-20 text-center">
                <h1 className="font-display text-4xl md:text-6xl">Marchello</h1>
                <p className="mt-4 text-foreground/70">Luxury fine jewelry, now live.</p>
              </div>
            </main>
            <SiteFooter />
          </div>
          <Toaster theme="light" position="bottom-right" />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <AppShell />
  </StrictMode>,
);
