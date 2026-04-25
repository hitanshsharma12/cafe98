"use client";

import { useState, useEffect } from "react";

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

export default function MenuTabs({ setCategory, defaultCat }: any) {
  const [active, setActive] = useState(defaultCat || "Rice & Biryani");

  useEffect(() => {
    setCategory(defaultCat || "Rice & Biryani");
  }, []);

  return (
    <section className="py-10 text-center relative z-10">
      <h2 className="text-4xl font-bold text-white">
        Our <span className="text-amber-400">Menu</span>
      </h2>

      <div className="flex gap-2 flex-wrap justify-center px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setCategory(cat);
            }}
            className={`px-4 py-2 rounded-full text-xs md:text-sm ${
              active === cat
                ? "bg-[#8B5E3C] text-white"
                : "bg-white/20 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}