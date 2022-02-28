import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kleberson Andrade</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/kleberson-andrade-47187520a/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/kleberson154" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/kleberson.14/" target="_blank"><GrInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kleberson. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer