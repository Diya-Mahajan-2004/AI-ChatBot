import React from "react";
import { Link, useNavigate } from "react-router-dom";
import aiLogo from "../assets/aiLogo.png";

function Signup() {

  const navigate = useNavigate();

  const handleSignupSubmit = async () => {
    try {
      
      navigate('/mainpage'); // Navigate to /mainpage on successful login
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };


  return (
    <div className="bg-gradient-to-r from-[#BAD5FF]/50 to-[#92e0f7]/50 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <img className="h-16 mb-4 rounded-full" src={aiLogo} alt="AI Logo" />
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>
        <button onClick={handleSignupSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Signup;
