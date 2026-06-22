import React from 'react';
import './Career.css';

const experienceItems = [
  {
    title: 'Site Reliability Engineer | Java Developer',
    period: 'Professional Experience',
    summary:
      'Building and operating scalable systems with reliability-first engineering practices across cloud-native platforms and distributed backend architecture.',
    points: [
      'Design and maintain distributed services with strong uptime and performance targets.',
      'Automate incident response workflows, observability dashboards, and operational runbooks.',
      'Develop backend services and platform tooling using Java and modern DevOps practices.',
      'Improve system resiliency through capacity planning, fault isolation, and proactive monitoring.',
      'Deploy and operate workloads on Kubernetes with production-grade networking and security practices.',
      'Work with distributed technologies such as Spark and Cassandra for reliable data processing.',
      'Build internal tooling and automation that reduce manual effort and improve developer velocity.',
    ],
  },
];

const educationItems = [
  {
    school: 'Cleveland State University',
    degree: 'Computer Science',
    period: 'Graduated',
    details:
      'Strong foundation in software development, system design, and scalable architecture principles.',
  },
];

function Career() {
  return (
    <div className="career-wrapper">
      <section id="experience" className="career-section">
        <h2 className="career-heading">Experience</h2>
        <div className="career-grid">
          {experienceItems.map((item) => (
            <article key={item.title} className="career-card">
              <div className="career-card-header">
                <h3>{item.title}</h3>
                <span className="career-chip">{item.period}</span>
              </div>
              <p className="career-summary">{item.summary}</p>
              <ul className="career-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="career-section">
        <h2 className="career-heading">Education</h2>
        <div className="career-grid education-grid">
          {educationItems.map((item) => (
            <article key={item.school} className="career-card">
              <div className="career-card-header">
                <h3>{item.school}</h3>
                <span className="career-chip">{item.period}</span>
              </div>
              <p className="career-summary">
                <strong>{item.degree}</strong>
              </p>
              <p className="career-education-detail">{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Career;
