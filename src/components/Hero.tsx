// src/components/Hero.tsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useTheme as useMuiTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Hero: React.FC = () => {
  const theme = useMuiTheme();

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: { xs: 10, md: 12 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80)"
              : "url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box maxWidth="md" sx={{ color: "white" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              <Box component="span" sx={{ display: "block" }}>
                The Future of Tech
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "primary.main",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-10px",
                    left: "0",
                    width: "100px",
                    height: "5px",
                    backgroundColor: "secondary.main",
                    borderRadius: "10px",
                  },
                }}
              >
                Begins Here
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography
              variant="h5"
              paragraph
              sx={{
                mb: 3,
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                fontWeight: "light",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
              }}
            >
              June 15-17, 2025 • San Francisco, CA
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typography
              variant="body1"
              paragraph
              sx={{
                mb: 5,
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: "600px",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              Join the most innovative minds in technology for three days of
              learning, networking, and inspiration. Experience cutting-edge
              demos, insightful talks, and unparalleled networking
              opportunities.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
              <ScrollLink
                to="register"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      fontWeight: "bold",
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                    }}
                  >
                    Register Now
                  </Button>
                </motion.div>
              </ScrollLink>

              <ScrollLink
                to="schedule"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    sx={{
                      fontWeight: "bold",
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      borderWidth: "2px",
                      "&:hover": {
                        borderWidth: "2px",
                      },
                    }}
                  >
                    View Schedule
                  </Button>
                </motion.div>
              </ScrollLink>
            </Stack>
          </motion.div>

          {/* Add floating conference details card */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            sx={{
              position: "absolute",
              right: "5%",
              bottom: "-50px",
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                maxWidth: "300px",
              }}
            >
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                #TechConf2025
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "success.main",
                    mr: 1,
                    animation: "pulse 2s infinite",
                  }}
                />
                <Typography variant="body2">Registration now open</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Early bird tickets available until December 15, 2024
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Add animated scroll indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          component={motion.div}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                color: "white",
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
                Discover More
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "rgba(255,255,255,0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ fontSize: 24 }}>↓</Box>
              </Box>
            </Box>
          </ScrollLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
