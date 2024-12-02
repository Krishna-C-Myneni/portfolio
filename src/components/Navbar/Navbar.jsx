import React from 'react'
import "./navbar.css";
import info from "./contactinfo.json"
import linkedIn from "./linkedin.svg"
import mail from "./mail.svg"

const Navbar = () => {
  return (
    <div className='body1'>
    <div className='navbar-body'>
      <p className='nav-name'>Krishna Chaitanya Myneni</p>
      <div className='items'>
      <nav>
        <a href={`mailto:${info.mail}`}><img src={mail} className='mailIcon' alt="mail"/></a>
        <a href ={info.linkedIn}><img src={linkedIn} className='linkedinIcon' alt ="linkedin"/></a>
      </nav>
      </div>
    </div>
    <hr className='nav-line'/>
    </div>
  )
}

export default Navbar
