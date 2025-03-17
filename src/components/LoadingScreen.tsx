// src/components/LoadingScreen.tsx
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

const LoadingScreen: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: "background.paper",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #3B82F6, #10B981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 4,
            }}
          >
            TechConf 2025
          </Typography>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <CircularProgress color="primary" size={60} thickness={4} />
          </motion.div>

          <Typography sx={{ mt: 4, color: "text.secondary" }}>
            Loading amazing technology experiences...
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default LoadingScreen;
