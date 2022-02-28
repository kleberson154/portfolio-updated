import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <div className="raimbow">Raimbow
              <article className="experience__details">
                <FaHtml5 className=".experience__details-icon" id='html-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            
            <div className="raimbow">
              <article className="experience__details">
                <FaCss3Alt className=".experience__details-icon" id='css-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            
            <div className="raimbow">
              <article className="experience__details">
                <IoLogoJavascript className=".experience__details-icon" id='javaS-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            
            <div className="raimbow">
              <article className="experience__details">
                <FaReact className=".experience__details-icon" id='react-icon'/>
                <div>
                  <h4>React</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
            
            <div className="raimbow">
              <article className="experience__details">
                <FaBootstrap className=".experience__details-icon" id='boot-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            
            <div className="raimbow">
              <article className="experience__details">
                <FaFigma className=".experience__details-icon" id='figma-icon'/>
                <div>
                  <h4>Figma</h4>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience