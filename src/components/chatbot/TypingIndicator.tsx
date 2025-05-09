
import React from "react";
import { motion } from "framer-motion";

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-start"
    >
      <div className="bg-secondary text-foreground max-w-[80%] rounded-lg px-4 py-2">
        <motion.div
          animate={{ 
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <span>...</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
