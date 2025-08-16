import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-name">Shaurya Srivastava</span>
        </div>
        <div className="footer-right">
          <span className="copyright">
            © {currentYear} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
