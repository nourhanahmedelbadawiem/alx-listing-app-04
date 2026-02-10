import React, { useState } from "react";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const accommodationTypes = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Beachfront",
    "Apartment",
    "Villa"
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Top Section: Logo, Search, Auth Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">StayEase</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 w-full md:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Sign In / Sign Up Buttons */}
          <div className="flex gap-2">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Sign in
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {accommodationTypes.map((type) => (
            <button
              key={type}
              className="px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
