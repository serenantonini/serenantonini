import { useEffect, useRef, useState } from "react";
import "./intro.css";

export default function Intro({ onDone = () => {} }) {
  const svgRef = useRef(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Trova il path dell’arco marcato con data-stroke nell’SVG
    const svgEl = svgRef.current;
    const strokePath = svgEl?.querySelector("[data-stroke]");
    if (strokePath && strokePath.getTotalLength) {
      const L = strokePath.getTotalLength();
      // imposta dash dinamico in base alla lunghezza reale del path
      strokePath.style.strokeDasharray = L;
      strokePath.style.strokeDashoffset = L;

      // forza un reflow per far partire la transition
      // eslint-disable-next-line no-unused-expressions
      strokePath.getBoundingClientRect();
      strokePath.classList.add("draw");
    }

    // timeline: cerchio (1.4s) + testi (.8s + .2s) + buffer
    const total = 2600;
    const t = setTimeout(() => {
      setHide(true);            // fade out overlay
      setTimeout(onDone, 450);  // rimuovi dopo il fade
    }, total);

    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className={`intro-overlay ${hide ? "intro-hide" : ""}`} role="dialog" aria-label="Intro">
      <div className="intro-wrap">
        {/* ====== INCOLLA QUI IL TUO SVG ======
            1) Apri `nero.svg`
            2) Copia tutto il contenuto <svg ...>...</svg>
            3) Incollalo qui SOSTITUENDO lo <svg> di esempio
            4) SUL PATH DELL’ARCO aggiungi l’attributo: data-stroke
               Esempio: <path d="..." fill="none" stroke="#fff" stroke-width="3" data-stroke />
        */}
        <svg
          ref={svgRef}
          className="intro-svg"
          viewBox="0 0 120 120"
          aria-label="Serena Antonini — Digital Studio"
        >
          {/* traccia di sfondo (opzionale) */}
          <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="3.5" />
          {/* ARCO ANIMATO — se hai il path reale, sostituisci questo circle con il tuo <path ... data-stroke /> */}
          <circle cx="60" cy="60" r="40" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" data-stroke />
        </svg>

        {/* Testi (puoi cancellarli se le scritte sono già nello SVG) */}
        <div className="intro-text">
          <div className="line line-1">SERENA ANTONINI</div>
          <div className="line line-2">DIGITAL STUDIO</div>
        </div>
      </div>
    </div>
  );
}
