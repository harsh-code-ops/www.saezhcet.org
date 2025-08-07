import React from 'react'

const Map = () => {
  return (
    <div className='map'>
        <div className='maphead'>VISIT OUR PLACE</div>
        <div className="google-map-code" style={{position:"relative",width:"100%",height:"100%"}} >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.5803678587263!2d78.07563901402622!3d27.914848022951464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4e343ce8411%3A0xf280c618d6604343!2sSAE%20ZHCET%20Collegiate%20Club!5e0!3m2!1sen!2sin!4v1664635224014!5m2!1sen!2sin"  frameBorder="0" allowFullscreen="" aria-hidden="false" tabIndex="0" style={{width:"100%",height:"100%",margin:"0 auto",position:"absolute",top:"0px",left:"0px"}} className='mapframe'></iframe>
        </div>
    </div>
  )
}

export default Map