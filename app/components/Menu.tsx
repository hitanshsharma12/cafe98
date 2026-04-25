"use client";

import { useState } from "react";
import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";
import CartModal from "./CartModal";

export default function Menu() {
  const [category, setCategory] = useState("Rice & Biryani"); // ✅ default changed
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <section id="menu" className="relative bg-black/40 py-10">
      <MenuTabs setCategory={setCategory} defaultCat="Rice & Biryani" />
      <MenuList category={category} setCart={setCart} setOpen={setIsCartOpen} />

      {/* ✅ Cart button only when menu visible + cart has items */}
      {cart.length > 0 && category && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-yellow-400 text-black px-5 py-3 rounded-full shadow-lg font-bold z-40 flex items-center gap-2 hover:scale-105 transition"
        >
          🛒 Cart ({cart.length}) · ₹
          {cart.reduce((total, item, i) => {
            const prices = item.price.match(/\d+/g)?.map(Number) || [0];
            return total + prices[0];
          }, 0)}
        </button>
      )}

      {isCartOpen && (
        <CartModal cart={cart} setCart={setCart} setOpen={setIsCartOpen} />
      )}
    </section>
  );
}