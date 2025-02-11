import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
const SearchBar = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search Item :", SearchTerm);
    setIsOpen(false);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center w-1/2"
        >
          <input
            type="text"
            placeholder="Search"
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 border px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
          />

          {/* sarch icon */}
          {/* <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"> */}
          <button className="">
            <HiMagnifyingGlass className="w-5 h-5" />
          </button>
          {/* close button */}
          <button className="cursor-pointer">
            <HiMiniXMark className="w-5 h-5" />
          </button>
        </form>
      ) : (
        <button onClick={handleToggle} className="cursor-pointer">
          <HiMagnifyingGlass className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
