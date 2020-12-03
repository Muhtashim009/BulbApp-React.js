import React, { useState } from 'react'
import img from "./img/bulb.jpg"

function Bulb() {

    const [turnOn, setTurnOn] = useState(false)
    const [turnOff, setTurnOff] = useState(false)
    const [flicker, setFlicker] = useState(false)


    return (
     <div className="container">
         <img src={img} className={style.img}></img>
         <div className="button">
             <button className="buttonOn"
             onClick={() => setTurnOn(true)}>
             on
             </button>
             <button className="buttonOff" onClick={() => {
                turnOff(true);
              setTurnOn(false)
              }}>
             off
             </button>
             <button className="buttonFlicker"
             onClick={() => {
                 setFlicker(true);
                 setTurnOn(false);
                 setTurnOff(false)
             }}>
             Flicker
             </button>
         </div>
     </div>
    )
}

export default Bulb
