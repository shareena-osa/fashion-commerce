import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(items);
  };

  const removeFromWishlist = (productId) => {
    let updatedWishlist = wishlistItems.filter((item) => item.id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    loadWishlist(); // Reload wishlist to update UI
  };
  const addToCart = (product) => {
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
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
      {wishlistItems.map((item) => (
        <div key={item.id} className="m-3 p-6 rounded-md shadow-md">
          <img
            src={item.image}
            className="h-65 w-full object-cover"
            alt={item.title}
          />
          <h3 className="mt-2">{item.title}</h3>
          <h3 className="mt-2">{item.rating}</h3>
          <div className="flex justify-between items-center">
            <button
              className="bg-blue-300 text-white p-2 rounded hover:bg-blue-500"
              onClick={addToCart}
            >
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="bg-red-300 text-white p-2 rounded hover:bg-red-500"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
