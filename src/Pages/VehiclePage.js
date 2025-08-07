import React from 'react'
import TableSpec from './Components/VehiclePage/TableSpec'
import TableSpecTGW from './Components/VehiclePage/TablespecTgw';
import CVdata from './Components/VehiclePage/CVdata';
import TGWdata from './Components/VehiclePage/TGWdata';

import Footer from '../Pages/Components/Footer'
import '../CSS(Pages)/VehiclePage.css'

function VehiclePage({id,Img,Heading}) {
   

    
  return (
    <>
    <div className='mainvehiclepage'>
      <div className='vhclbg1'></div>
      <div className='vhclbg2'></div>
      


      <div className='imagvehiclecon'>
        <div className='headingvehicle'>{Heading}</div>
       <div className='imgvehicle' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/${Img})`}}></div>
       </div>


        <div className='rightvehicleheading'>
        {id==="zfr1.0"?
            (<TableSpec chassis={CVdata[0].zfr.zfr1O.specs.chassis} 
                        Power={CVdata[0].zfr.zfr1O.specs.Power}
                        Torque={CVdata[0].zfr.zfr1O.specs.Torque}
                        Weight={CVdata[0].zfr.zfr1O.specs.weight}
                        BodyWorks={CVdata[0].zfr.zfr1O.specs.Bodyworks}
                        Engine={CVdata[0].zfr.zfr1O.specs.Engine}
                        Tyres={CVdata[0].zfr.zfr1O.specs.Tyres}
                        Wiring={CVdata[0].zfr.zfr1O.specs.Wiring}
                        ECU={CVdata[0].zfr.zfr1O.specs.ECU}
                        Suspension={CVdata[0].zfr.zfr1O.specs.Suspension}
                        Cooling={CVdata[0].zfr.zfr1O.specs.Cooling}
              />):
            (id==="zfr2.0"?
            (<TableSpec chassis={CVdata[0].zfr.zfr20.specs.chassis} 
                        Power={CVdata[0].zfr.zfr20.specs.Power}
                        Torque={CVdata[0].zfr.zfr20.specs.Torque}
                        Weight={CVdata[0].zfr.zfr20.specs.weight}
                        BodyWorks={CVdata[0].zfr.zfr20.specs.Bodyworks}
                        Engine={CVdata[0].zfr.zfr20.specs.Engine}
                        Tyres={CVdata[0].zfr.zfr20.specs.Tyres}
                        Wiring={CVdata[0].zfr.zfr20.specs.Wiring}
                        ECU={CVdata[0].zfr.zfr20.specs.ECU}
                        Suspension={CVdata[0].zfr.zfr20.specs.Suspension}
                        Cooling={CVdata[0].zfr.zfr20.specs.Cooling}
              />):
                 (id==="zfr3.0"?
                 (<TableSpec chassis={CVdata[0].zfr.zfr30.specs.chassis} 
                             Power={CVdata[0].zfr.zfr30.specs.Power}
                             Torque={CVdata[0].zfr.zfr1O.specs.Torque}
                             Weight={CVdata[0].zfr.zfr30.specs.weight}
                             BodyWorks={CVdata[0].zfr.zfr30.specs.Bodyworks}
                             Engine={CVdata[0].zfr.zfr30.specs.Engine}
                             Tyres={CVdata[0].zfr.zfr30.specs.Tyres}
                             Wiring={CVdata[0].zfr.zfr30.specs.Wiring}
                             ECU={CVdata[0].zfr.zfr30.specs.ECU}
                             Suspension={CVdata[0].zfr.zfr30.specs.Suspension}
                             Cooling={CVdata[0].zfr.zfr30.specs.Cooling}
                   />):
                      (id==="zfr4.0"?
                      (<TableSpec chassis={CVdata[0].zfr.zfr40.specs.chassis} 
                                  Power={CVdata[0].zfr.zfr40.specs.Power}
                                  Torque={CVdata[0].zfr.zfr40.specs.Torque}
                                  Weight={CVdata[0].zfr.zfr40.specs.weight}
                                  BodyWorks={CVdata[0].zfr.zfr40.specs.Bodyworks}
                                  Engine={CVdata[0].zfr.zfr40.specs.Engine}
                                  Tyres={CVdata[0].zfr.zfr40.specs.Tyres}
                                  Wiring={CVdata[0].zfr.zfr40.specs.Wiring}
                                  ECU={CVdata[0].zfr.zfr40.specs.ECU}
                                  Suspension={CVdata[0].zfr.zfr40.specs.Suspension}
                                  Cooling={CVdata[0].zfr.zfr40.specs.Cooling}
                        />):
                           (id==="zfr5.0"?
                           (<TableSpec chassis={CVdata[0].zfr.zfr50.specs.chassis} 
                                       Power={CVdata[0].zfr.zfr50.specs.Power}
                                       Torque={CVdata[0].zfr.zfr50.specs.Torque}
                                       Weight={CVdata[0].zfr.zfr50.specs.weight}
                                       BodyWorks={CVdata[0].zfr.zfr50.specs.Bodyworks}
                                       Engine={CVdata[0].zfr.zfr50.specs.Engine}
                                       Tyres={CVdata[0].zfr.zfr50.specs.Tyres}
                                       Wiring={CVdata[0].zfr.zfr50.specs.Wiring}
                                       ECU={CVdata[0].zfr.zfr50.specs.ECU}
                                       Suspension={CVdata[0].zfr.zfr50.specs.Suspension}
                                       Cooling={CVdata[0].zfr.zfr50.specs.Cooling}
                             />):
                               
                                         (id==="effi9.0"?(
                                          <TableSpecTGW Power={TGWdata[0].TGW.TGW90.specs.Motor} 
                                                     Weight={TGWdata[0].TGW.TGW90.specs.weight}
                                                    Length={TGWdata[0].TGW.TGW90.specs.length}
                                                    Width={TGWdata[0].TGW.TGW90.specs.width}
                                                    Height={TGWdata[0].TGW.TGW90.specs.Height}
                                                    Frame={TGWdata[0].TGW.TGW90.specs.Frame}
                                                    Suspension={TGWdata[0].TGW.TGW90.specs.Suspension}
                                                    Wheel={TGWdata[0].TGW.TGW90.specs.Wheelconfig}
                                                    Steering={TGWdata[0].TGW.TGW90.specs.Steering}
                                                    Brakes={TGWdata[0].TGW.TGW90.specs.Brakes}
                                          />
                                             ):(id==="effi10.0"?
                                             
                                              (<TableSpecTGW Power={TGWdata[0].TGW.TGW90.specs.Motor} 
                                                         Weight={TGWdata[0].TGW.TGW90.specs.weight}
                                                        Length={TGWdata[0].TGW.TGW90.specs.length}
                                                        Width={TGWdata[0].TGW.TGW90.specs.width}
                                                        Height={TGWdata[0].TGW.TGW90.specs.Height}
                                                        Frame={TGWdata[0].TGW.TGW90.specs.Frame}
                                                        Suspension={TGWdata[0].TGW.TGW90.specs.Suspension}
                                                        Wheel={TGWdata[0].TGW.TGW90.specs.Wheelconfig}
                                                        Steering={TGWdata[0].TGW.TGW90.specs.Steering}
                                                        Brakes={TGWdata[0].TGW.TGW90.specs.Brakes}
                                              />):
                                                ("")))))))}
          


        </div>
        
        
        
          
        
      
      
     
      
           
      
      

    </div>
    <Footer/>
    </>
  )
}

export default VehiclePage