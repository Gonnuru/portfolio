import React from 'react';
import { Mail, FileText, ArrowDown, MessageCircle } from 'lucide-react';
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
          <button className="btn btn-primary">
            <Mail size={18} />
            Get in Touch
          </button>
          <button className="btn btn-secondary">
            <FileText size={18} />
            View My Work
          </button>
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
