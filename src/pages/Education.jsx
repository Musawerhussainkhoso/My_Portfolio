import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import { education, coursework } from '../data/education';
import './Education.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  return (
    <div className="page education">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaBookOpen /> Academic Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="gradient-text">Education</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A formal foundation in software engineering, complemented by hands-on
            coursework in data and web technologies.
          </motion.p>
        </div>

        {/* Timeline */}
        <section className="section">
          <SectionTitle
            eyebrow="Timeline"
            title="Educational Background"
            subtitle="My academic path from pre-engineering to a bachelor's in software engineering."
          />
          <Timeline items={education} />
        </section>

        {/* Coursework */}
        <section className="section section--alt">
          <div className="container">
            <SectionTitle
              eyebrow="Relevant Coursework"
              title="Key Courses"
              subtitle="Subjects that shaped my skills in software engineering, data, and machine learning."
            />
            <motion.div
              className="education__coursework"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {coursework.map((course) => (
                <motion.div key={course} className="education__course glass" variants={itemVariants} whileHover={{ y: -4 }}>
                  <span className="education__course-icon"><FiBook /></span>
                  <span>{course}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
