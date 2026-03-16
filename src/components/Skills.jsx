import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      name: 'Product Strategy',
      dotColor: '#fb923c', // Orange
      skills: ['Roadmap Planning', 'User Research', 'Market Analysis', 'Go-to-Market', 'OKRs & KPIs', 'Competitive Intelligence']
    },
    {
      id: 2,
      name: 'Data & Analytics',
      dotColor: '#3b82f6', // Blue
      skills: ['A/B Testing', 'Statistical Analysis', 'SQL & Python', 'Cohort Analysis', 'Predictive Modeling', 'Data Visualization']
    },
    {
      id: 3,
      name: 'Execution',
      dotColor: '#10b981', // Green
      skills: ['Agile / Scrum', 'Stakeholder Management', 'Cross-functional Leadership', 'PRD Writing', 'Sprint Planning', 'Prioritization Frameworks']
    },
    {
      id: 4,
      name: 'Technical',
      dotColor: '#a855f7', // Purple
      skills: ['Machine Learning', 'APIs & System Design', 'ETL Pipelines', 'Cloud Platforms', 'Feature Flagging', 'Experimentation Platforms']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-header text-center">
          <span className="section-label">TOOLKIT</span>
          <h2 className="section-title text-center">What I bring to the table.</h2>
          <p className="skills-subtitle">
            A unique blend of product intuition, technical depth, and data fluency.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <div className="skill-card-header">
                <span 
                  className="skill-category-dot" 
                  style={{ backgroundColor: category.dotColor }}
                ></span>
                <h3 className="skill-category-name">{category.name}</h3>
              </div>
              
              <div className="skill-tags-container">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
