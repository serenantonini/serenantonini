"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(""); // per mostrare messaggi custom

  const handleSubmit = async (e) => {
    e.preventDefault(); // blocca il comportamento default (popup/redirect)
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/movnzagy", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("Messaggio inviato con successo! ✅");
        form.reset();
      } else {
        setStatus("Errore nell'invio, riprova.");
      }
    } catch (err) {
      setStatus("Errore di rete, riprova.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Il tuo Progetto</h2>
          <p>
            Sei interessato a sviluppare un sito web, un’app o uno strumento personalizzato?
            Sono sempre aperta a nuove sfide e collaborazioni. Compila il modulo qui sotto o contattami tramite email o LinkedIn.
          </p>

          {/* FORM CUSTOM CON FETCH */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nome" required />
            <input type="email" name="email" placeholder="La tua email" required />
            <textarea name="message" placeholder="Il tuo messaggio" rows="5" required />
            <button type="submit" className="btn primary">Invia Messaggio</button>
          </form>

          {/* Mostra il messaggio di stato */}
          {status && <p className="form-status">{status}</p>}

          <div className="contact-actions">
            <a href="mailto:serenantonini@gmail.com" className="btn secondary">📧 Email</a>
            <a
              href="https://www.linkedin.com/in/serenantonini/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-image">
          <img src="/foto.png" alt="Serena Antonini" />
        </div>
      </div>
    </section>
  );
}
