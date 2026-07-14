import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { FiTarget, FiCode, FiBarChart2, FiHeart, FiZap } from 'react-icons/fi';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import cvFile from '../assets/Musawer Hussain cv.pdf';
import './About.css';

const stats = [
  { value: '4+', label: 'Years of Study' },
  { value: '8+', label: 'Projects Built' },
  { value: '20+', label: 'Technologies' },
  { value: '3', label: 'Specializations' },
];

const cards = [
  {
    icon: <FiCode />,
    title: 'Data & Programming Journey',
    description:
      'My work started with SQL, Python, and databases, then grew into analytics, automation, and machine learning. I build tools that are accurate, repeatable, and ready for real use.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Analytics & Reporting Focus',
    description:
      'I like turning raw information into clear insights using Python, PostgreSQL, MongoDB, Excel, Power BI, and Claude. Clean data, thoughtful dashboards, and dependable reporting are what I care about most.',
  },
  {
    icon: <FiTarget />,
    title: 'Career Goals',
    description:
      'I am focused on opportunities that combine software engineering, data analytics, machine learning, and business intelligence. I want to contribute with strong technical fundamentals and modern delivery.',
  },
  {
    icon: <FiHeart />,
    title: 'Personal Mission',
    description:
      'I believe useful technology should make work easier and decisions clearer. My mission is to build simple, practical solutions that help people and businesses move forward with confidence.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <div className="page about">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiZap /> Professional Profile
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About <span className="gradient-text">Musawer Hussain</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A dedicated software engineer and data analyst committed to delivering
            practical, high-quality solutions across analytics, databases, and application development.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          className="about__stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} className="about__stat glass" variants={itemVariants}>
              <span className="about__stat-value gradient-text">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional intro */}
        <section className="section">
          <SectionTitle
            eyebrow="Overview"
            title="Professional Summary"
            subtitle="A concise introduction to my background, expertise, and professional approach."
          />
          <motion.div
            className="about__intro glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm <strong>Musawer Hussain</strong>, a professional software engineer and data analyst with proven expertise in Python, machine learning, SQL, PostgreSQL, MongoDB, Excel, Power BI, and Claude.
            </p>
            <p>
              I deliver reliable, production-aware solutions that combine data engineering, analytics, automation, and AI with clear business value.
            </p>
            <p>
              I'm seeking roles where I can contribute as a technical problem solver in data analytics, ML, reporting, and software delivery.
            </p>
          </motion.div>
        </section>

        {/* Detailed cards */}
        <section className="section section--alt">
          <div className="container">
            <SectionTitle
              eyebrow="My Story"
              title="Background & Aspirations"
              subtitle="The experiences that shaped my career and the direction I am pursuing."
            />
            <motion.div
              className="about__cards"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {cards.map((card) => (
                <motion.div
                  key={card.title}
                  className="about__card glass"
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                >
                  <span className="about__card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <motion.div
              className="about__cta glass"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2>Explore My Work & Credentials</h2>
              <p>Review my project portfolio, technical skills, or download my full curriculum vitae.</p>
              <div className="about__cta-actions">
                <Button to="/projects" variant="primary">View Projects <FaArrowRight /></Button>
                <Button href={cvFile} download variant="ghost">
                  <FaDownload /> Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
