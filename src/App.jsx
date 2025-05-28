import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Index from './Routes/Index'

function App() {

  return (
    <>
     <BrowserRouter>
       <Navbar />
        <Index/>
       <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
