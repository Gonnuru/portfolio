import React from 'react';
import { Mail, FileText, ArrowDown, MessageCircle, Linkedin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        <div className="status-pill">
          <span className="status-dot"></span>
          Open to new opportunities
        </div>

        <h1 className="hero-title">Sampath Gonnuru</h1>
        
        <p className="hero-subtitle">
          Senior Product Manager with a <span className="highlight">Data Science</span> foundation — 
          <br className="desktop-break"/> building products where <strong>intuition meets evidence</strong>.
        </p>

        <div className="hero-actions">
          <a href="https://linkedin.com/in/sampathgonnuru/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a 
            href="#work" 
            className="btn btn-secondary" 
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FileText size={18} />
            View My Work
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">YEARS IN PRODUCT</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">12</span>
            <span className="stat-label">PRODUCTS SHIPPED</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">1.6B+</span>
            <span className="stat-label">USERS IMPACTED</span>
          </div>
        </div>

        <div className="scroll-indicator">
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
