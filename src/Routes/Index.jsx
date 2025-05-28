import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import { Routes,Route } from 'react-router-dom'

const Index = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Homepage />} />
    {/* Add more routes here as needed */}
    {/* <Route path="/about" element={<About />} /> */}
    {/* <Route path="/contact" element={<Contact />} /> */}
   </Routes>
   </>
  )
}

export default Index