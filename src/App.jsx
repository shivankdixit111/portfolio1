import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import { Nav } from 'react-bootstrap'
import Banner from './components/Banner'
import Project from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SkillCard from './components/Skill-Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <NavBar/> 
      <Banner/>
      <Skills/>
      <Project/> 
      <Contact/> 
      <Footer/>   
    </>
  )
}

export default App
