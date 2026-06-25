import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/shop", label: "Shop All" },
  { to: "/category/chains", label: "Chains" },
  { to: "/category/pendants", label: "Pendants" },
  { to: "/category/watches", label: "Watches" },
  { to: "/category/rings", label: "Rings" },
  { to: "/category/bracelets", label: "Bracelets" },
  { to: "/category/earrings", label: "Earrings" },
];

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass">
      <div className="bg-[var(--gold)]/95 text-black text-[11px] tracking-[0.3em] uppercase text-center py-2 font-medium">
        Complimentary worldwide shipping on orders over $500
      </div>
      <div className="container-luxe flex items-center justify-between h-16 md:h-20">
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-display text-2xl md:text-3xl tracking-wider">
          MARCHELLO<span className="text-gold">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-white/80">
          {nav.slice(0, 5).map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-gold transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <button className="p-2 hover:text-gold transition-colors hidden sm:block" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/account" className="p-2 hover:text-gold transition-colors" aria-label="Account">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="relative p-2 hover:text-gold transition-colors" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[var(--gold)] text-black text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black md:hidden animate-fade-up">
          <div className="container-luxe flex items-center justify-between h-16">
            <Link to="/" onClick={() => setOpen(false)} className="font-display text-2xl">
              MARCHELLO<span className="text-gold">.</span>
            </Link>
            <button onClick={() => setOpen(false)} className="p-2" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-luxe flex flex-col gap-1 pt-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl py-3 border-b border-white/10 hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
