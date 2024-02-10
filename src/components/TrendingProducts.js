import React from "react";

function TrendingProducts() {
  return (
    <section className="p-6   bg-gradient-to-r from-slate-50 via-blue-100 to-slate-100 ">
      <div className="text-center text-4xl font-bold py-6">
        <h1>Our Trending Products</h1>
      </div>

      <div className="flex flex-wrap">

        <div className="w-1/4 p-6">
          
          <div className="rounded-lg overflow-hidden ">
            <img
              src="/images/color6.png"
              alt="Product"
              className=" w-60 object-cover mx-auto p-4 border rounded shadow"
            />
            <div className="p-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">Rs. 16.00</p>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
};

export default TrendingProducts;
