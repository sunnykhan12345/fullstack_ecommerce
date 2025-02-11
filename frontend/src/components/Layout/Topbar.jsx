import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white py-4">
      <div className="md:container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <Link to={""} className="hover:text-gray-300">
              <TbBrandMeta className="" />
            </Link>{" "}
            <Link to={""} className="hover:text-gray-300">
              <FaInstagram className="" />
            </Link>{" "}
            <Link to={""} className="hover:text-gray-300">
              <RiTwitterXFill className="" />
            </Link>
          </div>
          <div className="text-sm text-center">
            <span>We ship wordlwide-fast and relaible shipping!</span>
          </div>

          <div className="md:flex hidden">
            <Link to={""} className="text-sm hover:text-gray-300">
              +92 (0308) 5342445
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
