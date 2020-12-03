import React, { useState } from 'react'
import img from "./img/bulb.jpg"
import style from './App.css'

function Bulb() {

    const [turnOn, setTurnOn] = useState(false)
    const [turnOff, setTurnOff] = useState(false)
    const [flicker, setFlicker] = useState(false)


    return (
     <div className="container">
         <img src={img} className={
             turOn ? style.bulbOn :
             turnOff ? style.bulbOn :
             flicker ? style.flicker :
             style.img}
         
         >   
         </img>
         <div className={style.button}>
             <button className={style.buttonOn}
             onClick={() => setTurnOn(true)}>
             on
             </button>
             <button className={style.buttonOff} onClick={() => {
                setTurnOff(true);
              setTurnOn(false)
              }}>
             off
             </button>
             <button className={style.buttonFlicker}
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
