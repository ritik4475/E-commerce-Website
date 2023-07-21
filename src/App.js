import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Singleprodpage from './components/Singleprodpage';
import Cart from './components/Cart';
import Errorpage from './components/Errorpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/singleproduct/:id' element={<Singleprodpage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<Errorpage />}/>
      </Routes>
    </Router>

    
  )
}

export default App