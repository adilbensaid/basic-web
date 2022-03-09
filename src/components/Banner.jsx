import React from 'react'
import '../styles/Banner.css'

function Banner(text) {
  return (
    <div className='banner'>
        <h1>{text.tit}</h1>
        <p>{text.subtit}</p>
    </div>
  )
}

export default Banner