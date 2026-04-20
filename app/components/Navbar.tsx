"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#1a120b]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg md:text-xl font-bold text-[var(--gold)]">
        Cafe 98
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6 text-sm">
        <a href="#menu">Menu</a>
        <a href="#rooms">Rooms</a>
        <a href="#bar">Bar</a>
        <a href="#events">Events</a>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#1a120b] flex flex-col items-center py-6 gap-4 md:hidden">
          <a href="#menu">Menu</a>
          <a href="#rooms">Rooms</a>
          <a href="#bar">Bar</a>
          <a href="#events">Events</a>
        </div>
      )}
    </nav>
  );
}