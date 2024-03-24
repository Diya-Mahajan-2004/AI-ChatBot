import React, { useState } from 'react';
import aiLogo from '../assets/aiLogo.png';
import Signup from './Signup';
import Login from './Login';

function HomePage() {
  const [showsSignup, setShowSignup] = useState(false);
  const [showsLogin, setShowLogin] = useState(false);

  const handleSignupBtnClick = () => {
    setShowSignup(true);
  };

  const handleLoginBtnClick = () => {
    setShowLogin(true);
  };

  const handleSignupClose = () => {
    setShowSignup(false);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  return (
    <div>
      {!showsSignup && !showsLogin && (
        <div className="bg-gradient-to-r from-[#EBF4FF] to-[#C7EAFB] h-screen flex justify-center items-center">
          <div className="text-center space-y-8">
            <img
              className="h-36 mt-0 rounded-full shadow-md"
              src={aiLogo}
              alt="AI Logo"
            />
            <h2 className="text-4xl font-bold text-gray-800">Welcome to Spekky</h2>
            <h3 className="text-xl text-gray-600">Your AI friend!</h3>
            <h3 className="text-xl text-gray-600">How can I assist you today?</h3>
            <div className="flex justify-center mt-8">
              <div>
                <button
                  onClick={handleSignupBtnClick}
                  className="mr-4 bg-cyan-700 hover:shadow-lg hover:shadow-cyan-900 text-white font-bold py-3 px-10 rounded shadow-md transition duration-300"
                >
                  Sign Up
                </button>
              </div>
              <button
                onClick={handleLoginBtnClick}
                className="ml-4 bg-gray-300 hover:shadow-lg hover:shadow-gray-500 text-gray-800 font-bold py-1 px-12 rounded shadow-md transition duration-300"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
      {showsSignup && <Signup onClose={handleSignupClose} />}
      {showsLogin && <Login onClose={handleLoginClose} />}
    </div>
  );
}

export default HomePage;
