import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science (M.S)',
      major: 'Data Science',
      university: 'New Jersey Institute of Technology',
      location: 'NJ, USA',
      date: 'May 2021'
    },
    {
      degree: "Bachelor's",
      major: 'Computer Sciences',
      university: 'Jawaharlal Nehru Technological University',
      location: 'India',
      date: 'May 2018'
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="education-header">
          <span className="section-label">EDUCATION</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="edu-card">
              <div className="edu-icon-wrapper">
                <GraduationCap size={22} className="edu-icon" />
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <div className="edu-major">{edu.major}</div>
              <div className="edu-university">{edu.university}</div>
              <div className="edu-meta">
                <span className="edu-location">
                  <MapPin size={14} />
                  {edu.location}
                </span>
                <span className="edu-dot">•</span>
                <span className="edu-date">{edu.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
