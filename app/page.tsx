import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Rooms from "./components/Rooms";
import Bar from "./components/Bar";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Visit from './components/Visit';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Loader />
      {/* 🔝 Navigation */}
      <Navbar />
      {/* 🎥 Hero */}
      <Hero />
      {/* 🍽️ Menu */}
      <Menu />
      {/* 🛏️ Rooms */}
      <Visit />
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