"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
        setTimeout(() => setModalOpen(false), 1500); // chiude il pop-up dopo invio
      } else {
        setStatus("Errore nell'invio. Riprova.");
      }
    } catch {
      setStatus("Errore di connessione. Riprova.");
    }
  };

  return (
    <section className="contact" id="contact">
      {/* --- DESKTOP --- */}
      <div className="contact-content">
        <div className="contact-text">
          <h2>Il tuo Progetto</h2>
          <p>
            Sei interessato a sviluppare un sito web, un’app o uno strumento personalizzato?
            Sono sempre aperta a nuove sfide e collaborazioni. Compila il modulo qui sotto o contattami tramite email o LinkedIn.
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
            <a href="mailto:serenantonini@gmail.com" className="btn secondary">📧 Email</a>
            <a href="https://www.linkedin.com/in/serenantonini/" target="_blank" rel="noopener noreferrer" className="btn secondary">🔗 LinkedIn</a>
          </div>
        </div>

        <div className="contact-image">
          <img src="/foto.png" alt="Serena Antonini" />
        </div>
      </div>

      {/* --- MOBILE --- */}
      <div className="contact-mobile">
        <div className="contact-card-mobile">
          <img src="/foto.png" alt="Serena Antonini" />
          <div className="contact-text-mobile">
            <h2>Il tuo Progetto</h2>
            <p>
              Sei interessato a sviluppare un sito web, un’app o uno strumento personalizzato?
              Sono sempre aperta a nuove sfide e collaborazioni. Compila il modulo qui sotto o contattami tramite email o LinkedIn.
            </p>
            <div className="contact-actions-mobile">
              <a href="mailto:serenantonini@gmail.com" className="btn secondary">📧 Email</a>
              <a href="https://www.linkedin.com/in/serenantonini/" target="_blank" rel="noopener noreferrer" className="btn secondary">🔗 LinkedIn</a>
              {/* Pulsante per aprire il form */}
              <button className="btn secondary" onClick={() => setModalOpen(true)}>💬 Form</button>
            </div>
          </div>
        </div>

        {/* Modal per il form */}
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Scrivimi un messaggio</h3>
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
              <button className="btn secondary close-btn" onClick={() => setModalOpen(false)}>Chiudi</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
