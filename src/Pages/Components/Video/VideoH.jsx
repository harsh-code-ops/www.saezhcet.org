import React, { useState,useEffect } from 'react'
import {useRef} from 'react';
import VideoHomepage from './video Homepage.mp4';
import VideoHomepage2 from './video Homepage1.mp4'
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

import './videoH.css';

import Animation from './Animation';
const VideoH = () => {
  const [chevronstate,setChevronostate]=useState(false)
  const Chevrondisp =()=> {
       setChevronostate(true)
  }
  const Chevronnodisp = ()=> {
    setChevronostate(false)
  }
  const navigate =useNavigate();
  
 
  return (
    <>
    <div className='mainvideocon'>
            <video className='video' width='100%' autoPlay muted loop poster='https://drive.google.com/uc?id=158Ek1dAsXdikE7kbZFEUmjp0JpF1uV7O' >
               <source src={VideoHomepage} type="video/mp4"/>
     
            </video>

            <div className='homelayer'>
              <div className='contenthome'>
              <div className="stripe_inner">IDEATE.</div>
              <div className="stripe_inner">DESIGN.</div>
              <div className="stripe_inner">CREATE.</div>
              <div className="stripe_inner_text">Welcome to SAE ZHCET Collegiate Club!</div>
              
              <div className='btnabtuscon' onMouseOver={Chevrondisp} onMouseLeave={Chevronnodisp} onClick={() => navigate('/vision-mission')}>About Us <span className={chevronstate?'Chevrondisp':'Chevronnodisp'}> <FaAngleRight style={{color:"black"}}/></span></div>
              </div>
            </div>
       

       
       
    </div>
    <div className='mainvideocon2'>
        <video className='video' width='100%' autoPlay muted loop  poster='https://drive.google.com/uc?id=158Ek1dAsXdikE7kbZFEUmjp0JpF1uV7O' >
        <source src={VideoHomepage2} type="video/mp4"/>
     
       </video>
            <div className='homelayer'>
            <div className='contenthome'>
              <div className="stripe_inner">IDEATE.</div>
              <div className="stripe_inner">DESIGN.</div>
              <div className="stripe_inner">CREATE.</div>
              <div className="stripe_inner_text">Welcome to SAE-ZHCET!</div>
              
              <div className='btnabtuscon' onMouseOver={Chevrondisp} onMouseLeave={Chevronnodisp} onClick={() => navigate('/vision-mission')}>About Us <span className={chevronstate?'Chevrondisp':'Chevronnodisp'}> <FaAngleRight style={{color:"black"}}/></span></div>
              </div>
              
            </div>
    </div>

    </>
  )
}

export default VideoH