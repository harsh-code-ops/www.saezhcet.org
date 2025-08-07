import React, { useState } from 'react'
import './Achievements.css'
import TGW from './TGW'
import ZFREV from './ZFR-EV'
import Cvzfr from './Cvzfr'
import Footer from '../Footer'

const Achievements = () => {
    const [cv,setCV]=useState(true)
    const [ev,setEV]=useState(false)
    const [tgw,setTGW]=useState(false)
    const [light1,setLight1]=useState(true)
    const [light2,setLight2]=useState(false)
    const [light3,setLight3]=useState(false)
  return (
    <div className='mainachv'>
        <div className="upperachvnav">
            <div className={light1?'light':'none'} onClick={()=> {setCV(true)
                                 setEV(false)
                                 setTGW(false)
                                 setLight1(true)
                                 setLight2(false)
                                 setLight3(false)

              }}>ZFR-CV</div>
            <div className={light2?'light':'none'} onClick={()=> {setEV(true)
                                setCV(false)
                                setTGW(false)
                                setLight1(false)
                                setLight2(true)
                                setLight3(false)
            }}>ZFR-EV</div>
            <div className={light3?'light':'none'} onClick={()=> {setTGW(true)
                                setCV(false)
                                setEV(false)
                                setLight3(true)
                                setLight2(false)
                                setLight1(false)
            }}>TGW</div>
        </div>
        <div>{cv && <Cvzfr/>}
             {ev && <ZFREV/>}
             {tgw && <TGW/>}
        </div>

        <Footer/>

    </div>
  )
}

export default Achievements