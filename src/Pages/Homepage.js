import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from './Components/Footer'
import Aboutus from './Components/Homepage/Aboutus'
import Teams from './Components/Homepage/Teams';
import '../CSS(Pages)/homepage.css'

import { FaAngleRight } from 'react-icons/fa';

import "animate.css/animate.min.css";

import Sliderm from './Components/Msgbox/Sliderm';
import VideoH from './Components/Video/VideoH';

function Homepage() {
  
  const [chevronstate,setChevronostate]=useState(false)
  const Chevrondisp =()=> {
       setChevronostate(true)
  }
  const Chevronnodisp = ()=> {
    setChevronostate(false)
  }
  const navigate =useNavigate();
  return (
    <div className='homepage'>
      
      
      <VideoH/>
         
         
        
         
      
      
      
      <div style={{width:"100%"}} >
       <Teams/>
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/ysupport.png)`}}>
        <Sliderm/>
        </div>
        
        
       
        <Aboutus/>
        <Footer/>
        
       
     
      </div>

      
        
        
      
       


    </div>

  )
}

export default Homepage