
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
};

const ChatInput = ({ onSendMessage, isTyping }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="p-4 border-t border-border">
      <div className="flex space-x-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1"
          disabled={isTyping}
        />
        <Button
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isTyping}
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Ask about selling licenses, valuations, or the payment process
      </p>
    </div>
  );
};

export default ChatInput;
