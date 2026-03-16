import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">

        <div className="contact-glow-bg"></div>

        <div className="contact-header">
          <span className="section-label">LET'S TALK</span>
          <h2 className="contact-title">Have a product challenge?</h2>
          <h2 className="contact-subtitle">I'd love to hear about it.</h2>

          <p className="contact-desc">
            Whether it's a full-time role, advisory opportunity, or just a
            great product conversation my inbox is always open.
          </p>
        </div>

        <div className="contact-actions">
          <a href="https://linkedin.com/in/sampathgonnuru/" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin-btn">
            <div className="contact-icon-wrapper">
              <Linkedin size={20} />
            </div>
            <div className="contact-btn-text">
              <span className="contact-btn-title">LinkedIn</span>
              <span className="contact-btn-sub">Let's connect</span>
            </div>
          </a>

          <a href="mailto:sampath.jgonnuru@gmail.com" className="contact-btn email-btn">
            <div className="contact-icon-wrapper">
              <Mail size={20} />
            </div>
            <div className="contact-btn-text">
              <span className="contact-btn-title">Email</span>
              <span className="contact-btn-sub">sampath.jgonnuru@gmail.com</span>
            </div>
          </a>
        </div>

        <div className="contact-footer">
          <p>Built with care &middot; &copy; 2026 Sampath Gonnuru</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
