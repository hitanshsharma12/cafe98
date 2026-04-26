"use client";

const drinks = [
  {
    name: "Gold Old Fashioned",
    base: "Bourbon",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&q=80",
  },
  {
    name: "Espresso Martini",
    base: "Vodka + Cold Brew",
    price: "₹420",
    image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=300&q=80",
  },
  {
    name: "Mountain Negroni",
    base: "Gin + Campari",
    price: "₹480",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80",
  },
  {
    name: "Smoky Mezcal Sour",
    base: "Mezcal + Citrus",
    price: "₹500",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=300&q=80",
  },
];

export default function Bar() {
  return (
    <section
      id="bar"
      className="py-20 px-4 md:px-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0f00 50%, #0a0a0a 100%)",
      }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-14 relative z-10">
        <p className="text-xs tracking-[5px] text-[var(--gold)] uppercase mb-3">
          Crafted With Care
        </p>
        <h2 className="font-cinzel text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
          Bar & Spirits
        </h2>
        <div className="w-16 h-[1px] bg-[var(--gold)] mx-auto mb-6" />
        <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
          Premium whisky, craft cocktails, and curated spirits — every pour
          tells a story at Café 98.
        </p>
      </div>

      {/* Drink Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto relative z-10">
        {drinks.map((drink) => (
          <div
            key={drink.name}
            className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--gold)]/40 transition-all duration-500"
          >
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-cinzel text-sm text-white mb-1">
                {drink.name}
              </h3>
              <p className="text-gray-400 text-[10px] mb-2">{drink.base}</p>
              <span className="text-[var(--gold)] font-bold text-sm">
                {drink.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="mt-14 max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border border-[var(--gold)]/20 bg-black/40 backdrop-blur-sm">
          <div>
            <h3 className="font-cinzel text-xl text-white mb-2">
              Premium Spirits Collection
            </h3>
            <p className="text-gray-400 text-sm">
              Single malts • Reserve whisky • Imported beer • Live cocktail bar
            </p>
          </div>
          <a
            href="https://wa.me/917018796714?text=I'd like to know more about Bar at Café 98"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[var(--gold)] text-black px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 transition tracking-widest uppercase"
          >
            Reserve a Seat
          </a>
        </div>
      </div>
    </section>
  );
}