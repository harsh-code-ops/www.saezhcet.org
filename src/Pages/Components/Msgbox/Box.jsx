import React, { useState } from 'react';
import './Box.css';

const Box = () => {
    const Slider={
        width:"400px",
        margin:"0 auto",
        height:"200px",
        overflow:"hidden",
        backgroundColor:"grey"
    }
    const insidediv={
        width:"1000px",
        height:"100px",
        backgroundColor:"grey",
    }
    
    const [Translate,setTranslate]=useState(false)
    const Data = ['hello world','giraffe','monkey'];
  return (
    <div style={{paddingTop:'200px'}}>


      {Data.map((e)=> (<div style={{display:"flex",gap:"50px",flexDirection:"row",width:"50px",height:"20px",flexWrap:"wrap",overflow:"hidden"}}>{e}</div>))}

      <div style={Slider}> 
        <div style={insidediv} className={Translate?'animation':''}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis non quasi animi distinctio asperiores natus quod ipsa fugit culpa ipsum, fugiat suscipit inventore consequuntur illum facilis veritatis qui neque velit?</div>
      
      </div>
      <button onClick={()=> setTranslate(true)}>Next</button>
    </div>
  )
}

export default Box