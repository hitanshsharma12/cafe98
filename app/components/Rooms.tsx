export default function Rooms() {
  return (
    <section id="rooms" className="py-16 px-4 md:px-10 bg-[var(--brown-dark)]">
      
      <h2 className="text-2xl md:text-4xl font-bold text-[var(--gold)] mb-8 text-center">
        Stay With Us
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="bg-[#3e2c23] p-6 rounded-xl">
          <h3 className="text-xl">Deluxe Room</h3>
          <p className="text-gray-400">₹1500 / night</p>

          <button className="mt-4 bg-[var(--gold)] text-black px-4 py-2 rounded-lg">
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
}