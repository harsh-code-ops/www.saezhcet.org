import React from 'react'
import './Achvbox2.css'
const Achvbox2 = ({EventName,OverallRank,overallscript,Rank1,NameRank1,rank1script,Rank2,NameRank2,rank2script,Rank3,NameRank3,rank3script}) => {
  return (
    <div className='mainachvbox'>
        <div className='relbg'></div>
        <div className='eventnametop'>{EventName}</div>
        <div className="topboxx">
            <div className="overallrank">
                <div className="rankimg2"></div>
                <div className='ranktext2'>{OverallRank}</div>
                <div className='ranktextscript2'>{overallscript}</div>
                <div className='achvname2'>OVERALL</div>
            </div>
        </div>
        <div className="lowerboxx">
            <div className="overallrank">
                <div className="rankimg2"></div>
                <div className='ranktext2'>{Rank1}</div>
                <div className='ranktextscript2'>{rank1script}</div>
                <div className='achvname2'>{NameRank1}</div>
            </div>
            <div className="overallrank">
                <div className="rankimg2"></div>
                <div className='ranktext2'>{Rank2}</div>
                <div className='ranktextscript2'>{rank2script}</div>
                <div className='achvname2'>{NameRank2}</div>
            </div>
            <div className="overallrank">
                <div className="rankimg2"></div>
                <div className='ranktext2'>{Rank3}</div>
                <div className='ranktextscript2'>{rank3script}</div>
                <div className='achvname2'>{NameRank3}</div>
            </div>
        </div>

    </div>
  )
}

export default Achvbox2