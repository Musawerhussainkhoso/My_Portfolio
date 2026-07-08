import { motion } from 'framer-motion';
import './Timeline.css';

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="timeline__item"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="timeline__dot" />
          <div className="timeline__content glass">
            <span className="timeline__period">{item.period}</span>
            <h3 className="timeline__title">{item.title}</h3>
            {item.subtitle && <p className="timeline__subtitle">{item.subtitle}</p>}
            {item.description && <p className="timeline__desc">{item.description}</p>}
            {item.tags && (
              <div className="timeline__tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
