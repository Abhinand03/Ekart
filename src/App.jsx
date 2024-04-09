import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Hrader from './components/Hrader';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Hrader/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Details/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wish' element={<Wishlist/>}/>
      <Route path='/*' element={<Home/>}/>



    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
