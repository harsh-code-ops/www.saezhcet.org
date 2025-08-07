import React,{useEffect} from 'react';
import './aboutus.css';
import '../../../CSS(Pages)/homepage.css';
import Data from './Notificationsdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGgCircle } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Aboutus() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay='250' className="container1" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/ysupport.png)`}}>
     <div className="titleabtushmpg">Latest News</div>
     <div className="titleabtushmpgdesc">Have a look at our most recent news of the teams</div>
    <div className='container2' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/ysupport.png)`}}>
      <div className="iframebox1">
          <iframe name="Framename" src="https://indiaeducationdiary.in/amu-team-get-top-ranks-for-designing-formula-electric-car/" width="100%" height="100%" frameborder="0" scrolling="yes" class="frame-area">
          </iframe>
      </div>
      <div className="iframebox2">
         <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B36d2OTvtKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      
      
      
      
      
      <div className="notificationbox">
        <div className='notificationsheader'>Notifications and Updates</div>
        {Data.map((i)=> {
                  return (<div className='notbox'   style={{paddingTop:"10px"}}>
                            <div className='notboxhead' style={{float:"left",width:"100%",display:"flex",alignItems:"flex-start",fontWeight:"400",padding:"3px"}}><FontAwesomeIcon icon={faGgCircle}/><a target='_blank' href={`${i.Link}`} className='notboxlink' style={{fontWeight:"600",marginLeft:"10px"}}  >{i.Title}</a></div>
                            <div className='notboxdesc' style={{paddingLeft:"25px",fontSize:"14px"}}>{i.Desc}</div>

                        </div>)
                })}
      </div>
    </div>
    </div>
  )
}

export default Aboutus