import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const sareeProducts = [
  {
    id: 11,
    image: "/images/color5.jpeg",
    title: "Red lehenga choli",
    info: "Red lehenga choli with heavy embroidery work",
    price: "Rs. 1800",
    rating: 4,
  },
  {
    id: 12,
    image: "/images/color20.png",
    title: "Green and white lehenga choli",
    info: "Green lehenga choli with heavy embroidery work",
    price: "Rs. 1500",
    rating: 5,
  },
  {
    id: 13,
    image: "/images/color26.jpeg",
    title: "Gorgeous red fancy lehenga",
    info: "Gorgeous red fancy lehenga with heavy embroidery work",
    price: "Rs. 2500",
    rating: 5,
  },
  {
    id: 15,
    image: "/images/color37.jpeg",
    title: " purple lehenga choli",
    info: "White & Purple Printed Semi-Stitched Lehenga & Unstitched Blouse With Dupatta",
    price: "Rs. 2500",
    rating: 5,
  },
  {
    id: 14,
    image: "/images/color38.jpeg",
    title: "Gorgeous white saree",
    info: "Girls Printed Ready to Wear Lehenga & Blouse With Dupatta",
    price: "Rs.1900",
    rating: 5,
  },
  {
    id: 16,
    image: "/images/color39.jpeg",
    title: "Gorgeous Saree",
    info: " women Wear Lehenga & Blouse With Dupatta",
    price: "Rs.2600",
    rating: 5,
  },
  {
    id: 17,
    image: "/images/color18.jpeg",
    title: "Gorgeous Saree",
    info:"women Printed Ready to Wear Lehenga & Blouse With Dupatta",
    price: "Rs. 2600",
    rating: 5,
  },
  {
    id: 18,
    image: "/images/color17.jpeg",
    title: "Gorgeous Saree",
    info:"  fancy Printed Ready to Wear Lehenga & Blouse With Dupatta",
    price: "Rs. 2600",
    rating: 5,
  },
  {
    id: 19,
    image: "/images/color30.jpeg",
    title: "Embellished Velvet Lehenga Choli",
    info:"  fancy Printed Ready to Wear Lehenga & Blouse With Dupatta",
    price: "Rs. 2600",
    rating: 5,
  },
  {
    id: 20,
    image: "/images/color19.jpeg",
    title: "Gorgeous lehenga choli",
    info: "Woven Design Semi-Stitched Lehenga & Unstitched Blouse With Dupatta",
    price: "Rs. 2600",
    rating: 5,
  },
  {
    id: 21,
    image: "/images/color12.jpeg",
    title: " Fancy lehenga choli",
    info: "fancy Design Semi-Stitched Lehenga & Unstitched Blouse With Dupatta",
    price: "Rs. 2600",
    rating: 5,
  },
  {
    id: 22,
    image: "/images/color10.jpeg",
    title: "Green and blue lehenga choli",
    info:"Red Sequinned Semi-Stitched Lehenga & Unstitched Blouse With Dupatta",
    price: "Rs. 2600",
    rating: 5,
  },
  {
    id: 23,
    image: "/images/color9.jpeg",
    title: "yellow and gold lehenga choli",
    info: "Yellow & Gold-Toned Printed Semi-Stitched Lehenga & Unstitched Blouse With Dupatta",
    price: "Rs. 2600",
    rating: 5,
  },
];

function TrendingProducts() {
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
      <h2 className=" mt-2 font-bold text-4xl  p-12 box-decoration-clone bg-gradient-to-r from-indigo-100 to-pink-100 text-center animate-slide-in-left">
         Our Trending Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {sareeProducts.map((product) => (
          <div key={product.id} className="p-8 border rounded shadow justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-80 h-70 object-cover mx-auto"
            />
            <h3 className="text-lg font-semibold justify-center pt-5 ">{product.title}</h3>
            <h3 className="text-lg   pt-2 ">{product.info}</h3>
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

export default TrendingProducts;
