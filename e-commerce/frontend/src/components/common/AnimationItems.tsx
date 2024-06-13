import React from "react";
import { motion } from "framer-motion";

interface ItemsProps {
  children: React.ReactNode;
}

const AnimationItems: React.FC<ItemsProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationItems;
