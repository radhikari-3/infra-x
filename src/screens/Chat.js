import React, { useState, useEffect } from 'react';
import '../App.css';

import { FiUser } from 'react-icons/fi';

function Chat() {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newSenderMessage = { content: newMessage, sender: 'sender' };
      setMessages([...messages, newSenderMessage]);
      setNewMessage('');

      setTimeout(() => {
        let newReceiverMessage;
        switch (newMessage.toLowerCase()) {
          case 'hi':
            newReceiverMessage = { content: 'Hello!', sender: 'receiver' };
            const helloMessage = { content: newMessage, sender: 'sender' };
            setMessages([...messages, helloMessage, newReceiverMessage]);
        
            setTimeout(() => {
              const helpMessage = { content: 'How can I help you today?', sender: 'receiver' };
              setMessages([...messages, helloMessage, newReceiverMessage, helpMessage]);
            }, 1000);
            break;
          case 'i want you to create an ec2 template':
            newReceiverMessage = {
              content:
                "Before that can you tell me which vendor you are looking to integrate with? AWS, GCP, or Azure?",
              sender: 'receiver',
            };
            break;
          case 'aws':
            newReceiverMessage = {
              content: 'Ok, generating you a basic EC2 instance template.',
              sender: 'receiver',
            };
            break;
          case 'provide an actual ec2 instance terraform template':
            newReceiverMessage = {
              content: 'Sure, here is the Terraform code for an EC2 instance:\n... (template)',
              sender: 'receiver',
            };
            break;
          case 'can you provide a design diagram ?':
            newReceiverMessage = {
              content: 'Certainly, here is a basic architecture diagram:\n... (diagram)',
              sender: 'receiver',
            };
            break;
          case 'thanks':
            newReceiverMessage = { content: 'You\'re welcome!', sender: 'receiver' };
            break;
          case 'yes':
            newReceiverMessage = {
              content: 'Great! I\'m glad you liked it.',
              sender: 'receiver',
            };
            break;
          case 'do you want to download ?':
            newReceiverMessage = {
              content: 'Yes, you can download the files.',
              sender: 'receiver',
            };
            break;
          default:
            newReceiverMessage = {
              content: 'I\'m sorry, I didn\'t understand that.',
              sender: 'receiver',
            };
        }
        setMessages([...messages, newSenderMessage, newReceiverMessage]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'sender' ? 'sender' : 'receiver'}`}
          >
            <div className="profile-image">
              {message.sender === 'sender' ? (
                <FiUser />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/12/12096.png"
                  alt="Receiver Profile"
                />
              )}
            </div>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
