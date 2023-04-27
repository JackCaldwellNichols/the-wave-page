import React from 'react'
import './contact.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className='contactTitleWrapper'>
            <h3 className='contactTitle'>CONTACTO</h3>
        </div>
      <div className="contactWrapper">
        <div className="contactLeft">
            <form className='contactForm'>
                <input placeholder='Nombre' required/>
                <input placeholder='Correo' required />
                <input placeholder='Título'/>
                <textarea placeholder='Tu mensaje...' cols="30" rows="10"></textarea>
                <button type='submit' className='formBtn'>Enviar</button>
            </form>
        </div>
        <div className="contactRight">
            <div className="topContact">
                <h4>Información</h4>
                <h5>Contacta con nosotros y disfruta de tu primera sesión en The Wave Box gratis.
                No esperes más, rellena el formulario o llámanos al telefono del BOX.</h5>

                <p><LocationOnIcon />C/ de los Escayolistas 1  - 28891 Velilla de San Antonio (Madrid)    </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
