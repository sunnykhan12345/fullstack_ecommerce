import React  from "react";
import MyOrderPage from "./MyOrderPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-x-0 md:space-y-0">
          {/* left section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-sm rounded-lg p-6">
            <h1 className="text-2xl lg:w-3xl font-bold mb-4">Sunny Khan</h1>
            <p className="text-lg text-gray-600 mb-4">
              sunnykhansadda@gmail.com
            </p>
            <button className="text-white bg-red-500 hover:bg-red-600 w-full px-4 py-2 rounded-lg cursor-pointer">
              Logout
            </button>
          </div>
          {/* right section */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
