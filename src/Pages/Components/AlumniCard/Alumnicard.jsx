import React from 'react';
import './Alumnicard.css';
import {AiOutlineLinkedin} from 'react-icons/ai'

const Alumnicard = ({Name,Post,Image,LinkedIn,Insta,Email,Company}) => {
  return (
    <div className='mainalumbox' >
        <div className="leftalumbox">
          <div className="photocirclealum" style={{backgroundImage:`url("${Image}")`}}></div>
          <div className="linkedincircle"><a target='_blank' href={LinkedIn}><AiOutlineLinkedin/></a></div>
        </div>
        <div className="rightalumbox">
            <div className="Namealum">{Name}</div>
            <div className="position">{Post}</div>
            <div className="alumcompany">{Company}</div>
        </div>


        
    </div>
  )
}

export default Alumnicard