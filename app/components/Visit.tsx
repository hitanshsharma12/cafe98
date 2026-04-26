"use client";

export default function Visit() {
  return (
    <section className="py-20 px-4 md:px-10 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="relative rounded-2xl overflow-hidden h-80 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80"
              alt="Café 98 Rooftop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-[var(--gold)] text-xs uppercase tracking-widest mb-1">
                Now Open
              </p>
              <p className="text-white font-cinzel text-lg">Rooftop Dining</p>
              <p className="text-gray-400 text-xs mt-1">
                Open daily 12 PM – 1 AM
              </p>
            </div>
          </div>

          {/* Right - Info */}
          <div>
            <p className="text-xs tracking-[5px] text-[var(--gold)] uppercase mb-4">
              Come Find Us
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-white uppercase tracking-wide mb-6">
              Visit Café 98
            </h2>
            <div className="w-12 h-[1px] bg-[var(--gold)] mb-8" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-[var(--gold)] text-xl flex-shrink-0 mt-1">
                  📍
                </span>
                <div>
                  <p className="text-white font-semibold mb-1">Location</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Café 98, Main Market, Rohru, Shimla District, Himachal Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-[var(--gold)] text-xl flex-shrink-0 mt-1">
                  🕐
                </span>
                <div>
                  <p className="text-white font-semibold mb-1">Hours</p>
                  <p className="text-gray-400 text-sm">Mon – Sun: 10 AM – 1 AM</p>
                  <p className="text-gray-400 text-sm">Kitchen closes at 11:30 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-[var(--gold)] text-xl flex-shrink-0 mt-1">
                  📞
                </span>
                <div>
                  <p className="text-white font-semibold mb-1">Contact</p>
                  <a
                    href="tel:+917018796714"
                    className="text-[var(--gold)] text-sm hover:underline"
                  >
                    +91 70187 96714
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-10 flex-col sm:flex-row">
              <a
                href="https://wa.me/917018796714"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--gold)] text-black px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition text-center tracking-widest uppercase"
              >
                Book Now
              </a>
              <a
                href="https://maps.google.com/?q=Rohru+Himachal+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--gold)] text-[var(--gold)] px-6 py-3 rounded-full text-sm hover:bg-[var(--gold)] hover:text-black transition text-center tracking-widest uppercase"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}