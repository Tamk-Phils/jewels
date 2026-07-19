import { useEffect } from "react";
import { createPortal } from "react-dom";
import logoCrest from "@/assets/logo-crest.png";
import { X } from "lucide-react";
import { NAV } from "./site-header"; // re‑use exported NAV

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  // Prevent background scrolling while menu is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const menu = (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-[9999] flex flex-col bg-background md:hidden"
      style={{ height: "100dvh", backgroundColor: "var(--background)" }}
    >
      <div className="shrink-0 container-luxe flex items-center justify-between py-3 border-b border-foreground/10">
        <img src={logoCrest} alt="Marchello" className="h-12 w-auto" />
        <button
          type="button"
          onClick={onClose}
          className="p-2 min-h-11 min-w-11 flex items-center justify-center"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav
        className="flex-1 min-h-0 overflow-y-auto overscroll-contain container-luxe flex flex-col gap-1 pb-10 pt-2"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
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
    </div>
  );

  return createPortal(menu, document.body);
}

// Re‑use the MobileNavLink component from SiteHeader (same implementation)
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
