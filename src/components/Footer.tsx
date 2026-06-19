import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Book Now" },
];

export default function Footer() {
  return (
    <footer className="bg-ocean-deep text-off-white/70">
      {/* Gold divider line */}
      <div className="h-px bg-gold/30" />

      <div className="max-w-[1400px] mx-auto section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-cormorant text-2xl md:text-3xl text-off-white font-semibold tracking-wide">
              Trinco Koko Klub
            </h3>
            <p className="eyebrow mt-2 !text-gold/70">
              Trincomalee · Sri Lanka
            </p>
            <p className="mt-6 text-sm leading-relaxed">
              An intimate retreat on the shores of one of Asia&apos;s last
              untouched coastlines. Where the bay meets bliss.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-off-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-off-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 border border-off-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-off-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8H7v3h2v9h3v-9h2.72l.4-3H12V6.5c0-.88.72-1 1-1h2V2h-3C10.5 2 9 3.5 9 5.5V8z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@trincokokoklub.com"
                aria-label="Email"
                className="w-10 h-10 border border-off-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter text-[11px] uppercase tracking-ultra-wide text-gold mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-[11px] uppercase tracking-ultra-wide text-gold mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-gold/60" />
                <span>
                  Trinco Koko Klub, Uppuveli Beach Road,
                  <br />
                  Trincomalee, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="flex-shrink-0 text-gold/60" />
                <span>+94 26 222 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="flex-shrink-0 text-gold/60" />
                <span>hello@trincokokoklub.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter hint / Hours */}
          <div>
            <h4 className="font-inter text-[11px] uppercase tracking-ultra-wide text-gold mb-6">
              Front Desk
            </h4>
            <p className="text-sm mb-2">Available 24 hours</p>
            <p className="text-sm mb-6">
              Check-in: 2:00 PM
              <br />
              Check-out: 11:00 AM
            </p>
            <Link href="/booking" className="btn-outline-gold text-xs py-3 px-6">
              Reserve Your Stay
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-off-white/10">
        <div className="max-w-[1400px] mx-auto section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-off-white/40">
            © {new Date().getFullYear()} Trinco Koko Klub. All rights reserved.
          </p>
          <p className="text-xs text-off-white/40 italic font-cormorant text-sm">
            Made with love in Sri Lanka 🇱🇰
          </p>
        </div>
      </div>
    </footer>
  );
}
