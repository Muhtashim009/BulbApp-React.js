import React from 'react'
import img from "./img/bulb.jpg"

function Bulb() {


    return (
     <div className="container">
         <img src={img}></img>
         <div className="button">
             <button> Hello </button>
             <button></button>
             <button></button>
         </div>
     </div>
    )
}

export default Bulb
