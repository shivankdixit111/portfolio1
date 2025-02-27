import React from 'react'
import headerImg from '../assets/images/header-img.svg'
import { HiOutlineAcademicCap } from "react-icons/hi2";
import {  FaLaptopCode } from "react-icons/fa";
import { LuLaptopMinimal } from "react-icons/lu";


const Experience = () => {
  return (
    <>
      <div className="timeline">
         <div className="text-container left-container">
           <div className='reactIconContainer'><HiOutlineAcademicCap className='reactIcon'/></div>
            <div className="text-box">
                <h2>Dr. A.P.J. Abdul Kalam Technical University </h2>
                <span>( 2022 - 2026 )</span> <br />
                <span>Bachelor Of Technology - Computer Science and Engineering</span>
            </div> 
            <span className='left-container-arrow'></span>
         </div>

         <div className="text-container right-container">
            <div className='reactIconContainer'> <FaLaptopCode className="reactIcon"/></div>
            <div className="text-box">
                <h2>Smart India Hackathon 2023</h2>    
                <span>( September 2023 - October 2023 )</span>  <br />
                <span>The idea was to integrate technology with medicine by developing AI-powered prescription analysis and real-time medicine tracking, enhancing healthcare accessibility and efficiency.</span>
            </div> 
          <span className='right-container-arrow'></span>
         </div>

         <div className="text-container left-container">
            <div className='reactIconContainer'><LuLaptopMinimal className="reactIcon"/></div>
            <div className="text-box">
                <h2>Smart India Hackathon 2024</h2>
                <span>( September 2024 - October 2024 )</span>  <br />
                <span>The idea was to connect local vegetable vendors and fruit sellers with consumers through a digital platform, reducing costs and dependency on fast e-commerce while ensuring affordable and fresh produce.</span>
            </div> 
          <span className='left-container-arrow'></span>
         </div>
      </div>
    </>
  )
}

export default Experience