import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, User, MapPin, Clock, DollarSign, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const ServiceDashboard = () => {
  // Sample booking data
  const [bookings] = useState([
    {
      id: 'BK001',
      service: 'House Cleaning',
      category: 'cleaning',
      customer: 'Sarah Johnson',
      date: '2024-05-30',
      time: '10:00 AM',
      duration: '3 hours',
      price: 120,
      status: 'confirmed',
      address: '123 Oak Street, Downtown',
      phone: '+1-555-0123',
      notes: 'Deep cleaning required'
    },
    {
      id: 'BK002',
      service: 'Hair Cut & Styling',
      category: 'salon',
      customer: 'Emily Chen',
      date: '2024-05-29',
      time: '2:30 PM',
      duration: '2 hours',
      price: 85,
      status: 'completed',
      address: '456 Beauty Ave, Midtown',
      phone: '+1-555-0124',
      notes: 'Bridal styling'
    },
    {
      id: 'BK003',
      service: 'Full Body Massage',
      category: 'spa',
      customer: 'Michael Rodriguez',
      date: '2024-05-31',
      time: '11:00 AM',
      duration: '90 minutes',
      price: 150,
      status: 'pending',
      address: '789 Wellness Blvd, Uptown',
      phone: '+1-555-0125',
      notes: 'Swedish massage preferred'
    },
    {
      id: 'BK004',
      service: 'Electrical Repair',
      category: 'electrician',
      customer: 'David Wilson',
      date: '2024-05-29',
      time: '9:00 AM',
      duration: '2 hours',
      price: 200,
      status: 'completed',
      address: '321 Pine Street, Suburbs',
      phone: '+1-555-0126',
      notes: 'Kitchen outlet installation'
    },
    {
      id: 'BK005',
      service: 'Office Cleaning',
      category: 'cleaning',
      customer: 'Tech Solutions Inc.',
      date: '2024-06-01',
      time: '6:00 PM',
      duration: '4 hours',
      price: 300,
      status: 'confirmed',
      address: '555 Business Park, Commercial',
      phone: '+1-555-0127',
      notes: 'Weekly recurring service'
    },
    {
      id: 'BK006',
      service: 'Manicure & Pedicure',
      category: 'salon',
      customer: 'Lisa Anderson',
      date: '2024-05-30',
      time: '3:00 PM',
      duration: '1.5 hours',
      price: 65,
      status: 'confirmed',
      address: '888 Glamour Street, Fashion District',
      phone: '+1-555-0128',
      notes: 'Gel polish requested'
    },
    {
      id: 'BK007',
      service: 'Facial Treatment',
      category: 'spa',
      customer: 'Jennifer Brown',
      date: '2024-06-02',
      time: '1:00 PM',
      duration: '75 minutes',
      price: 110,
      status: 'pending',
      address: '222 Serenity Lane, Wellness Center',
      phone: '+1-555-0129',
      notes: 'Anti-aging treatment'
    },
    {
      id: 'BK008',
      service: 'Wiring Installation',
      category: 'electrician',
      customer: 'Home Builders LLC',
      date: '2024-06-03',
      time: '8:00 AM',
      duration: '6 hours',
      price: 450,
      status: 'confirmed',
      address: '777 Construction Ave, New Development',
      phone: '+1-555-0130',
      notes: 'New home electrical setup'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Filter and search logic
  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      const matchesSearch = 
        booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filterCategory === 'all' || booking.category === filterCategory;
      const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [bookings, searchTerm, filterCategory, filterStatus]);

  // Statistics
  const stats = useMemo(() => {
    const total = bookings.length;
    const confirmed = bookings.filter(b => b.status === 'confirmed').length;
    const completed = bookings.filter(b => b.status === 'completed').length;
    const pending = bookings.filter(b => b.status === 'pending').length;
    const totalRevenue = bookings.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.price, 0);
    
    return { total, confirmed, completed, pending, totalRevenue };
  }, [bookings]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'cleaning':
        return 'bg-purple-100 text-purple-800';
      case 'salon':
        return 'bg-pink-100 text-pink-800';
      case 'spa':
        return 'bg-teal-100 text-teal-800';
      case 'electrician':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Bookings Dashboard</h1>
          <p className="text-gray-600">Comprehensive booking management for all services</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.confirmed}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by customer, service, or booking ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="cleaning">Cleaning</option>
                <option value="salon">Salon</option>
                <option value="spa">Spa</option>
                <option value="electrician">Electrician</option>
              </select>
              
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Bookings ({filteredBookings.length})
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Schedule
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <div className="text-sm font-medium text-gray-900">
                          {booking.service}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {booking.id}
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 w-fit ${getCategoryColor(booking.category)}`}>
                          {booking.category}
                        </span>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {booking.customer}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.phone}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {booking.address}
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <div>
                          <div>{booking.date}</div>
                          <div className="flex items-center text-gray-500 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {booking.time} ({booking.duration})
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm font-medium text-gray-900">
                        <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                        {booking.price}
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(booking.status)}
                        <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                      {booking.notes && (
                        <div className="text-xs text-gray-500 mt-1">
                          {booking.notes}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No bookings found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;