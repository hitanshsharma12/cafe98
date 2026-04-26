"use client";

import { useEffect, useRef, useState } from "react";

const stories = [
  {
    id: 1,
    label: "Ambiance",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80",
    caption: "Golden Hour Vibes",
  },
  {
    id: 2,
    label: "Food",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    caption: "Chef's Special",
  },
  {
    id: 3,
    label: "Bar",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
    caption: "Craft Cocktails",
  },
  {
    id: 4,
    label: "Rooms",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
    caption: "Luxury Stay",
  },
  {
    id: 5,
    label: "Events",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
    caption: "Private Events",
  },
  {
    id: 6,
    label: "Rooftop",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80",
    caption: "Rooftop Nights",
  },
];

export default function Story() {
  const [active, setActive] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (active !== null) {
      setProgress(0);
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            // Auto-advance
            setActive((prev) => {
              if (prev === null) return null;
              const next = prev + 1;
              return next < stories.length ? next : null;
            });
            return 0;
          }
          return p + 2;
        });
      }, 60);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active]);

  return (
    <section className="py-12 px-4 bg-[#0d0d0d]">
      {/* Section Header */}
      <div className="text-center mb-8">
        <p className="text-xs tracking-[4px] text-[var(--gold)] mb-2 uppercase">
          Our World
        </p>
        <h2 className="font-cinzel text-2xl md:text-4xl text-white uppercase tracking-wide">
          Stories of Café 98
        </h2>
      </div>

      {/* Story Circles */}
      <div className="flex gap-4 md:gap-6 justify-center overflow-x-auto pb-4 scrollbar-hide px-2">
        {stories.map((story, i) => (
          <button
            key={story.id}
            onClick={() => setActive(i)}
            className="flex flex-col items-center gap-2 flex-shrink-0 group"
          >
            {/* Ring */}
            <div
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-full"
              style={{
                background:
                  active === i
                    ? "conic-gradient(var(--gold) " + progress + "%, #333 0%)"
                    : "linear-gradient(135deg, var(--gold), #8b6914)",
                padding: "2px",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0d0d0d]">
                <img
                  src={story.image}
                  alt={story.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <span className="text-[10px] md:text-xs text-gray-400 tracking-widest uppercase">
              {story.label}
            </span>
          </button>
        ))}
      </div>

      {/* Story Viewer Modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-sm mx-4 h-[75vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar */}
            <div className="absolute top-3 left-3 right-3 flex gap-1 z-10">
              {stories.map((_, i) => (
                <div
                  key={i}
                  className="h-[2px] flex-1 rounded-full bg-white/30 overflow-hidden"
                >
                  <div
                    className="h-full bg-[var(--gold)] transition-all duration-100"
                    style={{
                      width:
                        i < active
                          ? "100%"
                          : i === active
                          ? `${progress}%`
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Image */}
            <img
              src={stories[active].image}
              alt={stories[active].caption}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs tracking-[3px] text-[var(--gold)] uppercase mb-1">
                Café 98
              </p>
              <p className="font-cinzel text-xl text-white">
                {stories[active].caption}
              </p>
            </div>

            {/* Tap Areas */}
            <button
              className="absolute left-0 top-0 w-1/2 h-full"
              onClick={() =>
                setActive((p) => (p !== null && p > 0 ? p - 1 : p))
              }
            />
            <button
              className="absolute right-0 top-0 w-1/2 h-full"
              onClick={() =>
                setActive((p) =>
                  p !== null ? (p < stories.length - 1 ? p + 1 : null) : null
                )
              }
            />

            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-4 z-20 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}