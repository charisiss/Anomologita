import React from "react";

const ChatBubbleLoading = () => {
  return (
    // <div className="flex items-end mb-4">
    //   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
    //   <div className="relative bg-gray-300 p-4 rounded-lg max-w-xs">
    //     <div className="animate-bounce flex">
    //       <div className="w-4 h-4 bg-gray-500 rounded-full mr-1"></div>
    //       <div className="w-4 h-4 bg-gray-500 rounded-full mr-1"></div>
    //       <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
    //     </div>
    //     <div className="absolute -bottom-2 -left-4 bg-gray-300 w-8 h-8 rounded-full transform rotate-45"></div>
    //   </div>
    // </div>

    <div className="typing-bubble flex items-center mb-4 animate-cloud bg-white">
      <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
      <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      <div className="ml-2 text-gray-500 text-sm">Typing...</div>
    </div>
  );
};

export default ChatBubbleLoading;
