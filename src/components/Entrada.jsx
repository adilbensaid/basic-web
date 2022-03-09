import React from 'react'
import '../styles/Entrada.css'

function Entrada(text) {
  return (
    <>
        <div className="container">
          <div className="container__wrap">
          <img src={text.img} alt="" />
            <div className="container__texto">
                <h2>{text.tit}</h2>
                <p>{text.par}</p>
            </div>
          </div>
        </div>  
    </>
  )
}

export default Entrada