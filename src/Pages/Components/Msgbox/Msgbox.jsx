import React,{useEffect} from 'react'
import './Msgbox.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im'

const Msgbox = ({Name,Designation,Department,Heading,Content,Image}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='mainmainbox' data-aos="flip-left" data-aos-duration='1000' data-aos-easing="ease-out-cubic" data-aos-delay="100">
    
    <div className="mainmsgbox" >
       <div className='headingtesti'>Here's What our <span className='colorchange'>College Heads</span> Have to say</div>

      
      <div className="msgphoto" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/${Image})`}}></div>
      <div className="msgtext" data-aos='fade-up'>
          <div className='quotes'><span><ImQuotesLeft/></span><span><ImQuotesRight/></span></div>
          <div className="maintexts">{Content}</div>
         <div className="detailstext">
           <div className='Name'>{Name}</div>
           <div className='designation'>{Designation},{Department}</div>

         </div>
      </div>
      </div>
      
    </div>
    
  )
}

export default Msgbox