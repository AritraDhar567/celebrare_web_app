import React from 'react';

export default function SearchBar({ search, handleSearch }) {
  return (
    <div className="w-full max-w-lg mx-auto px-4 mb-8">
      <div className="relative">
        <input
          id="search-input"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by author name..."
          className="w-full px-4 py-3 bg-white text-slate-800 border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all placeholder-slate-400"
        />
        {search && (
          <span className="absolute right-4 top-3.5 text-xs text-slate-400 font-medium">
            Filtering
          </span>
        )}
      </div>
    </div>
  );
}
