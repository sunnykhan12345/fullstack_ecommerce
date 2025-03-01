import React from "react";
const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/8d0913a171aea999fae95ad6fd22b9d9.jpg_400x400q75.avif",
    },
    {
      productId: "2",
      name: "T-Shirt",
      color: "black",
      size: "M",
      price: 120,
      quantity: 2,
      image:
        "https://img.drz.lazcdn.com/static/pk/p/8d0913a171aea999fae95ad6fd22b9d9.jpg_400x400q75.avif",
    },
  ],
  shippingAddress: {
    address: "123 fashion Street",
    city: "Peshawar",
    country: "Pakistan",
  },
};
const OrderConfirmationPage = () => {
  const calculateEstimateddelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* order id and date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* esitmated delivery */}
            <div>
              <p className="text-emerald-700 text-sm">
                {calculateEstimateddelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* ordered items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">$ {item.price}</p>
                  <p className="text-md">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* payment and delievr information */}

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">Paypal</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
