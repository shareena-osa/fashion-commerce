import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { removeFromCart as removeFromCartService, getCart as getCartItems } from "../services/cartService";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const handleRemoveFromCart = (productId) => {
    removeFromCartService(productId);
    const updatedCartItems = getCartItems();
    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace("Rs. ", "" )),
    0
  );

  return (
    <div className="box-decoration-clone bg-gradient-to-r from-indigo-100 to-pink-100 text-center animate-slide-in-left min-h-screen">
      <h2 className="mt-0 pt-16 font-bold text-4xl p-15">Your Shopping Cart</h2>
      <div className="cart-box mx-auto p-4 shadow-lg min-h-screen">
        {cartItems.length === 0 && <p>No items in the cart.</p>}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-item flex flex-col items-start mb-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-80 w-60 object-cover mx-auto pd-4"
            />
            <div className="cart-item-details text-1xl mt-2 mx-auto">
              <h4>{item.title}</h4>
              <p>Price: {item.price}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="remove-item-btn mx-auto"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        ))}
        <div className="total-price text-2xl my-2">
          <h3>Total Price: Rs. {totalPrice.toFixed(3)}</h3>
        </div>
        {cartItems.length > 0 && (
          <button className="rounded-md p-4 bg-blue-300 hover:bg-blue-500 cursor-pointer tracking-widest flex justify-center items-center mx-auto my-2">
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
