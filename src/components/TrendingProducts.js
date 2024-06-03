import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import products from "../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TrendingProducts() {
  const [showAll, setShowAll] = useState(false);

  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.some((item) => item.id === product.id)) {
      wishlist.push(product);
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div style={{ marginBottom: "10px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-pink-100 p-4">
      <h2 className="mt-2 font-bold text-5xl p-12 text-center animate-slide-in-left">
        Today's Drop
        <h3 className="mt-2 font-bold text-3xl text-center animate-slide-in-left">
          Shop the latest designs
        </h3>
      </h2>

      <div className="mb-6">
        <Slider {...sliderSettings}>
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover mb-4"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-6 mb-8">
        <button
          className="bg-blue-300 text-white px-8 py-4 rounded hover:bg-pink-300"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide All" : "View All"}
        </button>
      </div>

      {showAll && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.info}</p>
              <p className="text-gray-800 mb-2">Price: {product.price}</p>
              <div className="flex justify-between">
                <button
                  className="bg-blue-300 text-white px-3 py-2 rounded hover:bg-blue-400"
                  onClick={() => addToCart(product)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Add to Cart
                </button>
                <button
                  className="bg-red-300 text-white px-3 py-2 rounded hover:bg-red-400"
                  onClick={() => addToWishlist(product)}
                >
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendingProducts;
