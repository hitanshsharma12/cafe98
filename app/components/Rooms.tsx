"use client";

import { useState } from "react";

const rooms = [
  {
    name: "The Summit Suite",
    price: "₹4,500/night",
    desc: "Panoramic valley views, king bed, private balcony with mountain mist mornings.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
    amenities: ["King Bed", "Valley View", "Private Balcony", "Room Service"],
    tag: "Most Popular",
  },
  {
    name: "The Forest Retreat",
    price: "₹3,200/night",
    desc: "Surrounded by pine trees, warm wooden interiors, and total tranquility.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80",
    amenities: ["Queen Bed", "Forest View", "Fireplace", "Minibar"],
    tag: null,
  },
  {
    name: "The Royal Den",
    price: "₹5,800/night",
    desc: "Our flagship suite — gold accents, jacuzzi, curated minibar, and butler service.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
    amenities: ["King Bed", "Jacuzzi", "Butler", "Minibar"],
    tag: "Luxury",
  },
];

export default function Rooms() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="rooms" className="py-20 bg-[#0d0d0d] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <p className="text-xs tracking-[5px] text-[var(--gold)] uppercase mb-3">
          Rest in Style
        </p>
        <h2 className="font-cinzel text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
          Our Rooms
        </h2>
        <div className="w-16 h-[1px] bg-[var(--gold)] mx-auto" />
      </div>

      {/* Main Featured Room */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10">
          {/* Image */}
          <div className="relative h-72 md:h-auto overflow-hidden">
            <img
              src={rooms[selected].image}
              alt={rooms[selected].name}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d]/50" />
            {rooms[selected].tag && (
              <span className="absolute top-4 left-4 bg-[var(--gold)] text-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                {rooms[selected].tag}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="bg-[#111] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="font-cinzel text-2xl md:text-3xl text-white mb-2">
                {rooms[selected].name}
              </h3>
              <p className="text-[var(--gold)] text-xl font-semibold mb-4">
                {rooms[selected].price}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {rooms[selected].desc}
              </p>

              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mb-8">
                {rooms[selected].amenities.map((a) => (
                  <span
                    key={a}
                    className="text-[10px] uppercase tracking-widest border border-[var(--gold)]/30 text-[var(--gold)] px-3 py-1 rounded-full"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/917018796714?text=I'd like to book ${rooms[selected].name} at Café 98`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--gold)] text-black py-3 px-6 rounded-full font-bold text-sm hover:brightness-110 transition text-center tracking-widest uppercase"
            >
              Book This Room
            </a>
          </div>
        </div>

        {/* Room Selector */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {rooms.map((room, i) => (
            <button
              key={room.name}
              onClick={() => setSelected(i)}
              className={`relative h-20 md:h-28 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                selected === i
                  ? "border-[var(--gold)] scale-95"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                <span className="text-[9px] md:text-xs text-white font-cinzel truncate">
                  {room.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}