import React,{useState} from 'react'
import './Animation.scss';
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Animation = () => {
    const [chevronstate,setChevronostate]=useState(false)
    const Chevrondisp =()=> {
         setChevronostate(true)
    }
    const Chevronnodisp = ()=> {
      setChevronostate(false)
    }
    const navigate =useNavigate();
    
   
  return (
    <div className="stripe">
        <div className="stripe_inner">IDEATE.</div>
        <div className="stripe_inner">DESIGN.</div>
        <div className="stripe_inner">CREATE.</div>
        <div className="stripe_inner_text">Welcome to SAE-ZHCET!</div>
        <div className='btnabtuscon' onMouseOver={Chevrondisp} onMouseLeave={Chevronnodisp} onClick={() => navigate('/vision-mission')}>About Us <span className={chevronstate?'Chevrondisp':'Chevronnodisp'}> <FaAngleRight style={{color:"black"}}/></span></div>
    </div>
  )
}

export default Animation