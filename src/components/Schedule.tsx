// src/components/Schedule.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Tabs,
  Tab,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Chip,
  Button,
  useTheme,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AnimatePresence } from "framer-motion";
import { AnimationWrapper } from "./AnimationWrapper";
import { ScheduleItem } from "./types";

// Enhanced schedule data with additional details
const scheduleData: Record<string, ScheduleItem[]> = {
  day1: [
    {
      id: 1,
      time: "9:00 AM - 10:00 AM",
      title: "Opening Keynote: The Future of Technology",
      speaker: "Jane Smith",
      description:
        "An inspiring look at emerging technologies and their impact on society, business, and our daily lives. Discover the trends that will shape the next decade.",
      location: "Main Hall",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      tags: ["Keynote", "Future Tech", "Innovation"],
    },
    {
      id: 2,
      time: "10:30 AM - 11:30 AM",
      title: "Web Development in 2025: Beyond Frameworks",
      speaker: "John Doe",
      description:
        "Exploring the latest trends in web development, from advanced frameworks to new paradigms that are changing how we build for the web.",
      location: "Workshop Room A",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      tags: ["Web Dev", "Frontend", "JavaScript"],
    },
    {
      id: 3,
      time: "11:45 AM - 12:45 PM",
      title: "Building Secure APIs for the Modern Web",
      speaker: "Michael Chen",
      description:
        "Learn best practices for API security, authentication methods, and how to protect your data from common vulnerabilities.",
      location: "Workshop Room B",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
      tags: ["Security", "API", "Backend"],
    },
    {
      id: 4,
      time: "1:00 PM - 2:00 PM",
      title: "Lunch & Networking",
      speaker: "",
      description:
        "Enjoy lunch while networking with fellow attendees and speakers.",
      location: "Dining Hall",
      image: "",
      tags: ["Networking", "Break"],
    },
    {
      id: 5,
      time: "2:15 PM - 3:15 PM",
      title: "AI Revolution: Practical Applications",
      speaker: "Sarah Johnson",
      description:
        "Real-world case studies of AI in action across industries, with practical insights on implementation challenges and solutions.",
      location: "Main Hall",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      tags: ["AI", "Machine Learning", "Case Studies"],
    },
    {
      id: 6,
      time: "3:30 PM - 5:00 PM",
      title: "Workshop: Building Your First ML Model",
      speaker: "Lisa Kim",
      description:
        "A hands-on workshop guiding you through the process of building, training, and deploying a machine learning model.",
      location: "Workshop Room C",
      image: "https://randomuser.me/api/portraits/women/91.jpg",
      tags: ["Workshop", "ML", "Hands-on"],
    },
    {
      id: 7,
      time: "5:30 PM - 7:30 PM",
      title: "Welcome Reception",
      speaker: "",
      description:
        "Join us for drinks, appetizers, and great conversation to kick off TechConf 2025.",
      location: "Grand Foyer",
      image: "",
      tags: ["Networking", "Social"],
    },
  ],
  day2: [
    {
      id: 8,
      time: "9:00 AM - 10:00 AM",
      title: "Cloud Architecture Best Practices",
      speaker: "Robert Jackson",
      description:
        "Optimizing your infrastructure for performance, cost, and scalability in multi-cloud environments.",
      location: "Main Hall",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      tags: ["Cloud", "Architecture", "DevOps"],
    },
    {
      id: 9,
      time: "10:30 AM - 11:30 AM",
      title: "Cybersecurity Threats and Defenses",
      speaker: "Michael Chen",
      description:
        "Protecting your organization in an evolving threat landscape, with practical strategies for prevention and response.",
      location: "Workshop Room A",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
      tags: ["Security", "Cybersecurity", "Threats"],
    },
    {
      id: 10,
      time: "11:45 AM - 12:45 PM",
      title: "Panel: The Future of Remote Work",
      speaker: "Multiple Speakers",
      description:
        "Industry leaders discuss how technology is reshaping work culture, collaboration tools, and company structures.",
      location: "Main Hall",
      image: "",
      tags: ["Panel", "Remote Work", "Future of Work"],
    },
    {
      id: 11,
      time: "1:00 PM - 2:00 PM",
      title: "Lunch & Networking",
      speaker: "",
      description:
        "Enjoy lunch while networking with fellow attendees and speakers.",
      location: "Dining Hall",
      image: "",
      tags: ["Networking", "Break"],
    },
    {
      id: 12,
      time: "2:15 PM - 3:15 PM",
      title: "The Modern Development Workflow",
      speaker: "John Doe",
      description:
        "Tools and practices for efficient software delivery, CI/CD pipelines, and team collaboration.",
      location: "Workshop Room B",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      tags: ["DevOps", "CI/CD", "Workflow"],
    },
    {
      id: 13,
      time: "3:30 PM - 5:00 PM",
      title: "Workshop: Containerization with Docker and Kubernetes",
      speaker: "Robert Jackson",
      description:
        "Learn how to containerize applications and orchestrate them with Kubernetes for seamless deployment.",
      location: "Workshop Room C",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      tags: ["Workshop", "Docker", "Kubernetes"],
    },
    {
      id: 14,
      time: "7:00 PM - 10:00 PM",
      title: "Conference Dinner & Awards",
      speaker: "",
      description:
        "Join us for a special dinner event celebrating innovations in technology with awards presentation.",
      location: "Grand Ballroom",
      image: "",
      tags: ["Networking", "Social", "Awards"],
    },
  ],
  day3: [
    {
      id: 15,
      time: "9:00 AM - 10:00 AM",
      title: "Building Scalable Products",
      speaker: "Priya Patel",
      description:
        "Strategies for growing your tech products efficiently while maintaining performance and user satisfaction.",
      location: "Main Hall",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      tags: ["Product", "Scalability", "Growth"],
    },
    {
      id: 16,
      time: "10:30 AM - 11:30 AM",
      title: "The Ethics of AI",
      speaker: "Lisa Kim",
      description:
        "Navigating the moral implications of artificial intelligence, bias in algorithms, and responsible AI development.",
      location: "Workshop Room A",
      image: "https://randomuser.me/api/portraits/women/91.jpg",
      tags: ["AI", "Ethics", "Society"],
    },
    {
      id: 17,
      time: "11:45 AM - 12:45 PM",
      title: "Web3 and Decentralized Applications",
      speaker: "David Wilson",
      description:
        "Exploring the potential of blockchain technology beyond cryptocurrencies and the future of decentralized apps.",
      location: "Workshop Room B",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      tags: ["Blockchain", "Web3", "Decentralization"],
    },
    {
      id: 18,
      time: "1:00 PM - 2:00 PM",
      title: "Lunch & Networking",
      speaker: "",
      description:
        "Enjoy lunch while networking with fellow attendees and speakers.",
      location: "Dining Hall",
      image: "",
      tags: ["Networking", "Break"],
    },
    {
      id: 19,
      time: "2:15 PM - 3:15 PM",
      title: "Building High-Performance Teams",
      speaker: "Sarah Johnson",
      description:
        "Leadership strategies for building and managing effective technical teams in a fast-paced environment.",
      location: "Workshop Room C",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      tags: ["Leadership", "Teams", "Management"],
    },
    {
      id: 20,
      time: "3:30 PM - 4:30 PM",
      title: "Closing Keynote: Technology for Good",
      speaker: "Jane Smith",
      description:
        "How technology can solve humanity's greatest challenges and create a more equitable, sustainable future.",
      location: "Main Hall",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      tags: ["Keynote", "Social Impact", "Future"],
    },
    {
      id: 21,
      time: "4:30 PM - 5:00 PM",
      title: "Closing Remarks & Farewell",
      speaker: "Conference Organizers",
      description:
        "Wrap-up of TechConf 2025 with key takeaways and a preview of next year's event.",
      location: "Main Hall",
      image: "",
      tags: ["Closing"],
    },
  ],
};

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(0);
  const [savedSessions, setSavedSessions] = useState<number[]>([]);
  const theme = useTheme();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveDay(newValue);
  };

  const toggleSaveSession = (sessionId: number) => {
    if (savedSessions.includes(sessionId)) {
      setSavedSessions((prev) => prev.filter((id) => id !== sessionId));
    } else {
      setSavedSessions((prev) => [...prev, sessionId]);
    }
  };

  const days = ["day1", "day2", "day3"];
  const currentDay = days[activeDay];

  return (
    <Box
      id="schedule"
      sx={{
        py: 10,
        bgcolor:
          theme.palette.mode === "dark"
            ? "background.default"
            : "background.paper",
        position: "relative",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0) 70%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0) 70%)",
          filter: "blur(50px)",
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
            Conference Schedule
          </Typography>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.2}>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
          >
            Plan your TechConf experience with our comprehensive event schedule
          </Typography>
        </AnimationWrapper>

        <AnimationWrapper variant="fadeIn" delay={0.3}>
          <Paper
            elevation={3}
            sx={{
              mb: 5,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Tabs
              value={activeDay}
              onChange={handleTabChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="conference schedule tabs"
              sx={{
                "& .MuiTab-root": {
                  py: 2,
                  fontWeight: "medium",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.02)",
                  },
                },
                "& .Mui-selected": {
                  fontWeight: "bold",
                },
              }}
            >
              <Tab
                label={
                  <Box>
                    <Typography variant="button" fontWeight="inherit">
                      Day 1
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      color="text.secondary"
                    >
                      June 15
                    </Typography>
                  </Box>
                }
              />
              <Tab
                label={
                  <Box>
                    <Typography variant="button" fontWeight="inherit">
                      Day 2
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      color="text.secondary"
                    >
                      June 16
                    </Typography>
                  </Box>
                }
              />
              <Tab
                label={
                  <Box>
                    <Typography variant="button" fontWeight="inherit">
                      Day 3
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      color="text.secondary"
                    >
                      June 17
                    </Typography>
                  </Box>
                }
              />
            </Tabs>
          </Paper>
        </AnimationWrapper>

        <AnimatePresence mode="wait">
          <Box key={currentDay} sx={{ width: "100%" }}>
            <List sx={{ py: 0 }}>
              {scheduleData[currentDay].map((item, index) => (
                <AnimationWrapper
                  key={item.id}
                  variant="slideUp"
                  delay={0.1 * index}
                >
                  <Card
                    sx={{
                      mb: 3,
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: 6,
                        transform: "translateY(-4px)",
                      },
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    {item.speaker && (
                      <IconButton
                        onClick={() => toggleSaveSession(item.id)}
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          zIndex: 2,
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? "rgba(0, 0, 0, 0.4)"
                              : "rgba(255, 255, 255, 0.8)",
                          "&:hover": {
                            bgcolor:
                              theme.palette.mode === "dark"
                                ? "rgba(0, 0, 0, 0.6)"
                                : "rgba(255, 255, 255, 0.9)",
                          },
                        }}
                      >
                        {savedSessions.includes(item.id) ? (
                          <BookmarkIcon color="primary" />
                        ) : (
                          <BookmarkBorderIcon />
                        )}
                      </IconButton>
                    )}

                    <CardContent sx={{ p: 0 }}>
                      <ListItem
                        alignItems="flex-start"
                        sx={{
                          px: 3,
                          py: 3,
                          flexDirection: { xs: "column", sm: "row" },
                          gap: { xs: 2, sm: 0 },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: "100%", sm: "180px" },
                            mr: { sm: 3 },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "flex-start", sm: "flex-start" },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            <AccessTimeIcon
                              fontSize="small"
                              color="primary"
                              sx={{ mr: 1, opacity: 0.8 }}
                            />
                            <Typography
                              component="span"
                              variant="subtitle2"
                              sx={{ fontWeight: "medium" }}
                            >
                              {item.time}
                            </Typography>
                          </Box>
                          {item.location && (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                "&:before": {
                                  content: '""',
                                  display: "inline-block",
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  bgcolor: "secondary.main",
                                  mr: 1,
                                },
                              }}
                            >
                              {item.location}
                            </Typography>
                          )}
                        </Box>

                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              component="h3"
                              sx={{ mb: 1, fontWeight: "bold" }}
                            >
                              {item.title}
                            </Typography>
                          }
                          secondary={
                            <>
                              {item.speaker && (
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2,
                                  }}
                                >
                                  {item.image ? (
                                    <Avatar
                                      src={item.image}
                                      alt={item.speaker}
                                      sx={{ width: 32, height: 32, mr: 1 }}
                                    />
                                  ) : null}
                                  <Typography
                                    variant="subtitle1"
                                    color="primary"
                                    sx={{ fontWeight: "medium" }}
                                  >
                                    {item.speaker}
                                  </Typography>
                                </Box>
                              )}
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                paragraph
                              >
                                {item.description}
                              </Typography>
                              {item.tags && item.tags.length > 0 && (
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 1,
                                    mt: 2,
                                  }}
                                >
                                  {item.tags.map((tag, idx) => (
                                    <Chip
                                      key={idx}
                                      label={tag}
                                      size="small"
                                      color={
                                        tag === "Workshop" || tag === "Keynote"
                                          ? "secondary"
                                          : "default"
                                      }
                                      variant={
                                        tag === "Break" ||
                                        tag === "Networking" ||
                                        tag === "Social"
                                          ? "outlined"
                                          : "filled"
                                      }
                                    />
                                  ))}
                                </Box>
                              )}
                            </>
                          }
                        />
                      </ListItem>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              ))}
            </List>
          </Box>
        </AnimatePresence>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <AnimationWrapper variant="fadeIn" delay={0.3}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                fontWeight: "medium",
                px: 4,
                py: 1.5,
              }}
              href="/schedule.pdf"
              target="_blank"
            >
              Download Full Schedule PDF
            </Button>
          </AnimationWrapper>
        </Box>

        {/* Add schedule highlights */}
        <Box sx={{ mt: 10 }}>
          <AnimationWrapper variant="fadeIn">
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 5, fontWeight: "bold" }}
            >
              Don't Miss These Highlights
            </Typography>
          </AnimationWrapper>

          <Grid container spacing={4}>
            {[
              {
                title: "Opening Keynote",
                speaker: "Jane Smith",
                image: "https://randomuser.me/api/portraits/women/23.jpg",
                day: "Day 1, 9:00 AM",
                description:
                  "An inspiring look at emerging technologies and their impact.",
              },
              {
                title: "AI Workshop",
                speaker: "Lisa Kim",
                image: "https://randomuser.me/api/portraits/women/91.jpg",
                day: "Day 1, 3:30 PM",
                description:
                  "A hands-on workshop guiding you through ML model building.",
              },
              {
                title: "Conference Dinner",
                speaker: "",
                image:
                  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                day: "Day 2, 7:00 PM",
                description:
                  "Join us for a special dinner event celebrating innovations in technology.",
              },
            ].map((highlight, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimationWrapper variant="zoomIn" delay={0.2 * index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={highlight.image}
                      alt={highlight.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom fontWeight="bold">
                        {highlight.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="primary"
                        gutterBottom
                      >
                        {highlight.day}
                      </Typography>
                      {highlight.speaker && (
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <Typography variant="body2">
                            Speaker: {highlight.speaker}
                          </Typography>
                        </Box>
                      )}
                      <Typography variant="body2" color="text.secondary">
                        {highlight.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Schedule;
