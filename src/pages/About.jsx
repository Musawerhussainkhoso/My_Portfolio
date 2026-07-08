import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { FiTarget, FiCode, FiBarChart2, FiHeart, FiZap } from 'react-icons/fi';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
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
      'My work started with SQL, Python, and databases, then grew into automation, data analysis, and mobile app ideas. I enjoy building practical solutions that are easy to understand and useful in real life.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Analytics & Reporting Focus',
    description:
      'I like turning raw information into clear insights using Python, PostgreSQL, MongoDB, Excel, and Power BI. Clean data, thoughtful dashboards, and dependable reporting are what I care about most.',
  },
  {
    icon: <FiTarget />,
    title: 'Career Goals',
    description:
      'I am growing toward opportunities in data analytics, database work, Python-based solutions, and mobile app development. I want to contribute with strong fundamentals and keep learning through real projects.',
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
            <FiZap /> About Me
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Turning Data Into <span className="gradient-text">Practical Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A data-focused developer and analyst dedicated to building useful tools,
            reports, and mobile app ideas with real-world impact.
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
            eyebrow="Who I Am"
            title="Professional Introduction"
            subtitle="A brief overview of who I am and what I bring to the table."
          />
          <motion.div
            className="about__intro glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm <strong>Musawer Hussain</strong>, a data-focused developer and analyst
              from Pakistan with a strong interest in SQL, Python, databases, reporting,
              and mobile app development. I enjoy using practical tools to solve everyday
              problems with clear, measurable results.
            </p>
            <p>
              I like working across the full problem-solving flow: collecting and cleaning
              data, building reliable database solutions, creating useful dashboards, and
              turning ideas into real products that people can actually use.
            </p>
            <p>
              I'm currently open to <strong>data-related opportunities, freelance projects,
              and mobile app ideas</strong> — anything that lets me learn, contribute, and
              create value.
            </p>
          </motion.div>
        </section>

        {/* Detailed cards */}
        <section className="section section--alt">
          <div className="container">
            <SectionTitle
              eyebrow="My Journey"
              title="Background & Goals"
              subtitle="The paths I've taken and where I'm headed."
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
              <h2>Want to know more?</h2>
              <p>Check out my projects, skills, or download my full CV.</p>
              <div className="about__cta-actions">
                <Button to="/projects" variant="primary">View Projects <FaArrowRight /></Button>
                <Button href="/Musawer_Hussain_CV.pdf" download variant="ghost">
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
