import React from 'react'
import '../styles/Footer.css'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div className="footer">
        <div className="footer__logo foot">
        <Link to='/' className='footer__link'>Logo</Link>
          
        </div>
        <div className="footer__links foot">
            <Link to='/' className='footer__link'><li>Inicio</li></Link>
            <Link to='/Articulo' className='footer__link'><li>Articulo</li></Link>
            <Link to='/contacto' className='footer__link'><li>Contacto</li></Link>
        </div>
        <div className="footer__info foot">
            <h4>Direccion:</h4>
            <p>22222 Madrid, Madrid</p>
            
            <h4>Horario:</h4>
            <p>LUNES A VIERNES: 8:00 – 8:00</p> 
            
            <h4>Teléfono:</h4>
            <a href="tel:+34666666666">+34 666 66 66 66</a>
            <a href="mailto:info@info.es"><i class="fas fa-envelope" aria-hidden="true"></i>info@info.es</a>

        </div>
    </div>
  )
}

export default Footer