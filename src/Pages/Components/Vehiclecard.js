import React from 'react';
import { useNavigate } from 'react-router';
import "../../CSS(Pages)/Vehiclecard.css";


function Vehiclecard({Name,Description,Route,Img}) {
  const navigate=useNavigate();
  return (
    <div className='Cardmain'  onClick={() => navigate(`/${Route}`)}>
        <div className='Card'>
        <div  style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/${Img})`,backgroundSize:"cover",width:"100%",height:"90%"}}>
          
        </div>
       <div className='containerm'>
         <p id='h'>{Name}</p>
         
         
       </div>
       </div>

    </div>
  )
}

export default Vehiclecard