import React from "react";
import { useSpring, animated } from "react-spring";

function Banner() {
  const textAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { duration: 500 },
  });

  return (
    <div className="flex w-full bg-gradient-to-r from-pink-100 to-blue-100 py-16 h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start p-40 pl-64 w-1/2">
        <animated.div
          className="text-gray-800 text-3xl pb-4 mb-2 tracking-wide"
          style={textAnimation}
        >
          Shareena Unique Collections
        </animated.div>
        <animated.div
          className="text-gray-900 text-5xl pb-4 font-bold mb-3 tracking-wider"
          style={textAnimation}
        >
          New Arrivals
        </animated.div>
        <button className="bg-blue-300 text-white px-6 py-2 rounded hover:bg-purple-500 tracking-wide">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center">
        <img
          src="/images/White2.png"
          alt="Banner"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
