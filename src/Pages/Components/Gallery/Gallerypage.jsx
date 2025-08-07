import React from 'react';
import WSPGallery from './WSPGallery';
import DataImages from './DataImages';
import Routecomp from '../RouteComp/Routecomp';
import Footer from '../Footer';

const Gallerypage = ({id,name}) => {
    
    
  return (
    <>
    <div className='maingalleryinside' style={{height:"max-content"}}>
          <Routecomp LastRoutename={name} Heading={name} Mid='Gallery'/>
          <div className='bgg'>
              {(id==="Section0")?(<WSPGallery galleryImages={DataImages[0].Section0}/>) 
                :(id==="Section1")?(<WSPGallery galleryImages={DataImages[0].Section1}/>)
                 :(id==="Section2")?(<WSPGallery galleryImages={DataImages[0].Section2}/>)
                   :(id==="Section3")?(<WSPGallery galleryImages={DataImages[0].Section3}/>)
                     :(id==="Section4")?(<WSPGallery galleryImages={DataImages[0].Section4}/>)
                       :(id==="Section5")?(<WSPGallery galleryImages={DataImages[0].Section5}/>)
                         :(id==="Section6")?(<WSPGallery galleryImages={DataImages[0].Section6}/>)
                          :(id==="Section7")?(<WSPGallery galleryImages={DataImages[0].Section7}/>)
                            :(id==="Section8")?(<WSPGallery galleryImages={DataImages[0].Section8}/>)
                             :(id==="Section9")?(<WSPGallery galleryImages={DataImages[0].Section9}/>)
                               :(id==="Section10")?(<WSPGallery galleryImages={DataImages[0].Section10}/>):("")}
          </div>
        
       

    </div>
    <Footer/>
    </>
  )
}

export default Gallerypage