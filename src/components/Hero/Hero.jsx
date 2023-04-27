import React from 'react'
import MainLogo from '../../assets/logoMain.png'
import './hero.scss'

const Hero = () => {
  return (
    <div className="hero">
        <img src='https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_960_720.jpg' alt='' className='bannerImg'/>
        <img src={MainLogo} alt='' className='heroLogo'/>
        <div className='reserveClass'>
            <h4>El fitness no es un destino, es una forma de vida.</h4>
            <p>Reserva tu primera clase gratis!</p>
            <a href='#contact'><button className='heroButton'>APÚNTATE!</button></a>
        </div>
    </div>
  )
}

export default Hero
