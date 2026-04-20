export default function Menu() {
  return (
    <section id="menu" className="py-16 px-4 md:px-10 bg-[#3e2c23]">
      
      <h2 className="text-2xl md:text-4xl font-bold text-[var(--gold)] mb-8 text-center">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <div className="bg-[#1a120b] p-5 rounded-xl">
          <h3 className="text-lg font-semibold">Pizza</h3>
          <p className="text-gray-400">₹299</p>
        </div>

        <div className="bg-[#1a120b] p-5 rounded-xl">
          <h3 className="text-lg font-semibold">Burger</h3>
          <p className="text-gray-400">₹149</p>
        </div>

      </div>
    </section>
  );
}