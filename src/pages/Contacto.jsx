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
                <label htmlFor='name'>Nombre </label>
                <input name="name" placeholder='Nombre...' type="text" required/>
                <label htmlFor='email'>Email </label>
                <input name="email" placeholder='Email...' type="email" required/>
                <label htmlFor='message'>Mensage </label>
                <textarea rows="6" placeholder='Mensage...' name='message'></textarea>
                <button type='submit'>Enviar</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contacto  