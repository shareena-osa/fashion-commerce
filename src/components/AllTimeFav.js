import React from "react";

function AllTimeFav() {
  const overlayTexts = [
    "New ARRIVALS",
    "Kurta Sets",
    "Dresses",
    "Kurtas",
    "CO-ORDS",
    "Best-Sellers",
    "Bottoms",
    "Plus-Size",
  ];

  const imageUrls = [
    "/images/color24.jpeg",
    "/images/k1.webp",
    "/images/kurtis.webp",
    "/images/kurtas.webp",
    "/images/yellow.webp",
    "/images/saree4.jpg",
    "/images/bottom.jpg",
    "/images/plussize.jpg",
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-pink-100 pt-4">
      <h2 className="mt-2 font-bold text-5xl text-center">
        All Time Fav
        <h3 className="mt-2 font-bold text-3xl text-center pb-4">
          Find Your Preference Here
        </h3>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
        {imageUrls.map((image, index) => (
          <div key={index} className="relative p-4 overflow-hidden">
            <img
              src={image}
              alt={overlayTexts[index]}
              className="w-full h-72 object-cover transition-transform duration-500 transform hover:scale-150"
              style={{ transformOrigin: "center center" }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray bg-opacity-40">
              <span className="text-white text-4xl font-semibold ">
                {overlayTexts[index]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTimeFav;
