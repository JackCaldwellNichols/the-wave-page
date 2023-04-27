import React from 'react'
import Poseidon from '../../assets/poseidon.png'
import './footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerWrapper'>
          <div className="linksWrapper">
            <a href="https://www.instagram.com/thewave.box/?next=%2Fthewave.box%2F" target='_blank' className='icon'><InstagramIcon/></a>
            <a href="https://www.instagram.com/thewave.box/?next=%2Fthewave.box%2F" target='_blank' className='icon'><FacebookIcon/></a>
          </div>
          <img src={Poseidon} alt="" />
          <span>© The Wave Box | C/ de los Escayolistas 1  - 28891 Velilla de San Antonio (Madrid)</span>
        </div>
    
    </div>
  )
}

export default Footer
