import React, { useEffect, useState } from 'react'

const SkillCard = ({language, percentage}) => {
 const [offset, setOffset] = useState(472);
 const [toggle, setToggle] = useState(true);
 const [count, setCount] = useState(0);
   useEffect(()=>{
      setOffset(472 - (percentage/100)*472);
   })

   useEffect(()=>{ 
      let counter=0;
      setInterval(() => {
      counter += 1;
      if(counter > percentage) clearInterval();
      else {
         setCount(counter);
      }
      }, 30); 
   },[])

   useEffect(()=>{ 
      let counter=0;
      const interval = setInterval(() => {
         setToggle((prev) => !prev);
      }, 2000); 
      return ()=> clearInterval(interval);
   },[])

 const skillCardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    height: "40vh",
 }
 const outerCardStyle = {
    width: "180px",
    height: "180px",
   //  border: "1px solid red",  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%", 
 }
 const innerCardStyle = {
    width : "130px",
    height : "130px", 
   //  border: "1px solid red",  
    borderRadius : "50%",   
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 }
 const circleStyle = {
    fill : "none",
    stroke : `url(#GradientColor)`,
    strokeWidth : " 22px",
    /*----- full circle: 472px -----*/
    strokeDasharray : "472", /*----- circle width -----*/
    strokeDashoffset : toggle ? `${offset}` : 472,/*----- circle starting point -----*/
    transition: `stroke-dashoffset 2s linear`
 }
 
 

  return (
     <>
        
       <div className="skill-card" style={skillCardStyle}>
          <div className="outer" style={outerCardStyle}>
              <div className="inner" style={innerCardStyle}>
                 <span id='number' style={{ fontWeight: "700", fontSize: "1.6rem"}}>{count} %</span>
              </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180px" height="180px" style={{ position: 'absolute', top:'25%'}}>
            <defs>
                <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
            </defs>
            <circle cx="90" cy="90" r="70" stroke-linecap="round" style={circleStyle}/>
        </svg>
       </div>
       <h1 style={{fontSize: "20px", textAlign:"center", marginBottom:"40px"}}>{language}</h1>
       
      
     </>
  )
}

export default SkillCard