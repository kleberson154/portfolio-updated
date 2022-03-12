import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proj-login.png'
import IMG2 from '../../assets/Instagram.png'
import IMG3 from '../../assets/404-error.png'
import IMG4 from '../../assets/Form.png'
import IMG5 from '../../assets/Snake.png'
import IMG6 from '../../assets/three-js.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Login and Register</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kleberson154/login-and-register" className='btn' target='_blank'>GitHub</a>
            <a href="https://login-and-register-jade.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Clone Instagram</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kleberson154/Instagram" className='btn' target='_blank'>GitHub</a>
            <a href="https://instagram-one-neon.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>404-Not Found</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kleberson154/page-404" className='btn' target='_blank'>GitHub</a>
            <a href="https://page-404-tau.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Form</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kleberson154/formV1" className='btn' target='_blank'>GitHub</a>
            <a href="https://form-v1.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Snake Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kleberson154/SnakeGame" className='btn' target='_blank'>GitHub</a>
            <a href="https://snake-game-lime.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Three.JS-3D</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kleberson154/aprendendo-three.js" className='btn' target='_blank'>GitHub</a>
            <a href="https://aprendendo-three-js.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio