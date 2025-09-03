export default function Projects() {
  const projects = [
    {
      title: "Ciclofficina",
      desc: "Sito web multi-pagina per una ciclofficina. Layout moderno e responsive, pensato per valorizzare la realtà locale e offrire un’esperienza utente chiara e intuitiva. Progetto di prova per mostrare competenze in web design e sviluppo front-end.",
      link: "https://serenantonini.github.io/Ciclofficina/",
      media: "/bici.png",
    },
    {
      title: "Forno Artigianale",
      desc: "Sito web semplice e intuitivo per presentare un forno artigianale locale, con tre pagine principali: Home, Prodotti e Contatti. Layout pulito e responsive, studiato per valorizzare i prodotti e raccontare la storia del forno in modo chiaro e accattivante. Progetto di prova.",
      link: "https://serenantonini.github.io/Forno/",
      media: "/forno.png",
    },
    {
      title: "Parrucchiere",
      desc: "Sito web one-page per il salone di parrucchiere, con sezioni dedicate ai servizi, allo showcase dei lavori e ai contatti. Il design è moderno e responsive, pensato per trasmettere professionalità e accoglienza, con una navigazione fluida e ottimizzata per ogni dispositivo.",
      link: "https://serenantonini.github.io/Mane/",
      media: "/parrucchiere.png",
    },
    {
      title: "Agenzia Immobiliare",
      desc: "Sito web multi-pagina per un’agenzia immobiliare, con 4 pagine principali, più un pannello admin per aggiornare facilmente le immagini dei progetti e mantenere il sito sempre aggiornato. Layout moderno e responsive, con attenzione all’esperienza utente e alla chiarezza delle informazioni.",
      link: "https://serenantonini.github.io/edilimmobiliare/",
      media: "/finiture.png",
    },
    {
      title: "Focus Flow",
      desc: "App di produttività realizzata in Java per Android come progetto universitario, con funzioni di to-do list e timer per gestire al meglio le attività quotidiane. Interfaccia chiara e intuitiva, progettata per aiutare gli utenti a organizzare il lavoro e ottimizzare il tempo.",
      media: "/focus.jpeg", // senza link per ora
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2>I miei Progetti</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            {proj.media.endsWith(".mp4") ? (
              <video
                src={proj.media}
                autoPlay
                loop
                muted
                playsInline
                className="project-media"
              />
            ) : (
              <img src={proj.media} alt={proj.title} className="project-media" />
            )}
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary live-demo"
                >
                  Demo Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
