import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/services', label: 'Services' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { href: 'https://github.com/musawerhussain', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/musawerhussain', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'mailto:musawerhussain@example.com', icon: <FaEnvelope />, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon"><FaCode /></span>
            <span>Musawer <span className="gradient-text">Hussain</span></span>
          </Link>
          <p className="footer__tagline">
            SQL · Python · Dart · Power BI
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer__social"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Get in Touch</h4>
          <p><FaMapMarkerAlt /> Pakistan</p>
          <p><FaEnvelope /> musawerhussain@example.com</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Musawer Hussain. All rights reserved.
            Built with React, Framer Motion & Three.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
