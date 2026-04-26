"use client";

import { useState } from "react";
import MenuTabs from "./MenuTabs";
import MenuList from "./MenuList";
import CartModal from "./CartModal";

export default function Menu() {
  const [category, setCategory] = useState("Rice & Biryani");
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotal = cart.reduce((total, item) => {
    const prices = item.price.match(/\d+/g)?.map(Number) || [0];
    return total + prices[0];
  }, 0);

  return (
    <section id="menu" className="relative min-h-screen overflow-hidden">
      {/* Luxe layered background */}
      <div className="absolute inset-0 bg-[#06040200]" style={{ background: "linear-gradient(160deg, #0a0602 0%, #120800 40%, #0a0500 100%)" }} />
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #4a2500 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "180px 180px" }} />

      <div className="relative z-10">
        <MenuTabs setCategory={setCategory} defaultCat="Rice & Biryani" />
        <MenuList category={category} setCart={setCart} setOpen={setIsCartOpen} />
      </div>

      {/* Floating Cart */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-4 md:right-8 z-40"
        >
          <div className="relative flex items-center gap-3 bg-[var(--gold)] text-black pl-5 pr-6 py-[14px] rounded-full shadow-[0_8px_40px_rgba(200,169,106,0.4)] hover:shadow-[0_8px_60px_rgba(200,169,106,0.6)] hover:brightness-105 active:scale-95 transition-all duration-300">
            <span className="absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-20 pointer-events-none" />
            <span className="relative text-base">🛒</span>
            <span className="relative font-cinzel text-xs tracking-widest font-bold uppercase">
              {cart.length} {cart.length === 1 ? "Item" : "Items"}
            </span>
            <span className="relative w-[1px] h-4 bg-black/20" />
            <span className="relative font-bold text-sm">₹{cartTotal}</span>
          </div>
        </button>
      )}

      {isCartOpen && (
        <CartModal cart={cart} setCart={setCart} setOpen={setIsCartOpen} />
      )}
    </section>
  );
}