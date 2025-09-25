import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        {/* Top Left - Introduction Card */}
        <div className="about-card intro-card">
          <h2>I am Shaurya.</h2>
          <p>A passionate Web Developer and Computer Science Engineering student at Madan Mohan Malaviya University of Technology, Gorakhpur. I love crafting clean, functional, and visually appealing digital experiences that solve real-world problems.</p>
        </div>

        {/* Top Right - Profile Picture Card */}
        <div className="about-card photo-card">
          <img src="/images/myphoto.jpg" alt="Ashwin" className="profile-photo" />
        </div>

        {/* Middle Left - GitHub Card */}
        <div className="about-card github-card">
          <a href="https://github.com/ShauryaProjects" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" className="github-icon" />
          </a>
        </div>

        <div className="about-card stats-card-2">
          <div className="stat-number">2+</div>
          <div className="stat-label">Years of Experience</div>
        </div>

        {/* Middle Right - Services Description Card */}
        <div className="about-card services-card">
          <p>I'm always exploring new tools to sharpen my skills. My experience spans from designing responsive websites to building complete web applications including projects integrating AI-powered features and real-time cloud services.</p>
        </div>

        {/* Bottom Left - Glowing Button Card */}
        <div className="about-card expert-card">
          <button className="btn">
            <img src="/images/cursor.png" alt="Cursor" className="expert-icon" />
            <span className="expert-text">Hover Button</span>
          </button>
        </div>

        {/* Bottom Middle - Tech Stack Card */}
        <div className="about-card tech-card">
          <h3>My Tech Stack</h3>
          <div className="tech-icons-container">
                        <div className="tech-icons">
              <div className="tech-icon">
                <img src="/TechStack/img1.png" alt="Tech 1" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img2.png" alt="Tech 2" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img3.png" alt="Tech 3" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img4.png" alt="Tech 4" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img5.png" alt="Tech 5" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img6.jpg" alt="Tech 6" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img7.png" alt="Tech 7" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img8.png" alt="Tech 8" />
              </div>
              {/* Duplicate icons for seamless loop */}
              <div className="tech-icon">
                <img src="/TechStack/img1.png" alt="Tech 1" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img2.png" alt="Tech 2" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img3.png" alt="Tech 3" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img4.png" alt="Tech 4" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img5.png" alt="Tech 5" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img6.jpg" alt="Tech 6" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img7.png" alt="Tech 7" />
              </div>
              <div className="tech-icon">
                <img src="/TechStack/img8.png" alt="Tech 8" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right - LinkedIn Icon Card */}
        <div className="about-card x-card">
          <a href="https://www.linkedin.com/in/shaurya-srivastava206/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="linkedin-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
