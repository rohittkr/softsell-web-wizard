
import { useState } from "react";
import { Message } from "./types";
import { FAQ_RESPONSES } from "./faq-responses";

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "👋 Hi there! How can I help you with selling your software licenses today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const generateResponse = (question: string): string => {
    // Convert to lowercase for case-insensitive matching
    const lowerQuestion = question.toLowerCase();
    
    // Check for matches in our FAQ
    for (const [keyword, answer] of Object.entries(FAQ_RESPONSES)) {
      if (lowerQuestion.includes(keyword)) {
        return answer;
      }
    }
    
    // Default fallback response
    return "I'm not sure about that. Please use the contact form below and our team will assist you with your specific questions.";
  };
  
  const handleSendMessage = (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: generateResponse(userMessage.text),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    isTyping,
    handleSendMessage,
  };
};
