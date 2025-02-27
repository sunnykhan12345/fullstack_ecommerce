// import React from "react";
// import { Link } from "react-router-dom";
// import { CiUser } from "react-icons/ci";
// import { AiOutlineShopping } from "react-icons/ai";
// import { HiBars3BottomLeft } from "react-icons/hi2";
// import SearchBar from "../Common/SearchBar";
// import CartDrawer from "./CartDrawer";
// const Navbar = () => {
//   return (
//     <div className="bg-slate-100 py-5 border-b border-gray-200">
//       <div className="md:container mx-auto flex justify-between items-center px-6">
//         <div>
//           <Link to={"/"}>Rabbit</Link>
//         </div>
//         {/* navgitaion links */}
//         <div className="hidden md:flex space-x-6">
//           <Link
//             to={""}
//             className="text-gray-700 hover:text-black text-sm uppercase"
//           >
//             men
//           </Link>{" "}
//           <Link
//             to={""}
//             className="text-gray-700 hover:text-black text-sm uppercase"
//           >
//             women
//           </Link>
//           <Link
//             to={""}
//             className="text-gray-700 hover:text-black text-sm uppercase"
//           >
//             top wear
//           </Link>
//           <Link
//             to={""}
//             className="text-gray-700 hover:text-black text-sm uppercase"
//           >
//             bottom wear
//           </Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link to={"/profile"} className="hover:text-black">
//             <CiUser />
//           </Link>
//           <button
//             onClick={toggleCartDrawer}
//             className="relative hover:text-black cursor-pointer"
//           >
//             <AiOutlineShopping className="w-6 h-6 hover:text-gray-300 text-gray-700" />
//             <span className="w-4 h-4 text-white rounded-full bg-red-700 absolute -top-1 -right-1 text-xs">
//               4
//             </span>
//           </button>
//           {/* search */}
//           <SearchBar />
//           <button className="md:hidden">
//             <HiBars3BottomLeft className="w-6 h-6 text-gray-700" />
//           </button>
//         </div>
//       </div>
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "../Common/SearchBar";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <div className="bg-slate-100 py-5 border-b border-gray-200">
      <div className="md:container mx-auto flex justify-between items-center px-6">
        <div>
          <Link to="/">Rabbit</Link>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/men"
            className="text-gray-700 hover:text-black text-sm uppercase"
          >
            Men
          </Link>
          <Link
            to="/women"
            className="text-gray-700 hover:text-black text-sm uppercase"
          >
            Women
          </Link>
          <Link
            to="/top-wear"
            className="text-gray-700 hover:text-black text-sm uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="/bottom-wear"
            className="text-gray-700 hover:text-black text-sm uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <CiUser className="text-2xl" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black cursor-pointer"
          >
            <AiOutlineShopping className="w-6 h-6 hover:text-gray-300 text-gray-700" />
            <span className="w-4 h-4 text-white rounded-full bg-red-700 absolute -top-1 -right-1 text-xs">
              4
            </span>
          </button>

          {/* Search */}
          <SearchBar className="text-3xl" />

          {/* Mobile Menu Button */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 bg-white shadow-lg transform transition-transform duration-300 z-50
           ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="w-6 h-6 hover:text-gray-800" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Menu</h2>
          <nav className="flex flex-col space-y-5">
            <Link to={""} className="block text-gray-600 hover:text-black">
              Men
            </Link>
            <Link to={""} className="block text-gray-600 hover:text-black">
              WomMen
            </Link>
            <Link to={""} className="block text-gray-600 hover:text-black">
              Kids
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { CiUser } from "react-icons/ci";
// import { AiOutlineShopping } from "react-icons/ai";
// import { HiBars3BottomLeft } from "react-icons/hi2";
// import { IoMdClose } from "react-icons/io";
// import SearchBar from "../Common/SearchBar";
// import CartDrawer from "./CartDrawer";

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [navDrawerOpen, setNavDrawerOpen] = useState(false);

//   const toggleCartDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <div className="bg-slate-100 py-5 border-b border-gray-200">
//       <div className="md:container mx-auto flex justify-between items-center px-6">
//         <div>
//           <Link to={"/"}>Rabbit</Link>
//         </div>
//         {/* Navigation links */}
//         <div className="hidden md:flex space-x-6">
//           <Link
//             to={""}
//             className="text-gray-700 hover:text-black text-sm uppercase"
//           >
//             Men
//           </Link>
//           <Link
//             to={""}
//             className="text-gray-700 hover:text-black text-sm uppercase"
//           >
//             Women
//           </Link>
//           <Link
//             to={""}
//             className="text-gray-700 hover:text-black text-sm uppercase"
//           >
//             Top Wear
//           </Link>
//           <Link
//             to={""}
//             className="text-gray-700 hover:text-black text-sm uppercase"
//           >
//             Bottom Wear
//           </Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link to={"/profile"} className="hover:text-black">
//             <CiUser />
//           </Link>
//           <button
//             onClick={toggleCartDrawer}
//             className="relative hover:text-black cursor-pointer"
//           >
//             <AiOutlineShopping className="w-6 h-6 hover:text-gray-300 text-gray-700" />
//             <span className="w-4 h-4 text-white rounded-full bg-red-700 absolute -top-1 -right-1 text-xs">
//               4
//             </span>
//           </button>
//           {/* Search */}
//           <SearchBar />
//           <button onClick={toggleCartDrawer} className="md:hidden">
//             <HiBars3BottomLeft className="w-6 h-6 text-gray-700" />
//           </button>
//         </div>
//       </div>
//       {/* Cart Drawer */}
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//       {/* MOVILE NAVBIAGTION */}
//       <div
//         className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:1/3 bg-white shadow-lg transform transition-transform duration-300 z-50
//            ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div className="flex justify-end p-4" onClick={navDrawerOpen}>
//           <IoMdClose className="w-6 h-6 hover:text-gray-800" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
