import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    title: 'Senior UI/UX Designer',
    company: 'Current Position',
    period: '2022 – Present',
    description: 'Leading design initiatives for enterprise applications, healthcare platforms, and e-commerce solutions. Conducting user research, creating design systems, and mentoring junior designers.'
  },
  {
    title: 'UI/UX Designer',
    company: 'Previous Role',
    period: '2020 – 2022',
    description: 'Designed web and mobile applications across multiple industries. Conducted usability testing and implemented design thinking methodologies.'
  }
];

const certifications = [
  {
    title: 'Design Thinking for UX',
    issuer: 'IIT Delhi',
    icon: 'fa-graduation-cap'
  },
  {
    title: 'Advanced UX Product Design',
    issuer: 'Bridge UX',
    icon: 'fa-certificate'
  },
  {
    title: 'Certified Image Consultant',
    issuer: 'Conselle University (USA) & ICBI',
    icon: 'fa-award'
  },
  {
    title: 'Soft Skills Trainer (TTT)',
    issuer: 'NABET & SQA Accredited',
    icon: 'fa-chalkboard-teacher'
  }
];

const skills = {
  design: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems', 'Information Architecture'],
  tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Material.io', 'AG Grid'],
  other: ['Corporate Training', 'Image Consulting', 'Branding', 'Content Writing']
};

export default function Resume() {
  return (
    <div id="main" className="alt">
      {/* Banner */}
      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Resume
            </motion.h1>
          </header>
          <motion.div
            className="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>5+ years of experience in UI/UX Design & Product Research</p>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section-inner">
        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3em' }}
        >
          <a
            href="/resume.pdf"
            download="Pooja_Ravi_Resume.pdf"
            className="button primary"
          >
            <i className="fas fa-download"></i>&nbsp; Download Resume PDF
          </a>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <header className="major">
            <h2>Experience</h2>
          </header>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: '2em',
                background: 'var(--bg-secondary)',
                marginBottom: '1.5em'
              }}
            >
              <h3 style={{ marginBottom: '0.25em' }}>{exp.title}</h3>
              <p style={{ color: 'var(--accent-color)', marginBottom: '0.5em' }}>
                {exp.company} &nbsp;|&nbsp; {exp.period}
              </p>
              <p style={{ marginBottom: 0 }}>{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '4em' }}
        >
          <header className="major">
            <h2>Certifications</h2>
          </header>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5em'
          }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  padding: '2em',
                  background: 'var(--bg-tertiary)',
                  textAlign: 'center'
                }}
              >
                <i
                  className={`fas ${cert.icon}`}
                  style={{
                    fontSize: '2em',
                    color: 'var(--accent-color)',
                    marginBottom: '0.5em',
                    display: 'block'
                  }}
                ></i>
                <h4 style={{ marginBottom: '0.25em' }}>{cert.title}</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: 0, fontSize: '0.9em' }}>
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '4em' }}
        >
          <header className="major">
            <h2>Skills & Expertise</h2>
          </header>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2em'
          }}>
            {/* Design Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>
                <i className="fas fa-pencil-ruler" style={{ marginRight: '0.5em', color: 'var(--accent-color)' }}></i>
                Design
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skills.design.map((skill, index) => (
                  <li key={index} style={{ padding: '0.5em 0', borderBottom: '1px solid var(--border-color)' }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>
                <i className="fas fa-tools" style={{ marginRight: '0.5em', color: 'var(--accent-color)' }}></i>
                Tools
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skills.tools.map((skill, index) => (
                  <li key={index} style={{ padding: '0.5em 0', borderBottom: '1px solid var(--border-color)' }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Other Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>
                <i className="fas fa-star" style={{ marginRight: '0.5em', color: 'var(--accent-color)' }}></i>
                Additional
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skills.other.map((skill, index) => (
                  <li key={index} style={{ padding: '0.5em 0', borderBottom: '1px solid var(--border-color)' }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
