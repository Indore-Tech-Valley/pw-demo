    import React, { useState } from 'react';
import { Star, Plus, Minus, CheckCircle } from 'lucide-react';

const BeautySalonInterface = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Full legs waxing', price: 629, quantity: 1 }
  ]);

  const services = [
    { id: 1, name: 'Packages', icon: '📦', active: true },
    { id: 2, name: 'Waxing', icon: '🪒', active: false },
    { id: 3, name: 'Threading & face waxing', icon: '✨', active: false },
    { id: 4, name: 'Cleanup', icon: '🧼', active: false },
    { id: 5, name: 'Ayurvedic facial', icon: '🌿', active: false },
    { id: 6, name: 'Facial', icon: '💆‍♀️', active: false },
    { id: 7, name: 'Korean facial', icon: '🌸', active: false },
    { id: 8, name: 'Pedicure & manicure', icon: '💅', active: false },
    { id: 9, name: 'Hair, bleach & detan', icon: '💇‍♀️', active: false }
  ];

  const packages = [
    {
      id: 1,
      name: 'Complete waxing (tin)',
      price: 1347,
      duration: 60,
      rating: 4.85,
      reviews: '3.7M',
      services: [
        'Waxing: Full arms (including underarms) - RICA, Full legs - RICA',
        'Facial hair removal: Upper lip - Threading'
      ]
    },
    {
      id: 2,
      name: 'Complete waxing (roll-on)',
      price: 1387,
      duration: 60,
      rating: 4.86,
      reviews: '3.3M',
      services: [
        'Waxing: Full arms (including underarms) - RICA roll-on, Full legs - RICA roll-on',
        'Facial hair removal: Upper lip - Threading'
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

  // State variables required for modal
const [selectedPackage, setSelectedPackage] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

// Function to open modal with package details
const openPackageModal = (pkg) => {
  setSelectedPackage(pkg);
  setIsModalOpen(true);
};

// Function to close modal
const closeModal = () => {
  setIsModalOpen(false);
  setSelectedPackage(null);
};

const addToCartFromModal = (packageItem) => {
  setCartItems(prev => [
    ...prev,
    { id: Date.now(), name: packageItem.name, price: packageItem.price, quantity: 1 }
  ]);
  closeModal();
};
  // const addToCart = (packageItem) => {
  //   setCartItems(prev => [
  //     ...prev,
  //     { id: Date.now(), name: packageItem.name, price: packageItem.price, quantity: 1 }
  //   ]);
  // };

  // Function to add package to cart from modal



  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountThreshold = 2000;
  const discountAmount = 100;
  const needToSpend = Math.max(0, discountThreshold - cartTotal);

  return (
    <div className='p-6 md:px-12 w-full'>
    <div className="flex min-h-screen bg-gray-50 max-w-7xl mx-auto">
      {/* Left Sidebar - Services */}
      <div className="w-36 md:w-64 bg-white border-r border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-4">Select a service</h3>
        <div className="space-y-2">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-colors ${
                service.active
                  ? 'bg-teal-50 text-teal-600 border border-teal-200'
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
      <div className="flex-1 p-2 md:p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Packages</h1>
        
        <div className="space-y-6">
          {packages.map((pkg) => (
            <div key={pkg.id}
  className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
  onClick={() => openPackageModal(pkg)}
             >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded">
                      📦 PACKAGE
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-purple-500 text-purple-500" />
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
  onClick={(e) => {
    e.stopPropagation(); // Prevents modal from opening
    addToCart(pkg);
  }}
  className="px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
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
              
              <button className="text-purple-600 text-sm font-medium hover:underline">
                Edit your package
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Cart */}
      <div className="hidden md:block w-80 bg-white border-l border-gray-200 p-6">
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

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium mb-6 hover:bg-purple-700 transition-colors">
          ₹{cartTotal} View Cart
        </button>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">%</span>
            </div>
            <span className="font-semibold text-green-800">Get ₹100 off</span>
          </div>
          <p className="text-sm text-green-700">On orders above ₹2000</p>
        </div>

        <button className="text-purple-600 text-sm font-medium mb-6 hover:underline">
          View More Offers ⌄
        </button>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">UC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">UC Promise</h3>
              <div className="text-xs text-gray-500">QUALITY ASSURED</div>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">4.5+ Rated Beauticians</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Luxury Salon Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Premium Branded Products</span>
            </div>
          </div>
        </div>
      </div>
      {/* Package Details Modal */}
{isModalOpen && selectedPackage && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Package Details</h2>
          <button
            onClick={closeModal}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Package Info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded">
              📦 PACKAGE
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{selectedPackage.name}</h3>
          
          {/* Rating and Reviews */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-purple-500 text-purple-500" />
              <span className="font-semibold text-lg">{selectedPackage.rating}</span>
              <span className="text-gray-500">({selectedPackage.reviews} reviews)</span>
            </div>
          </div>

          {/* Price and Duration */}
          <div className="flex items-center gap-6 mb-6">
            <div className="text-3xl font-bold text-purple-600">₹{selectedPackage.price}</div>
            <div className="text-gray-500">
              <span className="font-medium">{selectedPackage.duration} mins</span>
            </div>
          </div>
        </div>

        {/* Services Included */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Services Included:</h4>
          <div className="space-y-3">
            {selectedPackage.services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* UC Promise Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">UC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">UC Promise</h4>
              <div className="text-xs text-gray-500">QUALITY ASSURED</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-700">4.5+ Rated Beauticians</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-700">Luxury Salon Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-700">Premium Branded Products</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={closeModal}
            className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => addToCartFromModal(selectedPackage)}
            className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Add to Cart - ₹{selectedPackage.price}
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
    </div>
  );
};

export default BeautySalonInterface;