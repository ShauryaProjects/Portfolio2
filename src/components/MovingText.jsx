import React from 'react'
import './MovingText.css'

const MovingText = () => {
  return (
    <>
      <div className="separator-line2"></div>
      <div className="moving-text-section">
        <div className="moving-text-container">
          <div className="text-track">
            <span className="text-item font-1">JavaScript</span>
            <span className="text-item font-2">UI/UX</span>
            <span className="text-item font-3">React</span>
            <span className="text-item font-4">Node</span>
            <span className="text-item font-1">JavaScript</span>
            <span className="text-item font-2">UI/UX</span>
            <span className="text-item font-3">React</span>
            <span className="text-item font-4">Node</span>
            <span className="text-item font-1">JavaScript</span>
            <span className="text-item font-2">UI/UX</span>
            <span className="text-item font-3">React</span>
            <span className="text-item font-4">Node</span>
          </div>
        </div>
      </div>
        <div className="separator-line2"></div>
    </>
  )
}

export default MovingText
