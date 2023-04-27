import React from 'react'
import './why.scss'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';




const Why = () => {
  return (
    <div className='why' id='why'>
        <div className='whyTitleWrapper'>
            <h3 className='whyTitle'>¿POR QUÉ NOSOTROS?</h3>
            <p>Brindamos el mejor ambiente y entrenamiento en el corazón de Madrid. ¡Nuestros programas, divertidos y variados le permiten alcanzar sus objetivos de acondicionamiento físico, ya sea que recién esté comenzando su viaje de acondicionamiento físico, reiniciándolo o buscando llevar su acondicionamiento físico al siguiente nivel!</p>
        </div>
        <div className="whyWrapper">
            <div className="cardWhy">
                    <div className='whyTitle'>
                        <h4 className='titleTextWhy'>ESTAR EN FORMA</h4>
                    </div>
                    <div className='whyImgContainer'>
                        <SpaIcon className='icon'/>
                    </div>
                    <div className='whyText'>
                        ¡Nuestros programas proporcionan la combinación perfecta de entrenamiento de fuerza junto con ejercicio cardiovascular para brindar la mejor experiencia de entrenamiento funcional! Esta oferta es para cualquier nivel de habilidad y nos aseguramos de que se atienda SU nivel de condición física. ¡Te hará más fuerte, más en forma, más saludable y preparado para cualquier cosa que la vida te depare!
                    </div>
            </div>
            <div className="cardWhy">
                    <div className='whyTitle'>
                        <h4 className='titleTextWhy'>MÁS FUERTE</h4>
                    </div>
                    <div className='whyImgContainer'>
                        <FitnessCenterIcon className='icon'/>
                    </div>
                    <div className='whyText'>
                        ¡No solo incorporamos la fuerza en nuestros programas, sino que también probamos a cada miembro con un programa de fuerza complementario que se puede completar en nuestro gimnasio abierto o en casa (si el equipo lo permite). Si su objetivo es fortalecerse, ¡estamos contigo!
                    </div>  
            </div>
            <div className="cardWhy">
                    <div className='whyTitle'>
                        <h4 className='titleTextWhy'>MEJOR SALUD</h4>
                    </div>
                    <div className='whyImgContainer'>
                        <MonitorHeartIcon className='icon'/>
                    </div>
                    <div className='whyText'>
                        Si está más saludable, es menos probable que sucumba a los virus y otras enfermedades. Tome el control de SU salud hoy y únase a nuestra comunidad de apoyo. Eres la única persona que puede tomar la decisión de cambiar TU vida. Hágalo: póngase en contacto. ¡Estamos aquí para ayudar!
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Why
