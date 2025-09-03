"use client"; // se usi Next.js 13+ con app directory
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Invio in corso...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Messaggio inviato con successo!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Errore nell'invio. Riprova.");
      }
    } catch (error) {
      setStatus("Errore di connessione. Riprova.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Parliamo di nuovi progetti</h2>
          <p>
            Sei interessato a sviluppare un sito web, un’app o uno strumento personalizzato?
            Sono sempre aperta a nuove sfide e collaborazioni. Compila il modulo qui sotto
            oppure mandami una mail o scrivimi su LinkedIn.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              name="message"
              placeholder="Il tuo messaggio"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
            <button type="submit" className="btn primary">Invia Messaggio</button>
            {status && <p style={{ marginTop: "0.5rem" }}>{status}</p>}
          </form>

          <div className="contact-actions">
            <a href="mailto:serenantonini@gmail.com" className="btn secondary">
              📧 serenantonini@gmail.com
            </a>
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
