"use client";

import { useState } from "react";

const eventTypes = [
  {
    icon: "🎂",
    title: "Birthday Parties",
    desc: "Make your birthday unforgettable with our premium setup, cake cutting ceremony, and personalised décor.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
  },
  {
    icon: "🎵",
    title: "DJ Nights",
    desc: "Dance the night away with our resident DJs, premium sound system and signature cocktail packages.",
    image: "https://images.unsplash.com/photo-1571266028253-6c7f41ea5fe0?w=600&q=80",
  },
  {
    icon: "💍",
    title: "Private Dining",
    desc: "Intimate evenings for couples — candlelit table, bespoke menu and a night you'll never forget.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    desc: "Meetings, launches and celebrations — our team handles every detail so you can focus on business.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
];

export default function Events() {
  const [openForm, setOpenForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !date || !eventType) {
      alert("Please fill all fields");
      return;
    }
    const msg = `📍 Café 98 Event Booking\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📅 Date: ${date}\n🎉 Event: ${eventType}`;
    window.open(`https://wa.me/917018796714?text=${encodeURIComponent(msg)}`, "_blank");
    setName(""); setPhone(""); setDate(""); setEventType(""); setOpenForm(false);
  };

  return (
    <section id="events" className="py-20 bg-[#0a0a0a] px-4 md:px-10">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs tracking-[5px] text-[var(--gold)] uppercase mb-3">
          Celebrate in Style
        </p>
        <h2 className="font-cinzel text-3xl md:text-5xl text-white uppercase tracking-wide mb-4">
          Events & Parties
        </h2>
        <div className="w-16 h-[1px] bg-[var(--gold)] mx-auto" />
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-14">
        {eventTypes.map((ev) => (
          <div
            key={ev.title}
            className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--gold)]/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={ev.image}
                alt={ev.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-2xl mb-2 block">{ev.icon}</span>
              <h3 className="font-cinzel text-base text-white mb-2">
                {ev.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-24 overflow-hidden">
                {ev.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Block */}
      <div
        className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a0f00 0%, #2c1a0a 50%, #1a0f00 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-10 md:p-16 text-center">
          <h3 className="font-cinzel text-2xl md:text-4xl text-white mb-4">
            Ready to Plan Your Event?
          </h3>
          <p className="text-gray-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Our events team is ready to make your vision come to life. Connect
            with us on WhatsApp for instant booking.
          </p>
          <button
            onClick={() => setOpenForm(true)}
            className="bg-[var(--gold)] text-black px-10 py-4 rounded-full font-bold tracking-widest uppercase hover:brightness-110 transition shadow-2xl"
          >
            Book an Event
          </button>
        </div>
      </div>

      {/* Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111] p-8 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl">
            <h2 className="font-cinzel text-xl text-[var(--gold)] uppercase tracking-wider mb-6">
              Book an Event
            </h2>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full mb-3 p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[var(--gold)] outline-none transition text-sm"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full mb-3 p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[var(--gold)] outline-none transition text-sm"
            />
            <input
              type="text"
              placeholder="Event Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (!e.target.value ? (e.target.type = "text") : null)}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mb-3 p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[var(--gold)] outline-none transition text-sm"
            />
            <input
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              placeholder="Event Type (e.g. Birthday, DJ Night)"
              className="w-full mb-6 p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[var(--gold)] outline-none transition text-sm"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-[var(--gold)] text-black py-3 rounded-full font-bold hover:brightness-110 transition tracking-widest uppercase text-sm"
            >
              Book on WhatsApp
            </button>
            <button
              onClick={() => setOpenForm(false)}
              className="w-full mt-3 text-sm text-gray-500 hover:text-white transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}