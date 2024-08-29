import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>there is copyright ono the page so plzz do not copy this is against the law and u may get sued.</p>
                <div className="footer-social icons">
                    <img src= {assets.facebook_icon} alt="" />
                    <img src= {assets.twitter_icon} alt="" />
                    <img src= {assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get IN Touch</h2>
                <ul>
                    <li>+91978638728</li>
                    <li>contexttomato@gmail.com</li>
                </ul>
                
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Tomato.com ALl right is reserved.</p>

      
    </div>
  )
}

export default Footer
