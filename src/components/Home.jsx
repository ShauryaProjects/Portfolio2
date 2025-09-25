import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      {/* Availability Banner */}

      {/* Profile Picture Section */}
      <div className="profile-section">
        <div className="profile-picture">
          <img src="/images/myphoto.jpg" alt="Shaurya Srivastava" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content">
        <div className="headline">
          <h2>Designing Websites <br/> that drive conversions</h2>
        </div>
        
        <div className="description">
          <p>Designing and developing visually stunning and technically proficient websites for clients worldwide.</p>
        </div>

                 {/* Contact Button */}
         <div className="contact-section">
           <div className="contact-button">
             <span>hey@shaurya.com</span>
           </div>
         </div>
                </div>

        {/* Separator Line */}
        <div className="separator-line"></div>

        {/* Image Gallery Section */}
       <div className="image-gallery-section">
         <div className="image-gallery">
           <div className="gallery-track">
             <img src="/images/img1.png" alt="Gallery Image 1" />
             <img src="/images/img2.png" alt="Gallery Image 2" />
             <img src="/images/img3.png" alt="Gallery Image 3" />
             <img src="/images/img4.png" alt="Gallery Image 4" />
             <img src="/images/img5.png" alt="Gallery Image 5" />
             <img src="/images/img6.png" alt="Gallery Image 6" />
             <img src="/images/img7.png" alt="Gallery Image 7" />
             {/* Duplicate images for seamless loop */}
             <img src="/images/img1.png" alt="Gallery Image 1" />
             <img src="/images/img2.png" alt="Gallery Image 2" />
             <img src="/images/img3.png" alt="Gallery Image 3" />
             <img src="/images/img4.png" alt="Gallery Image 4" />
             <img src="/images/img5.png" alt="Gallery Image 5" />
             <img src="/images/img6.png" alt="Gallery Image 6" />
             <img src="/images/img7.png" alt="Gallery Image 7" />
           </div>
         </div>
       </div>
     </div>
  )
}

export default Home
