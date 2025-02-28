import React, { useState } from "react";

const Cart = () => {
  const [productAdded, setProductAdded] = useState(false);

  const handleAddToCart = () => {
    setProductAdded(true);
  };

  return (
    <div className="w-80 p-4 border border-gray-300 rounded-lg shadow-md">
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">Product Title</h3>
      <p className="text-gray-600">Product description goes here.</p>
      <p className="text-xl font-bold mt-2">$20.00</p>

      <div className="mt-4 relative">
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>

        {productAdded && (
          <div className="absolute right-0 top-full mt-1 text-sm text-green-600 font-semibold">
            ✅ 1 Added to Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
