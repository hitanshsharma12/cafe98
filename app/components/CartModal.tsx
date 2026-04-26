"use client";

import { useState } from "react";

export default function CartModal({ cart, setCart, setOpen }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [selectedSize, setSelectedSize] = useState(cart.map(() => 0));

  const getPrices = (price: string) =>
    price.match(/\d+/g)?.map(Number) || [0];

  const updateQty = (i: number, val: number) => {
    const newQty = [...quantities];
    newQty[i] = Math.max(1, newQty[i] + val);
    setQuantities(newQty);
  };

  const toggleSize = (i: number) => {
    const prices = getPrices(cart[i].price);
    if (prices.length < 2) return;
    const newSize = [...selectedSize];
    newSize[i] = newSize[i] === 0 ? 1 : 0;
    setSelectedSize(newSize);
  };

  const handleRemove = (i: number) => {
    setCart((prev: any) => prev.filter((_: any, idx: number) => idx !== i));
    setQuantities((prev: any) => prev.filter((_: any, idx: number) => idx !== i));
    setSelectedSize((prev: any) => prev.filter((_: any, idx: number) => idx !== i));
  };

  const total = cart.reduce((acc: number, item: any, i: number) => {
    const prices = getPrices(item.price);
    const price = prices[selectedSize[i]] || prices[0];
    return acc + price * (quantities[i] || 1);
  }, 0);

  const handleOrder = async () => {
    if (!name || !phone) {
      alert("Please enter your name and phone number");
      return;
    }
    const res = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({ name, phone, cart, total, time, quantities, people }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={() => setOpen(false)}
      />

      {/* Panel — sheet on mobile, modal on desktop */}
      <div className="relative w-full md:max-w-lg md:mx-4 bg-[#0c0802] border border-[var(--gold)]/15 rounded-t-3xl md:rounded-2xl shadow-[0_-20px_80px_rgba(0,0,0,0.8)] overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Gold top drag bar (mobile) */}
        <div className="flex justify-center pt-3 pb-1 md:hidden">
          <div className="w-10 h-1 rounded-full bg-[var(--gold)]/30" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <div>
            <h2 className="font-cinzel text-base md:text-lg text-white uppercase tracking-widest">
              Your Order
            </h2>
            <p className="text-[10px] text-gray-600 tracking-widest mt-0.5 uppercase">
              {cart.length} {cart.length === 1 ? "item" : "items"} selected
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition text-sm"
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-3">
          {/* Cart Items */}
          {cart.map((item: any, i: number) => {
            const prices = getPrices(item.price);
            const hasDual = prices.length >= 2;
            const unitPrice = prices[selectedSize[i]] || prices[0];

            return (
              <div
                key={i}
                className="rounded-xl border border-white/5 bg-white/[0.03] p-4"
              >
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3 className="text-white text-sm font-medium leading-snug flex-1">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => handleRemove(i)}
                    className="text-red-500/70 hover:text-red-400 text-[10px] uppercase tracking-widest flex-shrink-0 mt-0.5 transition"
                  >
                    Remove
                  </button>
                </div>

                {/* Size toggle */}
                {hasDual && (
                  <div className="flex gap-2 mb-3">
                    {["Half", "Full"].map((label, sIdx) => (
                      <button
                        key={label}
                        onClick={() => {
                          const newSize = [...selectedSize];
                          newSize[i] = sIdx;
                          setSelectedSize(newSize);
                        }}
                        className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border transition-all duration-200 ${
                          selectedSize[i] === sIdx
                            ? "bg-[var(--gold)] text-black border-[var(--gold)] font-bold"
                            : "bg-transparent text-gray-500 border-white/10 hover:border-[var(--gold)]/30"
                        }`}
                      >
                        {label} · ₹{prices[sIdx]}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  {/* Qty */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQty(i, -1)}
                      className="w-7 h-7 rounded-full border border-white/15 text-white text-sm flex items-center justify-center hover:border-[var(--gold)]/50 transition"
                    >
                      −
                    </button>
                    <span className="text-white text-sm font-medium w-4 text-center">
                      {quantities[i]}
                    </span>
                    <button
                      onClick={() => updateQty(i, 1)}
                      className="w-7 h-7 rounded-full border border-white/15 text-white text-sm flex items-center justify-center hover:border-[var(--gold)]/50 transition"
                    >
                      +
                    </button>
                  </div>
                  {/* Subtotal */}
                  <span className="text-[var(--gold)] font-bold text-sm">
                    ₹{unitPrice * quantities[i]}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Divider */}
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-[1px] bg-white/5" />
            <span className="text-[var(--gold)] text-xs">✦</span>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>

          {/* Total */}
          <div className="flex justify-between items-center px-1">
            <span className="text-gray-500 text-sm uppercase tracking-widest text-[11px]">
              Total Amount
            </span>
            <span className="text-[var(--gold)] font-bold text-xl font-cinzel">
              ₹{total}
            </span>
          </div>

          {/* Form */}
          <div className="space-y-2 pt-2">
            {[
              { placeholder: "Full Name *", value: name, setter: setName, type: "text" },
              { placeholder: "Phone Number *", value: phone, setter: setPhone, type: "tel" },
              { placeholder: "Pickup Time (minutes)", value: time, setter: setTime, type: "number" },
              { placeholder: "Number of People", value: people, setter: setPeople, type: "number" },
            ].map(({ placeholder, value, setter, type }) => (
              <input
                key={placeholder}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-[var(--gold)]/50 focus:outline-none transition"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-4 md:px-6 py-4 border-t border-white/5 space-y-2">
          <button
            onClick={handleOrder}
            className="w-full py-4 rounded-xl font-cinzel font-bold tracking-widest uppercase text-sm text-black transition-all duration-300 hover:brightness-110 active:scale-[0.98] shadow-[0_0_30px_rgba(200,169,106,0.3)]"
            style={{ background: "linear-gradient(135deg, #c8a96a 0%, #e8c880 50%, #c8a96a 100%)" }}
          >
            Order on WhatsApp · ₹{total}
          </button>
          <button
            onClick={() => setOpen(false)}
            className="w-full py-3 rounded-xl border border-white/8 text-gray-500 text-sm hover:text-white hover:border-white/20 transition"
          >
            Add More Items
          </button>
        </div>
      </div>
    </div>
  );
}