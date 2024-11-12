import React from "react";
import { motion, useAnimationControls } from "framer-motion";

interface TextSpanProps {
  children: React.ReactNode;
}

const TextSpan: React.FC<TextSpanProps> = ({ children }) => {
  const controls = useAnimationControls();

  const rubberBand = {
    transform: [
      "scale3d(1, 1, 1)",
      "scale3d(1.4, 0.55, 1)",
      "scale3d(0.75, 1.25, 1)",
      "scale3d(1.25, 0.85, 1)",
      "scale3d(1, 1, 1)",
    ],
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  const handleHover = () => {
    controls.start(rubberBand);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={handleHover}
      style={{ display: "inline-block", transformOrigin: "center" }}
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
