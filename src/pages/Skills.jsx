import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills.jsx';
import './Skills.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <div className="page skills">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiZap /> Skills & Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="gradient-text">Technical Toolkit</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A focused set of tools for SQL, Python, databases, reporting, and mobile app work — organized by category.
          </motion.p>
        </div>

        {/* Skill categories */}
        {skillCategories.map((category, catIndex) => (
          <section key={category.id} className="section skills__category">
            <SectionTitle
              eyebrow={`Category ${catIndex + 1}`}
              title={category.title}
              subtitle={category.subtitle}
            />

            <div className="skills__category-header">
              <span className="skills__category-icon">{category.icon}</span>
            </div>

            <motion.div
              className="skills__grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {category.skills.map((skill, i) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <SkillCard skill={skill} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
