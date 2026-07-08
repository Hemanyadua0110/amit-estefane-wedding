import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mehendi from "./components/Mehendi";
import Reception from "./components/Reception";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>

    <main className="app">
    
      <Navbar />

      <Hero />

      <Mehendi />
<Reception />
<Gallery />
<RSVP />

      <Footer />
    </main>

</>

);
}