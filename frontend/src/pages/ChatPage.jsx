import React from "react"; // Import user avatar image
import aiLogo from "../assets/aiLogo.png";

function ChatPage() {
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
  type="text"
  className="w-full rounded-full pl-10 md:pl-4 md:px-2 md:py-4 focus:outline-none focus:border-cyan-700"
  placeholder="Type your message..."
  style={{ paddingLeft: "28px" }}
/>

        <button className="ml-2 rounded-full py-2 px-3 bg-cyan-700 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H8zM4 4h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM9 11H7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3z" />
          </svg>
        </button>{" "}
        {/* Add microphone icon button */}
      </div>
    </div>
  );
}

export default ChatPage;
