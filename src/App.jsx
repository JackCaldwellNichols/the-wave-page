import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import CrossFit from './components/CrossFit/CrossFit'
import Box from './components/TheBox/Box'
import Programmes from './components/Programmes/Programmes'
import Horario from './components/Horario/Horario'
import Why from './components/Why/Why'
import Tarifas from './components/Tarifas/Tarifas'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <Programmes />
      <Box />
      <Why />
      <Tarifas />
      <Team />
      <Contact />
      <Footer />

     
    </div>
  )
}

export default App
