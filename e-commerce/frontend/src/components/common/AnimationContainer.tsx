import React from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
}

const AnimationContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
