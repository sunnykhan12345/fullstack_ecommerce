import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />{" "}
            <Route path="/login" element={<Login />} />{" "}
            <Route
              path="/collections/:collection"
              element={<CollectionPage />}
            />{" "}
            <Route path="/register" element={<Register />} />{" "}
            <Route path="/profile" element={<Profile />} />{" "}
            <Route path="/product/:id" element={<ProductDetails />} />{" "}
            <Route path="/checkout" element={<Checkout />} />{" "}
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
