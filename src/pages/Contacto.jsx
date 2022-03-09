import React from 'react'
import Banner from '../components/Banner'
import '../styles/Contacto.css'
import Maps from '../components/Maps'

function Contacto() {
  return (
    <>
      <Banner tit="Contacto" subtit="Subtitulo de la pagina de contactos"/>
      <div className="container">
        <div className="map">
          <h3>Mapa</h3>
          <div className="mapa">
            <Maps/>
          </div>
        </div>
        <div className="formulario">
          <h3>Formulario</h3>
          <form id="contact-form" method="POST">
                <label htmlFor='name'>Full Name </label>
                <input name="name" placeholder='Enter full name...' type="text"/>
                <label htmlFor='email'>Email </label>
                <input name="email" placeholder='Enter Email...' type="email"/>
                <label htmlFor='message'>Message </label>
                <textarea rows="6" placeholder='Enter message...' name='message required'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contacto  