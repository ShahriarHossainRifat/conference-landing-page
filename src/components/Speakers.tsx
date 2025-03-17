// src/components/Speakers.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Container,
  Avatar,
  IconButton,
  Modal,
  Divider,
  useTheme,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion, AnimatePresence } from "framer-motion";
import { AnimationWrapper } from "./AnimationWrapper";
import { Speaker } from "./types";

// Expanded speaker data with more information and social links
const speakersData: Speaker[] = [
  {
    id: 1,
    name: "Jane Smith",
    role: "CTO",
    company: "TechGiant Inc.",
    bio: "AI and machine learning expert with 15+ years experience.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    talkTitle: "The Future of AI: Beyond Machine Learning",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    tags: ["AI", "Machine Learning", "Keynote"],
  },
  {
    id: 2,
    name: "John Doe",
    role: "Principal Engineer",
    company: "InnovateTech",
    bio: "John specializes in cloud architecture with a focus on scalable, resilient systems. He has led the development of infrastructure serving millions of users worldwide. With expertise in AWS, Google Cloud, and Azure, John regularly consults for Fortune 500 companies on their cloud migration strategies.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    talkTitle: "Building Resilient Cloud Architectures",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    tags: ["Cloud", "Infrastructure", "Scalability"],
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Director of Engineering",
    company: "CodeMasters",
    bio: "Sarah is a leader in web development and UX design methodologies. She has pioneered innovative approaches to product development that combine technical excellence with exceptional user experiences. Sarah previously founded a successful UX consultancy and now leads a team of 50+ engineers at CodeMasters.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    talkTitle: "Engineering for User Experience: Bridging the Gap",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    tags: ["UX", "Frontend", "Product Design"],
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Security Researcher",
    company: "SecureNet",
    bio: 'Michael is a renowned cybersecurity expert specializing in threat detection and ethical hacking. He has discovered critical vulnerabilities in major systems and works closely with government agencies on cybersecurity initiatives. Michael is the author of "Network Defense in the Digital Age" and a frequent speaker at security conferences.',
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    talkTitle: "Emerging Threats in Cybersecurity and How to Counter Them",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    tags: ["Security", "Cybersecurity", "Ethical Hacking"],
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "VP of Product",
    company: "FutureTech",
    bio: "Priya has led product strategy for multiple successful tech products reaching over 10 million users. Her expertise in data-driven product development has transformed how companies approach user engagement and retention. Before FutureTech, she worked at Facebook and Airbnb in senior product roles.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    talkTitle: "Building Products That Scale: Lessons from the Field",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    tags: ["Product", "Strategy", "Growth"],
  },
  {
    id: 6,
    name: "David Wilson",
    role: "Blockchain Architect",
    company: "ChainInnovate",
    bio: "David is a pioneer in blockchain technology and decentralized applications. He has developed several groundbreaking blockchain protocols and advises major companies on Web3 adoption. David has contributed to Ethereum core development and leads research into scalable blockchain solutions.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    talkTitle: "Web3 and the Future of Decentralized Applications",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    tags: ["Blockchain", "Web3", "Cryptocurrency"],
  },
  {
    id: 7,
    name: "Lisa Kim",
    role: "Head of AI Research",
    company: "NeuralSystems",
    bio: "Lisa leads cutting-edge research in reinforcement learning and neural networks. Her innovations have been applied in robotics, game AI, and autonomous vehicles. Lisa holds multiple patents and has published in top journals including Nature and Science on breakthrough machine learning techniques.",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    talkTitle: "Reinforcement Learning: Beyond the Basics",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    tags: ["AI", "Neural Networks", "Research"],
  },
  {
    id: 8,
    name: "Robert Jackson",
    role: "DevOps Evangelist",
    company: "CloudFlow",
    bio: "Robert is transforming how companies implement DevOps practices for greater efficiency and reliability. He has led DevOps transformations at multiple Fortune 500 companies, reducing deployment times by 90% and improving system stability. Robert is the creator of several popular open-source CI/CD tools.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    talkTitle: "From Months to Minutes: Revolutionizing Deployment Pipelines",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    tags: ["DevOps", "CI/CD", "Automation"],
  },
];

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  const handleOpenModal = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      id="speakers"
      sx={{
        py: 10,
        bgcolor: theme.palette.mode === "dark" ? "background.paper" : "grey.50",
        position: "relative",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
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
            Featured Speakers
          </Typography>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.2}>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
          >
            Learn from industry leaders and innovators at the forefront of
            technology
          </Typography>
        </AnimationWrapper>

        <Grid container spacing={4}>
          {speakersData.map((speaker, index) => (
            <Grid item key={speaker.id} xs={12} sm={6} md={3}>
              <AnimationWrapper variant="zoomIn" delay={0.1 * index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={speaker.image}
                      alt={speaker.name}
                      sx={{
                        transition: "transform 0.5s",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    {speaker.tags && speaker.tags.length > 0 && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 1,
                          background:
                            "linear-gradient(transparent, rgba(0,0,0,0.7))",
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                        }}
                      >
                        {speaker.tags.map((tag, idx) => (
                          <Chip
                            key={idx}
                            label={tag}
                            size="small"
                            sx={{
                              bgcolor: "primary.main",
                              color: "white",
                              fontSize: "0.7rem",
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      fontWeight="bold"
                    >
                      {speaker.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {speaker.role} at {speaker.company}
                    </Typography>
                    {speaker.talkTitle && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {speaker.talkTitle}
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleOpenModal(speaker)}
                      sx={{ fontWeight: "medium" }}
                    >
                      View Profile
                    </Button>
                  </CardActions>
                </Card>
              </AnimationWrapper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <AnimationWrapper variant="fadeIn" delay={0.6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                fontWeight: "bold",
                boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(59, 130, 246, 0.5)",
                },
              }}
            >
              View All Speakers
            </Button>
          </AnimationWrapper>
        </Box>

        {/* Speaker Detail Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="speaker-modal-title"
          aria-describedby="speaker-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence>
            {openModal && selectedSpeaker && (
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                sx={{
                  width: { xs: "90%", sm: "80%", md: "70%" },
                  maxWidth: "900px",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  boxShadow: 24,
                  p: { xs: 3, md: 5 },
                  outline: "none", // Remove default focus outline
                  position: "relative",
                  m: "auto", // Center the modal
                }}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleCloseModal}
                  sx={{
                    position: "absolute",
                    right: 12,
                    top: 12,
                    color: "text.secondary",
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ position: "relative" }}>
                      <Avatar
                        src={selectedSpeaker.image}
                        alt={selectedSpeaker.name}
                        sx={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "1/1",
                          borderRadius: 3,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          mb: 3,
                        }}
                      />
                      {selectedSpeaker.socialLinks && (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            mb: 3,
                          }}
                        >
                          {selectedSpeaker.socialLinks.linkedin && (
                            <IconButton
                              color="primary"
                              aria-label="linkedin"
                              sx={{
                                bgcolor: "rgba(59, 130, 246, 0.1)",
                                "&:hover": {
                                  bgcolor: "rgba(59, 130, 246, 0.2)",
                                },
                              }}
                              href={selectedSpeaker.socialLinks.linkedin}
                              target="_blank"
                            >
                              <LinkedInIcon />
                            </IconButton>
                          )}
                          {selectedSpeaker.socialLinks.twitter && (
                            <IconButton
                              color="primary"
                              aria-label="twitter"
                              sx={{
                                bgcolor: "rgba(59, 130, 246, 0.1)",
                                "&:hover": {
                                  bgcolor: "rgba(59, 130, 246, 0.2)",
                                },
                              }}
                              href={selectedSpeaker.socialLinks.twitter}
                              target="_blank"
                            >
                              <TwitterIcon />
                            </IconButton>
                          )}
                        </Box>
                      )}

                      {selectedSpeaker.tags &&
                        selectedSpeaker.tags.length > 0 && (
                          <>
                            <Typography
                              variant="h6"
                              gutterBottom
                              align="center"
                            >
                              Expertise
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                                justifyContent: "center",
                              }}
                            >
                              {selectedSpeaker.tags.map((tag, idx) => (
                                <Chip
                                  key={idx}
                                  label={tag}
                                  color="primary"
                                  variant="outlined"
                                />
                              ))}
                            </Box>
                          </>
                        )}
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <Typography
                      variant="h4"
                      component="h2"
                      id="speaker-modal-title"
                      gutterBottom
                      fontWeight="bold"
                    >
                      {selectedSpeaker.name}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="primary"
                      sx={{ mb: 3 }}
                    >
                      {selectedSpeaker.role} at {selectedSpeaker.company}
                    </Typography>

                    <Divider sx={{ mb: 3 }} />

                    <Typography variant="h6" gutterBottom>
                      About
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      id="speaker-modal-description"
                      sx={{ mb: 4 }}
                    >
                      {selectedSpeaker.bio}
                    </Typography>

                    {selectedSpeaker.talkTitle && (
                      <>
                        <Typography variant="h6" gutterBottom>
                          Speaking Session
                        </Typography>
                        <Box
                          sx={{
                            p: 3,
                            borderRadius: 2,
                            bgcolor:
                              theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.05)"
                                : "rgba(0, 0, 0, 0.03)",
                            mb: 3,
                          }}
                        >
                          <Typography variant="h6" color="primary" gutterBottom>
                            {selectedSpeaker.talkTitle}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Date: June 16, 2025 • 11:00 AM - 12:00 PM
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Location: Main Hall, San Francisco Convention Center
                          </Typography>
                        </Box>
                      </>
                    )}

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleCloseModal}
                      sx={{ mt: 2 }}
                    >
                      Add to My Schedule
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            )}
          </AnimatePresence>
        </Modal>
      </Container>
    </Box>
  );
};

export default Speakers;
