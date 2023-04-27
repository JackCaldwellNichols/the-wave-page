import React from 'react'
import './programmes.scss'
import { programmes } from '../../images'
import Img1 from '../../assets/img2.png'
import Img2 from '../../assets/img3.png'


const Programmes = () => {
  return (
    <div className='programmes' id='programmes'>
        <div className='programmesTitleWrapper'>
            <h3 className='programmesTitle'>PROGRAMAS</h3>
        </div>
        <div className="programmesWrapper">
            {programmes.map((programme => (
        <div className="card">
                <div className='cardTitle'>
                    <h4 className='titleText'>{programme.title}</h4>
                </div>
                <div className='cardImgContainer'>
                    <img className='cardImg' src={programme.img}/>
                </div>
                <div className='cardText'>
                    <p>{programme.overview}</p>
                </div>
                
                     <button className='cardBtn'>Descubre Más</button>       
        </div>
          )))}
       </div>
    </div>
  )
}

export default Programmes
