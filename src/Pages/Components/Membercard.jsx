import React from 'react'
import './mebercard.css';
import {TbBrandLinkedin,TbBrandGmail,TbBrandInstagram} from 'react-icons/tb'

const Membercard = ({Name,Post,Img}) => {
  return (
    <div>
    <div className="membrcardouter">
        <div className="membercardimage" style={{backgroundImage:`url(${Img})`,backgroundSize:"cover"}}></div>
        <div className="membercardrdesc">
            <div className="membercardname">
             {Name}
            </div>
            <div className="membercarddep">
                {Post}
            </div>
        </div>
        <div className="membercardconnect">
            <TbBrandLinkedin className='ic'/>
            
            <TbBrandInstagram className='ic'/>
            <TbBrandGmail className='ic'/>
        </div>
    </div>
    </div>
  )
}

export default Membercard