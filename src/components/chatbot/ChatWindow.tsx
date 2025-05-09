
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Message } from "./types";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";

type ChatWindowProps = {
  messages: Message[];
  isTyping: boolean;
  onClose: () => void;
  onSendMessage: (message: string) => void;
};

const ChatWindow = ({ messages, isTyping, onClose, onSendMessage }: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[480px] bg-background border border-border rounded-lg shadow-xl flex flex-col"
    >
      <ChatHeader onClose={onClose} />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={onSendMessage} isTyping={isTyping} />
    </motion.div>
  );
};

export default ChatWindow;
