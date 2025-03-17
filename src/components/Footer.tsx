// src/components/Footer.tsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Link,
  Stack,
  TextField,
  Button,
  IconButton,
  Divider,
  Paper,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import { AnimationWrapper } from "./AnimationWrapper";

const SocialIcon = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => {

  return (
    <Tooltip title={label}>
      <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
        <IconButton
          color="inherit"
          aria-label={label}
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            transition: "all 0.2s",
            "&:hover": {
              color: "primary.light",
              bgcolor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          {icon}
        </IconButton>
      </motion.div>
    </Tooltip>
  );
};

const FooterLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <motion.div whileHover={{ x: 5 }}>
      <Link
        href={href}
        color="inherit"
        underline="hover"
        sx={{
          opacity: 0.8,
          transition: "all 0.2s",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        {label}
      </Link>
    </motion.div>
  );
};

const Footer: React.FC = () => {

  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => {
        setSubscribed(true);
        console.log("Subscribed with email:", email);
      }, 500);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "primary.dark",
        color: "white",
        pt: 12,
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(30%, -30%)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(-30%, 30%)",
          zIndex: 0,
        }}
      />

      {/* Newsletter section with curved top */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            position: "relative",
            mt: -20,
            mb: 10,
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              bgcolor: "rgba(59, 130, 246, 0.85)",
              zIndex: -1,
            }}
          />

          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ p: { xs: 4, md: 8 } }}
          >
            <Grid item xs={12} md={7}>
              <AnimationWrapper variant="fadeIn">
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    mb: 2,
                    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    color: "white",
                  }}
                >
                  Stay Updated
                </Typography>
              </AnimationWrapper>

              <AnimationWrapper variant="slideUp" delay={0.2}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: "rgba(255,255,255,0.9)",
                    maxWidth: 500,
                  }}
                >
                  Subscribe to our newsletter for exclusive TechConf updates,
                  speaker announcements, and early bird discounts.
                </Typography>
              </AnimationWrapper>
            </Grid>

            <Grid item xs={12} md={5}>
              <AnimationWrapper variant="zoomIn" delay={0.4}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                  }}
                >
                  {subscribed ? (
                    <Box sx={{ textAlign: "center", py: 3 }}>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            bgcolor: "success.main",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mx: "auto",
                            mb: 2,
                            fontSize: 30,
                          }}
                        >
                          ✓
                        </Box>
                      </motion.div>
                      <Typography
                        variant="h6"
                        gutterBottom
                        color="primary"
                        fontWeight="bold"
                      >
                        Thank You for Subscribing!
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        You'll receive updates and announcements about TechConf
                        2025 straight to your inbox.
                      </Typography>
                    </Box>
                  ) : (
                    <form onSubmit={handleSubscribe}>
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        Join Our Newsletter
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                      >
                        No spam, just the important updates.
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Your email address"
                        variant="outlined"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Button
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                  aria-label="subscribe"
                                  sx={{
                                    borderRadius: "50%",
                                    minWidth: "auto",
                                    p: 1,
                                  }}
                                >
                                  <SendIcon />
                                </Button>
                              </motion.div>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        By subscribing, you agree to our{" "}
                        <Link href="#" color="primary">
                          Privacy Policy
                        </Link>
                        .
                      </Typography>
                    </form>
                  )}
                </Paper>
              </AnimationWrapper>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <AnimationWrapper variant="fadeIn">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    background: "linear-gradient(90deg, #fff, #a3bffa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  TechConf 2025
                </Typography>
              </motion.div>

              <Typography
                variant="body2"
                sx={{ mb: 3, opacity: 0.8, maxWidth: 300 }}
              >
                The premier technology conference bringing together industry
                leaders and innovators to explore cutting-edge technologies and
                innovative solutions shaping our future.
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 5 }}>
                <SocialIcon
                  icon={<TwitterIcon />}
                  label="Twitter"
                  href="https://twitter.com"
                />
                <SocialIcon
                  icon={<FacebookIcon />}
                  label="Facebook"
                  href="https://facebook.com"
                />
                <SocialIcon
                  icon={<LinkedInIcon />}
                  label="LinkedIn"
                  href="https://linkedin.com"
                />
                <SocialIcon
                  icon={<InstagramIcon />}
                  label="Instagram"
                  href="https://instagram.com"
                />
                <SocialIcon
                  icon={<GitHubIcon />}
                  label="GitHub"
                  href="https://github.com"
                />
                <SocialIcon
                  icon={<YouTubeIcon />}
                  label="YouTube"
                  href="https://youtube.com"
                />
              </Stack>
            </AnimationWrapper>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <AnimationWrapper variant="fadeIn" delay={0.3}>
              <Typography variant="h6" gutterBottom fontWeight="medium">
                Quick Links
              </Typography>
              <Stack spacing={1.5}>
                <FooterLink label="Home" href="#home" />
                <FooterLink label="About" href="#about" />
                <FooterLink label="Speakers" href="#speakers" />
                <FooterLink label="Schedule" href="#schedule" />
                <FooterLink label="Register" href="#register" />
                <FooterLink label="Blog" href="/blog" />
                <FooterLink label="FAQs" href="/faqs" />
              </Stack>
            </AnimationWrapper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AnimationWrapper variant="fadeIn" delay={0.4}>
              <Typography variant="h6" gutterBottom fontWeight="medium">
                Contact Us
              </Typography>
              <Stack spacing={2.5}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <PlaceIcon
                    fontSize="small"
                    sx={{ mt: 0.5, color: "primary.light" }}
                  />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    San Francisco Convention Center
                    <br />
                    747 Howard St, San Francisco, CA 94103
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <EmailIcon fontSize="small" sx={{ color: "primary.light" }} />
                  <Link
                    href="mailto:shahriarrifat0@gmail.com"
                    color="inherit"
                    underline="hover"
                    sx={{ opacity: 0.8 }}
                  >
                    shahriarrifat0@gmail.com
                  </Link>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <PhoneIcon fontSize="small" sx={{ color: "primary.light" }} />
                  <Link
                    href="tel:+14155551234"
                    color="inherit"
                    underline="hover"
                    sx={{ opacity: 0.8 }}
                  >
                    (415) 555-1234
                  </Link>
                </Box>
              </Stack>
            </AnimationWrapper>
          </Grid>

          <Grid item xs={12} md={3}>
            <AnimationWrapper variant="fadeIn" delay={0.5}>
              <Typography variant="h6" gutterBottom fontWeight="medium">
                Conference App
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                Download our mobile app to customize your schedule, network with
                attendees, and receive real-time updates.
              </Typography>
              <Stack direction="row" spacing={2}>
                <motion.div whileHover={{ y: -5 }}>
                  <Box
                    component="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on App Store"
                    sx={{ height: 40 }}
                  />
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <Box
                    component="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    sx={{ height: 40 }}
                  />
                </motion.div>
              </Stack>
            </AnimationWrapper>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", my: 5 }} />

        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="body2"
            sx={{ opacity: 0.6, textAlign: { xs: "center", md: "left" } }}
          >
            &copy; {new Date().getFullYear()} TechConf 2025. All rights
            reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: { xs: 2, md: 4 } }}>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              sx={{ opacity: 0.6, fontSize: "0.875rem" }}
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              sx={{ opacity: 0.6, fontSize: "0.875rem" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/code-of-conduct"
              color="inherit"
              underline="hover"
              sx={{ opacity: 0.6, fontSize: "0.875rem" }}
            >
              Code of Conduct
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
