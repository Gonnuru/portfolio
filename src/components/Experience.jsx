import React from 'react';
import { Home, Briefcase, Building, ChevronRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Product Manager',
      company: 'The Home Depot Inc.',
      department: 'Customer Innovation & Delivery Transformation',
      date: 'Oct 2024 – Present',
      tag: 'Product Management',
      tagColor: 'tag-orange',
      icon: <Home size={20} />,
      iconBg: 'icon-bg-orange',
      bullets: [
        'Central lead for the operational strategy of a 1.5B annual transactional GenAI/Automation ecosystem, acting as the primary POC for global vendor partnerships and workforce scalability',
        'Orchestrated vendor operations and integrations with Twilio, Sendgrid, and Airship, managing a $1M+ roadmap and improving enterprise delivery rates by 820 basis points to a historic 93.4%',
        'Led workforce planning for 16+ engineers and 4 APMs, utilizing Tableau-based dashboards to track performance metrics and resolve high-level executive escalations within 48 hours',
        'Optimized resource allocation by piloting RCS branded messaging and multi-language AI triggers, reducing opt-outs and enhancing the scalability of omnichannel communication mechanisms',
        'Standardized process documentation for automated communication workflows, ensuring adherence to internal legal policies and external data regulations across Email, SMS, and Push channels'
      ]
    },
    {
      id: 2,
      role: 'Product Manager',
      company: 'The Home Depot Inc.',
      department: 'Enterprise Machine Learning & Personalization',
      date: 'Sep 2022 – Oct 2024',
      tag: 'Product Management',
      tagColor: 'tag-orange',
      icon: <Home size={20} />,
      iconBg: 'icon-bg-orange',
      bullets: [
        'Responsible for the end-to-end delivery of high-value GenAI and ML products, focusing on vendor evaluation, model observability, and operational efficiency across the enterprise',
        'Executed vendor management and POCs for 8 external providers, securing $1M in funding by demonstrating AI-driven ROI and automating context-gathering for chatbot development',
        'Collaborated with Google to deploy Vertex AI model observability tools, transforming "black-box" ML assets into explainable assets to mitigate operational risks in the online contact center',
        'Engineered workforce analytics via predictive status updates for 400k+ monthly deliveries, reducing "Where Is My Order" (WISMO) inquiries by 15% through iterative process improvements',
        'Pioneered GenAI transparency by designing custom templates and trace logs that improved delivery site instructions, reducing last-mile friction and call center volume'
      ]
    },
    {
      id: 2,
      role: 'Business Technology Consultant',
      company: 'ZS Associates Inc.',
      department: 'Pharmaceutical and Life Sciences',
      date: 'Aug 2021 – Sep 2022',
      tag: 'Consulting',
      tagColor: 'tag-purple',
      icon: <Briefcase size={20} />,
      iconBg: 'icon-bg-purple',
      bullets: [
        'Helping Emerging Pharma Clients and Life Sciences Clients to design and manage enterprise-grade B2B technology solutions, enhance data-centric business processes using thoughtful and refined user experiences',
        'Organized a 12-month roadmap prioritizing 30 features for an $18M cloud pricing application; translated complex pharmaceutical business needs into clear PRDs and technical requirements for development teams',
        'Led post-merger master data migration for 15 cross-functional stakeholders, validating 150+ ETL test cases via SQL and ensuring 100% data accuracy across distributed decision-support reports',
        'Designed standardized marketing performance reports and dashboards using T-shirt sizing for effort estimation, allowing leadership to drive drug launch strategies and ROI during the high-volatility COVID-19 era'
      ]
    },
    {
      id: 3,
      role: 'Data Scientist',
      company: 'Turiya Softech Pvt Ltd.',
      department: 'ML/Business Process Automation',
      date: 'Feb 2018 – Jun 2019',
      tag: 'Data Science',
      tagColor: 'tag-blue',
      icon: <Building size={20} />,
      iconBg: 'icon-bg-blue',
      bullets: [
        'Developed end-to-end Machine learning workflows and NLP tools to automate procurement and tender drafting',
        'Engineered an NLP-based tender/procurement tool, utilizing 30K+ records to improve forecast accuracy by 30%',
        'Orchestrated ML models that improving customer retention by 32% and reduced tracking costs and late payments'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container experience-container">

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">

              <div className="timeline-marker">
                <div className={`marker-icon ${exp.iconBg}`}>
                  {exp.icon}
                </div>
                <div className="marker-line"></div>
              </div>

              <div className="timeline-content">
                <div className="exp-header">
                  <div className="exp-meta">
                    <span className={`exp-tag ${exp.tagColor}`}>{exp.tag}</span>
                    <span className="exp-date">{exp.date}</span>
                  </div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-department">{exp.department}</div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="bullet-item">
                      <ChevronRight size={16} className="bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
