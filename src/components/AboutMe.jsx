import React from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './Project-Card.jsx';
import projectImgUrl from '../assets/images/project-img1.png'
import Experience from './Experience.jsx'
import Proflie from './Proflie.jsx';
import simonGame from '../assets/images/simonGame.jpg'
import rentEase from '../assets/images/rentEase.jpg'
import musicSchool from '../assets/images/musicSchool.jpg'
import todoApp from '../assets/images/todoApp.jpg'
import blog_cms from '../assets/images/blog_cms.jpg'

const projects = [
    {
      "title": "RentEase - Rental Platform",
      "description": "A full-stack web app for booking and managing accommodations with authentication and CRUD operations.",
      "imgUrl": `${rentEase}`,
      "projectUrl": 'https://rentease-3.onrender.com/listings',
    },
    {
      "title": "AI-Powered Blog CMS",
      "description": "A content management system enhanced with AI, built using React for seamless blog creation and management.",
      "imgUrl": `${blog_cms}`,
      "projectUrl": "https://ai-blog-cms.vercel.app/"
    },
    {
      "title": "Music School",
      "description": "A modern music streaming app built with Next.js, TypeScript, and Acertenity UI.",
      "imgUrl": `${musicSchool}`,
      "projectUrl": 'https://music-school-drauz7byw-shivank-dixits-projects.vercel.app/',
    },
    {
      "title": "To-Do App",
      "description": "A task management app built with ReactJS and Context API for efficient state management.",
      "imgUrl": `${todoApp}`,
      "projectUrl": 'https://todo-app-two-rouge.vercel.app/'
    },
    {
      "title": "Simon Game",
      "description": "A classic Simon memory game built with HTML, CSS, and JavaScript, featuring interactive UI.",
      "imgUrl": `${simonGame}`,
      "projectUrl": 'https://shivankdixit111.github.io/Simongame/',
    },
  ];

const AboutMe = () => {
  return (
    <>
      <section className='about-me' id="about-me">
         <Container>
            <Row>
                <Col>
                   <h1 className='main-heading'>About me</h1>
                   <p className='about-me-text'>Through my journey in the field of Computer Science and Engineering, I have acquired a diverse skill set and a problem-solving mindset. My projects reflect my ability to implement creative solutions and deliver tangible results.</p>
                   <Tab.Container  id="project-tabs" defaultActiveKey="second">
                       <Nav variant='pills' className='nav-pills'>
                           <Nav.Item> <Nav.Link eventKey="first">Projects</Nav.Link> </Nav.Item>
                           <Nav.Item> <Nav.Link eventKey="second">Experience</Nav.Link> </Nav.Item>
                           <Nav.Item> <Nav.Link eventKey="third">Profiles</Nav.Link> </Nav.Item> 
                       </Nav>

                       <Tab.Content>
                           <Tab.Pane eventKey="first">
                              <Row>
                                 <div className='project-card-container'>
                                    {
                                        projects.map((p, idx)=>(
                                            <ProjectCard {...p}/>
                                        ))
                                    }
                                 </div>
                              </Row>
                           </Tab.Pane>
                           <Tab.Pane eventKey="second">
                              <Experience/>
                           </Tab.Pane>
                           <Tab.Pane eventKey="third">
                               <Proflie/>
                           </Tab.Pane>
                       </Tab.Content>
                   </Tab.Container>
                </Col>
            </Row>
         </Container>

         
      </section>
    </>
  )
}

export default AboutMe