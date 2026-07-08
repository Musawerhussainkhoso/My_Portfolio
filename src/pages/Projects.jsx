import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaProjectDiagram } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { projects, projectFilters } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="page projects">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <motion.span
            className="chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaProjectDiagram /> Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of work spanning software engineering, data analysis,
            and machine learning. Filter by category to explore.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {projectFilters.map((f) => (
            <button
              key={f}
              className={`projects__filter ${filter === f ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>
    </div>
  );
}
