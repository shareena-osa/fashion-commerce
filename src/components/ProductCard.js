import React from "react";
import Rating from "./Rating"; // Make sure this import path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faTag } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ product }) {
  const addToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.some((item) => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist!"); // Simple feedback for demonstration
    } else {
      alert("Item already in Wishlist");
    }
  };
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.some((item) => item.id === product.id)) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to Cart!");
    } else {
      alert("Item already in Cart");
    }
  };

  return (
    <div className="m-6 p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center items-center h-80 overflow-hidden">
        <img
          src={product.image}
          alt="Product Image"
          className="h-full w-full object-fill transition-transform duration-300 hover:scale-90"
        />
      </div>
      <h4 className="mt-2">{product.title}</h4>
      <p className="flex items-center">
        <FontAwesomeIcon icon={faTag} className="mr-2" />
        {product.price}
      </p>
      <Rating rating={product.cc} />
      <div className="flex mt-2">
        <button
          className="flex-1 bg-blue-300 text-white p-2 rounded mr-2 hover:bg-blue-500"
          onClick={addToCart}
        >
          <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
          Add to Cart
        </button>
        <button
          className="flex-1 bg-pink-300 text-white p-2 rounded hover:bg-pink-600 "
          onClick={addToWishlist}
        >
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
