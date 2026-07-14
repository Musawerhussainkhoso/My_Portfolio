import { SiPython, SiPostgresql, SiMongodb, SiDart } from 'react-icons/si';
import { FaFileExcel, FaChartBar, FaMobileAlt, FaBrain, FaRobot } from 'react-icons/fa';
import { FiCpu, FiPackage, FiDatabase, FiCode, FiBarChart2, FiSmartphone } from 'react-icons/fi';

export const skillCategories = [
  {
    id: 'databases',
    eyebrow: 'Databases',
    title: 'Databases & SQL',
    subtitle: 'Database design, query optimization, and data architecture',
    color: '#1a2744',
    icon: <FiDatabase />,
    skills: [
      { name: 'SQL', icon: <FiDatabase />, level: 92, category: 'databases' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88, category: 'databases' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 84, category: 'databases' },
    ],
  },
  {
    id: 'programming',
    eyebrow: 'Languages',
    title: 'Programming & Automation',
    subtitle: 'Core languages and libraries for backend, analytics, and automation',
    color: '#c9a227',
    icon: <FiCode />,
    skills: [
      { name: 'Python', icon: <SiPython />, level: 92, category: 'programming' },
      { name: 'Python Libraries', icon: <FiPackage />, level: 90, category: 'programming' },
      { name: 'Dart Programming', icon: <SiDart />, level: 84, category: 'programming' },
    ],
  },
  {
    id: 'analytics',
    eyebrow: 'Analytics',
    title: 'BI & Reporting',
    subtitle: 'Analytics tools for dashboards, reporting, and insight delivery',
    color: '#4a5f82',
    icon: <FiBarChart2 />,
    skills: [
      { name: 'Excel', icon: <FaFileExcel />, level: 88, category: 'analytics' },
      { name: 'Power BI', icon: <FaChartBar />, level: 86, category: 'analytics' },
      { name: 'Data Visualization', icon: <FiBarChart2 />, level: 90, category: 'analytics' },
    ],
  },
  {
    id: 'ai',
    eyebrow: 'AI & ML',
    title: 'Machine Learning & AI',
    subtitle: 'Modern AI tools, ML modeling, and intelligent automation',
    color: '#a8861f',
    icon: <FaBrain />,
    skills: [
      { name: 'Machine Learning', icon: <FaBrain />, level: 86, category: 'ai' },
      { name: 'Claude', icon: <FaRobot />, level: 84, category: 'ai' },
      { name: 'Data Modeling', icon: <FiCpu />, level: 82, category: 'ai' },
    ],
  },
];

export const featuredSkills = [
  { name: 'SQL', icon: <FiDatabase />, level: 92, color: '#1a2744', category: 'databases' },
  { name: 'Python', icon: <SiPython />, level: 92, color: '#c9a227', category: 'programming' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88, color: '#4a5f82', category: 'databases' },
  { name: 'Power BI', icon: <FaChartBar />, level: 86, color: '#a8861f', category: 'analytics' },
  { name: 'Machine Learning', icon: <FaBrain />, level: 86, color: '#a8861f', category: 'ai' },
  { name: 'Claude', icon: <FaRobot />, level: 84, color: '#a8861f', category: 'ai' },
];

export { default as profileImage } from './mypic.jpg';
