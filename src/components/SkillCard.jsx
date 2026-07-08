import { motion } from 'framer-motion';
import './SkillCard.css';

function getProficiency(level) {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Proficient';
  return 'Developing';
}

export default function SkillCard({ skill, index = 0, categoryColor }) {
  const { name, icon, level = 85, color = '#1a2744' } = skill;
  const accent = categoryColor || color;
  const proficiency = getProficiency(level);

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{ '--skill-color': accent }}
    >
      <div className="skill-card__accent" />

      <div className="skill-card__header">
        <div className="skill-card__icon-ring">
          <div className="skill-card__icon">{icon}</div>
        </div>
        <span className="skill-card__badge">{proficiency}</span>
      </div>

      <h3 className="skill-card__name">{name}</h3>

      <div className="skill-card__progress">
        <div className="skill-card__progress-track">
          <motion.div
            className="skill-card__progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.07 + 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="skill-card__level">{level}%</span>
      </div>
    </motion.div>
  );
}
