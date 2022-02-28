import React from 'react'
import './about.css'
import ME2 from '../../assets/kleberson.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>junior developer</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>junior developer</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>+20 created</small>
            </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quidem qui ea? Quae qui autem maxime eveniet ad accusamus soluta omnis pariatur neque alias, natus perferendis adipisci cupiditate a? Ut.</p>
        
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About