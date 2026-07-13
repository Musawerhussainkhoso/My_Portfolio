import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiCpu, FiBarChart2, FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import ThreeHero from '../components/ThreeHero';
import cvFile from '../assets/Musawer Hussain cv.pdf';
import { education } from '../data/education';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { featuredSkills, profileImage } from '../data/skills.jsx';
import './Home.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const roles = ['SQL & Python', 'Data Analysis', 'Mobile App Ideas', 'Power BI'];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <ThreeHero />
        <div className="container hero__grid">
          <div className="hero__content">
            <motion.span
              className="hero__badge chip"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero__pulse" /> Available for opportunities
            </motion.span>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm <span className="gradient-text">Musawer&nbsp;Hussain</span>
            </motion.h1>

            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Software Engineer &amp; Data Analyst
            </motion.p>

            <motion.div
              className="hero__roles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  className="hero__role"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="hero__intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I build practical solutions with SQL, PostgreSQL, Python, Dart, MongoDB, Excel, and Power BI for analytics, reporting, and modern app ideas.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button href={cvFile} download variant="primary">
                <FaDownload /> Download CV
              </Button>
              <Button to="/contact" variant="ghost">
                Contact Me <FaArrowRight />
              </Button>
            </motion.div>

            <motion.div
              className="hero__socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="https://github.com/Musawerhussainkhoso" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/musawerhussain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero__photo-wrap">
              <div className="hero__photo-glow hero__photo-glow--center" aria-hidden="true" />
              <div className="hero__photo-glow hero__photo-glow--left" aria-hidden="true" />
              <div className="hero__photo-glow hero__photo-glow--right" aria-hidden="true" />
              <img src={profileImage} alt="Musawer Hussain" className="hero__photo" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section section--tight">
        <div className="container">
          <SectionTitle
            eyebrow="About Me"
            title="Engineering Solutions With Purpose"
            subtitle="A disciplined approach to databases, analytics, and software — built for clarity, reliability, and real-world impact."
          />
          <div className="home__about-grid">
            <div className="glass home__about-card">
              <p>
                I am a versatile developer and analyst focused on turning data into clear, usable outcomes. My work combines database thinking, analytics, and practical product execution so the final result is not just functional but valuable.
              </p>
              <p>
                From reporting and automation to app concepts and structured data systems, I enjoy building work that feels polished, efficient, and easy to trust.
              </p>
            </div>
            <div className="glass home__about-card">
              <div className="home__highlight-row">
                <FiDatabase />
                <span>Database design and SQL workflows</span>
              </div>
              <div className="home__highlight-row">
                <FiBarChart2 />
                <span>Reporting, BI, and business insight storytelling</span>
              </div>
              <div className="home__highlight-row">
                <FiCpu />
                <span>Python automation and mobile-app-ready thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Core Competencies"
            title="Technical Expertise"
            subtitle="A focused stack for data engineering, database management, automation, and modern application development."
          />
          <motion.div
            className="home__skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {featuredSkills.map((skill, i) => (
              <div key={skill.name} variants={itemVariants}>
                <SkillCard skill={skill} index={i} categoryColor={skill.color} />
              </div>
            ))}
          </motion.div>
          <div className="text-center mt-4">
            <Button to="/skills" variant="ghost">Explore Full Skills <FaArrowRight /></Button>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Professional Experience"
            title="Career Highlights"
            subtitle="Selected roles and projects that reflect my growth in data analysis, software engineering, and product delivery."
          />
          <div className="home__timeline-list">
            {experience.slice(0, 4).map((item) => (
              <div key={item.title} className="glass home__timeline-card">
                <span className="home__timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="home__timeline-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Featured Work"
            title="Project Portfolio"
            subtitle="Data-driven solutions and software projects designed with precision, practicality, and professional polish."
          />
          <div className="home__projects-grid">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Button to="/projects" variant="ghost">View All Projects <FaArrowRight /></Button>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Academic Foundation"
            title="Education & Training"
            subtitle="A rigorous academic background in software engineering and analytical problem solving."
          />
          <div className="home__edu-grid">
            {education.map((item) => (
              <div key={item.title} className="glass home__edu-card">
                <span className="home__edu-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="home__edu-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Professional Services"
            title="What I Deliver"
            subtitle="Structured support for organizations that value quality, clarity, and dependable execution."
          />
          <div className="home__services-grid">
            {services.slice(0, 6).map((service) => (
              <div key={service.title} className="glass home__service-card">
                <div className="home__service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <motion.div
            className="home__cta glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="home__cta-icons">
              <FiCode /><FiBarChart2 /><FiCpu />
            </div>
            <h2>Let's Collaborate on Your Next Project</h2>
            <p>
              Whether you need data insights, reporting, database structure, or a polished app concept, I’m ready to help turn it into something real.
            </p>
            <div className="home__cta-actions">
              <Button to="/contact" variant="primary">Get in Touch <FaArrowRight /></Button>
              <Button href={cvFile} download variant="ghost">
                <FaDownload /> Download CV
              </Button>
            </div>
            <div className="home__contact-details">
              <span><FaEnvelope /> musawerhussain10@gmail.com</span>
              <span><FaMapMarkerAlt /> Hyderabad, Pakistan</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
