import React, { useState,useEffect } from 'react' 
import { Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg' 
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";



export default function NavBar(){ 
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, SetIsMobile] = useState(false);
  
//   useEffect(()=>{
//     const onScroll = ()=>{
//         if(window.scrollY > 50) {
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     }
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   },[])
 

  return (
     <> 
        <header  >
         {/* toggle menu */}
         <span className="hamburger" onClick={()=> SetIsMobile(!isMobile)}>
              {isMobile ? <FaTimes /> : <FaBars />}
        </span>
        <div className="navbar-container">   
            <h1>SHIVANK</h1>  
            <nav className={isMobile ? 'nav-links active' : 'nav-links'}>  
                    <a href="#banner">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#about-me">Projects</a> 
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/shivank-dixit-43170024a/"><FaLinkedinIn className='reactIcon'/></a>
                        <a href="https://github.com/shivankdixit111"><FaGithub className='reactIcon'/></a>
                        <a href=""><FaInstagram className='reactIcon'/></a>
                        <a href="https://x.com/ShivankD99667"><FaTwitter className='reactIcon'/></a>
                    </div> 
                    <button className='navbar-text-btn' onClick={"contact"}>
                            <span>Let's Connect</span>
                    </button> 
            </nav>
            
          </div>
        </header>
     </>
  )
}
 