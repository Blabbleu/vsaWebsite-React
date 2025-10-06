import MascotFollower from "./components/MascotFollower.jsx";
import Navbar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import EventsSection from "./components/events/EventSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <MascotFollower src="/banban.png" />
      <Navbar />
      <Header />
      <About />
      <EventsSection />
      <Footer />
    </div>
  );
}
