import React from 'react'
import { useNavigate } from 'react-router';
import './Routecomp.css';
import {BiChevronRight} from 'react-icons/bi'

const Routecomp = ({Heading,LastRoutename,Route,Mid}) => {
    const navigate=useNavigate();
  return (
    <div className='mainroutediv'>
        <div className="routesection"><span onClick={()=> navigate('/')}>Homepage</span> <BiChevronRight/><span onClick={()=> navigate(`${Route}`)}>{LastRoutename} </span> </div>
        <div className="routelastheading">{Heading}</div>

    </div>
  )
}

export default Routecomp
