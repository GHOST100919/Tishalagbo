import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home.jsx'
import Navbar from './components/navbar.jsx'
import Products from './pages/Products.jsx'
import Footer from './components/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="Products" element={<Products />} />
      <Route path='footer' element={<Footer/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
