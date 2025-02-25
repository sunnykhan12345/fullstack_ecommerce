import React from "react";
import { Link } from "react-router-dom";
const ProductGrid = ({ product }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {product.map((product, index) => (
        <Link to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={product.images[0].url}
              alt={product.images[0].altText || product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-sm mb-2">{product.name}</h3>
          <p className="text-gray-500 font-medium text-sm tracking-tighter">$ {product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
