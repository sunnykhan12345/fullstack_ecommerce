// import React, { useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./product.css";

// const NewArrivals = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 300;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const newArrivals = [
//     {
//       _id: 1,
//       name: "Stylish Jacket",
//       price: 1000,
//       images: [
//         {
//           url: "https://img.drz.lazcdn.com/static/pk/p/287f3d66960e8e1aafac397bf3db122f.jpg_400x400q75.jpg_.webp",
//           allText: "Stylish Jacket",
//         },
//       ],
//     },
//     {
//       _id: 2,
//       name: "Casual Hoodie",
//       price: 1200,
//       images: [
//         {
//           url: "https://img.drz.lazcdn.com/static/pk/p/efb5d54c145915725e8e49de6dca4277.png_400x400q75.png_.webp",
//           allText: "Casual Hoodie",
//         },
//       ],
//     },
//     {
//       _id: 3,
//       name: "Trendy Sweater",
//       price: 1500,
//       images: [
//         {
//           url: "https://img.drz.lazcdn.com/static/pk/p/b9289b57b80b7c095dce2556f27c25de.jpg_400x400q75.jpg_.webp",
//           allText: "Trendy Sweater",
//         },
//       ],
//     },

//     {
//       _id: 4,
//       name: "Trendy Sweater",
//       price: 1500,
//       images: [
//         {
//           url: "https://img.drz.lazcdn.com/g/kf/S054d82a292684518a628df856bbe624fk.jpg_400x400q75.jpg_.webp",
//           allText: "Trendy Sweater",
//         },
//       ],
//     },
//     {
//       _id: 5,
//       name: "Trendy Sweater",
//       price: 1500,
//       images: [
//         {
//           url: "https://img.drz.lazcdn.com/collect/my/p/382500014ee685fe6dd1183cf4fa5869.jpg_400x400q75.jpg_.webp",
//           allText: "Trendy Sweater",
//         },
//       ],
//     },
//     {
//       _id: 6,
//       name: "Trendy Sweater",
//       price: 1500,
//       images: [
//         {
//           url: "https://img.drz.lazcdn.com/static/pk/p/af5d1e488f66c118d549ae70bc11b657.jpg_400x400q75.jpg_.webp",
//           allText: "Trendy Sweater",
//         },
//       ],
//     },
//     {
//       _id: 7,
//       name: "Trendy Sweater",
//       price: 1500,
//       images: [
//         {
//           url: "https://img.drz.lazcdn.com/static/pk/p/a6853eac0d63f45ce0129616e2443ff5.jpg_400x400q75.jpg_.webp",
//           allText: "Trendy Sweater",
//         },
//       ],
//     },
//   ];

//   return (
//     <section className="relative w-full">
//       <div className="container mx-auto mb-10 text-center px-4">
//         <h2 className="text-3xl font-black mb-4">Explore New Arrivals</h2>
//         <p className="text-lg mb-8 text-gray-600">
//           Discover the latest styles straight off the runway, freshly added to
//           keep your wardrobe on the cutting edge of fashion.
//         </p>
//       </div>

//       {/* Scroll Buttons */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute right-40 top-10 p-2 rounded-full bg-white opacity-50 hover:opacity-30 border shadow-lg z-10 cursor-pointer"
//       >
//         <FaArrowLeft className="text-xl" />
//       </button>

//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-20 top-10 border p-2 rounded-full opacity-50 hover:opacity-30 bg-white shadow-lg z-10 cursor-pointer"
//       >
//         <FaArrowRight className="text-xl" />
//       </button>

//       {/* Scrollable Products */}
//       <div
//         ref={scrollRef}
//         className="w-full overflow-x-auto scrollbar-hide flex space-x-4 px-2"
//       >
//         {newArrivals.map((product) => (
//           <div
//             key={product._id}
//             className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] bg-white shadow-lg rounded-lg overflow-hidden relative"
//           >
//             <div className="relative w-full ">
//               <img
//                 src={product.images[0].url}
//                 alt={product.images[0]?.allText || product.name}
//                 className="object-cover w-full h-[500px] rounded-md"
//               />
//               <div className="absolute  bottom-0 w-full bg-black/50 backdrop-blur-md text-white text-center py-2">
//                 <p className="text-start text-white font-medium pl-3">
//                   {product.images[0].allText}
//                 </p>
//                 <p className="text-start text-white text-sm pl-3">
//                   PKR {product.price}
//                 </p>
//               </div>
//             </div>
//             <h2 className="text-center  font-bold text-lg mt-2">
//               {/* {product.name} */}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import "./product.css";

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const newArrivals = [
    {
      _id: 1,
      name: "Stylish Jacket",
      price: 1000,
      images: [
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/287f3d66960e8e1aafac397bf3db122f.jpg_400x400q75.jpg_.webp",
          allText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 2,
      name: "Casual Hoodie",
      price: 1200,
      images: [
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/efb5d54c145915725e8e49de6dca4277.png_400x400q75.png_.webp",
          allText: "Casual Hoodie",
        },
      ],
    },
    {
      _id: 3,
      name: "Trendy Sweater",
      price: 1500,
      images: [
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/b9289b57b80b7c095dce2556f27c25de.jpg_400x400q75.jpg_.webp",
          allText: "Trendy Sweater",
        },
      ],
    },

    {
      _id: 4,
      name: "Trendy Sweater",
      price: 1500,
      images: [
        {
          url: "https://img.drz.lazcdn.com/g/kf/S054d82a292684518a628df856bbe624fk.jpg_400x400q75.jpg_.webp",
          allText: "Trendy Sweater",
        },
      ],
    },
    {
      _id: 5,
      name: "Trendy Sweater",
      price: 1500,
      images: [
        {
          url: "https://img.drz.lazcdn.com/collect/my/p/382500014ee685fe6dd1183cf4fa5869.jpg_400x400q75.jpg_.webp",
          allText: "Trendy Sweater",
        },
      ],
    },
    {
      _id: 6,
      name: "Trendy Sweater",
      price: 1500,
      images: [
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/af5d1e488f66c118d549ae70bc11b657.jpg_400x400q75.jpg_.webp",
          allText: "Trendy Sweater",
        },
      ],
    },
    {
      _id: 7,
      name: "Trendy Sweater",
      price: 1500,
      images: [
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/a6853eac0d63f45ce0129616e2443ff5.jpg_400x400q75.jpg_.webp",
          allText: "Trendy Sweater",
        },
      ],
    },
  ];
  return (
    <section className="relative w-full lg:py-16 py-5">
      <div className="container mx-auto mb-10 text-center px-4">
        <h2 className="text-3xl font-black mb-4">Explore New Arrivals</h2>
        <p className="text-lg mb-8 text-gray-600">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute right-40 top-28 p-2 rounded-full bg-white opacity-50 hover:opacity-30 border shadow-lg z-10 cursor-pointer"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-20 top-28 border p-2 rounded-full opacity-50 hover:opacity-30 bg-white shadow-lg z-10 cursor-pointer"
      >
        <FaArrowRight className="text-xl" />
      </button>

      {/* Scrollable Products */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto scrollbar-hide flex space-x-4 px-2"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="group min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            <div className="relative w-full">
              <img
                src={product.images[0].url}
                alt={product.images[0]?.allText || product.name}
                className="object-cover w-full sm:h-[500px] h-[400px] rounded-md"
              />

              {/* Social Icons - Hidden by default, appear on hover */}
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  <RiFacebookLine className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                  <FaPlus />
                </button>
              </div>

              <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md text-white text-center py-2">
                <p className="text-start text-white font-medium pl-3">
                  {product.images[0].allText}
                </p>
                <p className="text-start text-white text-sm pl-3">
                  PKR {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
