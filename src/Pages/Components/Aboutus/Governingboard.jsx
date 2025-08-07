import React from 'react'
import Alumnicard from '../AlumniCard/Alumnicard'
import Governingboarddata from './Governingboarddata'
import './Governingboard.css'
import GovCard from '../Governing Board Card/GovCard'
import Footer from '../Footer'

const Governingboard = () => {
  return (
    <>
    <div className="maingovbox">
      <div className='govbg1'></div>
      <div className='govbg2'></div>
           <div className="contactusheading">
                <div className="contitle">Meet the Team</div>
                <div className='lineborder'></div>
                <div className="condesc">Our forward-looking leadership team is made up of dedicated, focused and experienced executives.!</div>
            </div>
        
        <div className='govcarddiv'>
        {Governingboarddata.map((i,idx)=> {
            return (<div key={idx} className='govcarddivin'>     <GovCard key={idx} Name={i.Name} Immm={i.Img} Post={i.Post} LinkedIn={i.LinkedIn} Insta={i.Insta} Email={i.Email}/></div>)
        })}
        </div>
        

    </div>
    <Footer/>
    </>
  )
}

export default Governingboard