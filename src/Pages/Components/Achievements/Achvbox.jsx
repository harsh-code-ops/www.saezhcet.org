import React,{useEffect} from 'react'
import './Achvbox.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achvbox = ({EventName,OverallRank,overallscript,Rank1,NameRank1,rank1script,Rank2,NameRank2,rank2script,Rank3,NameRank3,rank3script}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
    <div className='mainachvbox' data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300">
        <div className='relbg'></div>
        <div className='eventnametop'>{EventName}</div>
        <div className="topboxx">
            <div className="overallrank">
                <div className="rankimg"></div>
                <div className='ranktext'>{OverallRank}</div>
                <div className='ranktextscript'>{overallscript}</div>
                <div className='achvname'>OVERALL</div>
            </div>
        </div>
        <div className="lowerboxx">
            <div className="overallrank">
                <div className="rankimg"></div>
                <div className='ranktext'>{Rank1}</div>
                <div className='ranktextscript'>{rank1script}</div>
                <div className='achvname'>{NameRank1}</div>
            </div>
            <div className="overallrank">
                <div className="rankimg"></div>
                <div className='ranktext'>{Rank2}</div>
                <div className='ranktextscript'>{rank2script}</div>
                <div className='achvname'>{NameRank2}</div>
            </div>
            <div className="overallrank">
                <div className="rankimg"></div>
                <div className='ranktext'>{Rank3}</div>
                <div className='ranktextscript'>{rank3script}</div>
                <div className='achvname'>{NameRank3}</div>
            </div>
        </div>

    </div>
  )
}

export default Achvbox