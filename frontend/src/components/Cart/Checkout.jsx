// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const cart = {

//   product: [
//     {
//       name: "Stylish Jacket",
//       size: "M",
//       color: "Black",
//       price: 120,
//       img: "",
//     },
//     {
//       name: "Stylish Jacket",
//       size: "M",
//       color: "Black",
//       price: 120,
//       img: "",
//     },
//   ],
//   totalPrice:195
// };
// const Checkout = () => {
//    const navigate = useNavigate();
//    const[shippingAddress,setShippingAddress] = useState({
//     firstName:"",
//     lastName:"",
//     Address:"",
//     city:"",
//     postCode:"",
//     country:"",
//     phone:""
//    })
//   return <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-7 px-6 tracking-tighter'>
//     {/* left section */}
//     <div className='bg-white rounded-lg p-6'>
//       <h2 className='text-2xl uppercase mb-6'>CheckOut</h2>
//     </div>
//   </div>;
// }

// export default Checkout

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  product: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      img: "https://img.drz.lazcdn.com/static/pk/p/8d0913a171aea999fae95ad6fd22b9d9.jpg_400x400q75.avif",
    },
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 75,
      img: "https://img.drz.lazcdn.com/static/pk/p/cd6d675718c9b06ffcc88c8146fbc75d.jpg_400x400q75.avif",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const [checkOutId, setCheckOutId] = useState(null);
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckOutId(123);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-7 px-6 tracking-tighter">
      {/* Left Section - Shipping Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 shadow space-y-6 flex flex-col"
      >
        <div>
          <h2 className="text-2xl uppercase mb-6">Checkout</h2>
          <h3 className="text-lg mb-4">Contact Details</h3>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="border p-2 rounded w-full"
              disabled
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={shippingAddress.firstName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={shippingAddress.lastName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingAddress.address}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={shippingAddress.city}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Post Code</label>
                <input
                  type="text"
                  name="postCode"
                  placeholder="Post Code"
                  value={shippingAddress.postCode}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={shippingAddress.country}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={shippingAddress.phone}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button - Now Inside Form */}
        {!checkOutId ? (
          <button
            type="submit"
            className="cursor-pointer bg-black text-white w-full py-2 px-4 rounded uppercase font-semibold hover:bg-gray-800 self-start"
          >
            Continue to Payment
          </button>
        ) : (
          <div>
            <h3 className="text-lg mb-4">Pay With Paypal</h3>
          </div>
        )}
      </form>

      {/* Right Section - Order Summary */}
      <div className="bg-gray-50 rounded-lg p-6 ">
        <h2 className="text-lg border-t uppercase mb-4">Order Summary</h2>
        <div className="space-y-4">
          {cart.product.map((item, index) => (
            <div key={index} className="flex items-center gap-4 border-b pb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={item.img} alt="img" className="" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600">
                  Size: {item.size} | Color: {item.color}
                </p>
              </div>
              <p className="font-semibold">${item.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-6  font-semibold border-b py-3 ">
          <div className="flex justify-between pb-3">
            <p>Subtotal</p>
            <p>${cart.totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <p>Total</p>
          <p>${cart.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
