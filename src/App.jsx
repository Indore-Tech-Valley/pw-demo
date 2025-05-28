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
        <div className="lg:pt-16 pt-24"> {/* pushes Index below the fixed navbar */}
          <Index />
        </div>
        <Footer className="" />
      </BrowserRouter>
    </>
  );
}

export default App
