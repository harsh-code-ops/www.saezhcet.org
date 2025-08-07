import React from 'react';
import './Gov.css'
import {GrInstagram,GrLinkedin} from 'react-icons/gr';
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandLinkedin} from 'react-icons/tb'
import {AiOutlineInstagram} from 'react-icons/ai'

const GovCard = ({Name  ,Post ,Immm,LinkedIn,Email,Insta}) => {
  return (
    <div className='maincardgov'>
        <div className="leftgov" > 
           <img className="photogov" src={`${process.env.PUBLIC_URL}/assets/${Immm}`} />
                </div>
        <div className="rightgov">
            <div className="Namegov">{Name}</div>
            <div className="postgov">{Post}</div>

            <div className="linksgov">
                {LinkedIn !== ""?(<a href={`${LinkedIn}`} target='_blank'><TbBrandLinkedin/></a>):null}
               {Insta !== ''?(<a href={`${Insta}`} target='_blank'><AiOutlineInstagram/></a>):null}
                
               {Email !==''?(<a href={`mailto:${Email}`}><MdOutlineEmail/></a>):null} 
                
            </div>
        </div>

    </div>
  )
}

export default GovCard