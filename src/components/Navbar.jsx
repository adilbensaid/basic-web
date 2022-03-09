import React, { useState } from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);


  return (
    <nav className="navbar">
        <Link to='/' className='nav-link'>Logo</Link>
        <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
            <Link to='/' className='nav-link' onClick={() => setIsMobile(false)}><li>Inicio</li></Link>
            <Link to='/articulo' className='nav-link' onClick={() => setIsMobile(false)}><li>Articulo</li></Link>
            <Link to='/contacto' className='nav-link' onClick={() => setIsMobile(false)}><li>Contacto</li></Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
        </button>
    </nav>
  )
}

export default Navbar