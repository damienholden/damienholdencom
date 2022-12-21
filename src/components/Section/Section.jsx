import React from "react";
import { motion } from "framer-motion";

export const Section = ({
  children,
  duration = "0.5",
  delay = 0,
  displayInViewport,
  ease = "easeIn",
  animate,
  initial,
}) => {
  const inViewPort = {
    transition: { duration: duration, delay, ease },
    whileInView: { opacity: 1 },
    viewport: { once: true },
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      {...(displayInViewport && inViewPort)}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

// export const AnimatedSpan = ({
//   children,
//   duration = "0.6",
//   delay = 0,
//   ease = "easeIn",
//   animate,
//   initial,
// }) => {
//   const inViewPort = {
//     transition: { duration: duration, delay, ease },
//     whileInView: { opacity: 1 },
//     viewport: { once: true },
//   };
//   return (
//     <motion.div
//       initial={initial}
//       animate={animate}
//       transition={{ duration, delay, ease }}
//       {...inViewPort}
//       style={{ width: "100%" }}
//     >
//       {children}
//     </motion.div>
//   );
// };
