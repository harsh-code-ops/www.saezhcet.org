import React,{useEffect} from 'react';
import Sponserdata from './sponserdata';
import './sponser.css';

import Footer from '../Footer';

import {MdPlayArrow} from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css'



const Sponsercontainer = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='sponsercontainer' >
       
        
        <div className='upperheadingapply'>
           <div className='applyhead'>Our Sponsors</div>
           <div className='lineborder'></div>
           <div className="applyheaddesc">The support we couldn't be successful without.</div>
         </div>
        
        <div className='sponserimgcon' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' >
         {Sponserdata[0].Images.map((i)=> {
                    return(<div className='sponsimg' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/sponsors/${i.img})`}}> 
                      
              </div>)
                })}
          </div >
         
         <div className='whysponsor'  data-aos='fade-up' data-aos-duration='1000' data-aos-delay='400'>
           
             <div className='whysponserbg1'></div>
             <div className='whysponserbg2'></div>
             <div className='whysponserbg3'></div>
           
           <div className='whycolumn'>
             <div className='whyheading'>Why Sponsor us?</div>
             <div className='whyheadingdesc'>In exchange for sponsorship, we link the business to our teams. Furthermore, given our track record of success, we are confident in the advantages indicated below:</div>
           </div>
           <div className='whycolumncon'>
           <div className='whycolumns'  data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
              <div className='pointheading'><MdPlayArrow/>Increasing Brand Visibility</div>
              <div className='pointdesc'>We provide potential investors with a fantastic opportunity to increase brand recognition. In particular, setting up sponsorship agreements makes it possible for your business to be shown in front of sizable audiences with other trustworthy companies. Therefore, this tactic can do wonders for tiny, regional businesses.</div>
           </div>
           <div className='whycolumns' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>
              <div className='pointheading'><MdPlayArrow/>Building A Positive Image</div>
              <div className='pointdesc'>A company's reputation can make or ruin it. So event sponsorships are a means to increase your company's reputation and authority. As visitors to the various events that we participate in get compelling reasons to know that your brand is dependable and trustworthy.</div>
           </div>
           <div className='whycolumns'  data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
              <div className='pointheading'><MdPlayArrow/>Boosting Sales</div>
              <div className='pointdesc'>Through sponsorships, you may attract additional clients and eventually boost your sales. We participate in activities having a lot of interest from onlookers and potential clients for your business.</div>
           </div>
           <div className='whycolumns'  data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>
              <div className='pointheading'><MdPlayArrow/>Product feedback for suppliers</div>
              <div className='pointdesc'>Along with supporting students' growth and learning, the team provides the suppliers with a unique setting for testing and exposing new and existing products, as well as offering feedback to the supplier for product success.</div>
           </div>
           </div>
           <div className='whycolumn'>
              
              <div className='pointdesc'>We hope you will take advantage of this opportunity. We eagerly await hearing from you so you may join this victorious team!</div>
           </div>
         </div>
         
           
           <Footer/>
          
                
    </div>
  )
}

export default Sponsercontainer
