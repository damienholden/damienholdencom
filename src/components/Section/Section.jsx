import React from "react";
import { motion } from "framer-motion";

export const Section = ({
  children,
  duration = "0.5",
  delay = 0,
  displayInViewport,
}) => {
  const inViewPort = {
    initial: { opacity: 0 },
    transition: { duration: duration, delay },
    whileInView: { opacity: 1 },
    viewport: { once: true },
  };

  return (
    <motion.div
      // animate={{ y: 0, opacity: 1 }}
      // initial={{ opacity: 0 }}
      // transition={{ duration: duration, delay }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      {...(displayInViewport && inViewPort)}
    >
      {children}
    </motion.div>
  );
};
