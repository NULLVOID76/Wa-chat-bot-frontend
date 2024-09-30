import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatItem from './ChatItem';

const ChatDisplay = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chats');
        setChats(response.data);
      } catch (err) {
        console.error('Failed to fetch chats:', err);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">WhatsApp Chat Messages</h1>
      <div className="bg-white rounded-lg shadow-lg p-4 max-h-80vh overflow-y-scroll">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <ChatItem key={chat._id} chat={chat} />
          ))
        ) : (
          <p className="text-center text-gray-500">No chats found.</p>
        )}
      </div>
    </div>
  );  
};

export default ChatDisplay;
