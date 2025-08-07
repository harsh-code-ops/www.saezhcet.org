import React from 'react'
import './TableSpec.css'
function TableSpec({chassis,Power,Weight,BodyWorks,Engine,Tyres,Torque,ECU,Cooling,Suspension}) {
    
  return (
    <div className='tablemain'>
        <div className='spectableheading'>SPECIFICATIONS</div>
        <div className='tablespec'>
            
            <div className='tablecolumn'>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Chassis</div>
                    <div className='tablevalue'>{chassis}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Power</div>
                    <div className='tablevalue'>{Power}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Torque</div>
                    <div className='tablevalue'>{Torque}</div>
                </div>
               
                
            </div>
            <div className='tablecolumn'>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Weight</div>
                    <div className='tablevalue'>{Weight}</div>
                </div>
                <div className='tablecolumninside'>
                     <div className='tableproperty'>Bodyworks</div>
                    <div className='tablevalue'>{BodyWorks}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Engine</div>
                    <div className='tablevalue'>{Engine}</div>
                </div>
                
            </div>
            <div className='tablecolumn'>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Tyres</div>
                    <div className='tablevalue'>{Tyres}</div>
                </div>
                
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Suspension</div>
                    <div className='tablevalue'>{Suspension}</div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Cooling</div>
                    <div className='tablevalue'>{Cooling}</div>
                </div>
            </div>
            <div className='tablecolumn'>
                <div className='tablecolumninside'>
                    <div className='tableproperty'>Engine Electronics</div>
                    <div className='tablevalue'>{ECU}</div>
                </div> 
                <div className='tablecolumninside'>
                    <div className='tableproperty'></div>
                    <div className='tablevalue'></div>
                </div>
                <div className='tablecolumninside'>
                    <div className='tableproperty'></div>
                    <div className='tablevalue'></div>
                </div>
            </div>
            
        </div>



    </div>
  )
}

export default TableSpec