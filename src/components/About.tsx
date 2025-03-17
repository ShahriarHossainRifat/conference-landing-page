// src/components/About.tsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  Card,
  CardMedia,
  CardContent,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimationWrapper } from "./AnimationWrapper";

const About: React.FC = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Conference stats with animations
  const stats = [
    { number: "50+", label: "Expert Speakers", icon: "🎤" },
    { number: "30+", label: "Workshops", icon: "🔬" },
    { number: "1000+", label: "Attendees", icon: "👥" },
    { number: "3", label: "Days", icon: "📅" },
  ];

  return (
    <Box id="about" sx={{ py: 10, position: "relative" }} ref={ref}>
      {/* Add decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
          opacity: theme.palette.mode === "dark" ? 0.05 : 0.03,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "5%",
            right: "10%",
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
      </Box>

      <Container>
        <AnimationWrapper variant="fadeIn">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: "bold",
              background: "linear-gradient(90deg, #3B82F6, #10B981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            About the Conference
          </Typography>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.2}>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
          >
            Discover why TechConf has become the premier destination for
            technology professionals worldwide
          </Typography>
        </AnimationWrapper>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimationWrapper variant="slideRight" delay={0.3}>
              <Card
                sx={{
                  overflow: "hidden",
                  borderRadius: 4,
                  boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  height="450"
                  image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Conference hall with attendees"
                />
                {/* Overlay with conference date */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    June 15-17, 2025
                  </Typography>
                  <Typography variant="subtitle1">San Francisco, CA</Typography>
                </Box>
              </Card>
            </AnimationWrapper>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimationWrapper variant="slideUp" delay={0.4}>
              <Typography
                variant="h4"
                color="primary"
                gutterBottom
                fontWeight="bold"
              >
                The Premier Tech Event of 2025
              </Typography>
            </AnimationWrapper>

            <AnimationWrapper variant="slideUp" delay={0.5}>
              <Typography paragraph sx={{ mb: 3 }}>
                TechConf 2025 brings together the brightest minds in the
                industry to explore cutting-edge technologies and innovative
                solutions shaping our future. Network with industry leaders,
                gain insights from renowned experts, and discover the latest
                trends that will define the next era of technology.
              </Typography>
            </AnimationWrapper>

            <AnimationWrapper variant="slideUp" delay={0.6}>
              <Typography paragraph sx={{ mb: 5 }}>
                Now in its 10th year, our conference features keynote speeches,
                hands-on workshops, networking events, and panel discussions
                covering AI, Web Development, Cloud Computing, Cybersecurity,
                and more. Join us for an unforgettable experience that will
                elevate your career and expand your horizons.
              </Typography>
            </AnimationWrapper>

            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <AnimationWrapper variant="zoomIn" delay={0.7 + index * 0.1}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        textAlign: "center",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        },
                      }}
                    >
                      <Box sx={{ fontSize: 32, mb: 1 }}>{stat.icon}</Box>
                      <Typography
                        variant="h4"
                        color="primary"
                        fontWeight="bold"
                      >
                        {stat.number}
                      </Typography>
                      <Typography variant="body1">{stat.label}</Typography>
                    </Paper>
                  </AnimationWrapper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Added testimonial section */}
        <Box sx={{ mt: 12 }}>
          <AnimationWrapper variant="fadeIn">
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 6, fontWeight: "bold" }}
            >
              What Past Attendees Say
            </Typography>
          </AnimationWrapper>

          <Grid container spacing={4}>
            {[
              {
                quote:
                  "TechConf changed the trajectory of my career. The networking opportunities were invaluable, and I still apply what I learned in my daily work.",
                name: "Alex Chen",
                role: "Senior Developer at TechCorp",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                quote:
                  "The quality of speakers and content at TechConf is unmatched. I've attended for three years straight and always leave inspired.",
                name: "Sarah Johnson",
                role: "CTO at StartupX",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                quote:
                  "From the workshops to the keynotes, everything was exceptionally well-organized. I made connections that turned into major business opportunities.",
                name: "Michael Rodriguez",
                role: "Product Manager at InnoSystems",
                image: "https://randomuser.me/api/portraits/men/67.jpg",
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimationWrapper variant="slideUp" delay={0.2 * index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: 50,
                          color: "primary.main",
                          opacity: 0.2,
                          mb: 2,
                        }}
                      >
                        ❝
                      </Box>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{ flexGrow: 1, fontStyle: "italic" }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 2 }}
                      >
                        <Box
                          component="img"
                          src={testimonial.image}
                          alt={testimonial.name}
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            mr: 2,
                          }}
                        />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="medium">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Add a video section */}
        <Box sx={{ mt: 12 }}>
          <AnimationWrapper variant="fadeIn">
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Experience TechConf
            </Typography>
          </AnimationWrapper>

          <AnimationWrapper variant="slideUp" delay={0.2}>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
            >
              Get a glimpse of what awaits you at TechConf 2025
            </Typography>
          </AnimationWrapper>

          <AnimationWrapper variant="zoomIn" delay={0.4}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "56.25%", // 16:9 aspect ratio
                borderRadius: 4,
                boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/EngW7tLk6R8"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Conference Video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </Box>
          </AnimationWrapper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
