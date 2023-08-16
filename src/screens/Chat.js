import React, { useState } from "react";
import "../App.css";

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
            newReceiverMessage = { content: "Hello!", sender: "receiver" };
            const helloMessage = { content: newMessage, sender: "sender" };
            setMessages([...messages, helloMessage, newReceiverMessage]);

            setTimeout(() => {
              const helpMessage = {
                content: "How can I help you today?",
                sender: "receiver",
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
              content: (
                <div className="code-box-aws">
                  <p>
                    Sure! Here's an example of how you can create an EC2
                    instance template using Terraform for AWS:
                  </p>
                  <p>
                    1. Install Terraform: Make sure you have Terraform installed
                    on your machine. You can download it from the official
                    Terraform website:{" "}
                    <a
                      href="https://www.terraform.io/downloads.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.terraform.io/downloads.html
                    </a>
                  </p>
                  <p>
                    2. Create a Directory: Create a new directory for your
                    Terraform configuration files.
                  </p>
                  <p>
                    3. Create a Terraform Configuration File (e.g., main.tf): In
                    your directory, create a file named main.tf and add the
                    following content to create an EC2 instance template.
                  </p>
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
                  <p>
                    4. Initialize Terraform: Open a terminal in your directory
                    and run the following command to initialize Terraform:
                    <pre class="code-block">terraform init</pre>
                    <br />
                  </p>
                  <p>
                    5. Preview Changes: Run the following command to see the
                    changes that Terraform will make:
                    <br />
                    <pre class="code-block">terraform plan</pre>
                  </p>
                  <p>
                    6. Apply Changes: If the plan looks good, apply the changes:
                    <br />
                    <pre class="code-block">terraform apply</pre>
                    <br />
                    Confirm the changes when prompted.
                    <br />
                    Terraform will create an EC2 instance and an instance launch
                    template according to the configuration you specified in the
                    main.tf file. Make sure to replace placeholder values like
                    AMI ID, subnet ID, and region with appropriate values for
                    your AWS environment.
                  </p>
                  <p>
                    Always refer to the official Terraform documentation and AWS
                    documentation for the most accurate and up-to-date
                    information.
                  </p>
                </div>
              ),
              sender: "receiver",
            };

            break;

          case "provide an actual ec2 instance terraform template":
            newReceiverMessage = {
              content:
                "Sure, here is the Terraform code for an EC2 instance:\n... (template)",
              sender: "receiver",
            };
            break;
          case "can you provide a design diagram ?":
            newReceiverMessage = {
              content:
                "Certainly, here is a basic architecture diagram:\n... (diagram)",
              sender: "receiver",
            };
            break;
          case "thanks":
            newReceiverMessage = {
              content: "You're welcome!",
              sender: "receiver",
            };
            break;
          case "yes":
            newReceiverMessage = {
              content: "Great! I'm glad you liked it.",
              sender: "receiver",
            };
            break;
          case "do you want to download ?":
            newReceiverMessage = {
              content: "Yes, you can download the files.",
              sender: "receiver",
            };
            break;
          default:
            newReceiverMessage = {
              content: "I'm sorry, I didn't understand that.",
              sender: "receiver",
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
            className={`message ${message.sender === "sender" ? "sender" : "receiver"
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
