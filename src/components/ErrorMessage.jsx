import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <div id="error-message" className="max-w-md mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-center shadow-sm">
      <div className="text-red-500 mb-2 font-bold text-xl">⚠️</div>
      <p className="text-red-700 font-medium leading-relaxed">
        {message || 'Failed to load photos. Please try again later.'}
      </p>
    </div>
  );
}
