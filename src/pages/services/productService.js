import products from "../data/products";

const productService = {
  getProducts() {
    return products;
  },

  getLatestProducts(n) {
    return [...products]
      .sort((a, b) => new Date(b.arrivalDate) - new Date(a.arrivalDate))
      .slice(0, n);
  },

  getPopularLastWeek(n) {
    return [...products]
      .filter((product) => product.timesBoughtLastWeek > 0)
      .sort((a, b) => b.timesBoughtLastWeek - a.timesBoughtLastWeek)
      .slice(0, n);
  },

  getMostBoughtProducts(n) {
    return [...products]
      .sort((a, b) => b.timesBought - a.timesBought)
      .slice(0, n);
  },
};

export default productService;
