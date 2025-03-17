// src/components/AnimationWrapper.tsx
import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimationWrapperProps {
  children: React.ReactNode;
  variant?: "fadeIn" | "slideUp" | "slideRight" | "zoomIn" | "bounce";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  sx?: any; // Add support for sx prop
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  sx = {},
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const variants = {
    fadeIn: {
      visible: { opacity: 1, transition: { duration, delay } },
      hidden: { opacity: 0 },
    },
    slideUp: {
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
      hidden: { opacity: 0, y: 50 },
    },
    slideRight: {
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
      hidden: { opacity: 0, x: -50 },
    },
    zoomIn: {
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
      hidden: { opacity: 0, scale: 0.8 },
    },
    bounce: {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
          delay,
        },
      },
      hidden: { opacity: 0, y: 50 },
    },
  };

  return (
    <Box
      ref={ref}
      className={className}
      component={motion.div}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      sx={sx}
    >
      {children}
    </Box>
  );
};
