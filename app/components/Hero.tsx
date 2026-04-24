"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [openForm, setOpenForm] = useState<null | "table" | "event">(null);

  // 🔥 Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); // New Time State
  const [eventType, setEventType] = useState("");

  // 🔥 WhatsApp Submit
  const handleSubmit = () => {
    // Added time to validation
    if (!name || !phone || !date || (openForm === "table" && !time)) {
      alert("Please fill all required fields");
      return;
    }

    const message = `📍 Cafe 98 Booking Request

👤 Name: ${name}
📞 Phone: ${phone}
📅 Date: ${date}
⏰ Time: ${time}
📌 Type: ${openForm === "table" ? "Table Booking" : "Event Booking"}
${openForm === "event" ? `🎉 Event: ${eventType}` : ""}`;

    const url = `https://wa.me/917018796714?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");

    // Reset fields
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setEventType("");
    setOpenForm(null);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* 🔥 Background - Adjusted Opacity for "Lighter" feel */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Cafe 98"
          fill
          priority
          quality={80}
          className="object-cover scale-110 animate-zoom"
        />

        {/* Lowered opacity from 0.6 to 0.4 and 0.3 for a lighter look */}
        <div className="absolute inset-0 bg-black/40" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <div className="mb-6">
      <div className="mb-8 flex flex-col items-center">

  {/* Outer Circle */}
  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-md">

    {/* Inner Circle */}
    <div className="absolute inset-2 rounded-full border border-white/20"></div>

    {/* Sheep Icon (emoji style placeholder) */}
    <span className="absolute -top-3 left-2 text-xl">🐑</span>

    {/* Text */}
    <div className="flex flex-col items-center leading-none">
      <span className="text-xl md:text-2xl font-[var(--font-playfair)] italic">
        Café
      </span>
      <span className="text-3xl md:text-5xl font-bold tracking-tight">
        98
      </span>
    </div>

  </div>
</div>
        </div>

        <p className="text-[10px] md:text-xs tracking-[4px] text-gray-300 mb-6">
          LUXURY CAFE IN ROHRU
        </p>

        <h1 className="font-[var(--font-playfair)] text-3xl md:text-6xl lg:text-7xl leading-tight max-w-5xl tracking-wide">
          WHERE YOUR MOMENTS <br />
          TURN INTO{" "}
          <span className="text-[var(--gold)]">MEMORIES</span>
        </h1>

        <div className="flex gap-4 mt-8 flex-col md:flex-row">
          <button
            onClick={() => setOpenForm("table")}
            className="bg-[var(--gold)] text-black px-6 py-3 rounded-full text-sm hover:scale-105 transition duration-300"
          >
            Book Table
          </button>

          <button
            onClick={() => setOpenForm("event")}
            className="border border-[var(--gold)] px-6 py-3 rounded-full text-sm hover:bg-[var(--gold)] hover:text-black transition duration-300"
          >
            Book Event
          </button>
        </div>
      </div>

      {/* 🔥 Sliding Text */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/20">
        <div className="marquee text-xs md:text-sm tracking-widest text-gray-300 py-3">
          <div className="marquee-content">
            ✦ INVITING AESTHETIC ✦ PREMIUM FOOD ✦ LIVE MUSIC ✦ ROOFTOP VIBES ✦ LUXURY STAY ✦
          </div>
          <div className="marquee-content">
            ✦ INVITING AESTHETIC ✦ PREMIUM FOOD ✦ LIVE MUSIC ✦ ROOFTOP VIBES ✦ LUXURY STAY ✦
          </div>
        </div>
      </div>

      {/* 🔥 Booking Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4">
          <div className="bg-[#111] p-6 rounded-xl w-full max-w-md backdrop-blur-md border border-white/10">

            <h2 className="text-xl mb-4 font-semibold text-[var(--gold)]">
              {openForm === "table" ? "Book Table" : "Book Event"}
            </h2>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full mb-3 p-2 bg-black border border-gray-600 rounded text-white"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full mb-3 p-2 bg-black border border-gray-600 rounded text-white"
            />

            <div className="flex gap-2 mb-3">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-1/2 p-2 bg-black border border-gray-600 rounded text-white"
              />
              {/* New Time Input */}
              <input
                type="time"
                value={time}
                
                onChange={(e) => setTime(e.target.value)}
                className="w-1/2 p-2 bg-black border border-gray-600 rounded text-white"
              />
            </div>

            {openForm === "event" && (
              <input
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                placeholder="Event Type (e.g. Birthday, Anniversary)"
                className="w-full mb-3 p-2 bg-black border border-gray-600 rounded text-white"
              />
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-[var(--gold)] text-black py-2 rounded font-bold hover:brightness-110 transition"
            >
              Book on WhatsApp
            </button>

            <button
              onClick={() => setOpenForm(null)}
              className="w-full mt-3 text-sm text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .marquee { display: flex; overflow: hidden; }
        .marquee-content { display: flex; white-space: nowrap; animation: scroll 18s linear infinite; padding-right: 50px; }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        .animate-zoom { animation: zoom 20s ease-in-out infinite alternate; }
        @keyframes zoom { from { transform: scale(1.05); } to { transform: scale(1.15); } }
      `}</style>
    </section>
  );
}