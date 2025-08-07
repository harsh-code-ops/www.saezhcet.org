import React from 'react'
import './logoscon.css';
import { useEffect,useState } from 'react';

const Logoscon = () => {
    const [yOffset, setYOffset] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  
    function handleScroll() {
      const currentYOffset = window.pageYOffset;
      const visible = yOffset > currentYOffset;
  
      setYOffset(currentYOffset);
      setVisible(visible);
    }
  return (
    <div className={visible ?'twologos':'no'}>
        <div className='secondlogo' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/saeinv.png)`}}></div>
        <div className='firstlogo' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/amulogo.png)`}}></div>
    </div>
  )
}

export default Logoscon