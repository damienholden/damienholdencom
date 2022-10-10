import React from "react";
import { motion } from "framer-motion";

export const Section = ({ children, duration = "0.9", delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, delay }}
    >
      {children}
    </motion.div>
  );
};
