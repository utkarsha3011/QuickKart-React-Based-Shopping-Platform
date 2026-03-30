import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram from '../Assets/instagram.png'
import Whatsapp from '../Assets/Whatsapp.png'
import pinterest from '../Assets/pinterest.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>QUICKKART</p>
        </div>
        <ul className='footer-links'>
            <li>Company </li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      <div className="footer-social-icons">
        <img src={instagram} alt="" />
         <img src={Whatsapp} alt="" />
         <img src={pinterest} alt="" />
      </div>
      
      <div className="footer-copyright">
        <hr/>
        <p>Copyright © 2026 QuickKart. All rights reserved. Shop smart, live better.</p>
      </div>
    </div>
  )
}

export default Footer
