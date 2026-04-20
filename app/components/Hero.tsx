export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[var(--brown-dark)]">
      
      <h1 className="text-4xl md:text-7xl font-bold text-[var(--gold)] mb-4">
        Eat • Drink • Stay
      </h1>

      <p className="text-gray-300 text-sm md:text-lg mb-8 max-w-xl">
        Premium cafe, bar & stay experience in Rohru
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-[var(--gold)] text-black px-6 py-3 rounded-xl">
          Book Table
        </button>

        <button className="border border-[var(--gold)] px-6 py-3 rounded-xl">
          Book Room
        </button>
      </div>
    </section>
  );
}