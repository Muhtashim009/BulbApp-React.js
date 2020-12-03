import React from 'react'
import img from "./img/bulb.jpg"

function Bulb() {


    return (
     <div className="container">
         <img src={img} className="img"></img>
         <div className="button">
             <button className="buttonOn"> on </button>
             <button className="buttonOff"> off </button>
             <button className="buttonFlicker"> Flicker </button>
         </div>
     </div>
    )
}

export default Bulb
