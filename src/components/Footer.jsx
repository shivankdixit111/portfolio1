import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className='footer-section' id="footer">
          <div className='footer-admin'>
            <span>SHIVANK</span>
          </div> 
          <div className='footer-contact'>
              <div className="social-icons">
                 <a href="https://www.linkedin.com/in/shivank-dixit-43170024a/"><FaLinkedinIn className='reactIcon'/></a>
                 <a href="https://github.com/shivankdixit111"><FaGithub className='reactIcon'/></a>
                <a href=""><FaInstagram className='reactIcon'/></a>
                <a href="https://x.com/ShivankD99667"><FaTwitter className='reactIcon'/></a>
              </div>
              <span>Call: +91 9696203218</span>
              <span>Email: dshivank630@gmail.com</span>
              <span>Copyright 2025. All Rights Reserved</span>
          </div>
           
      </section>
    </>
  )
}

export default Footer