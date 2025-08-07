import { getByTitle } from '@testing-library/react';
import React, { useState ,useEffect} from 'react'
import '../../CSS(Pages)/Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    faYoutube,
    faFacebook,
    faLinkedin,
    faInstagram,
    faFacebookSquare,
    faInstagramSquare
  } from "@fortawesome/free-brands-svg-icons";
  import { Link } from 'react-router-dom';
  import { useNavigate } from 'react-router';


function Card({Title,Description,Id,Image,Insta,Linkedin,Facebook,Youtube}) {
  const navigate=useNavigate();
  const [cardhoverstate,setCardhoverstate]=useState(false);
  const Cardhover =()=> {
    setCardhoverstate(true)
  }
  const Cardoriginal =()=> {
    setCardhoverstate(false)
  }
  useEffect(() => {
    AOS.init();
    
  }, [])
 
  return (
    <div data-aos='fade-left' data-aos-duration='1000' data-aos-delay='600'  className="cardteammain" onMouseOver={Cardhover} onMouseLeave={Cardoriginal} style={{backgroundColor:"white",cursor:'pointer'}}>
       <div className="teampicmain" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/${Image})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
       <div className="teamdescmain">
         <div className={cardhoverstate?"teamheadingmainhov":"teamheadingmain"}>{Title}</div>
         <div className="teamdshortdescmain">{Description}</div>
         <div className={cardhoverstate?"btnteampathhov":"btnteampath"}  onClick={() => navigate(`/${Id}`)}>Know More..</div>
       </div>
       <div className={cardhoverstate?"followlinksconhov":"followlinkscon"}>
        <a target='_blank' href={Linkedin}> <FontAwesomeIcon className='icontmpagecon' icon={faLinkedin}/> </a>
        <a target='_blank' href={Facebook}> <FontAwesomeIcon className='icontmpagecon' icon={faFacebookSquare}/></a>
        <a target='_blank' href={Insta}> <FontAwesomeIcon className='icontmpagecon' icon={faInstagramSquare}/></a>
         <a target='_blank' href={Youtube}><FontAwesomeIcon className='icontmpagecon' icon={faYoutube}/></a>
          
       </div>
    </div>
  )
}

export default Card