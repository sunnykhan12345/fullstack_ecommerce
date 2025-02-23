import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArravels from "../components/Products/NewArravels";
import ProductDetails from "../components/Products/ProductDetails";
import StakingPage from "../components/Products/StakingPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArravels />
      {/* Best sELLER */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      <StakingPage />
    </div>
  );
};

export default Home;
