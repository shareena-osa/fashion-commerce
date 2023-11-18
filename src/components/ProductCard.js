import React from "react";
import Rating from "./Rating"; // Make sure this import path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faTag } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ product }) {
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
      <Rating rating={product.rating} />
      <div className="flex mt-2">
        <button className="flex-1 bg-blue-300 text-white p-2 rounded mr-2 hover:bg-blue-500">
          <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
          Add to Cart
        </button>
        <button className="flex-1 bg-pink-300 text-white p-2 rounded hover:bg-pink-600">
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
