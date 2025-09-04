import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero({ isLight }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setOffset({
      x: (e.clientX - window.innerWidth / 2) * 0.02,
      y: (e.clientY - window.innerHeight / 2) * 0.02,
    });
  };

  return (
    <header id="hero" className="hero relative bg-black text-white overflow-hidden">
      {/* Sfondo leggero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50 -z-10"></div>

      <div
        className="hero-content max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-24"
        onMouseMove={handleMouseMove}
      >
        {/* Testi Hero */}
        <motion.div
          className="hero-text flex-1 min-w-[280px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="intro text-gold font-bold tracking-widest mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            CIAO!
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Sono <span className="text-gold shine">Serena</span>
          </motion.h1>


          <motion.p
            className="description text-gray-400 mb-6 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Laureata in Informatica con una grande passione per lo sviluppo di siti web, applicazioni e tool in linguaggi e ambienti diversi. Amo affrontare progetti sfidanti: quando qualcosa cattura il mio interesse, mi immergo completamente per portarlo a termine con cura e precisione.
            <br /><br />
            Mi piace combinare design, funzionalità e innovazione, creando esperienze digitali che siano non solo utili ma anche piacevoli da usare.
            <br /><br />

            Ogni progetto è per me un’opportunità di crescita: esploro nuove soluzioni, ottimizzo processi e sviluppo interfacce moderne e responsive. Il mio obiettivo è costruire prodotti digitali che siano intuitivi, performanti e dal grande impatto visivo, lasciando sempre un’impronta personale.
          </motion.p>

          <motion.div
            className="buttons flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a
              href="#projects"
              className="btn primary transform hover:scale-105 transition-all duration-300"
            >
              Progetti
            </a>
            <a
              href="#contact"
              className="btn secondary transform hover:scale-105 transition-all duration-300"
            >
              Contatti
            </a>
            <a
              href="/SerenaAntoniniCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary transform hover:scale-105 transition-all duration-300"
            >
              Scarica il CV
            </a>
          </motion.div>
        </motion.div>

{/* Logo Hero */}
<motion.div
  className="hero-image flex-1 min-w-[260px] hidden md:flex justify-center md:justify-end h-full"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1.2,
    delay: 1.2,
    type: "spring",
    stiffness: 100,
  }}
  style={{ x: offset.x, y: offset.y }}
>
  <img
    src={isLight ? "/logo-bianco.png" : "/logo-nero.png"}
    alt="Serena Logo"
    className="h-full w-auto max-w-full rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
  />
</motion.div>


      </div>

      {/* <section className="about section">
  <div className="portfolio about-content">
    <div className="about-image">
      <img src="/foto.png" alt="Serena Antonini" />
    </div>
    <div className="about-text">
      <h2>Chi Sono</h2>
      <p>
        Sono Serena Antonini, laureata in Informatica e appassionata di sviluppo 
        web e mobile. Realizzo siti, applicazioni e strumenti digitali con un 
        approccio pratico e creativo, adattandomi alle esigenze di ogni progetto.
      </p>
    </div>
  </div>
</section> */}


    </header>



  );
}
