import React, { useState } from 'react'

const ProjectCard = ({title, description, imgUrl, projectUrl}) => {
  const [isHovered, setIsHovered] = useState(false);
  const h1Style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.2rem",
    fontWeight: "500",
    wordBreak: "break-word",
    textAlign: "center",
  }
  const pStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "400",
    letterSpacing: "0.8px",
  }
  
  const cardStyle = { 
    margin: "3rem 1.5rem",
    height: "250px",
    width: "400px",
    borderRadius: "2rem",
    backgroundImage: isHovered ? "linear-gradient(to right top, #b862b8, #b063bc, #a765c1, #9e66c4, #9468c8)" : `url(${imgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",  
  
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
  } 
  const textCardStyle = {
    display: isHovered ? "block" : "none",
  } 
  const anchorStyle = {
     textDecoration: "none",
     color: "white",
     cursor: "pointer"
  }
  return (
    <>  
     <a href={projectUrl} style={anchorStyle}>
      <div className='project-card' style={cardStyle}   
          onMouseEnter = {(e) => setIsHovered(true)}
          onMouseLeave = {(e) => setIsHovered(false)}
        >
            <div style = {textCardStyle}  >
                <h1 style={h1Style}>{title}</h1>
                <p style={pStyle}>{description}</p> 
            </div>
        </div>
     </a>
    </>
  )
}

export default ProjectCard