import { useState } from "react";
import Intro from "./Intro";
import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";


export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {/* Overlay animato */}
      {!ready && <Intro onDone={() => setReady(true)} />}

      {/* Contenuto sito */}
      <div className={`site ${ready ? "is-visible" : ""}`} aria-hidden={!ready}>
        <div className="portfolio">

        {/* NAVBAR */ }
          <Navbar />
               

          {/* HERO */}
          <Hero />
          

          {/* PROJECTS */}
          <Projects />

          {/* CONTACT */}
          <Contact />

          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </>
  );
}
