"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [openForm, setOpenForm] = useState<null | "table" | "event">(null);
  const [mounted, setMounted] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = openForm ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openForm]);

  const handleSubmit = () => {
    if (!name || !phone || !date || (openForm === "table" && !time)) {
      alert("Please fill all required fields");
      return;
    }
    const message = `📍 Café 98 Booking Request\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📅 Date: ${date}\n⏰ Time: ${time}\n📌 Type: ${
      openForm === "table" ? "Table Booking" : "Event Booking"
    }\n${openForm === "event" ? `🎉 Event: ${eventType}` : ""}`;
    window.open(`https://wa.me/917018796714?text=${encodeURIComponent(message)}`, "_blank");
    setName(""); setPhone(""); setDate(""); setTime(""); setEventType("");
    setOpenForm(null);
  };

  return (
    <section className="relative w-full overflow-hidden text-white" style={{ height: "100dvh" }}>

      {/* ─── Background ─── */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Café 98"
          fill
          priority
          quality={75}
          className="object-cover hero-zoom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80" />
      </div>

      {/* ─── Gold grid ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,106,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,106,1) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.035,
        }}
      />

      {/* ─── Hero content ─── */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 pb-14">

        {/* Logo */}
        <div
          className="mb-7"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.9)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center"
            style={{
              border: "1px solid rgba(200,169,106,0.5)",
              backdropFilter: "blur(12px)",
              background: "rgba(0,0,0,0.25)",
            }}
          >
            <div className="absolute inset-0 rounded-full ring-spin" style={{ border: "1px solid rgba(200,169,106,0.2)" }} />
            <div className="absolute inset-3 rounded-full" style={{ border: "1px solid rgba(200,169,106,0.12)" }} />
            <span className="absolute -top-3 left-3 text-lg">🐑</span>
            <div className="flex flex-col items-center leading-none select-none">
              <span className="text-base md:text-lg italic text-white/90" style={{ fontFamily: "var(--font-playfair)" }}>Café</span>
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-white font-cinzel">98</span>
            </div>
          </div>
        </div>

        {/* Label */}
        <p
          className="text-[9px] md:text-[10px] tracking-[5px] text-[var(--gold)] mb-5 uppercase"
          style={{ opacity: mounted ? 0.85 : 0, transition: "opacity 1s 0.3s ease" }}
        >
          Luxury Café · Rohru, Himachal Pradesh
        </p>

        {/* Headline */}
        <h1
          className="font-cinzel uppercase leading-[1.15] max-w-3xl drop-shadow-2xl"
          style={{
            fontSize: "clamp(1.75rem, 6.5vw, 5rem)",
            letterSpacing: "0.05em",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 1.2s 0.4s cubic-bezier(0.16,1,0.3,1), transform 1.2s 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Where Your Moments
          <br />
          <span className="relative inline-block mt-1" style={{ color: "var(--gold)" }}>
            Turn Into Memories
            <span
              className="absolute -bottom-1 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg,transparent,var(--gold),transparent)",
                opacity: mounted ? 1 : 0,
                transition: "opacity 1s 1.2s ease",
              }}
            />
          </span>
        </h1>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 mt-9"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s 0.8s ease, transform 1s 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <button
            onClick={() => setOpenForm("table")}
            className="w-52 sm:w-auto px-8 py-[14px] rounded-full text-xs font-cinzel font-bold tracking-[3px] uppercase text-black hover:brightness-110 hover:shadow-[0_0_40px_rgba(200,169,106,0.5)] active:scale-95 transition-all duration-300"
            style={{ background: "linear-gradient(135deg,#c8a96a 0%,#e8c880 50%,#c8a96a 100%)" }}
          >
            Book Table
          </button>
          <button
            onClick={() => setOpenForm("event")}
            className="w-52 sm:w-auto px-8 py-[14px] rounded-full text-xs font-cinzel font-bold tracking-[3px] uppercase text-[var(--gold)] border border-[var(--gold)]/60 backdrop-blur-sm hover:bg-[var(--gold)] hover:text-black transition-all duration-300 active:scale-95"
          >
            Book Event
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-16 flex flex-col items-center gap-2"
          style={{ opacity: mounted ? 0.45 : 0, transition: "opacity 1s 1.5s ease" }}
        >
          <span className="text-[8px] tracking-[4px] text-gray-400 uppercase">Scroll</span>
          <div className="w-px h-7 bg-gradient-to-b from-[var(--gold)] to-transparent scroll-line" />
        </div>
      </div>

      {/* ─── Marquee ─── */}
      <div
        className="absolute bottom-0 w-full overflow-hidden border-t"
        style={{
          borderColor: "rgba(200,169,106,0.12)",
          backdropFilter: "blur(8px)",
          background: "rgba(0,0,0,0.35)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s 1s ease",
        }}
      >
        <div className="marquee text-[8px] md:text-[9px] tracking-[5px] text-gray-500 py-3">
          {[0, 1].map((k) => (
            <div key={k} className="marquee-content" aria-hidden={k === 1}>
              ✦ INVITING AESTHETIC &nbsp;✦ PREMIUM FOOD &nbsp;✦ LIVE MUSIC &nbsp;✦ ROOFTOP VIBES &nbsp;✦ LUXURY STAY &nbsp;✦ CRAFT COCKTAILS &nbsp;✦ PRIVATE EVENTS &nbsp;
            </div>
          ))}
        </div>
      </div>

      {/* ─── Modal ─── */}
      {openForm && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setOpenForm(null)}
          />

          {/*
            MOBILE  → anchored to bottom, full width, rounded top corners,
                       scrollable inner so nothing collapses on small screens
            DESKTOP → centered card, fixed width, rounded all corners
          */}
          <div
            className="modal-slide relative w-full md:w-[460px] md:mx-6 rounded-t-[28px] md:rounded-2xl flex flex-col"
            style={{
              background: "linear-gradient(170deg,#110a02 0%,#0c0600 100%)",
              border: "1px solid rgba(200,169,106,0.18)",
              boxShadow: "0 -30px 80px rgba(0,0,0,0.9)",
              /* Never taller than 92% of viewport height */
              maxHeight: "92dvh",
            }}
          >
            {/* Scrollable content area */}
            <div className="overflow-y-auto flex-1 overscroll-contain">

              {/* Drag pill — mobile only */}
              <div className="flex justify-center pt-3 pb-1 md:hidden">
                <div className="w-9 h-1 rounded-full" style={{ background: "rgba(200,169,106,0.25)" }} />
              </div>

              <div className="px-6 md:px-8 pt-4 md:pt-7 pb-8">

                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-cinzel text-sm uppercase tracking-[4px] text-[var(--gold)]">
                    {openForm === "table" ? "Reserve a Table" : "Book an Event"}
                  </h2>
                  <button
                    onClick={() => setOpenForm(null)}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition text-sm"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    ✕
                  </button>
                </div>

                {/* ── Inputs: each is full-width, stacked vertically ── */}
                <div className="flex flex-col gap-3 w-full">

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    autoComplete="name"
                    style={inputStyle}
                    className="luxury-input"
                  />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    autoComplete="tel"
                    style={inputStyle}
                    className="luxury-input"
                  />

                  {/* Date — full width, no flex column */}
                  <input
                    type="text"
                    placeholder="Select Date"
                    onFocus={(e) => { e.target.type = "date"; }}
                    onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={inputStyle}
                    className="luxury-input"
                  />

                  {/* Time — full width */}
                  <input
                    type="text"
                    placeholder="Select Time"
                    onFocus={(e) => { e.target.type = "time"; }}
                    onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    style={inputStyle}
                    className="luxury-input"
                  />

                  {openForm === "event" && (
                    <input
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      placeholder="Event Type (e.g. Birthday, DJ Night)"
                      style={inputStyle}
                      className="luxury-input"
                    />
                  )}
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full mt-5 py-4 rounded-xl font-cinzel font-bold tracking-[3px] uppercase text-xs text-black hover:brightness-110 active:scale-[0.98] transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg,#c8a96a 0%,#e8c880 50%,#c8a96a 100%)",
                    boxShadow: "0 0 30px rgba(200,169,106,0.3)",
                  }}
                >
                  Book on WhatsApp
                </button>

                <button
                  onClick={() => setOpenForm(null)}
                  className="w-full mt-3 py-3 text-[11px] tracking-[3px] uppercase text-gray-600 hover:text-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── CSS ─── */}
      <style jsx global>{`
        /*
          .luxury-input — defined globally so it applies inside the portal.
          font-size: 16px prevents iOS auto-zoom on input focus.
        */
        .luxury-input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          padding: 13px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          color: #fff;
          font-size: 16px;          /* ← prevents iOS zoom */
          line-height: 1.4;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
          transition: border-color 0.2s ease;
          min-height: 48px;         /* ← prevents collapsing */
        }
        .luxury-input::placeholder {
          color: rgba(255,255,255,0.25);
          font-size: 14px;
        }
        .luxury-input:focus {
          border-color: rgba(200,169,106,0.55);
        }
        .luxury-input[type="date"],
        .luxury-input[type="time"] {
          color-scheme: dark;
        }
      `}</style>

      <style jsx>{`
        .hero-zoom { animation: heroZoom 25s ease-in-out infinite alternate; }
        @keyframes heroZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.12); }
        }
        .ring-spin { animation: rotateSlow 22s linear infinite; }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .scroll-line { animation: scrollPulse 2.2s ease-in-out infinite; }
        @keyframes scrollPulse {
          0%,100% { opacity:0.25; transform:scaleY(0.9); }
          50%      { opacity:1;   transform:scaleY(1.2); }
        }
        .marquee { display:flex; overflow:hidden; }
        .marquee-content {
          display:flex; white-space:nowrap;
          animation: marqueeScroll 22s linear infinite;
          padding-right: 40px;
        }
        @keyframes marqueeScroll {
          from { transform:translateX(0); }
          to   { transform:translateX(-100%); }
        }
        .modal-slide {
          animation: slideUp 0.38s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes slideUp {
          from { transform:translateY(50px); opacity:0; }
          to   { transform:translateY(0);    opacity:1; }
        }
      `}</style>
    </section>
  );
}

// Inline style object for inputs — ensures box-sizing never gets overridden
const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  minHeight: "48px",
};