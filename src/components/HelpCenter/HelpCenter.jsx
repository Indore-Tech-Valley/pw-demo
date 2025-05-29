import React from 'react';

const HelpCenter = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Help Center</h1>
      <p className="text-gray-600">
        Browse through our FAQs or contact support.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold text-lg">Popular Questions</h2>
        <ul className="list-disc ml-5 text-sm mt-2">
          <li>How do I cancel a booking?</li>
          <li>How can I reschedule my service?</li>
          <li>Where can I see my invoices?</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold">Need further help?</h2>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
