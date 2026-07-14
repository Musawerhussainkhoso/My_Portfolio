import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import './Contact.css';

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: 'musawerhussain10@gmail.com', href: 'mailto:musawerhussain10@gmail.com' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/Musawerhussainkhoso', href: 'https://github.com/Musawerhussainkhoso' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/musawer-hussain-1a899a2b0', href: 'https://www.linkedin.com/in/musawer-hussain-1a899a2b0/' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Pakistan', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Simulate send (no backend in this demo)
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="page contact">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiMail /> Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            For project inquiries, career opportunities, or professional correspondence —
            please use the form below or reach me through any of the channels listed.
          </motion.p>
        </div>

        {/* CTA banner */}
        <motion.div
          className="contact__cta glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Ready to Work Together?</h2>
          <p>
            I am available for data-focused roles, freelance engagements, and collaborative
            software projects. Let us discuss how I can contribute to your objectives.
          </p>
        </motion.div>

        {/* Contact grid */}
        <section className="section">
          <div className="contact__grid">
            {/* Contact info */}
            <motion.div
              className="contact__info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <h3>Contact Information</h3>
              <p className="contact__info-subtitle">
                Reach out through any of these channels — I usually respond within 24 hours.
              </p>
              <ul className="contact__list">
                {contactInfo.map((item) => (
                  <li key={item.label} className="contact__item glass">
                    <span className="contact__item-icon">{item.icon}</span>
                    <div>
                      <span className="contact__item-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact__item-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact__item-value">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact form */}
            <motion.div
              className="contact__form-wrap glass"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <h3>Send a Message</h3>
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {error && <p className="contact__error">{error}</p>}
                {sent && (
                  <motion.p
                    className="contact__success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you! Your message has been sent. I'll get back to you soon.
                  </motion.p>
                )}

                <button type="submit" className="btn btn--primary contact__submit">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
