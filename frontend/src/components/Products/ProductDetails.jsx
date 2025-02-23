import React, { useState } from "react";

const ProductDetails = () => {
  const [size, setSizes] = useState(true);
  const selectSize = () => {
    setSizes(!size);
  };
  const selectProduct = [
    {
      name: "Stylish Jacket",
      price: 120,
      originalPrice: 150,
      description: "This is a stylish jacket perfect for any occasion",
      brand: "FashionBrand",
      material: "Leather",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Black"],
      images: [
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/eb32ff3fee644942ac29f2f5fc8f504b.jpg_400x400q75.jpg_.webp",
          altText: "Stylish Jacket Front",
        },
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/02ee34592804be83d3472bf7b8871b2b.png_400x400q75.png_.webp",
          altText: "Stylish Jacket Back",
        },
      ],
    },
  ];

  const [mainImage, setMainImage] = useState(selectProduct[0].images[0].url);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct[0].images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                } hover:border-black`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main product"
                className="w-full h-auto object-cover rounded-lg border border-gray-200"
              />
            </div>
          </div>
          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectProduct[0].images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                } hover:border-black`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectProduct[0]?.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              ${selectProduct[0]?.originalPrice}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              $ {selectProduct[0]?.price}
            </p>
            <p className="text-gray-600 mb-4">
              {selectProduct[0]?.description}
            </p>
            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct[0]?.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border"
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.8)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct[0]?.sizes.map((size) => (
                  <button
                    onClick={selectSize}
                    key={size}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300 rounded border ${
                      size ? "bg-black text-white" : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Add to Cart Button */}
            <button className="bg-black text-white py-2 px-6 rounded w-full mb-4 transition-all duration-300 hover:opacity-80 cursor-pointer">
              ADD TO CART
            </button>
            {/* Product Characteristics */}
            <div className="mt-6 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectProduct[0]?.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectProduct[0]?.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
