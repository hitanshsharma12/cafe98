"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start exit animation slightly before the 2.5s mark
    const exitTimer = setTimeout(() => setIsVisible(false), 2200);
    // Remove from DOM after exit animation finishes
    const removeTimer = setTimeout(() => setShouldRender(false), 2700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* 🔥 Sleek Logo Entry */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 animate-reveal">
          <Image
            src="/logo.png"
            alt="Cafe 98"
            fill
            className="object-contain filter brightness-110"
            priority
          />
        </div>

        {/* ✨ Cinematic Text Animation */}
        <div className="overflow-hidden mt-6">
          <h1 className="font-cinzel text-2xl md:text-3xl text-[var(--gold)] tracking-[0.5em] uppercase animate-tracking-expand">
            Cafe 98
          </h1>
        </div>

        {/* 🕯️ Minimalist Accent Line */}
        <div className="mt-4 w-12 h-[1px] bg-[var(--gold)]/40 animate-line-grow" />
      </div>

      <style jsx>{`
        /* Logo slides up slightly and fades in */
        @keyframes reveal {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Letters spread out slowly for a "luxury" feel */
        @keyframes tracking-expand {
          from { letter-spacing: 0.2em; opacity: 0; }
          to { letter-spacing: 0.5em; opacity: 1; }
        }

        /* Subtle line growth from center */
        @keyframes line-grow {
          from { width: 0; opacity: 0; }
          to { width: 48px; opacity: 1; }
        }

        .animate-reveal {
          animation: reveal 1s ease-out forwards;
        }

        .animate-tracking-expand {
          animation: tracking-expand 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
        }

        .animate-line-grow {
          animation: line-grow 1.2s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}