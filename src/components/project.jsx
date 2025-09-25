import React, { useState } from 'react'
import './project.css'

const project = () => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div className="project-container">
      <div className="section-title">
        <h2>Featured Projects</h2>
      </div>
      
      {/* Project Cards Grid */}
      <div className="project-cards-grid">
        {/* Row 1 */}
        <div className="project-card">
        <img src="/images/proj-img/Ewaste.png" alt="E-Waste Management" className="project-image" />
        <div className="card-label">
          <div className="tech-capsules">
            <span className="tech-capsule">React</span>
            <span className="tech-capsule">Node.js</span>
            <span className="tech-capsule">MongoDB</span>
          </div>
          <h3>E-Waste Management</h3>
        </div>
        <div className="card-arrow">
          <a href="https://ewaste-management-smoky.vercel.app/" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
         
        </div>
        <div className="project-card">
        <img src="/images/proj-img/aapdaprep.png" alt="E-Waste Management" className="project-image" />
        <div className="card-label">
          <div className="tech-capsules">
            <span className="tech-capsule">Next.js</span>
            <span className="tech-capsule">Tailwind CSS</span>
            <span className="tech-capsule">Firebase</span>
          </div>
          <h3>AapdaPrep</h3>
        </div>
        <div className="card-arrow">
          <a href="https://aapdaprep.vercel.app/" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
         
        </div>
        {/* Row 2 */}

        <div className="project-card">
          <img src="/images/proj-img/netflix.png" alt="Netflix Clone" className="project-image" />
          <div className="card-label">
            <div className="tech-capsules">
              <span className="tech-capsule">React</span>
              <span className="tech-capsule">CSS3</span>
              <span className="tech-capsule">JavaScript</span>
            </div>
            <h3>Netflix Clone</h3>
          </div>
          <div className="card-arrow">
            <a href="https://github.com/ShauryaProjects/netflix-clone" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="project-card">
          <img src="/images/proj-img/spotify.png" alt="Spotify Clone" className="project-image" />
          <div className="card-label">
            <div className="tech-capsules">
              <span className="tech-capsule">HTML5</span>
              <span className="tech-capsule">CSS3</span>
              <span className="tech-capsule">JavaScript</span>
            </div>
            <h3>Spotify Clone</h3>
          </div>
          <div className="card-arrow">
            <a href="https://github.com/ShauryaProjects/spotify-clone" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>


      {/* Hidden Projects */}
      <div className={`hidden-projects ${showMore ? 'show' : ''}`}>
        <div className="project-cards-grid">
          {/* Amazon Clone */}
          <div className="project-card">
            <img src="/images/proj-img/amazon.png" alt="Amazon Clone" className="project-image" />
            <div className="card-label">
              <div className="tech-capsules">
                <span className="tech-capsule">HTML5</span>
                <span className="tech-capsule">CSS3</span>
                <span className="tech-capsule">JavaScript</span>
              </div>
              <h3>Amazon Clone</h3>
            </div>
            <div className="card-arrow">
              <a href="https://github.com/ShauryaProjects/amazon-clone" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Portfolio Website */}
          <div className="project-card">
            <img src="/images/proj-img/portfolio.png" alt="Portfolio Website" className="project-image" />
            <div className="card-label">
              <div className="tech-capsules">
                <span className="tech-capsule">React</span>
                <span className="tech-capsule">CSS3</span>
                <span className="tech-capsule">JavaScript</span>
              </div>
              <h3>Portfolio Website</h3>
            </div>
            <div className="card-arrow">
              <a href="https://github.com/ShauryaProjects/portfolio" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* View More Button */}
      <div className="view-more-container">
        <button className="view-more-btn" onClick={toggleShowMore}>
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  )
}

export default project
