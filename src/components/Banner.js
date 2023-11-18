import React from "react";

function Banner() {
  return (
    // Added gradient background to the outer div
    <div className="flex w-full bg-gradient-to-r from-pink-100 to-blue-100 py-16">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start p-30 pl-64 w-1/2">
        <div className="text-gray-800 text-2xl mb-2 tracking-wide ">
          Shareena Unique Collections
        </div>
        <div className="text-gray-900 text-5xl font-bold mb-3 tracking-wider">
          New Arrivals
        </div>
        <button className="bg-blue-300 text-white px-6 py-2 rounded hover:bg-purple-500 tracking-wide">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex justify-center pr-56">
        <img
          src="/images/shareena1-removebg-preview.png"
          alt="Banner"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
