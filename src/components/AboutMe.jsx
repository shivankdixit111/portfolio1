import React from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './Project-Card.jsx';
import projectImgUrl from '../assets/images/project-img1.png'
import Experience from './Experience.jsx'
import Proflie from './Proflie.jsx';
import simonGame from '../assets/images/simonGame.jpg'
import rentEase from '../assets/images/rentEase.jpg'
import rideShareImg from '../assets/images/rideShareImg.png'
import todoApp from '../assets/images/todoApp.jpg'
import personalFinanceVisualizer from '../assets/images/personalFinanceVisualizer.png'

const projects = [
  {
    "title": "RideShare - Student Ride Sharing App",
    "description": "Ride sharing app for college students to share rides, save money, and travel together easily.",
    "imgUrl": `${rideShareImg}`,
    "projectUrl":  "https://rideshare-2wwm.onrender.com/"
  },
    {
      "title": "DPverse",
      "description": "A platform offering over 200 dynamic programming problems across various categories like digit DP, range DP etc, along with a leaderboard and progress tracking.",
      "imgUrl": 'https://miro.medium.com/v2/resize:fit:1026/1*YEa9RovJmEyzsVwqIFTkeg.png',
      "projectUrl": "https://dp-verse.vercel.app/"
    },
    {
      "title": "Personal Finance Visualizer",
      "description": "A sleek web app to visualize and track personal finances with interactive charts.",
      "imgUrl": `${personalFinanceVisualizer}`,
      "projectUrl": 'https://personal-finance-visualizer-six-livid.vercel.app/',
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