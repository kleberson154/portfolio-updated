import React from 'react'
import './App.css'
import Blur from './components/blur/Blur'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Blur />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App