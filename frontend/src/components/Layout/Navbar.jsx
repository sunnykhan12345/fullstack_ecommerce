import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { HiBars3BottomLeft } from "react-icons/hi2";
import SearchBar from "../Common/SearchBar";
const Navbar = () => {
  return (
    <div className="bg-slate-100 py-5 border-b border-gray-200">
      <div className="md:container mx-auto flex justify-between items-center px-6">
        <div>
          <Link to={"/"}>Rabbit</Link>
        </div>
        {/* navgitaion links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to={""}
            className="text-gray-700 hover:text-black text-sm uppercase"
          >
            men
          </Link>{" "}
          <Link
            to={""}
            className="text-gray-700 hover:text-black text-sm uppercase"
          >
            women
          </Link>
          <Link
            to={""}
            className="text-gray-700 hover:text-black text-sm uppercase"
          >
            top wear
          </Link>
          <Link
            to={""}
            className="text-gray-700 hover:text-black text-sm uppercase"
          >
            bottom wear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
            <CiUser />
          </Link>
          <button className="relative hover:text-black cursor-pointer">
            <AiOutlineShopping className="w-6 h-6 hover:text-gray-300 text-gray-700" />
            <span className="w-4 h-4 text-white rounded-full bg-red-700 absolute -top-1 -right-1 text-xs">
              4
            </span>
          </button>
          {/* search */}
          <SearchBar />
          <button className="md:hidden">
            <HiBars3BottomLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
