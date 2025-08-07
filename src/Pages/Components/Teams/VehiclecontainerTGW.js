import React,{useEffect} from 'react'
import Vehiclecard from '../Vehiclecard';
import DataTGW from "./vehicledataTGW.js";
import "./vehiclecontainertgw.css"
import AOS from 'aos';
import 'aos/dist/aos.css'

function VehiclecontainerTGW() {
  useEffect(() => {
    AOS.init();
  }, [])
   
  return (
    <div className='vehiclemaintgwcontainer' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
        <div className='teampagetgwheading'>OUR VEHICLES</div>
        <div className='vehcilescontgw'>
        {
            DataTGW.map((item)=> {
                return(<Vehiclecard Name={item.Title} Description={item.Desc} Route={item.id} Img={item.Image}/>)
            })
        }
        </div>
   
   
    </div>
  )

}

export default VehiclecontainerTGW