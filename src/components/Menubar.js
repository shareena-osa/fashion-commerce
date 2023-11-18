import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
      <button onClick={toggleSidebar} className="p-6 font-bold  ">
        <FontAwesomeIcon icon={faBars} size="2xl" /> {/* FontAwesome icon */}
      </button>

      {/* Sidebar */}
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} 
          fixed  bg-pink-50 rounded-md px-6 cursor-pointer top-0 left-0 p-5 h-full w-64 tracking-widest  bg-white  
          transition-transform duration-300  ease-in-out z-50`}
      >
        {/* Sidebar content */}
        <ul className="flex flex-col p-6 space-y-4 ">
          <li className="hover:scale-90 p-4  hover:text-blue-700">
            <a href="#">Women</a>
          </li>
          <li className="hover:scale-90 p-4  hover:text-blue-700">
            <a href="#">Men</a>
          </li>
          <li className="hover:scale-90 p-4  hover:text-blue-700">
            <a href="#">Kids</a>
          </li>
          <li className="hover:scale-90 p-4  hover:text-blue-700">
            <a href="#">Accessories</a>
          </li>
          <li className="hover:scale-90 p-4  hover:text-blue-700">
            <a href="#">Beauty</a>
          </li>
          <li className="hover:scale-90 p-4  hover:text-blue-700">
            <a href="#">Shoes</a>
          </li>
          <li className="hover:scale-90 p-4  hover:text-blue-700">
            <a href="#">Jewellery</a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
}

export default Menubar;
