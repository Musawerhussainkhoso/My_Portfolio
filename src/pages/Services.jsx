import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { services } from '../data/services.jsx';
import './Services.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <div className="page services">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiGrid /> What I Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional services across web development, data analysis, and
            machine learning — available for freelance and full-time work.
          </motion.p>
        </div>

        {/* Services grid */}
        <section className="section">
          <SectionTitle
            eyebrow="Professional Services"
            title="How I Can Help"
            subtitle="From building web apps to delivering data-driven insights and ML models."
          />
          <motion.div
            className="services__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="services__card glass"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <span className="services__icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="section">
          <motion.div
            className="services__cta glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to start a project?</h2>
            <p>
              Whether you need a website, a data dashboard, or a machine learning model,
              let's discuss how I can help you achieve your goals.
            </p>
            <div className="services__cta-actions">
              <Button to="/contact" variant="primary">Get in Touch</Button>
              <Button href="/Musawer_Hussain_CV.pdf" download variant="ghost">
                <FaDownload /> Download CV
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
