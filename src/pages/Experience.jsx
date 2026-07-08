import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Timeline from '../components/Timeline';
import { experience } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <div className="page experience">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaBriefcase /> Career Path
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="gradient-text">Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Internships, hands-on projects, and learning tracks that have shaped
            my practical skills across development and data.
          </motion.p>
        </div>

        {/* Timeline */}
        <section className="section">
          <SectionTitle
            eyebrow="Timeline"
            title="Professional & Learning Experience"
            subtitle="A chronological view of my growth across software engineering, data analysis, and machine learning."
          />
          <Timeline items={experience} />
        </section>
      </div>
    </div>
  );
}
