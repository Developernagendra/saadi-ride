import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ChatButtonProps {
  onOpen: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onOpen }) => {
  return (
    <motion.div 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={onOpen}
          className="bg-wedding-pink hover:bg-wedding-pink/90 rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl hover:shadow-wedding-pink/40 transition-all duration-300 touch-target relative overflow-hidden"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </Button>
      </motion.div>
      <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 flex h-3 w-3 sm:h-4 sm:w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-green-500"></span>
      </span>
    </motion.div>
  );
};

export default ChatButton;
