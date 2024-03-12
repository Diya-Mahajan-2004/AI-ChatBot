import React from "react";
import aiLogo from "../assets/aiLogo.png";
import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

function SideBar() {
  return (
    <div className="md:w-[336px] w-[200px] shadow-2xl shadow-[#BAD5FF] border-r-1 border-white-300/25 flex flex-col justify-between">
      {/* Sidebar Content */}
      <div className="p-4 overflow-y-auto">
        {/* Upper Part */}
        <div className="flex items-center justify-between mb-4">
          <img className="h-12 rounded-full" src={aiLogo} alt="" />
          <button className="flex items-center bg-blue-200 pl-2 pr-3 py-1 ml-2 md:pl-3 md:pr-4 md:py-2 rounded-full hover:shadow-lg hover:shadow-cyan-900">
            <CiCirclePlus className="w-6 h-6" />
            <span className="md:ml-2 ml-1 ">New Chat</span>
          </button>
        </div>
        {/* Recents */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Chats</h3>
          <div className="space-y-2">
            {/* Sample recent chat items */}
            <div className="flex items-center bg-gray-100 rounded-full py-3 pl-4 pr-8 cursor-pointer hover:bg-blue-200 hover:bg-opacity-50">
              <div className="flex-grow">How to use GitHub?</div>
              <div className="text-xs text-gray-500">3m ago</div>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full py-3 pl-4 pr-8 cursor-pointer hover:bg-blue-200 hover:bg-opacity-50">
              <div className="flex-grow">How to start coding?</div>
              <div className="text-xs text-gray-500">10m ago</div>
            </div>
            {/* Add more recent chat items as needed */}
          </div>
        </div>
      </div>
      {/* Lower Part */}
      <div className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <CiSettings className="w-6 h-6" />
            <span className="ml-2 text-gray-700">Settings</span>
          </div>
          <div className="flex items-center">
            <IoIosLogOut className="w-6 h-6" />
            <span className="ml-2 text-gray-700">Log out</span>
          </div>
          <div className="flex items-center">
            <button className="rounded-full py-[9px] px-[15px] bg-cyan-700 text-white">N</button>
            <span className="ml-2 text-gray-700">Name</span>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default SideBar;
