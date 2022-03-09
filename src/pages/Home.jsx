import React from 'react'
import Banner from '../components/Banner'
import '../styles/Home.css'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <>
      <Banner tit="Lorem ipsum dolor sit amet" subtit="Hagamos que tus proyectos se hagan realidad" />
      <section className='servicios'>
        <div className="servicios__texto">
          <h1>Lorem ipsum dolor sit amet</h1>
          <h2>¿Lorem ipsum dolor sit amet?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
        </div>
        <div className="servicio__articulo">
          <div className="servicio__img">
            <i className="fas fa-home art-icon" aria-hidden="true"></i>
            <h3 className='art-tit'>Articulo</h3>
          </div>  
          <div className="servicio__texto">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
            <Link to='/contacto' className='servicio__link'>Leer Mas</Link>
          </div>
        </div>

        <div className="servicio__galeria">
            <div className="articulo">
                <div className="articulo__image art1">
                    <i className="fas fa-puzzle-piece art-icon"></i>
                    <h3 className='art-tit'>Articulo</h3>
                </div>
                <div className="texto">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <Link to='/contacto' className='servicio__link'>Contactenos</Link>
                </div>
            </div>
            <div className="articulo">
                <div className="articulo__image art2">
                    <i className="fas fa-solar-panel art-icon"></i>
                    <h3 className='art-tit'>Articulo</h3>
                </div>
                <div className="texto">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <Link to='/contacto' className='servicio__link'>Leer Mas</Link>
                </div>
            </div>
            <div className="articulo">
                <div className="articulo__image art3">
                    <i className="fas fa-cloud art-icon"></i>
                    <h3 className='art-tit'>Articulo</h3>
                </div>
                <div className="texto">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <Link to='/contacto' className='servicio__link'>Contactenos</Link>
                </div>
            </div>
            <div className="articulo">
                <div className="articulo__image art4">
                    <i className="fas fa-hammer art-icon"></i>
                    <h3 className='art-tit'>Articulo</h3>
                </div>
                <div className="texto">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <Link to='/contacto' className='servicio__link'>Leer Mas</Link>
                </div>
            </div>
            <div className="articulo">
                <div className="articulo__image art5">
                    <i className="fas fa-water art-icon"></i>
                    <h3 className='art-tit'>Articulo</h3>
                </div>
                <div className="texto">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <Link to='/contacto' className='servicio__link'>Contactenos</Link>
                </div>
            </div>
            <div className="articulo">
                <div className="articulo__image art6">
                    <i className="fas fa-swimmer art-icon"></i>
                    <h3 className='art-tit'>Articulo</h3>
                </div>
                <div className="texto">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <Link to='/contacto' className='servicio__link'>Leer Mas</Link>
                </div>
            </div>
        </div>
      </section>
      
    </>
  )
}

export default Home