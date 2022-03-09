import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Articulo from './pages/Articulo'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/articulo' exact element={<Articulo/>} />
        <Route path='/contacto' exact element={<Contacto/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
