import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, MapPin, Clock, DollarSign, CheckCircle, XCircle, AlertCircle, Bell, Settings, TrendingUp, Star, Phone, FileText, Filter, Menu, X } from 'lucide-react';

const ServiceDashboard = () => {
  const [bookings] = useState([
    {
      id: 'BK001',
      service: 'Deep House Cleaning',
      category: 'cleaning',
      customer: 'Sarah Johnson',
      date: '2024-05-30',
      time: '10:00 AM',
      duration: '3 hours',
      price: 120,
      status: 'confirmed',
      address: '123 Oak Street, Downtown',
      phone: '+1-555-0123',
      notes: 'Deep cleaning required, 3-bedroom house',
      customerRating: 4.9,
      urgent: false
    },
    {
      id: 'BK002',
      service: 'Office Cleaning',
      category: 'cleaning',
      customer: 'Tech Solutions Inc.',
      date: '2024-05-29',
      time: '6:00 PM',
      duration: '4 hours',
      price: 300,
      status: 'completed',
      address: '555 Business Park, Commercial',
      phone: '+1-555-0127',
      notes: 'Weekly recurring service - 5th floor',
      customerRating: 5.0,
      urgent: false
    },
    {
      id: 'BK003',
      service: 'Move-in Cleaning',
      category: 'cleaning',
      customer: 'Michael Rodriguez',
      date: '2024-05-31',
      time: '11:00 AM',
      duration: '5 hours',
      price: 250,
      status: 'pending',
      address: '789 Wellness Blvd, Uptown',
      phone: '+1-555-0125',
      notes: 'New apartment, needs thorough cleaning',
      customerRating: null,
      urgent: true
    },
    {
      id: 'BK004',
      service: 'Post-Party Cleanup',
      category: 'cleaning',
      customer: 'Emma Wilson',
      date: '2024-06-01',
      time: '9:00 AM',
      duration: '3 hours',
      price: 180,
      status: 'confirmed',
      address: '321 Pine Street, Suburbs',
      phone: '+1-555-0126',
      notes: 'Large event cleanup required',
      customerRating: 4.7,
      urgent: false
    },
    {
      id: 'BK005',
      service: 'Carpet Deep Clean',
      category: 'cleaning',
      customer: 'David Lee',
      date: '2024-06-02',
      time: '2:00 PM',
      duration: '2 hours',
      price: 150,
      status: 'confirmed',
      address: '888 Maple Avenue, Residential',
      phone: '+1-555-0128',
      notes: 'Pet stains need special attention',
      customerRating: 4.6,
      urgent: false
    },
    {
      id: 'BK006',
      service: 'Kitchen Deep Clean',
      category: 'cleaning',
      customer: 'Restaurant Plus',
      date: '2024-06-03',
      time: '11:00 PM',
      duration: '6 hours',
      price: 400,
      status: 'pending',
      address: '222 Food Court, Mall District',
      phone: '+1-555-0129',
      notes: 'Commercial kitchen, after hours only',
      customerRating: null,
      urgent: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      const matchesSearch = booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || booking.category === filterCategory;
      const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [bookings, searchTerm, filterCategory, filterStatus]);

  const stats = useMemo(() => {
    const total = bookings.length;
    const confirmed = bookings.filter(b => b.status === 'confirmed').length;
    const completed = bookings.filter(b => b.status === 'completed').length;
    const pending = bookings.filter(b => b.status === 'pending').length;
    const totalRevenue = bookings.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.price, 0);
    const avgRating = bookings.filter(b => b.customerRating).reduce((sum, b) => sum + b.customerRating, 0) / bookings.filter(b => b.customerRating).length;
    return { total, confirmed, completed, pending, totalRevenue, avgRating: avgRating.toFixed(1) };
  }, [bookings]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      default: return <XCircle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white';
      case 'completed': return 'bg-gradient-to-r from-blue-400 to-blue-500 text-white';
      case 'pending': return 'bg-gradient-to-r from-amber-400 to-amber-500 text-white';
      default: return 'bg-gradient-to-r from-red-400 to-red-500 text-white';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'cleaning': return 'bg-gradient-to-r from-purple-400 to-purple-500 text-white';
      case 'salon': return 'bg-gradient-to-r from-pink-400 to-pink-500 text-white';
      case 'spa': return 'bg-gradient-to-r from-teal-400 to-teal-500 text-white';
      case 'electrician': return 'bg-gradient-to-r from-orange-400 to-orange-500 text-white';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  const StatCard = ({ stat, index }) => (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6">
        <div className="flex flex-col items-center justify-between mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
            {stat.icon}
          </div>
          <div className=" mt-2">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
            <p className="text-3xl text-center font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {stat.value}
            </p>
          </div>
        </div>
        {/* <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${Math.min(100, (stat.value / Math.max(...Object.values(stats))) * 100)}%` }}
          />
        </div> */}
      </div>
    </div>
  );

  const BookingCard = ({ booking }) => (
    <div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer"
      onClick={() => setSelectedBooking(booking)}
    >
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                {booking.service.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {booking.service}
                </h3>
                <p className="text-sm text-gray-600 font-medium">{booking.customer}</p>
              </div>
              {booking.urgent && (
                <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full animate-pulse">
                  URGENT
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span>{booking.date} at {booking.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-500" />
                <span>{booking.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="truncate">{booking.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>{booking.phone}</span>
              </div>
            </div>

            {booking.customerRating && (
              <div className="flex items-center gap-2 mt-3">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">{booking.customerRating}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 items-start lg:items-end">
            <div className="flex gap-2 flex-wrap">
              <span className={`text-xs px-3 py-1 rounded-full font-medium shadow-md ${getCategoryColor(booking.category)}`}>
                {booking.category}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 shadow-md ${getStatusColor(booking.status)}`}>
                {getStatusIcon(booking.status)} 
                {booking.status}
              </span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ${booking.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Service Dashboard
                </h1>
                <p className="text-sm text-gray-600">Manage your bookings</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all duration-200">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
          {[
            { label: 'Total Bookings', value: stats.total, icon: <Calendar className="h-6 w-6" /> },
            { label: 'Confirmed', value: stats.confirmed, icon: <CheckCircle className="h-6 w-6" /> },
            { label: 'Completed', value: stats.completed, icon: <TrendingUp className="h-6 w-6" /> },
            { label: 'Pending', value: stats.pending, icon: <AlertCircle className="h-6 w-6" /> },
            { label: 'Revenue', value: `$${stats.totalRevenue}`, icon: <DollarSign className="h-6 w-6" /> },
            { label: 'Avg Rating', value: stats.avgRating, icon: <Star className="h-6 w-6" /> }
          ].map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by customer, service, or booking ID..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/70"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 min-w-[140px]"
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
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 min-w-[120px]"
              >
                <option value="all">All Statuses</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bookings Grid */}
        <div className="grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Recent Bookings ({filteredBookings.length})
            </h2>
          </div>
          
          <div className="grid gap-4">
            {filteredBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Booking Detail Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Booking Details</h3>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                  {selectedBooking.service.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{selectedBooking.service}</h4>
                  <p className="text-gray-600">{selectedBooking.id}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Customer</label>
                    <p className="text-gray-900 font-medium">{selectedBooking.customer}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Date & Time</label>
                    <p className="text-gray-900">{selectedBooking.date} at {selectedBooking.time}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Duration</label>
                    <p className="text-gray-900">{selectedBooking.duration}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Price</label>
                    <p className="text-2xl font-bold text-green-600">${selectedBooking.price}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Address</label>
                    <p className="text-gray-900">{selectedBooking.address}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-gray-900">{selectedBooking.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                      {getStatusIcon(selectedBooking.status)}
                      {selectedBooking.status}
                    </span>
                  </div>
                  {selectedBooking.customerRating && (
                    <div>
                      <label className="text-sm font-medium text-gray-700">Rating</label>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="font-medium">{selectedBooking.customerRating}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Notes</label>
                <p className="text-gray-900 bg-gray-50 rounded-xl p-4 mt-2">{selectedBooking.notes}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDashboard;