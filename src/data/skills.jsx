import { SiPython, SiPostgresql, SiMongodb, SiDart } from 'react-icons/si';
import { FaFileExcel, FaChartBar, FaMobileAlt } from 'react-icons/fa';
import { FiCpu, FiPackage, FiDatabase, FiCode } from 'react-icons/fi';

export const skillCategories = [
  {
    id: 'databases',
    title: 'Databases & SQL',
    subtitle: 'Database design, query optimization, and data architecture',
    color: '#667eea',
    skills: [
      { name: 'SQL', icon: <FiDatabase />, level: 92, category: 'databases' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88, category: 'databases' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 84, category: 'databases' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Core languages for backend, automation, and mobile development',
    color: '#f093fb',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 92, category: 'programming' },
      { name: 'Python Libraries', icon: <FiPackage />, level: 90, category: 'programming' },
      { name: 'Dart Programming', icon: <SiDart />, level: 84, category: 'programming' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    subtitle: 'Data visualization, reporting, and business intelligence',
    color: '#764ba2',
    skills: [
      { name: 'Excel', icon: <FaFileExcel />, level: 86, category: 'analytics' },
      { name: 'Power BI', icon: <FaChartBar />, level: 84, category: 'analytics' },
      { name: 'Data Visualization', icon: <FiCpu />, level: 90, category: 'analytics' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile & Web',
    subtitle: 'Cross-platform mobile app development and modern frameworks',
    color: '#00d4ff',
    skills: [
      { name: 'Mobile App Dev', icon: <FaMobileAlt />, level: 82, category: 'mobile' },
      { name: 'React', icon: <FiCode />, level: 88, category: 'mobile' },
      { name: 'JavaScript/Web', icon: <FiCpu />, level: 85, category: 'mobile' },
    ],
  },
];

export const featuredSkills = [
  { name: 'SQL', icon: <FiDatabase />, level: 92, color: '#667eea', category: 'databases' },
  { name: 'Python', icon: <SiPython />, level: 92, color: '#f093fb', category: 'programming' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88, color: '#667eea', category: 'databases' },
  { name: 'Power BI', icon: <FaChartBar />, level: 84, color: '#764ba2', category: 'analytics' },
  { name: 'Python Libraries', icon: <FiPackage />, level: 90, color: '#f093fb', category: 'programming' },
  { name: 'Excel', icon: <FaFileExcel />, level: 86, color: '#764ba2', category: 'analytics' },
];
