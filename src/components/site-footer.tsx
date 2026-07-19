import { Instagram, Facebook, Twitter, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#1a1a1a] text-white">
      <div className="container-luxe py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl mb-4 text-white">MARCHELLO<span className="text-[#e8c547]">.</span></div>
          <p className="text-sm text-white/60 max-w-xs leading-relaxed">
            22 West 47th Street
            <br />
            New York, NY 10036
          </p>
          <p className="text-sm text-white/60 mt-3">
            <a href="tel:+17185586139" className="hover:text-[#e8c547]">+1 (718) 558-6139</a>
            <br />
            <a href="mailto:info@marchellothejeweler.com" className="hover:text-[#e8c547]">info@marchellothejeweler.com</a>
          </p>
          <div className="flex gap-4 mt-6 text-white/50">
            <a aria-label="Instagram" href="https://instagram.com/marchello" className="hover:text-[#e8c547]"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="https://facebook.com/marchello" className="hover:text-[#e8c547]"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="https://twitter.com/marchello" className="hover:text-[#e8c547]"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#e8c547] mb-4">Links</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/" className="hover:text-[#e8c547]">Home</a></li>
            <li><a href="/shop" className="hover:text-[#e8c547]">Shop All Jewelry</a></li>
            <li><a href="/category/rings" className="hover:text-[#e8c547]">Ring Collections</a></li>
            <li><a href="/contact" className="hover:text-[#e8c547]">Custom Orders</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#e8c547] mb-4">Info</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/about" className="hover:text-[#e8c547]">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#e8c547]">Contact</a></li>
            <li><a href="/faq" className="hover:text-[#e8c547]">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#e8c547] mb-4">Shop</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/shop" className="hover:text-[#e8c547]">All Jewelry</a></li>
            <li><a href="/shop?filter=specials" className="hover:text-[#e8c547]">Specials &amp; Sales</a></li>
            <li><a href="/shop?filter=under1500" className="hover:text-[#e8c547]">Diamonds Under $1,500</a></li>
          </ul>
          <ul className="space-y-3 text-sm text-white/70 mt-6">
            <li className="flex gap-2 items-start">
              <Phone className="h-4 w-4 text-[#e8c547] mt-0.5 shrink-0" />
              <span>
                Chat with Eden<br />
                <a href="https://wa.me/19296891990" className="hover:text-[#e8c547]">+1 (929) 689-1990</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <span>© {new Date().getFullYear()} Marchello The Jeweler. All rights reserved.</span>
          <div className="flex gap-3 text-[10px] tracking-wider uppercase text-white/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
