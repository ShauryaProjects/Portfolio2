import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim()
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
      setErrorMsg('Please fill out all fields.')
      return
    }
    if (!emailRegex.test(trimmed.email)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('https://formspree.io/f/mjkakrwe', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(trimmed)
      })

      if (!response.ok) {
        try {
          const data = await response.json()
          if (data && data.errors && data.errors.length > 0) {
            throw new Error(data.errors.map((e) => e.message).join(', '))
          }
        } catch (_) {
          // ignore JSON parse error and fall through to generic error
        }
        throw new Error('Something went wrong. Please try again later.')
      }

      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-bg-orb orb-1" />
      <div className="contact-bg-orb orb-2" />

      <div className="contact-header">
        <h2 className="contact-title">Get in touch</h2>
        <p className="contact-subtitle">
          I’m open to new opportunities, collaborations, or just a friendly hello.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>shauryasrivastav07@gmail.com</p>
          </div>
          <div className="info-card">
            <div className="info-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1H7C5.9 1 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>
              </svg>
            </div>
            <h3>Phone</h3>
            <p>+91 7897426629</p>
          </div>
          <div className="info-card">
            <div className="info-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
            </div>
            <h3>Location</h3>
            <p>Ballia, Uttar Pradesh, India</p>
          </div>
        </div>

        <div className="contact-form-container">
          {isSuccess ? (
            <div className="success-panel" role="status" aria-live="polite">
              <h3>Thank you!</h3>
              <p>Your message has been sent successfully. I’ll get back to you soon.</p>
            </div>
          ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {errorMsg && (
              <div className="error-banner" role="alert">
                {errorMsg}
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Let’s build something great"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
