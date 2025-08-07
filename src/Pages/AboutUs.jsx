import React,{useEffect} from 'react';
import '../CSS(Pages)/AboutUspage.css';
import Footer from './Components/Footer';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import VisionMission from './Components/VisionMission/VisionMission';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className="abtouspagemaincon">

        <div className="headingpic">
              
          
        </div>

        <div className='layer' style={{position:"absolute",top:'0px',color:"white",width:'100%',height:"200px",zIndex:"10"}}>Engineer your <span className='colorred'>Future</span> with us!</div>
        <div className='alllogos'>
          <div className="logo first"></div>
          <div className="logo second"></div>
          <div className="logo third"></div>
          <div className="logo fourth"></div>
          
        </div>
        <div className="abtuspagedesccon " data-aos="fade-up" data-aos-duration="1000" data-aos-delay='300' >
         
         <div className="headingtitleabt" >About Us</div>
         <div className="descabtuspage">
           <p>SAE International is a scientific and engineering organization committed to the advancement of automotive technology. Its members pool their specialized skills to enhance the study, creation, construction, and use of vehicles that can travel on land, water, and the air.

           </p>
           <p>
           SAE-ZHCET Collegiate Club is an SAE-INDIA-affiliated society for college students. It was developed in 2012 by the third-year mechanical engineering students of Zakir Husain College of Engineering and Technology. Its establishment encouraged college students to seek professions in the industry's broad engineering sector.

           </p>
           <p>
           The SAE ZHCET is an exhibition of numerous students' dreams that stands them apart from their fellow pupils. The Society of Automotive Engineers student chapter at AMU was founded in 2012 as a result of the student's passion for automobiles and their love of motorsports, as well as their spirit of teamwork and a strong desire to augment the academic knowledge taught in the classroom.
           </p>
         </div>

       </div>

       <VisionMission/>
       <div><Footer/></div>
       
    </div>
  )
}

export default AboutUs