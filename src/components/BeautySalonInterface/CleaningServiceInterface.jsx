import React, { useState } from 'react';
import { Star, Plus, Minus, CheckCircle } from 'lucide-react';

const CleaningServiceInterface = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Deep house cleaning', price: 1299, quantity: 1 }
  ]);

  const services = [
    { id: 1, name: 'Packages', icon: '📦', active: true },
    { id: 2, name: 'House cleaning', icon: '🏠', active: false },
    { id: 3, name: 'Kitchen deep clean', icon: '🍳', active: false },
    { id: 4, name: 'Bathroom cleaning', icon: '🚿', active: false },
    { id: 5, name: 'Carpet cleaning', icon: '🛋️', active: false },
    { id: 6, name: 'Window cleaning', icon: '🪟', active: false },
    { id: 7, name: 'Office cleaning', icon: '🏢', active: false },
    { id: 8, name: 'Move-in/out clean', icon: '📦', active: false },
    { id: 9, name: 'Disinfection', icon: '🧽', active: false }
  ];

  const packages = [
    {
      id: 1,
      name: 'Complete home cleaning (standard)',
      price: 1499,
      duration: 180,
      rating: 4.82,
      reviews: '2.1M',
      services: [
        'House cleaning: All rooms, kitchen, bathrooms - Standard equipment',
        'Additional services: Dusting furniture, mopping floors, vacuum cleaning'
      ]
    },
    {
      id: 2,
      name: 'Complete home cleaning (premium)',
      price: 1899,
      duration: 240,
      rating: 4.89,
      reviews: '1.8M',
      services: [
        'House cleaning: All rooms, kitchen, bathrooms - Premium equipment and eco-friendly products',
        'Additional services: Deep carpet cleaning, window cleaning, appliance cleaning'
      ]
    }
  ];

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const addToCart = (packageItem) => {
    setCartItems(prev => [
      ...prev,
      { id: Date.now(), name: packageItem.name, price: packageItem.price, quantity: 1 }
    ]);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountThreshold = 2500;
  const discountAmount = 150;
  const needToSpend = Math.max(0, discountThreshold - cartTotal);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar - Services */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-4">Select a service</h3>
        <div className="space-y-2">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-colors ${
                service.active
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="text-2xl mb-1">{service.icon}</div>
              <span className="text-xs text-center font-medium">{service.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Packages */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Packages</h1>
        
        <div className="space-y-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      📦 PACKAGE
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                      <span className="font-medium">{pkg.rating}</span>
                      <span className="text-gray-500 text-sm">({pkg.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-bold text-lg">₹{pkg.price}</span>
                    <span className="text-gray-500">• {pkg.duration} mins</span>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(pkg)}
                  className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Add
                </button>
              </div>
              
              <div className="space-y-2 mb-4">
                {pkg.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
              
              <button className="text-blue-600 text-sm font-medium hover:underline">
                Edit your package
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Cart */}
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Cart</h2>
        
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex-1">
                <span className="font-medium text-gray-900">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <span className="font-medium w-12 text-right">₹{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {needToSpend > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
            <div className="flex items-center gap-2 text-green-700">
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">💎</span>
              </div>
              <span className="text-sm font-medium">
                Add ₹{needToSpend} more to get ₹{discountAmount} discount
              </span>
            </div>
          </div>
        )}

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium mb-6 hover:bg-blue-700 transition-colors">
          ₹{cartTotal} View Cart
        </button>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">%</span>
            </div>
            <span className="font-semibold text-green-800">Get ₹150 off</span>
          </div>
          <p className="text-sm text-green-700">On orders above ₹2500</p>
        </div>

        <button className="text-blue-600 text-sm font-medium mb-6 hover:underline">
          View More Offers ⌄
        </button>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">CleanCare Promise</h3>
              <div className="text-xs text-gray-500">QUALITY ASSURED</div>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">4.5+ Rated Cleaners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Professional Equipment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Eco-friendly Products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningServiceInterface;