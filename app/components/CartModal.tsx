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

  const handleRemove = (i: number) => {
    setCart((prev: any) => prev.filter((_: any, index: number) => index !== i));
    setQuantities((prev: any) =>
      prev.filter((_: any, index: number) => index !== i)
    );
    setSelectedSize((prev: any) =>
      prev.filter((_: any, index: number) => index !== i)
    );
  };

  const total = cart.reduce((acc: number, item: any, i: number) => {
    const prices = getPrices(item.price);
    const price = prices[selectedSize[i]] || prices[0];
    return acc + price * (quantities[i] || 1);
  }, 0);

  // ✅ WhatsApp Order Function
  const handleOrder = async () => {
    if (!name || !phone) {
      alert("Name aur Phone required hai bhai");
      return;
    }

    const res = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone,
        cart,
        total,
        time,
        quantities,
        people,
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 px-3">
      <div className="w-full max-w-2xl bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl p-4 md:p-6 max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-white">
            🛒 Your Order
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-red-400 text-xl"
          >
            ✕
          </button>
        </div>

        {/* ITEMS */}
        <div className="space-y-3">
          {cart.map((item: any, i: number) => {
            const prices = getPrices(item.price);

            return (
              <div
                key={i}
                className="bg-[#1a1a1a] rounded-xl p-3 flex flex-col gap-2"
              >
                <h3 className="text-white text-sm md:text-base">
                  {item.name}
                </h3>

                <p className="text-yellow-400 font-semibold text-sm">
                  ₹{prices[selectedSize[i]] || prices[0]}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(i, -1)}
                      className="px-3 py-1 bg-white/10 rounded-md text-white"
                    >
                      −
                    </button>
                    <span className="text-white text-sm">
                      {quantities[i]}
                    </span>
                    <button
                      onClick={() => updateQty(i, 1)}
                      className="px-3 py-1 bg-white/10 rounded-md text-white"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(i)}
                    className="text-red-400 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* TOTAL */}
        <div className="flex justify-between items-center mt-6 border-t border-white/10 pt-4">
          <span className="text-gray-300 text-sm">Total</span>
          <span className="text-yellow-400 font-bold text-lg">
            ₹{total}
          </span>
        </div>

        {/* FORM */}
        <div className="mt-5 space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-[#1a1a1a] p-3 rounded-lg text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Phone Number"
            className="w-full bg-[#1a1a1a] p-3 rounded-lg text-white"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
          />

          <input
            type="number"
            placeholder="Pickup Time (minutes)"
            className="w-full bg-[#1a1a1a] p-3 rounded-lg text-white"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <input
            type="number"
            placeholder="Number of People"
            className="w-full bg-[#1a1a1a] p-3 rounded-lg text-white"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-5 space-y-3">
          <button
            onClick={handleOrder}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold"
          >
            Order on WhatsApp ₹{total}
          </button>

          <button
            onClick={() => setOpen(false)}
            className="w-full py-3 rounded-xl border border-white/10 text-white"
          >
            Add More Items
          </button>
        </div>
      </div>
    </div>
  );
}