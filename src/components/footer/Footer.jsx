import React from 'react'
import logo from "../../assets/icons/logo.png";
import './Footer.css'
export const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="footer">
        <img src={logo} alt="logo" />
        <h2>Fitness Club</h2>
      </div>
      <div className="creator">
        {" "}
        Created by <a target='_blank' href="https://www.linkedin.com/in/mahmoud-hawash-757222202/">Mahmoud Hawash</a>
      </div>
    </div>
  )
}
