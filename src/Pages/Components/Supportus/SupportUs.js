import React from 'react';
import { useState,useEffect} from 'react';
import './support.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCaretSquareRight, faKickstarter
  } from "@fortawesome/free-brands-svg-icons";
import {BiCopy} from 'react-icons/bi'
  
  import { FaCaretSquareRight } from "react-icons/fa";
  import Sup from '../../../images/supportusimg.png'
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'


const SupportUs = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    
    const [copySuccess1, setCopySuccess1] = useState(false);
    const [copySuccess2, setCopySuccess2] = useState(false);
    const [copySuccess3, setCopySuccess3] = useState(false);
    const [copySuccess4, setCopySuccess4] = useState(false);
    const [copySuccess5, setCopySuccess5] = useState(false);
    const [copySuccess6, setCopySuccess6] = useState(false);
    
    
      const text1="SAEINDIA ZHCET COLLEGIATE CLUB";
      const text2="32710722841";
      const text3="State Bank of India";
      const text4="86544925905";
      const text5="5555";
      const text6="SBIN0005555"
    
   
  return (
      <>
    <div className='supportusmaindiv' >
             
        <div className='uppersup' >
            
            <div className='supportusheading'>SUPPORT US</div>
            <div className='lineborder'></div>
            <div className='supportusdesc'> Become a significant part of SAE-ZHCET and help us to transform and build new vehicles.</div>
        </div>

        <div className='detaildiv'  data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200'>
              <div className='perkbg1'></div>
              <div className='perkbg2'></div>
              <div className={window.innerWidth<=600?"wave":""}></div>
                
            <div className='leftqrdiv'>
                
                <div data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>Team ZHCET formula racing strives hard & passionately to bring up the talent from Aligarh Muslim University to give an exposure on Indian & global platforms. We encourage young talent to be a part of us and to provide them an adequate environment so that they can perform some sophisticated work in the field of motorsports, automobiles and Management sectors.</div>
                <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>From when we were just a few students to this time when we are preparing for our 5th version ZFR 5.0, a lot of changes have taken place .We work hard, sometimes we run, sometimes we walk, sometimes we crawl but the passion for automotive engineering keeps firing in our hearts .</div>
                <div data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>We could not have been here unless people like you did not support us. By considering the immensity of event and availability of resources, we as a team of aspiring & enthusiast automotive engineers looks upon corporate & private firms who sponsor us & let us help to ignite our passion. As someone said “Rome was not built in a day”, so we firmly believe that we can achieve it but what we need is your support & your trust on us.</div>
                <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>So that we can create a new benchmark for upcoming automotive enthusiast.</div>
            </div>
            <div className='rightbankdetails' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>
                <div className='Bankheading'>Bank Details</div>
                <div className='Bankdetails'>
                    <div className='bankcolumn'>
                        <div className='property'>Account Name :</div>
                        <div className='value'>SAEINDIA ZHCET COLLEGIATE CLUB</div>
                        <div className='copyicon'
                             onClick={() => {
                                navigator.clipboard.writeText(text1);
                                setCopySuccess1(!copySuccess1);
                                setCopySuccess2(false);
                                setCopySuccess3(false);
                                setCopySuccess4(false);
                                setCopySuccess5(false);
                                setCopySuccess6(false);
                              }}>
                        {copySuccess1?"Copied":(<BiCopy/>)}</div>
                    </div>
                    <div className='bankcolumn'>
                        <div className='property'>Account Number :</div>
                        <div className='value'>32710722841</div>
                        <div className='copyicon' 
                        onClick={() => {
                            navigator.clipboard.writeText(text2);
                            setCopySuccess2(!copySuccess2);
                            setCopySuccess1(false);
                                setCopySuccess3(false);
                                setCopySuccess4(false);
                                setCopySuccess5(false);
                                setCopySuccess6(false);
                          }}>
                    {copySuccess2?"Copied":(<BiCopy/>)}</div>
                    </div>
                    <div className='bankcolumn'>
                        <div className='property'>Bank Name :</div>
                        <div className='value'>State Bank of India</div>
                        <div className='copyicon' 
                         onClick={() => {
                            navigator.clipboard.writeText(text3);
                            setCopySuccess3(!copySuccess3);
                            setCopySuccess2(false);
                                setCopySuccess1(false);
                                setCopySuccess4(false);
                                setCopySuccess5(false);
                                setCopySuccess6(false);
                          }}>
                              {copySuccess3?"Copied":(<BiCopy/>)}</div>
                    </div>
                    <div className='bankcolumn'>
                        <div className='property'>CIF No :</div>
                        <div className='value'>86544925905</div>
                        <div className='copyicon' 
                        onClick={()=> {
                            navigator.clipboard.writeText(text4);
                            setCopySuccess4(!copySuccess4);
                            setCopySuccess2(false);
                                setCopySuccess3(false);
                                setCopySuccess1(false);
                                setCopySuccess5(false);
                                setCopySuccess6(false);
                        }}>
                            {copySuccess4?"Copied":<BiCopy/>}</div>
                    </div>
                    <div className='bankcolumn'>
                        <div className='property'>Branch Code :</div>
                        <div className='value'>5555</div>
                        <div className='copyicon'
                         onClick={()=> {
                            navigator.clipboard.writeText(text5);
                            setCopySuccess5(!copySuccess5)
                            setCopySuccess2(false);
                                setCopySuccess3(false);
                                setCopySuccess4(false);
                                setCopySuccess1(false);
                                setCopySuccess6(false);
                        }}>
                            {copySuccess5?"Copied":<BiCopy/>}</div> 
                    </div>
                    <div className='bankcolumn'>
                        <div className='property'>IFSC No. :</div>
                        <div className='value'>SBIN0005555</div>
                        <div className='copyicon'
                         onClick={()=> {
                            navigator.clipboard.writeText(text6);
                            setCopySuccess6(!copySuccess6)
                            setCopySuccess2(false);
                                setCopySuccess3(false);
                                setCopySuccess4(false);
                                setCopySuccess5(false);
                                setCopySuccess1(false);
                        }}>
                            {copySuccess6?"Copied":<BiCopy/>}</div> 
                    </div>
                </div>
            </div>

        </div>
        
        <div className='mainlowerdiv'>
            <div className='tiltedbox1'></div>
           
            
            <div className='mainlowerleftdiv' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>
                <div className='mainlowerdivtitle'>Another way to Support Us</div>
                <div className='textmainlowerdiv'>To achieve our goals and implement improvements we need sponsors who support us with know-how, production capacity and financial resources.</div>

            </div>
            <div className='mainlowerrightdiv' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
                <img className='image2100' src={Sup}></img>

            </div>
           
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default SupportUs