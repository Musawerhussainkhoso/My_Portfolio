import { SiPython, SiPostgresql, SiMongodb, SiDart } from 'react-icons/si';
import { FaFileExcel, FaChartBar, FaMobileAlt } from 'react-icons/fa';
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
    title: 'Programming Languages',
    subtitle: 'Core languages for backend, automation, and mobile development',
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
    title: 'Data & Analytics',
    subtitle: 'Data visualization, reporting, and business intelligence',
    color: '#4a5f82',
    icon: <FiBarChart2 />,
    skills: [
      { name: 'Excel', icon: <FaFileExcel />, level: 86, category: 'analytics' },
      { name: 'Power BI', icon: <FaChartBar />, level: 84, category: 'analytics' },
      { name: 'Data Visualization', icon: <FiCpu />, level: 90, category: 'analytics' },
    ],
  },
  {
    id: 'mobile',
    eyebrow: 'Development',
    title: 'Mobile & Web',
    subtitle: 'Cross-platform mobile app development and modern frameworks',
    color: '#a8861f',
    icon: <FiSmartphone />,
    skills: [
      { name: 'JavaScript/Web', icon: <FiCpu />, level: 85, category: 'mobile' },
    ],
  },
];

export const featuredSkills = [
  { name: 'SQL', icon: <FiDatabase />, level: 92, color: '#1a2744', category: 'databases' },
  { name: 'Python', icon: <SiPython />, level: 92, color: '#c9a227', category: 'programming' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88, color: '#4a5f82', category: 'databases' },
  { name: 'Power BI', icon: <FaChartBar />, level: 84, color: '#a8861f', category: 'analytics' },
  { name: 'Python Libraries', icon: <FiPackage />, level: 90, color: '#c9a227', category: 'programming' },
  { name: 'Excel', icon: <FaFileExcel />, level: 86, color: '#4a5f82', category: 'analytics' },
];

export { default as profileImage } from './mypic.jpg';
