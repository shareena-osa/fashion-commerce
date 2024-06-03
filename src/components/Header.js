import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import Menubar from "./Menubar";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faSnowflake,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";

function Header() {
  const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(false);

  const toggleLoginPanel = () => {
    setIsLoginPanelOpen(!isLoginPanelOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-slate-50 shadow-md text-black bg-gradient-to-l from-slate-200 via-blue-100 to-slate-50 ">
      <div className="flex p-4 items-center justify-between tracking-widest">
        <div className="flex-none">
          <Menubar />
        </div>

        <div className="flex-none">
          <Link to="/">
            <BrandLogo />
          </Link>
        </div>

        <div className="flex-grow px-4">
          <Search />
        </div>

        <div className="flex ">
          <Link
            to="/products"
            className="rounded-md p-4 hover:bg-slate-100 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faSnowflake}
              className="text-pink-200 mr-2"
            />
            Products
          </Link>

          <Link
            to="/wishlist"
            className="rounded-md p-4 hover:bg-slate-100 cursor-pointer"
          >
            <FontAwesomeIcon icon={faHeart} className="text-pink-200 mr-2" />
            Wishlist
          </Link>

          <Link
            to="/cart"
            className="rounded-md p-4 hover:bg-slate-100 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="text-pink-200 mr-2"
            />
            Cart
          </Link>

          <button
            onClick={toggleLoginPanel}
            className="rounded-md p-4 hover:bg-slate-100 cursor-pointer   tracking-widest flex items-center justify-center"
          >
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-pink-200 mr-2"
            />
            Login
          </button>
        </div>
        <Login isOpen={isLoginPanelOpen} onClose={toggleLoginPanel} />
      </div>
    </div>
  );
}

export default Header;
