export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo-nero.png" alt="Logo Serena Antonini" />
        </div>
        <div className="footer-info">
          <p>
            © {new Date().getFullYear()} Serena Antonini · Tutti i diritti riservati ·
            P.IVA: 04090340128
          </p>
        </div>
      </div>
    </footer>
  );
}
