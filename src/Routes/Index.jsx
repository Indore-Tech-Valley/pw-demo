import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Homepage from '../components/Homepage/Homepage'
import AboutUs from '../components/AboutUs/AboutUs';
import BeautySalonInterface from '../components/BeautySalonInterface/BeautySalonInterface';
import CleaningServiceInterface from '../components/BeautySalonInterface/CleaningServiceInterface';
import ScrollToTop from '../pages/ScrollToTop/ScrollToTop';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import UserBookings from '../components/UserComponents/UserBookings/UserBookings';
import ProfileComponent from '../components/ProfileComponent/ProfileComponent';
import HelpCenter from '../components/HelpCenter/HelpCenter';
import UserRatings from '../components/UserComponents/UserRatings/UserRatings';
import UserAddresses from '../components/UserComponents/UserAddresses/UserAddresses';
import ServiceProviderRegistration from '../components/ServiceComponents/ServiceAuth/ServiceProviderRegistration';
import ServiceDashboard from '../components/ServiceComponents/ServiceDashboard/ServiceDashboard';
import ServiceHeroSection from '../components/ServiceComponents/ServiceHeroSection/ServiceHeroSection';

const Index = () => {
  return (
   <>
   <ScrollToTop />
   <Routes>
    <Route path="/" element={<Homepage />} />
    {/* Add more routes here as needed */}
    <Route path="/about" element={<AboutUs />} />
    <Route path="/bookings" element={<UserBookings />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/profile" element={<ProfileComponent/>} />
    <Route path="/ratings" element={<UserRatings/>} />
    <Route path="/help" element={<HelpCenter/>} />
    <Route path="/addresses" element={<UserAddresses/>} />
    <Route path="/become-service-provider" element={<ServiceHeroSection/>} />
    <Route path="/service-provider-registration" element={<ServiceProviderRegistration/>} />
    <Route path="/service-provider-dashboard" element={<ServiceDashboard/>} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/service/Salon-for-Women" element={<BeautySalonInterface />} />
    <Route path="/service/Home-Cleaning-Services" element={<CleaningServiceInterface />} />
   </Routes>
   </>
  )
}

export default Index