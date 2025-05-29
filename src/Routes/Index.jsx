import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Homepage from '../components/Homepage/Homepage'
import AboutUs from '../components/AboutUs/AboutUs';
import BeautySalonInterface from '../components/BeautySalonInterface/BeautySalonInterface';
import CleaningServiceInterface from '../components/BeautySalonInterface/CleaningServiceInterface';
import ScrollToTop from '../pages/ScrollToTop/ScrollToTop';

const Index = () => {
  return (
   <>
   <ScrollToTop />
   <Routes>
    <Route path="/" element={<Homepage />} />
    {/* Add more routes here as needed */}
    <Route path="/about" element={<AboutUs />} />
    <Route path="/service/Salon-for-Women" element={<BeautySalonInterface />} />
    <Route path="/service/Home-Cleaning-Services" element={<CleaningServiceInterface />} />
   </Routes>
   </>
  )
}

export default Index