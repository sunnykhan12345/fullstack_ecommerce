// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
//   const [drawerOpen, setDraweOpen] = useState(false);

//   const toggleCartDrawer = () => {
//     setDraweOpen(!drawerOpen);
//   };
//   return (
//     <div
//       className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg
//     transform transition-transform duration-300 flex flex-col z-50 ${
//       drawerOpen ? "translate-x-0" : "translate-x-full"
//     }`}
//     >
//       {/* close button */}
//       <div className="flex justify-end p-4">
//         <button className="" onClick={toggleCartDrawer}>
//           <IoMdClose className="w-6 h-6 text-gray-600" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartDrawer;
import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 lg:w-1/4 md:w-2/4 h-full bg-white shadow-lg
    transform transition-transform duration-300 flex flex-col z-50 ${
      drawerOpen ? "translate-x-0" : "translate-x-full"
    }`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer} className="cursor-pointer">
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      {/* cart content with scrollbar area  */}
      <div className="flex-grow p-4 overflow-auto">
        <h2 className="font-semibold text-xl mb-4">Over Cart</h2>
        {/* cart contents */}
        <CartContents />
      </div>
      {/* checkout button fixed on bottom */}
      <div className="p-4 bg-white sticky bottom-0 cursor-pointer">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Check Out
        </button>
        <p className="text-sm tracking-tight text-gray-700 mt-2 text-center">
          Shipping, taxes, and discounts codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
