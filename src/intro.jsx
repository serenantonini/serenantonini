import { useEffect, useRef, useState } from "react";
import "./intro.css";

export default function Intro({ onDone = () => {} }) {
  const svgRef = useRef(null);
  const [step, setStep] = useState(0); // 0 = start, 1 = rotate done, 2 = texts

  useEffect(() => {
    const svgEl = svgRef.current;

    if (svgEl) {
      // step 1: rotazione logo
      svgEl.style.transition = "transform 1.4s ease-in-out";
      svgEl.style.transform = "rotate(360deg)";
    }

    // dopo rotazione: riduzione logo
    const t1 = setTimeout(() => {
      if (svgEl) {
        svgEl.style.transition = "transform 0.8s ease-in-out";
        svgEl.style.transform = "rotate(360deg) scale(0.6)";
      }
      setStep(1);
    }, 1400);

    // dopo riduzione: mostra testo
    const t2 = setTimeout(() => {
      setStep(2);
    }, 2200);

    // fine animazione → chiudi overlay dopo qualche secondo
    const t3 = setTimeout(() => {
      setStep(3);
      setTimeout(onDone, 800);
    }, 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div
      className={`intro-overlay ${step === 3 ? "intro-hide" : ""}`}
      role="dialog"
      aria-label="Intro"
    >
      <div className="intro-wrap">
        <svg
          ref={svgRef}
          className="intro-svg"
          viewBox="0 0 120 120"
          aria-label="Logo Serena Antonini — Digital Studio"
        >
          <image href="/cerchio-intro.svg" x="0" y="0" width="120" height="120" />
        </svg>

        {/* Testo sotto al logo */}
        <div className="intro-texts">
          <h1 className={`intro-name ${step >= 2 ? "show" : ""}`}>
            SERENA ANTONINI
          </h1>
          <h2 className={`intro-sub ${step >= 2 ? "show-sub" : ""}`}>
            DIGITAL STUDIO
          </h2>
        </div>
      </div>
    </div>
  );
}
