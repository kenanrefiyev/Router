import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products'
import Posts from './pages/Posts';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<SingleProduct />} />
        <Route path='posts' element={<Posts />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App