import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
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

function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active || typeof document === "undefined") return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    // NOTE: do NOT set touch-action:none on body — it blocks all touch events globally

    return () => {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [active]);
}

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-foreground/10">
      {/* Announcement bar */}
      <div className="bg-black text-white text-[10px] sm:text-[11px] md:text-xs tracking-wide text-center py-2 px-3 sm:px-4 leading-snug">
        Due to fluctuations in gold prices, some items are subject to price changes. If there is any increase after your order is placed, we will contact you before processing your order.
      </div>

      <div className="container-luxe flex items-center justify-between gap-2 sm:gap-4 py-3 sm:py-4">
        <button
          type="button"
          className="md:hidden p-2 -ml-2 min-h-11 min-w-11 flex items-center justify-center touch-manipulation"
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Crest logo */}
        <a href="/" className="flex items-center shrink-0 min-w-0" aria-label="Marchello The Jeweler">
          <img
            src={logoCrest}
            alt="Marchello The Jeweler"
            width={140}
            height={140}
            className="h-14 sm:h-16 md:h-20 w-auto max-w-[120px] sm:max-w-none object-contain"
          />
        </a>

        {/* Desktop nav with mega-menu hover */}
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

      {open && <MobileMenu onClose={closeMenu} />}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useBodyScrollLock(true);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-[9999] flex flex-col bg-background md:hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="shrink-0 container-luxe flex items-center justify-between py-3 border-b border-foreground/10">
        <img src={logoCrest} alt="Marchello" className="h-12 w-auto" />
        <button
          type="button"
          onClick={onClose}
          className="p-2 min-h-11 min-w-11 flex items-center justify-center touch-manipulation"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain container-luxe flex flex-col gap-1 pb-10 pt-2">
        <MobileNavLink to="/" onClose={onClose}>Home</MobileNavLink>
        {NAV.map((n) => (
          <div key={n.label}>
            <MobileNavLink to={n.to} onClose={onClose}>{n.label}</MobileNavLink>
            {n.children && (
              <div className="pl-4 py-2 flex flex-col gap-2 border-b border-foreground/10">
                {n.children.map((c) => (
                  <MobileNavLink key={c.label} to={c.to} onClose={onClose} sub>
                    {c.label}
                  </MobileNavLink>
                ))}
              </div>
            )}
          </div>
        ))}
        <MobileNavLink to="/account" onClose={onClose}>Account</MobileNavLink>
        <MobileNavLink to="/cart" onClose={onClose}>Cart</MobileNavLink>
      </nav>
    </div>,
    document.body,
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
    <Link
      to={to}
      onClick={onClose}
      className={
        sub
          ? "text-sm text-foreground/70 hover:text-gold py-1"
          : "font-display text-2xl py-3 border-b border-foreground/10 block"
      }
    >
      {children}
    </Link>
  );
}
