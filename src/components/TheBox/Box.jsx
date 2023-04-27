import React from 'react'
import './box.scss'
import {images} from '../../images'
import { Image } from 'antd';


const Box = () => {



  return (
    <div className='box' id='box'>
        <div className="top">
            <h4 className='boxTitle'>THE BOX</h4>
        </div>
        <div className="bottom">
            {images.map((image) => (
                <Image src={image.img} alt=''  className='img'></Image>
            ))}
        </div>
    </div>
  )
}

export default Box
