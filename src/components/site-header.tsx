import { useCallback, useState, lazy, Suspense } from "react";
// MobileMenu moved to separate file; createPortal no longer needed
import { Menu, Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import { useCart } from "@/lib/cart";
const MobileMenu = lazy(() => import("./MobileMenu"));
import logoCrest from "@/assets/logo-crest.png";

type NavItem = { to: string; label: string; children?: { to: string; label: string }[] };

export const NAV: NavItem[] = [
  { to: "/shop", label: "Specials" },
  { to: "/shop", label: "Under $1500" },
  {
    to: "/shop",
    label: "All Items",
    children: [
      { to: "/category/earrings", label: "Earrings" },
      { to: "/category/rings", label: "Rings" },
      { to: "/category/watches", label: "Watches" },
      { to: "/category/bracelets", label: "Bracelets" },
      { to: "/category/pendants", label: "Pendants" },
      { to: "/category/chains", label: "Chains" },
    ],
  },
  {
    to: "/shop",
    label: "Lab Collection",
    children: [
      { to: "/category/rings", label: "Lab Rings" },
      { to: "/category/bracelets", label: "Lab Bracelets" },
      { to: "/category/chains", label: "Lab Chains" },
      { to: "/category/earrings", label: "Lab Earrings" },
    ],
  },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);
  const openMenu = useCallback(() => setOpen(true), []);

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-foreground/10">
      <div className="bg-black text-white text-[10px] sm:text-[11px] md:text-xs tracking-wide text-center py-2 px-3 sm:px-4 leading-snug">
        Due to fluctuations in gold prices, some items are subject to price changes. If there is any increase after your order is placed, we will contact you before processing your order.
      </div>

      <div className="container-luxe flex items-center justify-between gap-2 sm:gap-4 py-3 sm:py-4">
        <button
          type="button"
          className="md:hidden p-2 -ml-2 min-h-11 min-w-11 flex items-center justify-center"
          onClick={openMenu}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <Menu className="h-5 w-5" />
        </button>

        <a href="/" className="flex items-center shrink-0 min-w-0" aria-label="Marchello The Jeweler">
          <img
            src={logoCrest}
            alt="Marchello The Jeweler"
            width={140}
            height={140}
            className="h-14 sm:h-16 md:h-20 w-auto max-w-[120px] sm:max-w-none object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium">
          <a href="/" className="hover:text-gold">Home</a>
          {NAV.map((n) =>
            n.children ? (
              <div key={n.label} className="relative group">
                <button type="button" className="flex items-center gap-1 hover:text-gold">
                  {n.label} <ChevronDown className="h-3 w-3" />
                </button>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56">
                  <div className="bg-background border border-foreground/10 shadow-xl py-2">
                    {n.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.to}
                        className="block px-5 py-2 text-sm hover:text-gold hover:bg-foreground/5"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={n.label} href={n.to} className="hover:text-gold">
                {n.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 shrink-0">
          <button type="button" className="p-2 hover:text-gold hidden sm:block min-h-11 min-w-11" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <a href="/account" className="p-2 hover:text-gold min-h-11 min-w-11 flex items-center justify-center" aria-label="Account">
            <User className="h-5 w-5" />
          </a>
          <a href="/cart" className="relative p-2 hover:text-gold min-h-11 min-w-11 flex items-center justify-center" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute top-1 right-1 bg-[var(--gold)] text-black text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </a>
        </div>
      </div>

      {open && (
        <Suspense fallback={null}>
          <MobileMenu onClose={closeMenu} />
        </Suspense>
      )}
    </header>
  );
}






function MobileNavLink({
  to,
  onClose,
  children,
  sub = false,
}: {
  to: string;
  onClose: () => void;
  children: React.ReactNode;
  sub?: boolean;
}) {
  return (
    <a
      href={to}
      onClick={onClose}
      className={
        sub
          ? "text-sm text-foreground/70 hover:text-gold py-1 block"
          : "font-display text-2xl py-3 border-b border-foreground/10 block"
      }
    >
      {children}
    </a>
  );
}
