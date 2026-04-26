"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Rooms", href: "#rooms" },
    { label: "Bar", href: "#bar" },
    { label: "Events", href: "#events" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2">
        <div className="relative w-9 h-9 rounded-full border border-[var(--gold)]/50 flex items-center justify-center">
          <span className="absolute -top-1 text-[8px]">🐑</span>
          <span className="text-[10px] font-bold text-white font-cinzel">98</span>
        </div>
        <span className="font-cinzel text-sm tracking-widest text-[var(--gold)] hidden sm:block">
          CAFÉ 98
        </span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-xs tracking-[3px] uppercase text-white/70">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="hover:text-[var(--gold)] transition-colors duration-200 relative group"
          >
            {l.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--gold)] group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Book Button */}
      <a
        href="https://wa.me/917018796714"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block bg-[var(--gold)] text-black px-5 py-2 rounded-full text-xs font-bold hover:brightness-110 transition tracking-widest uppercase"
      >
        Book Now
      </a>

      {/* Mobile Burger */}
      <button
        className="md:hidden text-white text-xl focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Overlay */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-lg uppercase tracking-[4px] transition-all duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-[var(--gold)] transition text-sm"
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://wa.me/917018796714"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="bg-[var(--gold)] text-black px-8 py-3 rounded-full text-xs font-bold tracking-widest"
        >
          Book Now
        </a>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-2xl text-white"
        >
          ✕
        </button>
      </div>
    </nav>
  );
}