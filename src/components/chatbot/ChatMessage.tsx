
import React from "react";
import { motion } from "framer-motion";
import { Message } from "./types";

const messageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

type ChatMessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={messageVariants}
      transition={{ duration: 0.3 }}
      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          message.isUser
            ? "bg-softsell-500 text-white"
            : "bg-secondary text-foreground"
        }`}
      >
        {message.text}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
