import React, { useState,useEffect } from 'react' 
import { Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg' 
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";


export default function NavBar(){
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(()=>{
    const onScroll = ()=>{
        if(window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[])

  const updateActiveLink = (linkName)=>{
      setActiveLink(linkName);
  }

  return (
     <> 
        <header>
        <div className="navbar-container"> 
            <h1>SHIVANK</h1> 
            <nav> 
                <ul>
                    <a href="#banner">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#about-me">Projects</a> 
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/shivank-dixit-43170024a/"><FaLinkedinIn className='reactIcon'/></a>
                        <a href="https://github.com/shivankdixit111"><FaGithub className='reactIcon'/></a>
                        <a href=""><FaInstagram className='reactIcon'/></a>
                        <a href="https://x.com/ShivankD99667"><FaTwitter className='reactIcon'/></a>
                    </div>
                    <a href="#contact">
                        <button className='navbar-text-btn'>
                            <span>Let's Connect</span>
                        </button>
                    </a>
                </ul>
            </nav>
          </div>
        </header>
     </>
  )
}
 