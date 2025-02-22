import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const cartProducts = [
  {
    id: 1,
    name: "T-Shirt",
    size: "M",
    color: "Red",
    quantity: 1,
    price: 15,
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Jeans",
    size: "L",
    color: "Blue",
    quantity: 1,
    price: 15,
    img: "data:image/jpeg;base64,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",
  },

];
const CartContents = () => {
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          className="flex items-start justify-between py-4 border-b border-gray-200"
          key={index}
        >
          <div className="flex ">
            <div className="flex items-start">
              <img
                src={product.img}
                alt={product.name}
                className="w-20 object-cover mr-4 rounded"
              />
            </div>
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium cursor-pointer">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium cursor-pointer">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col space-y-1 ">
            <p>${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBinLine className="text-red-500 w-6 h-6 cursor-pointer" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
