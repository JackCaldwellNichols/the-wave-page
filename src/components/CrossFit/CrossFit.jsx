import React from 'react'
import './crossfit.scss'

const CrossFit = () => {
  return (
    <div className='crossfit' id='cross'>
        <div className="crossWrapper">
            <h3 className='crossTitle'>¿QUÉ ES EL CROSSFIT?</h3>
            <p className='crossText'>
                CrossFit se define como un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios 
                funcionales constantemente variados realizados a una alta intensidad. 
                Esto significa que nos valemos de una gran variedad de ejercicios de diferentes disciplinas deportivas 
                (gimnasia, halterofilia, carrera…), de entre las cuales seleccionamos técnicas o movimientos aplicables 
                a la vida diaria y los combinamos de muchas formas diferentes en entrenamientos intensos, 
                resultando no solo un experiencia exigente durante la cual el carácter lúdico 
                y la camaradería cobran un papel primordial, sino también un programa insuperable para 
                desarrollar las diez capacidades físicas generales: resistencia cardiovascular, 
                resistencia energética, fuerza, flexibilidad, potencia, velocidad, coordinación, agilidad, 
                equilibrio y precisión.
            </p>   
            <hr className='crossHR'/>     
            <h3>¿A QUIÉN VA DIRIGIDO ESTE TIPO DE ENTRENAMIENTO?</h3>
            <p className='crossText'>
                Gracias a su tremenda efectividad como sistema de preparación física, 
                en sus orígenes el CrossFit fue elegido por numerosas academias militares, cuerpos de policía, 
                profesionales de las artes marciales y cientos de deportistas de élite en todo el mundo 
                como programa de acondicionamiento y entrenamiento de fuerza estándar.
                No obstante, a día de hoy, el CrossFit se ha popularizado en todos los sectores de la población. 
                El hecho de ser un programa diseñado para ser fácilmente adaptable lo convierte en el 
                sistema de entrenamiento perfecto para cualquier persona con motivación, 
                independientemente de su edad, sexo, capacidades o experiencia previa. 
                Una de las grandes maravillas del CrossFit es que durante su práctica, 
                un mismo entrenamiento puede ser realizado simultáneamente por un anciano con problemas
                cardiovasculares o de movilidad reducida y un bombero en un estado de forma óptima. 
                La clave se encuentra en trabajar apartando el entreno a los diferentes niveles de intensidad 
                relativa a cada individuo, pudiendo adaptar cargas, tiempos, distancias, repeticiones… 
                para mantener los estímulos sin modificar el programa
            </p>
        </div>
        <div className="crossSignUp">
            <span>¿Interesado? Reserva tu primera clase gratis.</span>
            <button>Reservar</button>
        </div>
    </div>
  )
}

export default CrossFit
