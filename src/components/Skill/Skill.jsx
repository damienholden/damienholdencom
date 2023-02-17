import React from "react";
import { GridItem, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Skill = ({ alt, src, directionLeft }) => {
  return (
    <GridItem
      key={alt}
      h="85px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <motion.span
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ x: -10, opacity: 1 }}
      >
        <Image
          style={{ height: "65px", width: "auto" }}
          src={src}
          alt={alt}
          title={alt}
          loading="lazy"
        />
      </motion.span>
    </GridItem>
  );
};
