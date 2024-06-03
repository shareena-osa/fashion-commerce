import React, { useState } from "react";

function Forus() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    setFormData(initialFormData);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-200 to-pink-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold mb-6 text-indigo-400">
          Join the Fashor Family
        </h1>
        <h2 className="text-4xl font-semibold mb-4 text-pink-500">
          Grab 10% OFF
        </h2>
        <h3 className="text-lg mb-6 text-gray-700">
          First order? Use Coupon Code{" "}
          <span className="font-bold">FIRST10</span> on Checkout.
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 animate-bounce"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forus;
