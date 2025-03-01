import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArravels from "../components/Products/NewArravels";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import Cart from "../components/Products/Cart";


const placeholderProducts = [
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

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArravels />
      {/* Best sELLER */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Top Wears Women</h2>
        <ProductGrid product={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
