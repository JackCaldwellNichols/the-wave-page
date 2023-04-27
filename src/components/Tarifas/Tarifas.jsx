import React from 'react'
import './tarifas.scss'
import {tarifas, discounts} from '../../images'





const Tarifas = () => {
  return (
    <div className='tarifas' id='tarifas'>
        <div className='tarifasTitleWrapper'>
            <h3 className='tarifasTitle'>TARIFAS</h3>
        </div>
        <div className="tarifasWrapper">
            {tarifas.map((tarifa) => (
                    <div className="cardTarifa">
                            <h4 className='titleTextTarifa'>{tarifa.title}</h4>
                            <h5>{tarifa.overview}</h5>
                            <h5>€ {tarifa.price}</h5>
                    </div>
            ))}
        </div>
        <div className='descuentosTitleWrapper'>
            <h5 className='descuentoTitle'>DESCUENTOS</h5>
        </div>
        <div className="discountWrapper">
            {discounts.map((discount) => (
                    <div className="cardDiscount">
                            <h6 className='titleTextDiscount'>{discount.title}</h6>
                            <h5>{discount.overview}</h5>
                            <h5>{discount.discount} %</h5>
                            <span className='lineDiscount'></span>
                    </div>
            ))}
       
        </div>
        
    </div>
  )
}

export default Tarifas
