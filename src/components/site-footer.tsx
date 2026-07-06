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
            <li><a href="/category/chains" className="hover:text-gold">Chains</a></li>
            <li><a href="/category/pendants" className="hover:text-gold">Pendants</a></li>
            <li><a href="/category/watches" className="hover:text-gold">Watches</a></li>
            <li><a href="/category/rings" className="hover:text-gold">Rings</a></li>
            <li><a href="/category/bracelets" className="hover:text-gold">Bracelets</a></li>
            <li><a href="/category/earrings" className="hover:text-gold">Earrings</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Help</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="/contact" className="hover:text-gold">Contact</a></li>
            <li><a href="/faq" className="hover:text-gold">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-gold">Shipping</a></li>
            <li><a href="/returns" className="hover:text-gold">Returns</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Company</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="/about" className="hover:text-gold">About</a></li>
            <li><a href="/privacy" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gold">Terms</a></li>
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
