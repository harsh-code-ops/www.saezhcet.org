import React from 'react'
import { useNavigate } from 'react-router';
import Footer from '../Footer';
import Routecomp from '../RouteComp/Routecomp';
//import Gallerypage from './Gallerypage';
import './maingallery.css';

const GallerymainPage = () => {
    const navigate=useNavigate();
  return (
    <div className='maingallerypage' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/ysupport.png)`}}>
        <Routecomp LastRoutename='gallery' Heading='Event Images'/>
        <div className='gallerycompdiv'>
        <div className='gallerycomponent' onClick={()=>navigate('/gallery/Section0')}
        style={{backgroundImage:`url(https://drive.google.com/uc?id=1g9gNgmn8jXmJivpCNb98CLSObvoZ5zOM)`,
               backgroundSize:"cover",
               backgroundRepeat:"no-repeat",
               backgroundPosition:"center"
               }}>
            <div className='lowerbg'></div>
            <div className='texts'>Formula Bharat 2023</div>
        </div>
        <div className='gallerycomponent' onClick={()=>navigate('/gallery/Section1')}
        style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Zfrbg.jpg)`,
               backgroundSize:"cover",
               backgroundRepeat:"no-repeat"
               }}>
            <div className='lowerbg'></div>
            <div className='texts'>Formula Imperial 2022</div>
        </div>
        <div className='gallerycomponent' onClick={()=>navigate('/gallery/Section2')}
        style={{backgroundImage:`url(https://drive.google.com/uc?id=1FVu2WH2Mp1FLq65PBHWiIA2eUA98SqlJ)`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
        }}>
            <div className='lowerbg'></div>
            <div className='texts'>Alumni Meet 2022</div>
        </div>
        <div className='gallerycomponent'  onClick={()=>navigate('/gallery/Section3')}
        style={{backgroundImage:`url(https://drive.google.com/uc?id=1OJuVYFD-SnT6bMjvRZfDPEdvCvop1X75)`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
        }}>
            <div className='lowerbg'></div>
            <div className='texts'>NBA Visit 2022</div>
        </div>
        <div className='gallerycomponent'  onClick={()=>navigate('/gallery/Section4')}
        style={{backgroundImage:`url(https://drive.google.com/uc?id=1kTo7gcW4O3OxXpwM2pxVTZ2U0tpdkR_2)`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
        }}>
            <div className='lowerbg'></div>
            <div className='texts'>Institute-Industry Meet 2022</div>
        </div>
        <div className='gallerycomponent'  onClick={()=>navigate('/gallery/Section5')}
        style={{backgroundImage:`url(https://drive.google.com/uc?id=1fPACuC-MOjTZD2ly90hf88iOT45jSWfS)`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
        }}>
            <div className='lowerbg'></div>
            <div className='texts'>Auto Expo 2018</div>
        </div>
        
        </div>
        <Footer/>
    </div>
  )
}

export default GallerymainPage