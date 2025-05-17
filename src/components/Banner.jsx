import React from 'react'
import bannerImg from '../assets/images/header-img.svg'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Skills from './Skills';


const Banner = () => {
  return (
    <>
      <section className='banner-section' id="banner"> 
             <div className="banner-content">
                 <button>Welcome to my Portfolio!</button>
                 <h1>Hi, I am Shivank </h1>
                <p>Welcome to my portfolio website! I am a Prefinal Year student pursuing B.Tech in Computer Science and Engineering. With a strong passion for technology, I am constantly exploring new advancements and utilizing them to solve real-life problems. Thank you for visiting my portfolio website. 
                  Please feel free to explore my work and get in touch for any opportunities or collaborations.
                </p>
                <a href="https://drive.google.com/file/d/1u6I5_HJmgrAMe6Q6mZ-hDxv_12dmEfHF/view?usp=drivesdk">Download Resume <FaRegArrowAltCircleRight className='reactIcon' /></a>
            </div>
             <div className="banner-image"> 
                <img src={bannerImg} alt="" />
             </div> 
      </section>
    
    </>
  )
}

export default Banner