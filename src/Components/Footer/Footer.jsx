import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-top">
            <div className="footer-top-left">
                <div className="logo-box">
                    <img src={logo} alt="" className='logo' />
                    <div className="logo-box-head">
                        <h1>Aman Tiwari</h1>
                        <h5>SOFTWARE ENGINEER</h5>
                    </div>
                </div>
                <p>I'm a Software Engineer from INDIA with a passion for building and developing scalable and efficient web applications and Software.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" name="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div> 

        <hr />

        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; 2025 All rights reserved by <span>Aman Mishra</span>
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privay Policy</p>
                <p>Connect with me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer