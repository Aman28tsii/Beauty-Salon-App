import React from "react";
import ImageList from './dd.js'

const Gallary = () => {
    return ( <>
    
     <h1 className="gallery-h1">Gallary</h1>
    <section className='blog'>
        <div className='container'>
          <div className='row'>

                 {<ImageList/>}
             </div>
            </div>
            </section>   
                   
</>
   );
}
 
export default Gallary;