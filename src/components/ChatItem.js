import React from 'react';

const ChatItem = ({ chat }) => {
    return (
      <div className="mb-4 border-b pb-2 hover:bg-gray-100 transition duration-200 ease-in-out">
        <p className="font-semibold text-gray-800">{chat.from} to {chat.to}</p>
        <p className="text-gray-700">{chat.message}</p>
        <p className="text-xs text-gray-500">{new Date(chat.timestamp).toLocaleString()}</p>
      </div>
    );
  };
  

export default ChatItem;
