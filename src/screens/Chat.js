import React, { useState } from "react";
import "../App.css";
import {
  AnimatedTextDisplay,
  SimpleAnimatedTextDisplay,
} from "../components/AnimatedText";

import { FiUser } from "react-icons/fi";

function Chat() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newSenderMessage = { content: newMessage, sender: "sender" };
      setMessages([...messages, newSenderMessage]);
      setNewMessage("");

      setTimeout(() => {
        let newReceiverMessage;
        switch (newMessage.toLowerCase()) {
          case "hi":
            newReceiverMessage = {
              content: "Hello!",
              sender: "receiver",
              isSimpleText: true,
            };
            const helloMessage = { content: newMessage, sender: "sender" };
            setMessages([...messages, helloMessage, newReceiverMessage]);

            setTimeout(() => {
              const helpMessage = {
                content: "How can I help you today?",
                sender: "receiver",
                isSimpleText: true,
              };
              setMessages([
                ...messages,
                helloMessage,
                newReceiverMessage,
                helpMessage,
              ]);
            }, 1000);
            break;
          case "create an ec2 template using":
            newReceiverMessage = {
              content:
                "Before that can you tell me which vendor you are looking to integrate with? AWS, GCP, or Azure?",
              sender: "receiver",
            };
            break;
          case "aws":
            newReceiverMessage = {
              content: "Here is your template",
              sender: "receiver",
              isSimpleText: true,
            };
            const helloMessage1 = { content: newMessage, sender: "sender" };
            setMessages([...messages, helloMessage1, newReceiverMessage]);

            setTimeout(() => {
              const helpMessage = {
                content: (
                  <div>
                    <pre class="code-block">
                      {`provider "aws" {
            region = "us-west-2"  # Replace with your desired AWS region
          }
          
          resource "aws_instance" "example" {
            ami           = "ami-12345678"  # Replace with your desired AMI ID
            instance_type = "t2.micro"
            subnet_id     = "subnet-12345678"  # Replace with your desired subnet ID
          
            tags = {
              Name = "ExampleInstance"
            }
          }
          
          resource "aws_launch_template" "example" {
            name = "example-template"
            
            image_id = aws_instance.example.ami
            instance_type = "t2.micro"
            
            block_device_mappings {
              device_name = "/dev/sda1"
              ebs {
                volume_size = 30
              }
            }
            
            tag_specifications {
              resource_type = "instance"
              tags = {
                Name = "ExampleTemplateInstance"
              }
            }
          }`}
                    </pre>
                  </div>
                ),
                sender: "receiver",
              };
              setMessages([
                ...messages,
                helloMessage1,
                newReceiverMessage,
                helpMessage,
              ]);
            }, 1500);
            break;

          case "provide an actual ec2 instance terraform template":
            newReceiverMessage = {
              content:
                "Sure, here is the Terraform code for an EC2 instance:\n... (template)",
              sender: "receiver",
              isSimpleText: true,
            };
            break;
          case "can you provide a design diagram ?":
            newReceiverMessage = {
              content:
                "Certainly, here is a basic architecture diagram:\n... (diagram)",
              sender: "receiver",
              isSimpleText: true,
            };
            break;
          case "thanks":
            newReceiverMessage = {
              content: "You're welcome!",
              sender: "receiver",
              isSimpleText: true,
            };
            break;
          case "I like it":
            newReceiverMessage = {
              content: "Great! I'm glad you liked it.",
              sender: "receiver",
              isSimpleText: true,
            };
            break;
       
          default:
            newReceiverMessage = {
              content: "I'm sorry, I didn't understand that.",
              sender: "receiver",
              isSimpleText: true,
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
            className={`message ${
              message.sender === "sender" ? "sender" : "receiver"
            }`}
          >
            <div className="profile-image">
              {message.sender === "sender" ? (
                <FiUser />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/12/12096.png"
                  alt="Receiver Profile"
                />
              )}
            </div>
            {message.isSimpleText ? (
              <SimpleAnimatedTextDisplay text={message.content} />
            ) : (
              <AnimatedTextDisplay content={message.content} />
            )}
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
