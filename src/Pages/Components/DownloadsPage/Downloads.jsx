import React, { useState } from 'react'
import './Downloads.css';
import Footer from '../Footer'
import PdfData from './Downloaddata'

const Downloads = () => {

  const [notify,setNotify]=useState(false)
  const Notify =()=> {
        setNotify(true)
  }
  const onButtonClick = (i) => {
    // using Java Script method to get PDF file
    fetch(`./assets/PressReleases/${i}`).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement(`a`);
            alink.href = fileURL;
            alink.download = `${i}`;
            alink.click();
        })
    })
}
   
  return (
    <>
    <div className='dmain'>
      <div className="dataleft">
        <div className='newsltrhead'>NewsLetter coming soon</div>
        <div className='newsltrdes'>We are nearly complete</div>
        <div className='notifybox'>
          <input className='notifyin' type='email' placeholder='Enter Your Email'></input>
          <button onClick={Notify} className='notifybtn'>{notify?'Sent':'Notify me'}</button>
          <div>{notify?'We will notify you soon':""}</div>
        </div>
      </div>
      <div className="dataright">

        <div className='usfldw'>Useful Downloads</div>
           {
               PdfData.map((e,i)=> {
                   return (<div className='pdfs'  key={i}>
                       <div className='pdftitle' >{e}</div>
                       <button className='pdfbtn' onClick={()=> onButtonClick(e)}>
                           Download
                        </button>
                   </div>)
               })
           }
           </div>

           
                
    </div>
    <Footer/>
    </>
  )
}

export default Downloads