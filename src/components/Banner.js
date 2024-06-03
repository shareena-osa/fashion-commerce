import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div
      className="flex w-full h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/images/shareena123.jpg')" }}
    >
      <div className="absolute  bg-black bg-opacity-50"></div>
      <div className="flex flex-col justify-center p-40 w-1/2 ml-auto backdrop-blur-5 animate-fade-in">
        <h1 className="text-white text-6xl mb-4 custom-font">
          Shareena Unique Collections
        </h1>
        <h1 className="text-white text-5xl pb-4 font-bold mb-3 tracking-wider animate-slide-in-left">
          New Arrivals
        </h1>
        <button className="bg-blue-300 text-white px-6 py-2 rounded hover:bg-purple-500 tracking-wide animate-bounce">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
