import React from 'react';
import { Database, Lightbulb, TrendingUp, Users } from 'lucide-react';
import './About.css';

const About = () => {
  const timelineData = [
    {
      year: '2018 - 2019',
      title: 'Data Scientist',
      desc: 'Started my career building ML models and data pipelines, learning how to extract signal from noise.',
      icon: <Database size={24} />,
      colorClass: 'card-blue'
    },
    {
      year: '2019 - 2021',
      title: 'The Pivot',
      desc: "Master's In Data Science — Realized the biggest impact wasn't in the model, it was in deciding what to build and why.",
      icon: <Lightbulb size={24} />,
      colorClass: 'card-orange'
    },
    {
      year: '2021 - 2024',
      title: 'Consultant / Product Manager',
      desc: 'Applied data-driven thinking to product strategy, growing features from 0→1 and scaling them.',
      icon: <TrendingUp size={24} />,
      colorClass: 'card-green'
    },
    {
      year: '2024 - 2026',
      title: 'Senior PM',
      desc: 'Leading cross-functional teams, owning product vision, and mentoring the next generation of PMs.',
      icon: <Users size={24} />,
      colorClass: 'card-purple'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-header">
          <span className="section-label">ABOUT ME</span>
          <h2 className="section-title">From data pipelines<br/>to product vision.</h2>
          <p className="about-description">
            I'm a Senior Product Manager who brings a rare blend of deep technical 
            expertise and strategic product thinking. My data science background means I 
            don't just rely on gut feeling — I build hypotheses, design experiments, and let 
            the data guide the roadmap.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-cards">
            {timelineData.map((item, index) => (
              <div key={index} className={`timeline-card ${item.colorClass}`}>
                <div className="card-icon">{item.icon}</div>
                <div className="card-year">{item.year}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
