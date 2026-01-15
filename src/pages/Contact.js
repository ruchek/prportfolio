import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_default';
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_default';
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'default_key';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'pooja.ravi2212@gmail.com',
      reply_to: formData.email
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error. Please try emailing directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact
            </motion.h1>
          </header>
          <motion.div
            className="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Let's collaborate to build meaningful digital experiences.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="inner">
          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '1em',
                    marginBottom: '1.5em',
                    background: submitStatus.type === 'success'
                      ? 'rgba(39, 174, 96, 0.2)'
                      : 'rgba(231, 76, 60, 0.2)',
                    border: `1px solid ${submitStatus.type === 'success' ? '#27ae60' : '#e74c3c'}`,
                    color: submitStatus.type === 'success' ? '#27ae60' : '#e74c3c'
                  }}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value={isSubmitting ? 'Sending...' : 'Send Message'}
                    className="primary"
                    disabled={isSubmitting}
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" onClick={() => setFormData({ name: '', email: '', message: '' })} />
                </li>
              </ul>
            </form>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            className="split"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <section>
              <div className="contact-method">
                <span className="icon"><i className="fas fa-envelope"></i></span>
                <h3>Email</h3>
                <a href="mailto:pooja.ravi2212@gmail.com">pooja.ravi2212@gmail.com</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon"><i className="fas fa-phone"></i></span>
                <h3>Phone</h3>
                <span>***** *****</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                <h3>Location</h3>
                <span>India</span>
              </div>
            </section>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
