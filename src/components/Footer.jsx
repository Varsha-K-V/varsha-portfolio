import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Varsha K V | MERN Stack Developer</p>
         <div className="social-icons">
        <a
          href="https://github.com/Varsha-K-V"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/varsha-k-v/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
