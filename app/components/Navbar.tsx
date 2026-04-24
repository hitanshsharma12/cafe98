"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-lg border-b border-white/10">

      {/* Logo */}
      <h1 className="text-lg md:text-xl font-[var(--font-playfair)] tracking-wide text-[var(--gold)]">
        Cafe 98
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm tracking-wider text-white/80">
        <a href="#menu" className="hover:text-[var(--gold)] transition">Menu</a>
        <a href="#rooms" className="hover:text-[var(--gold)] transition">Rooms</a>
        <a href="#bar" className="hover:text-[var(--gold)] transition">Bar</a>
        <a href="#events" className="hover:text-[var(--gold)] transition">Events</a>
      </div>

      {/* Book Button */}
      <button className="hidden md:block border border-[var(--gold)] px-4 py-2 rounded-full text-xs hover:bg-[var(--gold)] hover:text-black transition">
        Book Now
      </button>

      {/* Mobile Button */}
      <button
        className="md:hidden text-white text-xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-lg transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a onClick={() => setOpen(false)} href="#menu">Menu</a>
        <a onClick={() => setOpen(false)} href="#rooms">Rooms</a>
        <a onClick={() => setOpen(false)} href="#bar">Bar</a>
        <a onClick={() => setOpen(false)} href="#events">Events</a>

        <button className="border border-[var(--gold)] px-6 py-3 rounded-full text-sm">
          Book Now
        </button>

        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-2xl"
        >
          ✕
        </button>
      </div>
    </nav>
  );
}