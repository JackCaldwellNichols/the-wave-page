import React from 'react'
import './team.scss'
import {members} from '../../images'

const Team = () => {
  return (
    <div className='team' id='team'>
        <div className='teamTitleWrapper'>
            <h3 className='teamTitle'>EL EQUIPO</h3>
        </div>
       <div className="teamWrapper">
            {members.map((member)=> (
                <div className="memberCard">
                   <div className="memberName">
                        <h4>{member.name}</h4>
                    </div> 
                   <div className="memberImg">
                        <img src={member.img} alt= '' className='profilePic'/>
                   </div>
                   <div className="memberDesc">
                        <p>{member.about}</p>
                   </div>
                   
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team
