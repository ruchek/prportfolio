import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Featured projects for homepage tiles
const featuredProjects = [
  {
    id: 1,
    title: 'Schneider Electrics',
    category: 'Embedded System Management',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'B2B Skillmatrix',
    category: 'AI-powered Marketplace',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'American Battery Solutions',
    category: 'Energy Dashboard',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop'
  },
  {
    id: 10,
    title: 'Geriatrics Healthcare',
    category: 'Healthcare Application',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
  },
  {
    id: 7,
    title: 'E-commerce Platforms',
    category: 'Multi-brand Solutions',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Event Management',
    category: 'Digital Platform',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'
  }
];

// Skills data
const skills = [
  { name: 'UX Research', level: 95 },
  { name: 'UI Design', level: 94 },
  { name: 'Wireframing', level: 96 },
  { name: 'Prototyping', level: 92 },
  { name: 'Usability Testing', level: 90 },
  { name: 'Figma', level: 96 },
  { name: 'Adobe XD', level: 88 },
  { name: 'Miro', level: 90 }
];

// Typing effect hook
function useTypingEffect(texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

export default function Home() {
  const typedText = useTypingEffect([
    'Senior UI/UX Designer',
    'Product Researcher',
    'UX Strategist',
    'Corporate Trainer'
  ]);

  return (
    <>
      {/* Banner Section */}
      <section id="banner" className="major">
        <div className="inner">
          {/* Profile Image */}
          <motion.div
            className="profile-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/profile.jpg" alt="Pooja Ravi" />
          </motion.div>

          <header className="major">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Pooja Ravi
            </motion.h1>
          </header>
          <div className="content">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
              <br />
              Designing intuitive digital experiences that connect users, brands, and technology.
            </motion.p>
            <motion.ul
              className="actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <li>
                <Link to="/projects" className="button next scrolly">
                  View My Work
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main">
        {/* Featured Projects Tiles */}
        <section id="one" className="tiles">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundImage: `url(${project.image})`
              }}
            >
              <header>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </header>
              <Link to={`/projects/${project.id}`} className="link primary" aria-label={project.title}>
                <span className="sr-only">{project.title}</span>
              </Link>
            </motion.article>
          ))}
        </section>

        {/* About Section */}
        <section id="two">
          <div className="inner">
            <motion.header
              className="major"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>About Me</h2>
            </motion.header>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a certified UI/UX Designer and Engineer with a strong foundation in product design,
              UX research, and visual storytelling. Over the years, I've worked on diverse projects —
              from healthcare apps and AI-powered marketplaces to enterprise dashboards and consumer-facing
              platforms. What sets me apart is my ability to combine Human-Centered Design Thinking
              (IIT Delhi certified), Advanced UX for Web & Mobile Applications (Bridge UX), and
              Corporate Training expertise to design experiences that are functional, aesthetic, and brand-aligned.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              className="skills-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <h4>{skill.name}</h4>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.ul
              className="actions"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <li>
                <Link to="/contact" className="button next">
                  Get In Touch
                </Link>
              </li>
            </motion.ul>
          </div>
        </section>
      </div>
    </>
  );
}
