import React,{useEffect} from 'react'
import './vismis.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const VisionMission = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      
  return (
    <div className='vismismain' data-aos="zoom-in" data-aos-duration='1000' data-aos-delay='300'>
        <div className="leftvis">
            <div className="leftinbox vis">
                <div className="leftinicon visicon"></div>
                <div className="rightin">
                    <div className="headingvismis">Vision</div>
                    <div className="vismistexts" data-aos="fade-left">With a vision to inspire students toward the automotive industry and its broad engineering scope, a group of mechanical undergrads in their junior year established the club in 2012. Students get a forum to display their engineering techniques, concepts, and inventions thanks to the SAE ZHCET Collegiate Club, which is affiliated with the Society of Automotive Engineers India.</div>
                </div>
            </div>
            <div className="leftinbox mis">
                <div className="leftinicon misicon"></div> 
                <div className="rightin">
                    <div className="headingvismis">Mission</div>
                    <div className="vismistexts" data-aos="fade-left">This club's mission is to provide the students of Zakir Husain College of Engineering Technology, Aligarh Muslim University, with the opportunity to apply what they acquire in the classroom to real-life scenarios and to equip them with the skills necessary for success.</div>
                </div>
            </div>
            <div className="leftinbox val">
                <div className="leftinicon valicon"></div>
                <div className="rightin">
                    <div className="headingvismis">Value</div>
                    <div className="vismistexts" data-aos="fade-left">The club has carried on the legacy of Aligarh Muslim University over the previous ten years by flourishing and outperforming itself in every tournament it has taken part in and has earned accolades for the institute by competing in and winning a variety of local, national, and worldwide competitions.</div>
                </div>
            </div>
        </div>
        <div className="rightvis">
            <div className="rightvisin"></div>
        </div>
    </div>
  )
}

export default VisionMission