// import React, { useEffect, useRef, useState } from "react";
// import { FaFilter } from "react-icons/fa";
// import FilterSidebar from "../components/Products/FilterSidebar";
// const CollectionPage = () => {
//   const [products, setProducts] = useState([]);
//   const [sidebarRef] = useRef(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const togglesidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleClickOutside = (e) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//       setIsSidebarOpen(false);
//     }
//   };
//   useState(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     // clean even listener
//     document.removeEventListener("mousedown", handleClickOutside);
//   });

//   useEffect(() => {
//     setTimeout(() => {
//       const fetchproducts = [
//         {
//           _id: 1,
//           name: "product 1",
//           price: 100,
//           images: [
//             {
//               url: "https://img.drz.lazcdn.com/static/pk/p/2c72a27b1fd163d96aff8adc8eab7950.jpg_400x400q75.jpg_.webp",
//             },
//           ],
//         },
//         {
//           _id: 2,
//           name: "product 2",
//           price: 100,
//           images: [
//             {
//               url: "https://img.drz.lazcdn.com/static/pk/p/4aaa7a269dfb30fe15140533e9933b8e.jpg_400x400q75.jpg_.webp",
//             },
//           ],
//         },
//         {
//           _id: 3,
//           name: "product 3",
//           price: 100,
//           images: [
//             {
//               url: "https://img.drz.lazcdn.com/static/pk/p/bb8fed17c68c96c55b3de7cddb213b6e.jpg_400x400q75.jpg_.webp",
//             },
//           ],
//         },
//         {
//           _id: 4,
//           name: "product 4",
//           price: 100,
//           images: [
//             {
//               url: "https://img.drz.lazcdn.com/static/pk/p/5bf9d963b7c9c704b230861e866c9af2.jpg_400x400q75.jpg_.webp",
//             },
//           ],
//         },
//         {
//           _id: 5,
//           name: "product 4",
//           price: 100,
//           images: [
//             {
//               url: "https://img.drz.lazcdn.com/static/pk/p/5bf9d963b7c9c704b230861e866c9af2.jpg_400x400q75.jpg_.webp",
//             },
//           ],
//         },
//         {
//           _id: 6,
//           name: "product 4",
//           price: 100,
//           images: [
//             {
//               url: "https://img.drz.lazcdn.com/static/pk/p/5bf9d963b7c9c704b230861e866c9af2.jpg_400x400q75.jpg_.webp",
//             },
//           ],
//         },
//         {
//           _id: 7,
//           name: "product 4",
//           price: 100,
//           images: [
//             {
//               url: "https://img.drz.lazcdn.com/static/pk/p/5bf9d963b7c9c704b230861e866c9af2.jpg_400x400q75.jpg_.webp",
//             },
//           ],
//         },
//         {
//           _id: 8,
//           name: "product 4",
//           price: 100,
//           images: [
//             {
//               url: "https://img.drz.lazcdn.com/static/pk/p/5bf9d963b7c9c704b230861e866c9af2.jpg_400x400q75.jpg_.webp",
//             },
//           ],
//         },
//       ];
//       setProducts(fetchproducts);
//     }, 1000);
//   }, []);
//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* mobile filter button */}
//       <button
//         onClick={togglesidebar}
//         className="lg:hidden border p-2 flex justify-center items-center"
//       >
//         <FaFilter className="mr-2" /> filetreds
//       </button>
//       {/* filter sidebar */}
//       <div ref={sidebarRef}>
//         <FilterSidebar />
//       </div>
//     </div>
//   );
// };

// export default CollectionPage;

import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null); // ✅ useRef correctly initialized
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false); // close sidebar if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "product 1",
          price: 100,
          images: [
            {
              url: "https://img.drz.lazcdn.com/static/pk/p/2c72a27b1fd163d96aff8adc8eab7950.jpg_400x400q75.jpg_.webp",
            },
          ],
        },
        {
          _id: 2,
          name: "product 2",
          price: 100,
          images: [
            {
              url: "https://img.drz.lazcdn.com/static/pk/p/4aaa7a269dfb30fe15140533e9933b8e.jpg_400x400q75.jpg_.webp",
            },
          ],
        },
        {
          _id: 3,
          name: "product 3",
          price: 100,
          images: [
            {
              url: "https://img.drz.lazcdn.com/static/pk/p/bb8fed17c68c96c55b3de7cddb213b6e.jpg_400x400q75.jpg_.webp",
            },
          ],
        },
        {
          _id: 4,
          name: "product 4",
          price: 100,
          images: [
            {
              url: "https://img.drz.lazcdn.com/static/pk/p/5bf9d963b7c9c704b230861e866c9af2.jpg_400x400q75.jpg_.webp",
            },
          ],
        },
        {
          _id: 5,
          name: "product 4",
          price: 100,
          images: [
            {
              url: "https://img.drz.lazcdn.com/static/pk/p/a31f6de9f4af30d0f017510b019041ae.jpg_400x400q75.jpg_.webp",
            },
          ],
        },
        {
          _id: 6,
          name: "product 4",
          price: 100,
          images: [
            {
              url: "https://img.drz.lazcdn.com/static/pk/p/5bf9d963b7c9c704b230861e866c9af2.jpg_400x400q75.jpg_.webp",
            },
          ],
        },
        {
          _id: 7,
          name: "product 4",
          price: 100,
          images: [
            {
              url: "https://img.drz.lazcdn.com/static/pk/p/51869b46155bf0e1900b692c44eb5609.jpg_400x400q75.jpg_.webp",
            },
          ],
        },
        {
          _id: 8,
          name: "product 4",
          price: 100,
          images: [
            {
              url: "https://img.drz.lazcdn.com/static/pk/p/66bd9e4348b35fb10560fa67c9fee655.jpg_400x400q75.jpg_.webp",
            },
          ],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* sidebar with conditional visibility */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white  transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl mb-4 uppercase">All Collections</h2>
        {/* sort options */}
        <SortOptions />

        {/* product grid */}
        <ProductGrid product={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
