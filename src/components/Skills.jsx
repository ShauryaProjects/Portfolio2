import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills & Technologies</h2>
      
      <div className="skills-grid">
        {/* First Row */}
        <div className="skills-row">
          <div className="skill-item">
            <img src="/images/bn1.png" alt="Skill 1" className="skill-image1" />
            <div className="skill-label">
              <h3 className="skill-heading">Front Development (UI/UX)</h3>
              <ul className="skill-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
          <div className="skill-item">
            <img src="/images/bn3.png" alt="Skill 3" className="skill-image3" />
            <div className="skill-label">
              <h3 className="skill-heading">Backend Development</h3>
              <ul className="skill-list">
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="skills-row">
          <div className="skill-item">
            <img src="/images/bn2.png" alt="Skill 2" className="skill-image2" />
            <div className="skill-label">
              <h3 className="skill-heading">Database Management</h3>
              <ul className="skill-list">
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
          <div className="skill-item">
            <img src="/images/bn4.png" alt="Skill 4" className="skill-image4" />
            <div className="skill-label">
              <h3 className="skill-heading">DevOps & Deployment</h3>
              <ul className="skill-list">
                <li>Docker</li>
                <li>AWS</li>
                <li>Git</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
