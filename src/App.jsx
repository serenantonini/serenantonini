import { useState, useEffect } from "react";
import Intro from "./intro";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  const [ready, setReady] = useState(false);

  // Stato tema
  const [isLight, setIsLight] = useState(false);

  // Aggiunge/rimuove la classe al <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isLight) {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
  }, [isLight]);

  return (
    <>
      {!ready && <Intro onDone={() => setReady(true)} />}

      <div className={`site ${ready ? "is-visible" : ""}`} aria-hidden={!ready}>
        <div className="portfolio">
          <Navbar isLight={isLight} setIsLight={setIsLight} />
          <Hero isLight={isLight} />
          <Projects />
          <Contact />
          <Footer isLight={isLight} />
        </div>
      </div>
    </>
  );
}
