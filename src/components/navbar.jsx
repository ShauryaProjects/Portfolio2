import React, { useState, useEffect } from 'react'
import './navbar.css'

const navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const scrollToSection = (sectionName) => {
    const sections = {
      'home': 'home',
      'projects': 'project',
      'skills': 'skills',
      'about': 'about',
      'contact': 'contact'
    }
    
    const sectionId = sections[sectionName]
    if (sectionId) {
      const element = document.querySelector(`.${sectionId}-container`)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={`navbar-container ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="head">
        <div className="logo-section">
          {/* <div className="logo">apletec</div> */}
          <div className="name-title" onClick={() => scrollToSection('home')}>
            <h3>Shaurya Srivastava</h3>
            <p>Full Stack Developer + Designer</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav desktop-nav">
          <p onClick={() => scrollToSection('projects')}>Projects</p>
          <p onClick={() => scrollToSection('skills')}>Skills</p>
          <p onClick={() => scrollToSection('about')}>About</p>
          <p onClick={() => scrollToSection('contact')}>Contact</p>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav">
          <p onClick={() => scrollToSection('projects')}>Projects</p>
          <p onClick={() => scrollToSection('skills')}>Skills</p>
          <p onClick={() => scrollToSection('about')}>About</p>
          <p onClick={() => scrollToSection('contact')}>Contact</p>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </div>
  )
}

export default navbar
