import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-[var(--ink)]">
      <div className="container-luxe py-20 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl mb-4">MARCHELLO<span className="text-gold">.</span></div>
          <p className="text-sm text-foreground/60 max-w-xs">
            Hand-crafted fine jewelry. Solid gold, ethically sourced diamonds, lifetime guarantee.
          </p>
          <div className="flex gap-4 mt-6 text-foreground/60">
            <a aria-label="Instagram" href="#" className="hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="#" className="hover:text-gold"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="#" className="hover:text-gold"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="eyebrow mb-4">Shop</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/category/chains" className="hover:text-gold">Chains</Link></li>
            <li><Link to="/category/pendants" className="hover:text-gold">Pendants</Link></li>
            <li><Link to="/category/watches" className="hover:text-gold">Watches</Link></li>
            <li><Link to="/category/rings" className="hover:text-gold">Rings</Link></li>
            <li><Link to="/category/bracelets" className="hover:text-gold">Bracelets</Link></li>
            <li><Link to="/category/earrings" className="hover:text-gold">Earrings</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Help</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-gold">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-gold">Returns</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Company</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between text-xs text-foreground/40 gap-2">
          <span>© {new Date().getFullYear()} Marchello The Jeweler. All rights reserved.</span>
          <span>Crafted with care.</span>
        </div>
      </div>
    </footer>
  );
}
