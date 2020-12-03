import React, { useState } from 'react'
import img from "./img/bulb.jpg"

function Bulb() {

    const [turnOn, setTurnOn] = useState(false)
    const [turnOff, setTurnOff] = useState(false)
    const [flicker, setFlicker] = useState(false)


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
