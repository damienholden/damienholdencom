import React from "react";
import { motion } from "framer-motion";

export const Section = ({
  children,
  animate,
  initial,
  whileInView,
  transition,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: true }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};
