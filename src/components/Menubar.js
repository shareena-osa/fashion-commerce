import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { GiClothes } from "react-icons/gi";
import { FaTshirt, FaFemale, FaHatCowboy } from "react-icons/fa";
import { GiAmpleDress, GiWesternHat } from "react-icons/gi";
import { BsHouseDoor, BsFillBagCheckFill } from "react-icons/bs";

function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Close sidebar when Escape key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div>
      {/* Menu Icon */}
      <button onClick={toggleSidebar} className="p-6 font-bold text-2xl">
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar */}
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} 
          fixed bg-gradient-to-r from-indigo-100 to-pink-100 shadow-lg rounded-md px-6 cursor-pointer top-0 left-0 p-5  h-full w-72 transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Icon */}
        <div className="flex justify-end">
          <button onClick={closeSidebar} className="text-2xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        {/* Sidebar content */}
        <ul className="flex flex-col p-6 space-y-4">
          <li
            className="hover:scale-95 p-4 hover:text-blue-700 flex items-center space-x-3"
            onClick={closeSidebar}
          >
            <GiClothes size={20} />
            <div>Saree's</div>
          </li>
          <li
            className="hover:scale-95 p-4 hover:text-blue-700 flex items-center space-x-3"
            onClick={closeSidebar}
          >
            <BsFillBagCheckFill size={20} />
            <div>Kurta sets</div>
          </li>

          <li
            className="hover:scale-95 p-4 hover:text-blue-700 flex items-center space-x-3"
            onClick={closeSidebar}
          >
            <FaFemale size={20} />
            <div>Lehanga choli</div>
          </li>
          <li
            className="hover:scale-95 p-4 hover:text-blue-700 flex items-center space-x-3"
            onClick={closeSidebar}
          >
            <GiAmpleDress size={20} />
            <div>Fancy Saree</div>
          </li>
          <li
            className="hover:scale-95 p-4 hover:text-blue-700 flex items-center space-x-3"
            onClick={closeSidebar}
          >
            <BsHouseDoor size={20} />
            <div>Pattu Saree</div>
          </li>
          <li
            className="hover:scale-95 p-4 hover:text-blue-700 flex items-center space-x-3"
            onClick={closeSidebar}
          >
            <FaHatCowboy size={20} />
            <div>Half Saree</div>
          </li>
          <li
            className="hover:scale-95 p-4 m-2 hover:text-blue-700 flex items-center space-x-3"
            onClick={closeSidebar}
          >
            <GiWesternHat size={20} />
            <div>Western</div>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
}

export default Menubar;
