// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const FilterSidebar = () => {
//   const [searchParams, setsearchParams] = useParams();
//   const [filters, setFilters] = useState({
//     category: "",
//     gender: "",
//     color: "",
//     size: [],
//     material: [],
//     brand: [],
//     minPrice: 0,
//     maxPrice: 100,
//   });
//   const [priceRange, setPriceRange] = useState([0, 100]);
//   const categories = ["Top Wear", "Bottom Wear"];

//   const colors = [
//     "Red",
//     "Blue",
//     "Green",
//     "Black",
//     "Yellow",
//     "White",
//     "Pink",
//     "Beige",
//     "Navy",
//   ];
//   const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

//   const meterials = [
//     "Cotton",
//     "Wool",
//     "Dnim",
//     "Polyester",
//     "Silk",
//     "Linen",
//     "Viscose",
//     "Fleece",
//   ];
//   const genders = ["Men", "Women"];

//   useEffect(() => {
//     const params = Object.fromEntries([...searchParams]);
//     setFilters({
//       category: params.category || "",
//       gender: params.gender || "",
//       color: params.color || "",
//       size: params.size ? params.size.split(",") : [],
//       meterial: params.meterial ? params.meterial.split(",") : [],
//       brand: params.brand ? params.brand.split(",") : [],
//       minPrice: params.minPrice || 0,
//       maxPrice: params.maxPrice || 100,
//     });
//     setPriceRange([0, params.maxPrice || 100]);
//   }, [searchParams]);
//   return (
//     <div className="p-4">
//       <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

//       {/* category filter */}
//       <label className="block text-gray-600 font-medium mb-2">Category</label>
//       {categories.map((category) => (
//         <div key={category} className="flex items-center mb-1">
//           <input
//             type="radio"
//             name="category"
//             className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//           />
//           <span className="text-gray-700">{category}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterSidebar;

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// const FilterSidebar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [filters, setFilters] = useState({
//     category: "",
//     gender: "",
//     color: "",
//     size: [],
//     material: [],
//     brand: [],
//     minPrice: 0,
//     maxPrice: 100,
//   });

//   const categories = ["Top Wear", "Bottom Wear"];
//   const genders = ["Men", "Women"];
//   const colors = ["Red", "Blue", "Green", "Black", "White"];
//   const sizes = ["S", "M", "L", "XL", "XXL"];
//   const brands = [
//     "Urban Threads",
//     "Modern Fit",
//     "Street Style",
//     "Beach Breeze",
//     "Fashionista",
//   ];

//   useEffect(() => {
//     const params = Object.fromEntries([...searchParams]);
//     setFilters({
//       category: params.category || "",
//       gender: params.gender || "",
//       color: params.color || "",
//       size: params.size ? params.size.split(",") : [],
//       material: params.material ? params.material.split(",") : [],
//       brand: params.brand ? params.brand.split(",") : [],
//       minPrice: Number(params.minPrice) || 0,
//       maxPrice: Number(params.maxPrice) || 100,
//     });
//   }, [searchParams]);

//   const updateParams = (key, valueArray) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (valueArray.length > 0) {
//       newParams.set(key, valueArray.join(","));
//     } else {
//       newParams.delete(key);
//     }
//     setSearchParams(newParams);
//   };

//   const handleCategoryChange = (category) => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("category", category);
//     setSearchParams(newParams);
//   };

//   const handleGenderChange = (gender) => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("gender", gender);
//     setSearchParams(newParams);
//   };

//   const handleColorChange = (color) => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("color", color);
//     setSearchParams(newParams);
//   };

//   const handleSizeChange = (size) => {
//     const newSizes = filters.size.includes(size)
//       ? filters.size.filter((s) => s !== size)
//       : [...filters.size, size];
//     updateParams("size", newSizes);
//   };

//   const handleBrandChange = (brand) => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set("brand", brand);
//     setSearchParams(newParams);
//   };

//   return (
//     <div className="p-4">
//       <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

//       {/* Category filter */}
//       <label className="block text-gray-600 font-medium mb-2">Category</label>
//       {categories.map((category) => (
//         <div key={category} className="flex items-center mb-1">
//           <input
//             type="radio"
//             name="category"
//             value={category}
//             checked={filters.category === category}
//             onChange={() => handleCategoryChange(category)}
//             className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//           />
//           <span className="text-gray-700">{category}</span>
//         </div>
//       ))}

//       {/* Gender filter */}
//       <label className="block text-gray-600 font-medium mt-4 mb-2">
//         Gender
//       </label>
//       {genders.map((gender) => (
//         <div key={gender} className="flex items-center mb-1">
//           <input
//             type="radio"
//             name="gender"
//             value={gender}
//             checked={filters.gender === gender}
//             onChange={() => handleGenderChange(gender)}
//             className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//           />
//           <span className="text-gray-700">{gender}</span>
//         </div>
//       ))}

//       {/* Color filter */}
//       <label className="block text-gray-600 font-medium mt-4 mb-2">Color</label>
//       <div className="flex flex-wrap gap-2">
//         {colors.map((color) => (
//           <button
//             key={color}
//             onClick={() => handleColorChange(color)}
//             className={`h-8 w-8 rounded-full border border-gray-300 cursor-pointer hover:scale-105 ${
//               filters.color === color ? "ring-2 ring-blue-500" : ""
//             }`}
//             style={{ backgroundColor: color.toLowerCase() }}
//             title={color}
//           ></button>
//         ))}
//       </div>

//       {/* Size filter */}
//       <label className="block text-gray-600 font-medium mt-4 mb-2">Size</label>
//       <div className="flex flex-wrap gap-2">
//         {sizes.map((size) => (
//           <button
//             key={size}
//             onClick={() => handleSizeChange(size)}
//             className={`px-3 py-1 border rounded-md cursor-pointer ${
//               filters.size.includes(size)
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-100 text-gray-700"
//             }`}
//           >
//             {size}
//           </button>
//         ))}
//       </div>

//       {/* Brand filter */}
//       <label className="block text-gray-600 font-medium mt-4 mb-2">Brand</label>
//       {brands.map((brand) => (
//         <div key={brand} className="flex items-center mb-1">
//           <input
//             type="radio"
//             name="brand"
//             value={brand}
//             checked={filters.brand.includes(brand)} // Adjust if you want only one brand selected
//             onChange={() => handleBrandChange(brand)}
//             className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//           />
//           <span className="text-gray-700">{brand}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterSidebar;

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const categories = ["Top Wear", "Bottom Wear"];
  const genders = ["Men", "Women"];
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
  ];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    });
  }, [searchParams]);

  const updateParams = (key, valueArray) => {
    const newParams = new URLSearchParams(searchParams);
    if (valueArray.length > 0) {
      newParams.set(key, valueArray.join(","));
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSimpleChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSizeChange = (size) => {
    const newSizes = filters.size.includes(size)
      ? filters.size.filter((s) => s !== size)
      : [...filters.size, size];
    updateParams("size", newSizes);
  };

  const handlePriceChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category filter */}
      <label className="block text-gray-600 font-medium mb-2">Category</label>
      {categories.map((category) => (
        <div key={category} className="flex items-center mb-1">
          <input
            type="radio"
            name="category"
            value={category}
            checked={filters.category === category}
            onChange={() => handleSimpleChange("category", category)}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
          />
          <span className="text-gray-700">{category}</span>
        </div>
      ))}

      {/* Gender filter */}
      <label className="block text-gray-600 font-medium mt-4 mb-2">
        Gender
      </label>
      {genders.map((gender) => (
        <div key={gender} className="flex items-center mb-1">
          <input
            type="radio"
            name="gender"
            value={gender}
            checked={filters.gender === gender}
            onChange={() => handleSimpleChange("gender", gender)}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
          />
          <span className="text-gray-700">{gender}</span>
        </div>
      ))}

      {/* Color filter */}
      <label className="block text-gray-600 font-medium mt-4 mb-2">Color</label>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleSimpleChange("color", color)}
            className={`h-8 w-8 rounded-full border border-gray-300 cursor-pointer hover:scale-105 ${
              filters.color === color ? "ring-2 ring-blue-500" : ""
            }`}
            style={{ backgroundColor: color.toLowerCase() }}
            title={color}
          ></button>
        ))}
      </div>

      {/* Size filter */}
      <label className="block text-gray-600 font-medium mt-4 mb-2">Size</label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeChange(size)}
            className={`px-3 py-1 border rounded-md cursor-pointer ${
              filters.size.includes(size)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Brand filter */}
      <label className="block text-gray-600 font-medium mt-4 mb-2">Brand</label>
      {brands.map((brand) => (
        <div key={brand} className="flex items-center mb-1">
          <input
            type="radio"
            name="brand"
            value={brand}
            checked={filters.brand.includes(brand)}
            onChange={() => handleSimpleChange("brand", brand)}
            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
          />
          <span className="text-gray-700">{brand}</span>
        </div>
      ))}

      {/* Price Filter with Dots */}
      <label className="block text-gray-600 font-medium mt-4 mb-2">
        Price Range
      </label>
      <div className="relative w-full mt-2">
        <input
          type="range"
          min="0"
          max="100"
          value={filters.minPrice}
          onChange={(e) => handlePriceChange("minPrice", e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={filters.maxPrice}
          onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
          className="w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            background: "none",
          }}
        />
        {/* Dots */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-1">
          <div
            className="h-4 w-4 bg-blue-500 rounded-full"
            style={{ left: `${(filters.minPrice / 100) * 100}%` }}
          ></div>
          <div
            className="h-4 w-4 bg-blue-500 rounded-full"
            style={{ left: `${(filters.maxPrice / 100) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>${filters.minPrice}</span>
          <span>${filters.maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
