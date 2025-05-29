import React, { useState } from 'react';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, Clock, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Deep House Cleaning',
      category: 'Home Cleaning',
      price: 1899,
      originalPrice: 2499,
      quantity: 1,
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/431009190/CR/JZ/FB/37108416/professional-house-cleaning-services.jpg',
      duration: '3-4 hours',
      rating: 4.8,
      description: 'Complete deep cleaning of 2BHK apartment'
    },
    {
      id: 2,
      name: 'Bathroom Plumbing Repair',
      category: 'Plumbing',
      price: 899,
      originalPrice: 1299,
      quantity: 1,
      image: 'https://www.uniqueheatingandcooling.com/wp-content/uploads/2025/04/bathroom-plumbing.jpg',
      duration: '1-2 hours',
      rating: 4.7,
      description: 'Toilet repair and pipe fixing'
    },
    {
      id: 3,
      name: 'Women\'s Hair Cut & Styling',
      category: 'Beauty & Salon',
      price: 599,
      originalPrice: 899,
      quantity: 2,
      image: 'https://www.styleseat.com/blog/wp-content/uploads/2021/06/pasted-image-0-1.jpg',
      duration: '45 mins',
      rating: 4.9,
      description: 'Professional hair cut with styling'
    },
    {
      id: 4,
      name: 'AC Service & Repair',
      category: 'Appliance Repair',
      price: 1299,
      originalPrice: 1799,
      quantity: 1,
      image: 'data:image/jpeg;base64,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',
      duration: '2-3 hours',
      rating: 4.6,
      description: 'Complete AC servicing and gas refill'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    const promoCodes = {
      'FIRST20': { discount: 20, type: 'percentage', description: 'First time user discount' },
      'SAVE500': { discount: 500, type: 'fixed', description: '₹500 off on orders above ₹2000' },
      'WEEKEND15': { discount: 15, type: 'percentage', description: 'Weekend special offer' }
    };

    if (promoCodes[promoCode.toUpperCase()]) {
      setAppliedPromo({
        code: promoCode.toUpperCase(),
        ...promoCodes[promoCode.toUpperCase()]
      });
    } else {
      alert('Invalid promo code!');
    }
    setPromoCode('');
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const savedAmount = originalTotal - subtotal;

  let promoDiscount = 0;
  if (appliedPromo) {
    promoDiscount = appliedPromo.type === 'percentage' 
      ? (subtotal * appliedPromo.discount) / 100
      : appliedPromo.discount;
  }

  const platformFee = 29;
  const total = subtotal - promoDiscount + platformFee;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any services yet</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Browse Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
              <p className="text-gray-600">{totalItems} service{totalItems > 1 ? 's' : ''} selected</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Savings</p>
              <p className="text-2xl font-bold text-green-600">₹{savedAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start gap-4">
                  {/* Service Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        
                        {/* Rating and Duration */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{item.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 line-through">₹{item.originalPrice.toLocaleString()}</span>
                        <span className="text-sm text-green-600 font-medium">
                          {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Apply Promo Code</h3>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={applyPromoCode}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply
                </button>
              </div>

              {appliedPromo && (
                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">{appliedPromo.code}</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-green-600 hover:text-green-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Popular Codes */}
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Popular Codes:</p>
                <div className="space-y-1">
                  <button 
                    onClick={() => setPromoCode('FIRST20')}
                    className="block w-full text-left text-sm text-blue-600 hover:text-blue-800 py-1"
                  >
                    FIRST20 - 20% off for new users
                  </button>
                  <button 
                    onClick={() => setPromoCode('SAVE500')}
                    className="block w-full text-left text-sm text-blue-600 hover:text-blue-800 py-1"
                  >
                    SAVE500 - ₹500 off on orders above ₹2000
                  </button>
                </div>
              </div>
            </div>

            {/* Schedule Service */}
            {/* <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Schedule Service</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Choose time slot</option>
                    <option value="09:00">09:00 AM - 12:00 PM</option>
                    <option value="12:00">12:00 PM - 03:00 PM</option>
                    <option value="15:00">03:00 PM - 06:00 PM</option>
                    <option value="18:00">06:00 PM - 09:00 PM</option>
                  </select>
                </div>
              </div>
            </div> */}

            {/* Bill Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Bill Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{savedAmount.toLocaleString()}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Promo ({appliedPromo.code})</span>
                    <span>-₹{promoDiscount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
            onClick={()=> navigate('/checkout')}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Service Location */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Service Location</span>
              </div>
              <p className="text-sm text-blue-700">
                A-123, Sector 15, Noida, UP 201301
              </p>
              <button className="text-blue-600 text-sm hover:underline mt-1">
                Change Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;