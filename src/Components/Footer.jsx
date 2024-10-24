import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Sobre Nosotros</h3>
          <p>
            Bienvenidos a nuestro sitio de blogs y noticias. Aquí encontrarás
            las últimas novedades y artículos interesantes.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Enlaces Útiles</h3>
          <ul>
            <li>
              <a href="/contact">Contacto</a>
            </li>
            <li>
              <a href="/terms">Términos y Condiciones</a>
            </li>
            <li>
              <a href="/privacy">Política de Privacidad</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tu Sitio de Blogs. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
