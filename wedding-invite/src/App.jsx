import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mehendi from "./components/Mehendi";
import Reception from "./components/Reception";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);
  return (
    <>
    <Loader loading={loading} />

    <main className="app"></main>
    <main
  className="app"
  style={{
    opacity: loading ? 0 : 1,
    transition: "opacity 0.8s ease",
  }}
>
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