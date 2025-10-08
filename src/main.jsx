import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Products from './pages/Products.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Products" element={<Products />} />
      <Route path='/Footer' element={<Footer/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
