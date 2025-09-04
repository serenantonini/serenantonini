import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Compila tutti i campi" });
  }

  try {
    const data = await resend.emails.send({
      from: "portfolio@resend.dev", // puoi personalizzare questo
      to: "serenantonini@gmail.com", // destinatario
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong><br/>${message}</p>
      `,
    });

    console.log("Email inviata:", data);
    return res.status(200).json({ message: "Messaggio inviato con successo" });
  } catch (error) {
    console.error("Errore invio email:", error);
    return res.status(500).json({ message: "Errore durante l'invio dell'email", error: error.message });
  }
}
