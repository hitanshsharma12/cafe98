import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Visit from "./components/Visit";
import Rooms from "./components/Rooms";
import Bar from "./components/Bar";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Loader />
      {/* 🔝 Navigation */}
      <Navbar />
      {/* 🎥 Hero */}
      <Hero />
      {/* 📸 Stories */}
      <Story />
      {/* 🍽️ Menu */}
      <Menu />
      {/* 📍 Visit */}
      <Visit />
      {/* 🛏️ Rooms */}
      <Rooms />
      {/* 🍻 Bar */}
      <Bar />
      {/* 🎉 Events */}
      <Events />
      {/* 📍 Footer */}
      <Footer />
    </main>
  );
}