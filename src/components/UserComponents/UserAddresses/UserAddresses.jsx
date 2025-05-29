import React, { useState } from 'react';

const UserAddresses = () => {
  const [addresses, setAddresses] = useState([
    { label: "Home", detail: "123 A Block, Indore, MP - 452001" },
    { label: "Work", detail: "XYZ Tower, Vijay Nagar, Indore, MP - 452010" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  const [newDetail, setNewDetail] = useState('');

  const handleAddAddress = () => {
    if (newLabel && newDetail) {
      setAddresses([...addresses, { label: newLabel, detail: newDetail }]);
      setNewLabel('');
      setNewDetail('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">Manage Addresses</h1>

      {addresses.map((address, i) => (
        <div key={i} className="border p-4 rounded-lg mb-3">
          <h2 className="font-semibold">{address.label}</h2>
          <p className="text-gray-600 text-sm">{address.detail}</p>
          <button className="mt-2 text-indigo-600 text-sm font-medium hover:underline">Edit</button>
        </div>
      ))}

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Add New Address
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Address</h2>

            <label className="block text-sm font-medium mb-1">Label (e.g. Home, Work)</label>
            <input
              type="text"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-3"
              placeholder="Enter label"
            />

            <label className="block text-sm font-medium mb-1">Address Detail</label>
            <textarea
              value={newDetail}
              onChange={(e) => setNewDetail(e.target.value)}
              rows="3"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter full address"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAddress}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAddresses;
