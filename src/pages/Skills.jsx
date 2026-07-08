import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills.jsx';
import './Skills.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <div className="page skills">
      <div className="container">
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiZap /> Technical Proficiency
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A comprehensive overview of the tools and technologies I use for database engineering,
            data analysis, and software development — organized by discipline.
          </motion.p>
        </div>

        {skillCategories.map((category) => (
          <section key={category.id} className="section skills__category">
            <SectionTitle
              eyebrow={category.eyebrow}
              title={category.title}
              subtitle={category.subtitle}
            />

            <motion.div
              className="skills__panel"
              style={{ '--cat-color': category.color }}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="skills__panel-header">
                <span className="skills__panel-icon">{category.icon}</span>
                <div className="skills__panel-meta">
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>
              </div>

              <div className="skills__grid">
                {category.skills.map((skill, i) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <SkillCard skill={skill} index={i} categoryColor={category.color} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
