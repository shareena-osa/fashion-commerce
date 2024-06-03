// cartService.js

// This function retrieves the cart items from local storage
export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.map((item) => {
    // Ensure that the price property is set for each item
    if (!item.price) {
      // If price is not set, you can set a default value or handle it as per your requirement
      // For example, you can set a default price of 0
      return { ...item, price: "Rs. 0" };
    }
    return item;
  });
};

// This function removes an item from the cart based on its productId
export const removeFromCart = (productId) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
