import { useEffect, useRef, useState } from "react";

export default function Intro({ onDone = () => {} }) {
  const svgRef = useRef(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const svgEl = svgRef.current;

    // Animazione rotazione del logo
    if (svgEl) {
      svgEl.style.transition = "transform 1.4s ease-in-out";
      svgEl.style.transform = "rotate(360deg)";
    }

    // timeline totale: rotazione + buffer
    const total = 2000; // puoi regolare il tempo come vuoi
    const t = setTimeout(() => {
      setHide(true);            // fade out overlay
      setTimeout(onDone, 450);  // rimuovi dopo il fade
    }, total);

    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className={`intro-overlay ${hide ? "intro-hide" : ""}`} role="dialog" aria-label="Intro">
      <div className="intro-wrap">
        {/* Logo SVG con scritte integrate */}
        <svg
          ref={svgRef}
          className="intro-svg"
          viewBox="0 0 120 120"
          aria-label="Serena Antonini — Digital Studio"
        >
          <image href="/logo-intro2.svg" x="0" y="0" width="120" height="120" />
        </svg>
      </div>
    </div>
  );
}
