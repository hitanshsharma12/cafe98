"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-white/5 text-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-14 h-14 rounded-full border border-[var(--gold)]/40 flex items-center justify-center">
              <div className="absolute inset-1 rounded-full border border-[var(--gold)]/20" />
              <span className="absolute -top-1 left-1 text-sm">🐑</span>
              <div className="text-center leading-none">
                <div className="text-[8px] font-playfair italic text-[var(--gold)]">Café</div>
                <div className="text-xl font-bold text-white">98</div>
              </div>
            </div>
            <div>
              <h3 className="font-cinzel text-lg text-[var(--gold)] tracking-wider">
                Café 98
              </h3>
              <p className="text-[9px] tracking-[3px] text-gray-500 uppercase">
                Eat • Drink • Stay
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            A luxury café nestled in the heart of Rohru, Himachal Pradesh.
            Where every moment becomes a memory.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: "📸", label: "Instagram", href: "#" },
              { icon: "▶", label: "YouTube", href: "#" },
              { icon: "💬", label: "WhatsApp", href: "https://wa.me/917018796714" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm hover:border-[var(--gold)] hover:text-[var(--gold)] transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-cinzel text-xs uppercase tracking-[4px] text-[var(--gold)] mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Menu", href: "#menu" },
              { label: "Rooms", href: "#rooms" },
              { label: "Bar & Drinks", href: "#bar" },
              { label: "Events", href: "#events" },
              { label: "Book Now", href: "https://wa.me/917018796714" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-[var(--gold)] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-cinzel text-xs uppercase tracking-[4px] text-[var(--gold)] mb-6">
            Contact Us
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">
                Address
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Main Market, Rohru<br />
                Shimla District, HP 171207
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">
                Phone
              </p>
              <a
                href="tel:+917018796714"
                className="text-gray-400 text-sm hover:text-[var(--gold)] transition"
              >
                +91 70187 96714
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">
                Hours
              </p>
              <p className="text-gray-400 text-sm">
                Daily: 10 AM – 1 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider with Marquee */}
      <div className="border-t border-white/5 overflow-hidden">
        <div className="flex overflow-hidden">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex whitespace-nowrap text-[10px] tracking-[4px] text-gray-700 py-3"
              style={{
                animation: "scrollLeft 20s linear infinite",
                paddingRight: "40px",
              }}
            >
              ✦ LUXURY CAFE ✦ ROHRU ✦ HIMACHAL PRADESH ✦ EAT ✦ DRINK ✦ STAY ✦ EVENTS ✦ ROOFTOP ✦ LIVE MUSIC ✦&nbsp;
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-4 md:px-10 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-gray-700 text-xs tracking-widest uppercase">
            © {year} Café 98. All Rights Reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Crafted with ♥ in Himachal Pradesh
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </footer>
  );
}