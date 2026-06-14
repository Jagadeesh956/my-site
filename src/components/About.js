import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-wrapper">
        <div className="profile-block">
          <div className="profile-picture">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="profile-img"
            />
          </div>
        </div>
        <div className="content-block">
          <h1>Jagadeesh Poralla</h1>
          <p className="subtitle">
            <span className="bold">S</span>ite <span className="bold">R</span>eliability <span className="bold">E</span>ngineer | Java Developer
          </p>
          <p className="description">
            I am passionate about designing,developing scalable systems and maintaining them reliably. Being graduated from Cleveland State University with a degree in Computer Science, I have a strong foundation in software development and system architecture. I thrive on solving complex problems and optimizing systemperformance to ensure seamless user experiences.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Java</li>
              <li>Spark</li>
              <li>Kubernetes</li>
                <li>Cassandra</li>
              <li>Full Stack Development</li>
                <li>Distributed Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
