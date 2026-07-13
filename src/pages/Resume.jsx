import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import cvFile from '../assets/Musawer Hussain cv.pdf';
import { skillCategories } from '../data/skills.jsx';
import { education, coursework } from '../data/education';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import './Resume.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Resume() {
  return (
    <div className="page resume">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaFileAlt /> Curriculum Vitae
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional <span className="gradient-text">Resume</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A structured summary of my qualifications, education, projects, and professional experience.
            Download the complete PDF below.
          </motion.p>
        </div>

        {/* Download button */}
        <motion.div
          className="resume__download"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button href={cvFile} download variant="primary">
            <FaDownload /> Download CV
          </Button>
        </motion.div>

        {/* Highlights */}
        <section className="section">
          <SectionTitle
            eyebrow="Executive Summary"
            title="Resume Highlights"
            subtitle="Key qualifications drawn from my professional and academic background."
          />

          <motion.div
            className="resume__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Skills summary */}
            <motion.div className="resume__card glass" variants={itemVariants}>
              <h3>Top Skills</h3>
              <ul className="resume__list">
                {skillCategories.map((cat) => (
                  <li key={cat.id}>
                    <FiCheckCircle className="resume__check" />
                    <div>
                      <strong>{cat.title}</strong>
                      <span className="resume__skills">
                        {cat.skills.slice(0, 5).map((s) => s.name).join(', ')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education summary */}
            <motion.div className="resume__card glass" variants={itemVariants}>
              <h3>Education</h3>
              <ul className="resume__list">
                {education.map((edu, i) => (
                  <li key={i}>
                    <FiCheckCircle className="resume__check" />
                    <div>
                      <strong>{edu.title}</strong>
                      <span className="resume__sub">{edu.subtitle}</span>
                      <span className="resume__period">{edu.period}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Experience summary */}
            <motion.div className="resume__card glass" variants={itemVariants}>
              <h3>Experience</h3>
              <ul className="resume__list">
                {experience.map((exp, i) => (
                  <li key={i}>
                    <FiCheckCircle className="resume__check" />
                    <div>
                      <strong>{exp.title}</strong>
                      <span className="resume__sub">{exp.subtitle}</span>
                      <span className="resume__period">{exp.period}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Projects summary */}
            <motion.div className="resume__card glass" variants={itemVariants}>
              <h3>Key Projects</h3>
              <ul className="resume__list">
                {projects.slice(0, 5).map((p) => (
                  <li key={p.title}>
                    <FiCheckCircle className="resume__check" />
                    <div>
                      <strong>{p.title}</strong>
                      <span className="resume__sub">{p.category}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Coursework */}
        <section className="section section--alt">
          <div className="container">
            <SectionTitle
              eyebrow="Academic Record"
              title="Relevant Coursework"
              subtitle="Courses that underpin my work in software engineering, data science, and machine learning."
            />
            <motion.div
              className="resume__coursework"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {coursework.map((course) => (
                <motion.span key={course} className="chip" variants={itemVariants}>
                  {course}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bottom download */}
        <section className="section">
          <motion.div
            className="resume__cta glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2>Download the Complete Resume</h2>
            <p>Access my full curriculum vitae in PDF format for detailed review.</p>
            <Button href={cvFile} download variant="primary">
              <FaDownload /> Download CV
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
