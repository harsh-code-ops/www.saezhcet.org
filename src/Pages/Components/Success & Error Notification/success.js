import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-brands-svg-icons';
import { FaCheckCircle } from 'react-icons/fa';
import './success.css'

const success = ({desc,Hd}) => {
  return (
    <div className='mainsuccessdiv'>
        <div className='leftinsidesucdiv'>
           <FaCheckCircle style={{color:"green"}} size='2x'/>
        </div>
        <div className='rightinsidesucdiv'>
            <div className='headingsuctext'>{Hd}</div>
            <div className='descsuctext'>{desc}</div>
        </div>
        
    </div>
  )
}

export default success