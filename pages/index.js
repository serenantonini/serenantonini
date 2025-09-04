import { useState, useEffect } from "react";
import Intro from "../src/components/Intro";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function HomePage() {
  const [ready, setReady] = useState(false);

  // Stato del tema sollevato qui
  const [isLight, setIsLight] = useState(false); // default dark

  // Applica classe light/dark sul <html>
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
          {/* Passa sia lo stato che il setter a Navbar */}
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
