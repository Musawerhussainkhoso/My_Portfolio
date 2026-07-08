import { motion } from 'framer-motion';
import './SectionTitle.css';

export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      className={`section-title ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}
