import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/main.css';
import './styles/components.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const location = useLocation();

  // Handle preload state
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.classList.remove('is-menu-visible');
  }, [location]);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('is-menu-visible');
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('is-menu-visible');
  };

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Mobile Menu - Outside wrapper to avoid blur */}
      <nav id="menu">
        <button className="close" onClick={closeMenu} aria-label="Close menu">
          <i className="fas fa-times"></i>
        </button>
        <ul className="links">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/resume" onClick={closeMenu}>Resume</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
        <ul className="actions stacked">
          <li>
            <button className="button fit" onClick={toggleTheme}>
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
              &nbsp; {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Menu Overlay - Outside wrapper to avoid blur */}
      <div className="menu-overlay" onClick={closeMenu}></div>

      <div id="wrapper">
        <ScrollToTop />

        {/* Header */}
        <header
          id="header"
          className={`${isHomePage && !isScrolled ? 'alt' : ''} ${isScrolled ? 'reveal' : ''}`}
        >
          <Link to="/" className="logo">
            <strong>Pooja Ravi</strong>
          </Link>

          <nav>
            <div className="nav-links">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
              <Link to="/projects" className={location.pathname.startsWith('/projects') ? 'active' : ''}>
                Projects
              </Link>
              <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
                Resume
              </Link>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </div>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </header>

        {/* Main Content */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="mailto:pooja.ravi2212@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/poojaravi2212/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Pooja Ravi {new Date().getFullYear()}</li>
            <li>UI/UX Designer</li>
          </ul>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;
