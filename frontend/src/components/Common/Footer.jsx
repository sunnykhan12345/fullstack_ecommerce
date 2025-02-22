import React from "react";
import { CiPhone } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 px-4 gap-8 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">NewsLetter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new poducts, exclisive events, adn online
            offers.
          </p>
          <p className="text-sm font-medium text-gray-600 mb-6">
            Sign up and get 10% off your first order.
          </p>
          {/* news form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-b border-gray-300 rounded-l-md focus:outline-none
              focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button className="bg-black text-white px-6 py-3 text-sm rouded-r-md hover:bg-gray-800 transition-all  cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
        {/* shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* support  links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQS
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                features
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {/* follow us */}
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a href="https://www.facebook.com" className="hover:text-gray-300">
              <TbBrandMeta className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com" className="hover:text-gray-300">
              <IoLogoInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com" className="hover:text-gray-300">
              <RiTwitterXLine className="w-4 h-4" />
            </a>
          </div>

          <h2 className="text-gray-400 text-sm">Call Us</h2>
          <p className="flex space-x-2 items-center pt-1">
            <CiPhone />
            <span>+92308 5342445</span>
          </p>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm text-center tracking-tighter">
          {"\u00A9"}2025, Sunny, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
