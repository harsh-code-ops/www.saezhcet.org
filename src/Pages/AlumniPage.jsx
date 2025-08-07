import React,{useEffect} from 'react'
import '../CSS(Pages)/AlumniPage.css'
import Alumnicard from './Components/AlumniCard/Alumnicard'
import Footer from './Components/Footer'
import AlumniData from './AlumniData'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AlumniPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='Mainalumpage'>
       <div className="alumpagehead" >
         <div className="alumhead">Meet Our Alumni</div>
         <div className='lineborder'></div>
         <div className="alumdesc">Our alumni network is a diverse, global community of effective and responsible leaders making an impact across a wide range of industries.</div>
       </div>
       <div className='alumcon' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
        {
          AlumniData.map((i,idx)=> {
            return(<div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='250'><Alumnicard  Name={i.Name} Image={i.Img} Company={i.Company} Post={i.Post} LinkedIn={i.linkedinurl}/></div>)
          })
        }
        </div>

        <Footer/>
        

    </div>
  )
}

export default AlumniPage