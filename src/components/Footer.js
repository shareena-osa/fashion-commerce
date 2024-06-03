import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-l from-slate-200 via-blue-100 to-slate-50 text-center p-6">
      <div className="container mx-auto">
        <h1 className=" text-3xl font-bold pb-5">
          Shareena Unique Collections
        </h1>
        <p className="mt-2">
          We are a proud Made in India brand offering a unique blend of
          traditional and contemporary fashion, while maintaining a commitment
          to quality and value.
        </p>
        <div className="mt-4">
          <h2 className="text-2xl pb-3 font-semibold">Follow Us</h2>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://facebook.com" className="text-blue-600">
              <FaFacebook size={36} />
            </a>
            <a href="https://twitter.com" className="text-blue-400">
              <FaTwitter size={36} />
            </a>
            <a href="https://instagram.com" className="text-pink-600">
              <FaInstagram size={36} />
            </a>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-lg font-semibold">Customer Care</h2>
            <ul className="list-none mt-2">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Collections</h2>
            <ul className="list-none mt-2">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Exclusive Offers</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Policies</h2>
            <ul className="list-none mt-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <p className="mt-6">
          © 2023 Shareena Unique Collections. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
