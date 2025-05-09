
import React from "react";
import { Button } from "@/components/ui/button";
import { Bot, X } from "lucide-react";

type ChatHeaderProps = {
  onClose: () => void;
};

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border">
      <div className="flex items-center">
        <Bot className="h-5 w-5 mr-2 text-softsell-500" />
        <h3 className="font-medium">SoftSell Assistant</h3>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="h-8 w-8 rounded-full"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatHeader;
