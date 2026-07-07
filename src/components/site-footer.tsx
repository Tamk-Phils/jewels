import { Instagram, Facebook, Twitter, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-[var(--ink)]">
      <div className="container-luxe py-20 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl mb-4">MARCHELLO<span className="text-gold">.</span></div>
          <p className="text-sm text-foreground/60 max-w-xs">
            Natural earth-mined diamonds and solid gold jewelry. Trusted for 35+ years.
          </p>
          <div className="flex gap-4 mt-6 text-foreground/60">
            <a aria-label="Instagram" href="https://instagram.com/marchello" className="hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="https://facebook.com/marchello" className="hover:text-gold"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="https://twitter.com/marchello" className="hover:text-gold"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="eyebrow mb-4">Shop</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="/shop" className="hover:text-gold">All Items</a></li>
            <li><a href="/shop" className="hover:text-gold">Specials</a></li>
            <li><a href="/shop" className="hover:text-gold">Under $1500</a></li>
            <li><a href="/contact" className="hover:text-gold">Sell Your Gold/Watches</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Info</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="/terms" className="hover:text-gold">Terms of Service</a></li>
            <li><a href="/returns" className="hover:text-gold">Refund Policy</a></li>
            <li><a href="/privacy" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-gold">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Need help?</div>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex gap-2 items-start">
              <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              <span>
                Got questions? Call us<br />
                <a href="tel:+17185586139" className="hover:text-gold">+1 (718) 558-6139</a>
              </span>
            </li>
            <li>
              Personal assistant — Chat with Eden<br />
              <a href="https://wa.me/19296891990" className="hover:text-gold">+1 (929) 689-1990</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between text-xs text-foreground/40 gap-2">
          <span>© {new Date().getFullYear()} Marchello The Jeweler. All rights reserved.</span>
          <span>Jamaica, New York</span>
        </div>
      </div>
    </footer>
  );
}
