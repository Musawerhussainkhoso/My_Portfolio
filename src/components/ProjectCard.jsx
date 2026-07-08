import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

export default function ProjectCard({ project, index = 0 }) {
  const { title, category, description, technologies, github, demo } = project;

  return (
    <motion.article
      className="project-card glass"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card__top">
        <span className="project-card__category">{category}</span>
      </div>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      <div className="project-card__tech">
        {technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-card__actions">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost project-card__btn"
        >
          <FaGithub /> Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary project-card__btn"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </motion.article>
  );
}
