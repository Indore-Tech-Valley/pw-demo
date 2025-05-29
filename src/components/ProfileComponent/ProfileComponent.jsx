import React from 'react';
import { 
  Edit, 
  Calendar, 
  BookOpen, 
  HelpCircle, 
  Star, 
  MapPin, 
  Info, 
  ChevronRight,
  Gift
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const ProfileComponent = () => {
    const navigate = useNavigate();
  const menuItems = [
    // { icon: Calendar, label: 'My Plans', href: '/plans' },
    { icon: BookOpen, label: 'My bookings', href: '/bookings' },
    { icon: HelpCircle, label: 'Help center', href: '/help' },
    { icon: Star, label: 'My rating', href: '/ratings' },
    { icon: MapPin, label: 'Manage addresses', href: '/addresses' },
    { icon: Info, label: 'About UC', href: '/aboutus' }
  ];

  const handleMenuClick = (item) => {
    console.log(`Navigating to ${item.label}: ${item.href}`);
    // In a real app, you would use router navigation here
    alert(`Clicked on ${item.label}`);
  };

  const handleReferClick = () => {
    console.log('Refer now clicked');
    alert('Opening referral program!');
  };

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
    alert('Edit profile clicked!');
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Profile Header */}
      <div className="bg-white p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Verified Customer
            </h2>
            <p className="text-gray-600 text-sm">+91 6265623184</p>
          </div>
          <button 
            onClick={handleEditProfile}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Edit className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-white">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(item.href)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                <IconComponent className="w-5 h-5 text-gray-600" />
                <span className="text-gray-900 font-medium">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          );
        })}
      </div>

      {/* Referral Section */}
      <div className="p-6 mt-6">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-lg p-3 shadow-lg">
              <Gift className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="pr-16">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Refer & earn ₹100
            </h3>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              Get ₹100 when your friend completes their first booking
            </p>
            
            <button
              onClick={handleReferClick}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Refer now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;