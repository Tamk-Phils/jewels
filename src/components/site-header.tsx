import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, Search, ShoppingBag, User, X, ChevronDown } from "lucide-react";
import { useCart } from "@/lib/cart";
import logoCrest from "@/assets/logo-crest.png";

type NavItem = { to: string; label: string; children?: { to: string; label: string }[] };

const NAV: NavItem[] = [
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

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-foreground/10">
      {/* Announcement bar */}
      <div className="bg-black text-white text-[11px] md:text-xs tracking-wide text-center py-2 px-4">
        Due to fluctuations in gold prices, some items are subject to price changes.
      </div>

      <div className="container-luxe flex items-center justify-between gap-4 py-4">
        <button className="md:hidden p-2 -ml-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>

        {/* Crest logo */}
        <a href="/" className="flex items-center shrink-0" aria-label="Marchello The Jeweler">
          <img
            src={logoCrest}
            alt="Marchello The Jeweler"
            width={140}
            height={140}
            className="h-16 md:h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop nav with mega-menu hover */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium">
          <a href="/" className="hover:text-gold">Home</a>
          {NAV.map((n) =>
            n.children ? (
              <div key={n.label} className="relative group">
                <button className="flex items-center gap-1 hover:text-gold">
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

        <div className="flex items-center gap-1 md:gap-2">
          <button className="p-2 hover:text-gold hidden sm:block" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <a href="/account" className="p-2 hover:text-gold" aria-label="Account">
            <User className="h-5 w-5" />
          </a>
          <a href="/cart" className="relative p-2 hover:text-gold" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[var(--gold)] text-black text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </a>
        </div>
      </div>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-[var(--background)] overflow-y-auto animate-fade-up" style={{ backgroundColor: "var(--background)" }}>

      <div className="container-luxe flex items-center justify-between py-4 border-b border-foreground/10">
        <img src={logoCrest} alt="Marchello" className="h-14 w-auto" />
        <button onClick={onClose} className="p-2" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="container-luxe flex flex-col gap-1 pb-10 pt-2">
        <a href="/" onClick={onClose} className="font-display text-2xl py-3 border-b border-foreground/10">Home</a>
        {NAV.map((n) => (
          <div key={n.label}>
            <a href={n.to} onClick={onClose} className="font-display text-2xl py-3 border-b border-foreground/10 block">
              {n.label}
            </a>
            {n.children && (
              <div className="pl-4 py-2 flex flex-col gap-2 border-b border-foreground/10">
                {n.children.map((c) => (
                  <a key={c.label} href={c.to} onClick={onClose} className="text-sm text-foreground/70 hover:text-gold">
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href="/account" onClick={onClose} className="font-display text-2xl py-3 border-b border-foreground/10">Account</a>
        <a href="/cart" onClick={onClose} className="font-display text-2xl py-3 border-b border-foreground/10">Cart</a>
      </nav>
    </div>,
    document.body,
  );

}
