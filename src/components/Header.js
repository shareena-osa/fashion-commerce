import React from "react";
import { Link } from "react-router-dom"; // Import Link
import BrandLogo from "./BrandLogo";
import Menubar from "./Menubar";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faSnowflake,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="bg-slate-50 shadow-md text-black bg-gradient-to-l from-slate-200 via-blue-100  to-slate-50">
      <div className="flex p-4 space-x-8 items-center justify-between tracking-widest">
        <div className="flex-none">
          <Menubar />
        </div>
        <div className="flex-none">
          <Link to="/">
            <BrandLogo />
          </Link>
        </div>
        <div className="flex-grow basis-1/3 ">
          <Search />
        </div>
        <div className="">
          <Link
            to="/products"
            className="rounded-md p-4 px-6 hover:bg-slate-100 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faSnowflake}
              className="text-pink-200 mr-3 "
            />
            Products
          </Link>

          <Link
            to="/wishlist"
            className="rounded-md p-4 px-6 hover:bg-slate-100 cursor-pointer"
          >
            <FontAwesomeIcon icon={faHeart} className="text-pink-200 mr-3 " />
            Wishlist
          </Link>
          <Link
            to="/cart"
            className="rounded-md p-4 px-6 hover:bg-slate-100 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="text-pink-200 mr-3 "
            />
            Cart
          </Link>
          {/* Assuming Login is not a link for now */}
          <span className="rounded-md p-4 px-6 hover:bg-slate-100 cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="text-pink-200 mr-3 " />
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
