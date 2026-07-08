import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './styles/global.css';
import './styles/responsive.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: '/', element: <Home /> },
          { path: '/about', element: <About /> },
          { path: '/skills', element: <Skills /> },
          { path: '/education', element: <Education /> },
          { path: '/projects', element: <Projects /> },
          { path: '/experience', element: <Experience /> },
          { path: '/services', element: <Services /> },
          { path: '/resume', element: <Resume /> },
          { path: '/contact', element: <Contact /> },
        ].map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {route.element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
