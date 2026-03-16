import React from 'react';
import { BarChart2, Sparkles, Shield, Zap, ArrowUpRight } from 'lucide-react';
import './Work.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Reimagining Onboarding for a B2B Analytics Platform',
      description: 'Used behavioral data and cohort analysis to redesign the first-time user experience, turning a leaky funnel into a retention machine.',
      metrics: [
        { value: '+34%', label: 'Retention' },
        { value: '-52%', label: 'Time-to-Value' },
        { value: '72 \u2192 84', label: 'NPS' }
      ],
      tags: ['Experimentation', 'Onboarding', 'Retention'],
      icon: <BarChart2 size={24} />,
      colorClass: 'work-card-orange'
    },
    {
      id: 2,
      title: 'Building an AI-Powered Recommendation Engine',
      description: 'Bridged my DS roots with PM strategy to ship a personalization layer that felt magical to users while driving measurable business outcomes.',
      metrics: [
        { value: '+22%', label: 'Engagement' },
        { value: '$8M', label: 'ARR Impact' },
        { value: '3x', label: 'CTR' }
      ],
      tags: ['Machine Learning', 'Personalization', 'Growth'],
      icon: <Sparkles size={24} />,
      colorClass: 'work-card-purple'
    },
    {
      id: 3,
      title: 'Self-Serve Analytics Dashboard for Enterprise',
      description: 'Turned a complex data warehouse into an intuitive self-serve tool \u2014 empowering non-technical users while reducing support burden dramatically.',
      metrics: [
        { value: '200+', label: 'Clients' },
        { value: '-45%', label: 'Support Tickets' },
        { value: '+68%', label: 'Weekly Active' }
      ],
      tags: ['Enterprise', 'Self-Serve', 'Data Viz'],
      icon: <Shield size={24} />,
      colorClass: 'work-card-green'
    },
    {
      id: 4,
      title: 'Experimentation Framework from Scratch',
      description: 'Designed and operationalized a company-wide experimentation culture \u2014 from hypothesis templates to statistical rigor standards.',
      metrics: [
        { value: '40+', label: 'Tests/Quarter' },
        { value: '+3x', label: 'Decision Speed' },
        { value: '8', label: 'Teams Adopted' }
      ],
      tags: ['A/B Testing', 'Culture', 'Process'],
      icon: <Zap size={24} />,
      colorClass: 'work-card-blue'
    }
  ];

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <div className="work-header">
          <span className="section-label">FEATURED WORK</span>
          <h2 className="section-title">Products I've shaped.</h2>
          <p className="work-description">
            Each project represents the intersection of deep data understanding and thoughtful product strategy.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.id} className={`work-card ${project.colorClass}`}>
              <div className="work-card-header">
                <div className="work-icon">{project.icon}</div>
                <ArrowUpRight size={20} className="work-link-icon" />
              </div>
              
              <h3 className="work-title">{project.title}</h3>
              <p className="work-desc">{project.description}</p>
              
              <div className="work-metrics">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-item">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="work-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="work-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
