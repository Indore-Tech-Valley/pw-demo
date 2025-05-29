import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, DollarSign, CheckCircle, XCircle, AlertCircle, Edit3, Trash2, Plus } from 'lucide-react';

const UserBookings = () => {
  // Sample user bookings data (showing only user's bookings)
  const [userBookings] = useState([
    {
      id: 'BK001',
      service: 'House Deep Cleaning',
      category: 'cleaning',
      provider: 'CleanPro Services',
      date: '2024-06-02',
      time: '10:00 AM',
      duration: '3 hours',
      price: 120,
      status: 'confirmed',
      address: '123 Oak Street, Downtown',
      providerPhone: '+1-555-0199',
      notes: 'Deep cleaning for kitchen and bathrooms',
      image: '/api/placeholder/60/60'
    },
    {
      id: 'BK002',
      service: 'Hair Cut',
      category: 'salon',
      provider: 'Bella Hair Studio',
      date: '2024-06-05',
      time: '2:30 PM',
      duration: '2.5 hours',
      price: 95,
      status: 'confirmed',
      address: '456 Beauty Ave, Midtown',
      providerPhone: '+1-555-0188',
      notes: 'Blonde highlights with trim',
      image: '/api/placeholder/60/60'
    },
    {
      id: 'BK003',
      service: 'Swedish Massage',
      category: 'spa',
      provider: 'Zen Wellness Spa',
      date: '2024-05-30',
      time: '11:00 AM',
      duration: '90 minutes',
      price: 150,
      status: 'completed',
      address: '789 Wellness Blvd, Uptown',
      providerPhone: '+1-555-0177',
      notes: 'Relaxing full body massage',
      image: '/api/placeholder/60/60'
    },
    {
      id: 'BK004',
      service: 'Home Electrical Inspection',
      category: 'electrician',
      provider: 'PowerFix Electrical',
      date: '2024-06-08',
      time: '9:00 AM',
      duration: '2 hours',
      price: 180,
      status: 'pending',
      address: '321 Pine Street, Suburbs',
      providerPhone: '+1-555-0166',
      notes: 'Annual electrical safety inspection',
      image: '/api/placeholder/60/60'
    },
    {
      id: 'BK005',
      service: 'Apartment Cleaning',
      category: 'cleaning',
      provider: 'Sparkle Clean Co.',
      date: '2024-05-28',
      time: '3:00 PM',
      duration: '2 hours',
      price: 80,
      status: 'completed',
      address: '555 Urban Ave, City Center',
      providerPhone: '+1-555-0155',
      notes: 'Weekly apartment maintenance',
      image: '/api/placeholder/60/60'
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'cleaning':
        return '🧽';
      case 'salon':
        return '💇‍♀️';
      case 'spa':
        return '🧘‍♀️';
      case 'electrician':
        return '⚡';
      default:
        return '🔧';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isUpcoming = (dateString) => {
    const bookingDate = new Date(dateString);
    const today = new Date();
    return bookingDate >= today;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
            <p className="text-gray-600">Manage your upcoming and past service appointments</p>
          </div>
          <button className="hidden md:flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            New Booking
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{userBookings.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">
                {userBookings.filter(b => isUpcoming(b.date) && b.status !== 'completed').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center">
            <div className="bg-purple-100 p-2 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">
                ${userBookings.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.price, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {userBookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-2xl">{getCategoryIcon(booking.category)}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{booking.service}</h3>
                      <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1 capitalize">{booking.status}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-1">{booking.provider}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(booking.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {booking.time}
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400">•</span>
                        <span className="ml-1">{booking.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right ">
                  <div className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">${booking.price}</div>
                  {/* <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div> */}
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{booking.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{booking.providerPhone}</span>
                  </div>
                </div>
                
                {booking.notes && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Notes:</span> {booking.notes}
                    </p>
                  </div>
                )}
              </div>
              
              {booking.status === 'confirmed' && isUpcoming(booking.date) && (
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      View Details
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                      Reschedule
                    </button>
                  </div>
                </div>
              )}
              
              {booking.status === 'completed' && (
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Book Again
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no bookings) */}
      {userBookings.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
          <p className="text-gray-600 mb-6">Start by booking your first service appointment</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Browse Services
          </button>
        </div>
      )}
    </div>
  );
};

export default UserBookings;