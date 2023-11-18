import React from "react";
import ProductCard from "./ProductCard";
import productService from "../services/productService";

function TrendingProducts() {
  const products = productService.getPopularLastWeek(6);
  return (
    <section className="p-6   bg-gradient-to-r from-slate-50 via-blue-100 to-slate-100 ">
      <div className="text-center text-4xl font-bold py-6">
        <h1>Our Trending Products</h1>
      </div>

      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-1/3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
