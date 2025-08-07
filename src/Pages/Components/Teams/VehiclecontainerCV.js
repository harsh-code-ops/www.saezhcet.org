import React,{useEffect} from 'react'
import Vehiclecard from '../Vehiclecard';
import Data from "./vehicledataCV.js";
import './vehicleContainercv.css';
import AOS from 'aos';
import 'aos/dist/aos.css'


function VehiclecontainerCV() {
  useEffect(() => {
    AOS.init();
  }, [])
    
  return (
    <div className='vehiclemaincvcontainer' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
         <div className='teampagecvheading'>OUR VEHICLES</div>
         <div className='vehcilesconcv'>
            {
                Data.map((item)=> {
                    return(<Vehiclecard Name={item.Title} Description={item.Desc} Route={item.id} Img={item.Image}/>)
                })
            }
         </div>
        
        
    </div>
  )

}

export default VehiclecontainerCV