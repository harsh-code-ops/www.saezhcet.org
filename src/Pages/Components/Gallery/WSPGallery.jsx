import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {
//  faCircleChevronLeft, 
//  faCircleChevronRight, 
//  faCircleXmark
//} from '@fortawesome/react-fontawesome';
import { FaChevronCircleRight,FaChevronCircleLeft,FaExclamation,FaCircle, FaTimes, FaTimesCircle } from "react-icons/fa";


import './wsp-gallery.css'

const WSPGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
            <FaTimesCircle className='btnClose' onClick={handleCloseModal}  />

          <FaChevronCircleLeft className='btnPrev' onClick={prevSlide} />
          <FaChevronCircleRight className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img loading='lazy' src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img loading='lazy' src={slide.img} alt='data:image/png;base64,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' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default WSPGallery