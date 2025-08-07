import React from 'react'
import { useNavigate } from 'react-router';
import "./Error.css";
const Error = () => {
    const navigate=useNavigate()
  return (
    <div className='errorcon'>
        
            <div className="h1">404</div>
            <div className="h2">Oops, the page you're looking for does not exist.</div>
            <div className="h3">You may want to head back to the homepage.</div>
            <div className="returnbtnn" onClick={()=> navigate('/')}>RETURN HOME</div>
        
    </div>
  )
}

export default Error