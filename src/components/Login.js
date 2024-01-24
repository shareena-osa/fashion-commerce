import React, { useEffect } from "react";

function Login({ isOpen, onClose }) {
  // Close the panel when the Escape key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="absolute right-0 top-0 bottom-0 w-96 bg-blue-50 p-8">
        {/* Login Form */}
        <div className="flex justify-center">
          <img
            src="/images/profile1.jpeg"
            alt="profile"
            className="h-14 object-cover rounded-full" // Adjusted classes
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="shadow appearance-none border   tracking-widest rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none  tracking-widest border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border   tracking-widest rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="Password"
            />
          </div>
          <div className="text-center mb-4">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
