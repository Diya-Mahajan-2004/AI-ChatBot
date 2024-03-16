import React from "react"; // Import user avatar image
import aiLogo from "../assets/aiLogo.png";
import { IoSend } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "../context/Context";

function ChatPage() {
  const { onSent, showResult, loading, resultData, setInput, input } =
    useContext(Context);

  return (
    <div className="flex flex-col h-screen ">
      {" "}
      {/* Set background color */}
      <div className="flex-grow overflow-y-auto p-4">
        {/* User question */}
        <div className="flex items-start mb-4">
          <button className="rounded-full py-[9px] px-[15px] md:mr-4 bg-cyan-700 text-white">
            N
          </button>
          <div className="flex flex-col bg-gray-200 rounded-lg p-3 shadow-sm">
            {" "}
            {/* Add shadow */}
            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </span>
            <span className="text-gray-500 text-sm mt-1">10:20 AM</span>{" "}
            {/* Add timestamp */}
          </div>
        </div>

        {/* AI response */}
        <div className="flex items-start justify-end mb-4">
          <div
            className="rounded-lg p-3 text-white shadow-sm"
            style={{ backgroundColor: "#2980b9" }}
          >
            {" "}
            {/* Custom blue color */}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, iste nisi esse aliquid odit dolore quos, vitae dicta
              eveniet laudantium tempore error illo tempora modi dolorem
              doloremque fugiat? Expedita, asperiores?
            </span>
          </div>
          <img className="h-12 rounded-full md:ml-4" src={aiLogo} alt="" />
        </div>

        {/* Add more messages as needed */}
      </div>
      {/* Input box */}
      <div className="flex items-center px-4 py-6 border-t border-gray-300">
        {" "}
        {/* Add border */}
        <input 
          onChange={(e)=>setInput(e.target.value)} 
          value={input}
          type="text"
          className="w-full rounded-full pl-10 md:pl-4 md:px-2 md:py-4 focus:outline-none focus:border-cyan-700"
          placeholder="Type your message..."
          style={{ paddingLeft: "28px" }}
        />
        <button onClick={()=>onSent()} className="ml-2 rounded-full py-2 px-2 bg-cyan-700 text-white">
          <IoSend className="w-6 h-6" />
        </button>{" "}
        {/* Add microphone icon button */}
      </div>
    </div>
  );
}

export default ChatPage;
