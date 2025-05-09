
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useChatbot } from "./chatbot/useChatbot";
import ChatWindow from "./chatbot/ChatWindow";

const Chatbot = () => {
  const { isOpen, setIsOpen, messages, isTyping, handleSendMessage } = useChatbot();

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-lg flex items-center justify-center animate-float"
        variant="default"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onClose={() => setIsOpen(false)}
          onSendMessage={handleSendMessage}
        />
      )}
    </>
  );
};

export default Chatbot;
