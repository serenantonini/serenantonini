// /pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    console.log("Metodo non consentito:", req.method);
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.log("Dati mancanti:", req.body);
    return res.status(400).json({ message: "Compila tutti i campi" });
  }

  try {
    console.log("Configurazione nodemailer:");
    console.log("HOST:", process.env.SMTP_HOST);
    console.log("PORT:", process.env.SMTP_PORT);
    console.log("USER:", process.env.SMTP_USER ? process.env.SMTP_USER : "non settata");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // true se 465, false se 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log("Verifica connessione...");
    await transporter.verify();
    console.log("Connessione verificata!");

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `Nuovo messaggio da ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Messaggio:</strong><br/>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email inviata:", info.messageId);

    return res.status(200).json({ message: "Messaggio inviato con successo" });
  } catch (error) {
    console.error("Errore invio email:", error);
    return res.status(500).json({ message: "Errore durante l'invio dell'email", error: error.message });
  }
}
