import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/project'
import Skills from './components/Skills'
import MovingText from './components/MovingText'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <Skills />
      <MovingText />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
