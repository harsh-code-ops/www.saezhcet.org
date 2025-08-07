import React from 'react'
import './TableSpec.css'
function TableSpec({Power,Frame,Weight,Length,Height,Width,Wheel,Suspension,Steering,Brakes}) {
    
  return (
    <div className='tablemain'>
        <div className='spectableheading'>SPECIFICATIONS</div>
        <div className='tablespec'>
            
            <div className='tablecolumn'>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Motor</div>
                    <div className='tablevalue'>{Power}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Weight</div>
                    <div className='tablevalue'>{Weight}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Overall Length</div>
                    <div className='tablevalue'>{Length}</div>
                </div>
               
                
            </div>
            <div className='tablecolumn'>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Overall Width</div>
                    <div className='tablevalue'>{Width}</div>
                </div>
               
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Frame material:</div>
                    <div className='tablevalue'>{Frame}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Wheel configuration</div>
                    <div className='tablevalue'>{Wheel}</div>
                </div>
                
            </div>
            <div className='tablecolumn'>
                
                
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Suspension</div>
                    <div className='tablevalue'>{Suspension}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Steering</div>
                    <div className='tablevalue'>{Steering}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Brakes</div>
                    <div className='tablevalue'>{Brakes}</div>
                </div> 
            </div>
           
        </div>



    </div>
  )
}

export default TableSpec