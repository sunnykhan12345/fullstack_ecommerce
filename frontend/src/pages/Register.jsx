import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/blog.png";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user registered successfully !", name, email, password);
  };
  return (
    <div className="flex">
      <div className="flex w-full md:w-1/2 flex-col justify-center items-center p-8 lg:p-12">
        <div className="w-full max-w-md bg-white p-8 rounded-lg border-gray-200 border shadow-sm">
          <div className="flex flex-col justify-center mb-6">
            <h2 className="text-xl font-medium text-center">Register</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">
            hey there! &#9995;
          </h2>
          <p className="text-center mb-6">
            Enter your username and password to login.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
              />
            </div>
            <button className="cursor-pointer hover:opacity-70  transition-all duration-300 bg-black text-white p-2 w-full rounded-lg">
              Sign In
            </button>
          </form>
          <p className="pt-6 text-center text-sm">
            don't have am account?
            <Link to="/login" className="text-blue-400">
              {" "}
              register
            </Link>
          </p>
        </div>
      </div>
      {/* right sidebar */}
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img src={login} className="h-[750px] w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Register;
