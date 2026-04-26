"use client";

import { useState, useEffect, useRef } from "react";

const categories = [
  "All Items",
  "Soups",
  "Beverages",
  "Continental",
  "Pizzas",
  "Tandoori Snacks",
  "Breakfast",
  "Main Course Non Veg",
  "Rice & Biryani",
  "Breads",
];

const categoryIcons: Record<string, string> = {
  "All Items": "✦",
  "Soups": "🥣",
  "Beverages": "🥤",
  "Continental": "🍔",
  "Pizzas": "🍕",
  "Tandoori Snacks": "🔥",
  "Breakfast": "🍳",
  "Main Course Non Veg": "🍛",
  "Rice & Biryani": "🍚",
  "Breads": "🥖",
};

export default function MenuTabs({ setCategory, defaultCat }: any) {
  const [active, setActive] = useState(defaultCat || "Rice & Biryani");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCategory(defaultCat || "Rice & Biryani");
  }, []);

  const handleSelect = (cat: string) => {
    setActive(cat);
    setCategory(cat);
  };

  return (
    <div className="pt-20 pb-4 px-4 text-center">
      {/* Section Label */}
      <p className="text-[10px] md:text-xs tracking-[6px] text-[var(--gold)] uppercase mb-3 opacity-80">
        Crafted With Passion
      </p>

      {/* Title */}
      <h2 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-wide mb-2">
        Our{" "}
        <span
          className="text-transparent"
          style={{
            WebkitTextStroke: "1px var(--gold)",
          }}
        >
          Menu
        </span>
      </h2>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-3 mb-10 mt-4">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[var(--gold)]" />
        <span className="text-[var(--gold)] text-xs">✦</span>
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[var(--gold)]" />
      </div>

      {/* Category Scroll Strip */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-3 justify-start md:justify-center px-1 scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => handleSelect(cat)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] md:text-xs uppercase tracking-widest font-semibold transition-all duration-300 border ${
                isActive
                  ? "bg-[var(--gold)] text-black border-[var(--gold)] shadow-[0_0_20px_rgba(200,169,106,0.4)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-[var(--gold)]/40 hover:text-[var(--gold)]"
              }`}
            >
              <span className="text-sm leading-none">{categoryIcons[cat]}</span>
              <span className="hidden sm:inline">{cat}</span>
              <span className="sm:hidden">{cat.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}