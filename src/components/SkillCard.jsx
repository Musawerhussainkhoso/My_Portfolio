import { motion } from 'framer-motion';
import './SkillCard.css';

export default function SkillCard({ skill, index = 0 }) {
  const { name, icon, level = 85, color = '#667eea' } = skill;

  return (
    <motion.div
      className="skill-card glass-premium"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      style={{ '--skill-color': color }}
    >
      <div className="skill-card__icon-wrapper">
        <div className="skill-card__icon" style={{ color }}>{icon}</div>
      </div>
      <span className="skill-card__name">{name}</span>
      <div className="skill-card__bar">
        <motion.div
          className="skill-card__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.06 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: color }}
        />
      </div>
      <span className="skill-card__level">{level}%</span>
    </motion.div>
  );
}
