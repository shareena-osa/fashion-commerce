import React from "react";

// Assuming Rating is a separate component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const sareeProducts = [
  // Replace with your actual product data
  {
    id: 11,
    image: "/images/saree3.jpg",
    title: " Gorgeous Saree ",
    price: "Rs. 10000",
    rating: 4,
  },
  {
    id: 12,
    image: "/images/saree2.jpg",
    title: "Gorgeous Saree",
    price: "Rs. 1500",
    rating: 5,
  },
  {
    id: 13,
    image: "/images/saree11.jpg",
    title: "Gorgeous Saree",
    price: "Rs. 2500",
    rating: 5,
  },
  {
    id: 15,
    image: "/images/bhabhi02.JPG",
    title: "Gorgeous Saree",
    price: "Rs. 2500",
    rating: 5,
  },
  {
    id: 14,
    image: "/images/saree4.jpg",
    title: "Gorgeous Saree",
    price: "Rs. 900",
    rating: 5,
  },
  {
    id: 16,
    image: "/images/ritu1.jpg",
    title: "Gorgeous Saree",
    price: "Rs. 1900",
    rating: 5,
  },
  {
    id: 17,
    image: "/images/kri1.png",
    title: "Gorgeous Saree",
    price: "Rs. 2600",
    rating: 5,
  },
  {
    id: 18,
    image: "/images/kajal1.png",
    title: "Gorgeous Saree",
    price: "Rs. 2900",
    rating: 5,
  },
  {
    id: 19,
    image: "/images/laxmi1.jpg",
    title: "Gorgeous Saree",
    price: "Rs. 2600",
    rating: 5,
  },
  // ... more products
];

function SareeCollection() {
  const addToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.some((item) => item.id === sareeProducts.id)) {
      wishlist.push(sareeProducts);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist!"); // Simple feedback for demonstration
    } else {
      alert("Item already in Wishlist");
    }
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
    <div>
      <h2 className=" mt-8 font-bold text-3xl  p-12 box-decoration-clone bg-gradient-to-r from-indigo-100 to-pink-100 text-center animate-slide-in-left">
        Saree Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {sareeProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-82 object-cover"
            />
            <h3 className="text-lg font-semibold  pt-5 ">{product.title}</h3>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faTag} className="mr-2" />
              {product.price}
            </p>

            <div className="flex justify-between mt-3">
              <button
                className="bg-blue-300 text-white px-3 py-2 rounded hover:bg-blue-400"
                onClick={() => addToCart(product)}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Add to Cart
              </button>
              <button
                className="bg-red-300 text-white px-3 py-2 rounded hover:bg-red-400"
                onClick={addToWishlist}
              >
                <FontAwesomeIcon icon={faHeart} className="mr-2" />
                Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SareeCollection;
