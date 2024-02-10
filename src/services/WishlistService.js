export const getWishlist = () => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  };
  
  export const addToWishlist = (product) => {
    const wishlist = getWishlist();
    if (!wishlist.some((item) => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };
  
  export const removeFromWishlist = (productId) => {
    let wishlist = getWishlist();
    wishlist = wishlist.filter((item) => item.id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  
  export const clearWishlist = () => {
    localStorage.removeItem("wishlist");
  };
  export default wishlistService;
  