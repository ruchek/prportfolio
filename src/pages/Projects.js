import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: 'Schneider Electrics',
    subtitle: 'Embedded System Management',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'B2B Skillmatrix',
    subtitle: 'AI-powered Marketplace',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Production Scheduling',
    subtitle: 'Manufacturing Automation',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Secure Land Properties',
    subtitle: 'Real Estate Platform',
    category: 'Web & Mobile',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Event Management',
    subtitle: 'Digital Platform',
    category: 'Web & Mobile',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'American Battery Solutions',
    subtitle: 'Energy Dashboard',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop'
  },
  {
    id: 7,
    title: 'E-commerce Platforms',
    subtitle: 'Multi-brand Solutions',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
  },
  {
    id: 8,
    title: 'BJP Recruitment Portal',
    subtitle: 'Large-scale Recruitment',
    category: 'Web & Mobile',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
  },
  {
    id: 9,
    title: 'Hotel Booking Platform',
    subtitle: 'Hospitality Solution',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop'
  },
  {
    id: 10,
    title: 'Geriatrics Healthcare',
    subtitle: 'Elderly Care Application',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
  },
  {
    id: 11,
    title: 'Elfonze Website',
    subtitle: 'Corporate Redesign',
    category: 'Web & Mobile',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
  },
  {
    id: 12,
    title: 'Healthcare App Redesign',
    subtitle: 'Mobile Application',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
  }
];

const categories = ['All', 'Enterprise', 'Healthcare', 'E-commerce', 'Web & Mobile'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projectData.filter(project =>
    selectedCategory === 'All' ? true : project.category === selectedCategory
  );

  return (
    <div id="main" className="alt">
      {/* Page Banner */}
      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Projects
            </motion.h1>
          </header>
          <motion.div
            className="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              A curated collection of case studies showcasing user-centered digital experiences
              across enterprise, healthcare, e-commerce, and web platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <motion.div
        className="filter-tabs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <section className="tiles">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              layout
              style={{
                backgroundImage: `url(${project.image})`
              }}
            >
              <header>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </header>
              <Link to={`/projects/${project.id}`} className="link primary" aria-label={project.title}>
                <span className="sr-only">{project.title}</span>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
}
