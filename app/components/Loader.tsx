"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏱️ loading time

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#1a120b]">

      {/* 🔥 Logo Animation */}
      <div className="animate-pulse scale-animation">
        <Image
          src="/logo.png"
          alt="Cafe 98"
          width={140}
          height={140}
          className="rounded-full shadow-2xl"
        />
      </div>

      {/* ✨ Text Animation */}
      <h1 className="mt-6 text-3xl md:text-5xl font-bold text-[var(--gold)] tracking-widest fade-text">
        Cafe 98
      </h1>

      {/* 🔥 Loading Dots */}
      <div className="flex gap-2 mt-4">
        <span className="dot"></span>
        <span className="dot delay-200"></span>
        <span className="dot delay-400"></span>
      </div>
    </div>
  );
}