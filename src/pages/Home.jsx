import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiCpu, FiBarChart2, FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import ThreeHero from '../components/ThreeHero';
import { education } from '../data/education';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { featuredSkills } from '../data/skills.jsx';
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
              <Button href="/Musawer_Hussain_CV.pdf" download variant="primary">
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
              <a href="https://github.com/musawerhussain" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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
            <div className="hero__photo-card glass-premium">
              <img src="/profile-pic.svg" alt="Musawer Hussain" className="hero__photo" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section section--tight">
        <div className="container">
          <SectionTitle
            eyebrow="About"
            title="A refined profile for data, databases, and product-minded solutions"
            subtitle="I bring a calm, structured approach to SQL, Python, dashboards, and app ideas that need to work in the real world."
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
            eyebrow="Capabilities"
            title="Skills I Work With"
            subtitle="A focused stack for data work, databases, automation, and modern app concepts."
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
                <SkillCard skill={skill} index={i} />
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
            eyebrow="Experience"
            title="A professional path shaped by data and software"
            subtitle="Selected experiences that reflect my growth in analysis, systems, and modern product thinking."
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
            eyebrow="Projects"
            title="Selected work that shows how I solve problems"
            subtitle="A mix of data-focused solutions and software projects designed to be practical and polished."
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
            eyebrow="Education"
            title="Training that supports a thoughtful technical foundation"
            subtitle="A strong academic base in software engineering and analytical problem solving."
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
            eyebrow="Services"
            title="Support for data, dashboards, and product-ready execution"
            subtitle="Flexible help for businesses and founders who want clarity, quality, and reliable delivery."
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
            <h2>Let's Build Something Meaningful</h2>
            <p>
              Whether you need data insights, reporting, database structure, or a polished app concept, I’m ready to help turn it into something real.
            </p>
            <div className="home__cta-actions">
              <Button to="/contact" variant="primary">Get in Touch <FaArrowRight /></Button>
              <Button href="/Musawer_Hussain_CV.pdf" download variant="ghost">
                <FaDownload /> Download CV
              </Button>
            </div>
            <div className="home__contact-details">
              <span><FaEnvelope /> musawerhussain@example.com</span>
              <span><FaMapMarkerAlt /> Hyderabad, Pakistan</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
