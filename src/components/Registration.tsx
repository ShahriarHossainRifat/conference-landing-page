// src/components/Registration.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Paper,
  Divider,
  Alert,
  CircularProgress,
  Stack,
  useTheme,
  Stepper,
  Step,
  StepLabel,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Link,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EventIcon from "@mui/icons-material/Event";
import PaymentIcon from "@mui/icons-material/Payment";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { motion } from "framer-motion";
import { AnimationWrapper } from "./AnimationWrapper";
import { RegistrationFormData } from "./types";

const TicketOption = ({
  title,
  price,
  description,
  features,
  value,
  currentValue,
  onChange,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  value: string;
  currentValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const theme = useTheme();
  const isSelected = value === currentValue;

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderColor: isSelected ? "primary.main" : "divider",
        transition: "all 0.3s ease",
        transform: isSelected ? "scale(1.02)" : "scale(1)",
        position: "relative",
        overflow: "visible",
        boxShadow: isSelected ? "0 8px 24px rgba(0,0,0,0.12)" : "none",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        },
      }}
    >
      {isSelected && (
        <Box
          sx={{
            position: "absolute",
            top: -12,
            right: -12,
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <CheckCircleIcon fontSize="small" />
        </Box>
      )}
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {description}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            color={isSelected ? "primary.main" : "text.primary"}
          >
            {price}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 3 }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 18,
                  height: 18,
                  mr: 1,
                  borderRadius: "50%",
                  bgcolor: "success.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                ✓
              </Box>
              <Typography variant="body2">{feature}</Typography>
            </Box>
          ))}
        </Box>

        <FormControlLabel
          value={value}
          control={<Radio color="primary" />}
          label="Select"
          sx={{
            "& .MuiTypography-root": {
              fontWeight: "medium",
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

const Registration: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    ticketType: "standard",
  });
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Registration submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleContactDialogOpen = () => {
    setContactDialogOpen(true);
  };

  const handleContactDialogClose = () => {
    setContactDialogOpen(false);
  };

  const steps = ["Select Ticket", "Your Information", "Confirmation"];

  return (
    <Box
      id="register"
      sx={{
        py: 10,
        position: "relative",
        bgcolor: theme.palette.mode === "dark" ? "background.paper" : "grey.50",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E\")",
          zIndex: -1,
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
            Register Now
          </Typography>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.2}>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
          >
            Secure your spot at the most anticipated tech event of 2025
          </Typography>
        </AnimationWrapper>

        <AnimationWrapper variant="fadeIn" delay={0.3}>
          <Paper
            elevation={3}
            sx={{
              maxWidth: "lg",
              mx: "auto",
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {isSubmitted ? (
              <Box sx={{ textAlign: "center", py: 5 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <CheckCircleIcon
                    color="success"
                    sx={{
                      fontSize: 100,
                      mb: 3,
                      filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.1))",
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Typography variant="h4" gutterBottom fontWeight="bold">
                    Registration Successful!
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Typography
                    variant="body1"
                    sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
                  >
                    Thank you for registering for TechConf 2025. A confirmation
                    email has been sent to <strong>{formData.email}</strong>{" "}
                    with your ticket details. We look forward to seeing you in
                    San Francisco!
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <Card
                    sx={{
                      maxWidth: 400,
                      mx: "auto",
                      mb: 4,
                      p: 3,
                      background: "linear-gradient(135deg, #3B82F6, #10B981)",
                      color: "white",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Typography variant="h6" gutterBottom textAlign="center">
                      {formData.firstName} {formData.lastName}
                    </Typography>
                    <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", my: 2 }} />
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          Ticket Type
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          {formData.ticketType.charAt(0).toUpperCase() +
                            formData.ticketType.slice(1)}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          Dates
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          June 15-17, 2025
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sx={{ mt: 1 }}>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          Location
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          San Francisco Convention Center
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        company: "",
                        ticketType: "standard",
                      });
                      setIsSubmitted(false);
                      setActiveStep(0);
                    }}
                    sx={{
                      mt: 2,
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                    }}
                  >
                    Register Another Attendee
                  </Button>
                </motion.div>
              </Box>
            ) : (
              <>
                <Stepper
                  activeStep={activeStep}
                  sx={{
                    mb: 5,
                    "& .MuiStepLabel-root": {
                      "& .MuiStepLabel-labelContainer": {
                        mt: 1,
                      },
                    },
                  }}
                  alternativeLabel
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                {activeStep === 0 && (
                  <Fade in={activeStep === 0}>
                    <Box>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mb: 4, fontWeight: "bold" }}
                      >
                        Select Your Ticket Type
                      </Typography>

                      <FormControl
                        component="fieldset"
                        sx={{ width: "100%", mb: 4 }}
                      >
                        <RadioGroup
                          name="ticketType"
                          value={formData.ticketType}
                          onChange={handleChange}
                        >
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                              <AnimationWrapper variant="slideUp" delay={0.1}>
                                <TicketOption
                                  title="Standard"
                                  price="$499"
                                  description="Perfect for individuals"
                                  features={[
                                    "Access to all talks",
                                    "Basic workshops",
                                    "Lunch and refreshments",
                                    "Conference materials",
                                    "Wifi access",
                                  ]}
                                  value="standard"
                                  currentValue={formData.ticketType}
                                  onChange={handleChange}
                                />
                              </AnimationWrapper>
                            </Grid>

                            <Grid item xs={12} md={4}>
                              <AnimationWrapper variant="slideUp" delay={0.2}>
                                <TicketOption
                                  title="Premium"
                                  price="$799"
                                  description="For serious professionals"
                                  features={[
                                    "All Standard benefits",
                                    "Exclusive workshops",
                                    "Networking event",
                                    "Digital access to presentations",
                                    "1-year newsletter subscription",
                                  ]}
                                  value="premium"
                                  currentValue={formData.ticketType}
                                  onChange={handleChange}
                                />
                              </AnimationWrapper>
                            </Grid>

                            <Grid item xs={12} md={4}>
                              <AnimationWrapper variant="slideUp" delay={0.3}>
                                <TicketOption
                                  title="VIP"
                                  price="$1299"
                                  description="Ultimate conference experience"
                                  features={[
                                    "All Premium benefits",
                                    "VIP lounge access",
                                    "Speaker dinner invitation",
                                    "Front-row seating",
                                    "Exclusive swag package",
                                    "Hotel discount",
                                  ]}
                                  value="vip"
                                  currentValue={formData.ticketType}
                                  onChange={handleChange}
                                />
                              </AnimationWrapper>
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          mt: 4,
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          sx={{
                            fontWeight: "bold",
                            px: 4,
                            py: 1.5,
                          }}
                        >
                          Next
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}

                {activeStep === 1 && (
                  <Fade in={activeStep === 1}>
                    <Box component="form">
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mb: 4, fontWeight: "bold" }}
                      >
                        Your Information
                      </Typography>

                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <AnimationWrapper variant="slideUp" delay={0.1}>
                            <TextField
                              fullWidth
                              required
                              label="First Name"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              variant="outlined"
                            />
                          </AnimationWrapper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AnimationWrapper variant="slideUp" delay={0.2}>
                            <TextField
                              fullWidth
                              required
                              label="Last Name"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              variant="outlined"
                            />
                          </AnimationWrapper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AnimationWrapper variant="slideUp" delay={0.3}>
                            <TextField
                              fullWidth
                              required
                              label="Email Address"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              variant="outlined"
                            />
                          </AnimationWrapper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <AnimationWrapper variant="slideUp" delay={0.4}>
                            <TextField
                              fullWidth
                              label="Company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              variant="outlined"
                              helperText="Optional"
                            />
                          </AnimationWrapper>
                        </Grid>
                        <Grid item xs={12}>
                          <AnimationWrapper variant="fadeIn" delay={0.5}>
                            <Alert
                              severity="info"
                              variant="outlined"
                              sx={{ mt: 2 }}
                            >
                              All attendee information is private and will not
                              be shared with third parties.
                            </Alert>
                          </AnimationWrapper>
                        </Grid>
                      </Grid>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 4,
                        }}
                      >
                        <Button
                          onClick={handleBack}
                          sx={{
                            px: 3,
                            py: 1.5,
                          }}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          disabled={
                            !formData.firstName ||
                            !formData.lastName ||
                            !formData.email
                          }
                          sx={{
                            fontWeight: "bold",
                            px: 4,
                            py: 1.5,
                          }}
                        >
                          Next
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}

                {activeStep === 2 && (
                  <Fade in={activeStep === 2}>
                    <Box>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mb: 4, fontWeight: "bold" }}
                      >
                        Confirm Registration
                      </Typography>

                      <AnimationWrapper variant="fadeIn">
                        <Paper
                          variant="outlined"
                          sx={{ p: 3, mb: 4, borderRadius: 2 }}
                        >
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  color="text.secondary"
                                >
                                  Ticket Type
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                  {formData.ticketType.charAt(0).toUpperCase() +
                                    formData.ticketType.slice(1)}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  color="text.secondary"
                                >
                                  Price
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                  {formData.ticketType === "standard"
                                    ? "$499"
                                    : formData.ticketType === "premium"
                                    ? "$799"
                                    : "$1299"}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  color="text.secondary"
                                >
                                  Name
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                  {formData.firstName} {formData.lastName}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  color="text.secondary"
                                >
                                  Email
                                </Typography>
                                <Typography variant="body1" fontWeight="medium">
                                  {formData.email}
                                </Typography>
                              </Box>
                            </Grid>
                            {formData.company && (
                              <Grid item xs={12}>
                                <Box>
                                  <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                  >
                                    Company
                                  </Typography>
                                  <Typography
                                    variant="body1"
                                    fontWeight="medium"
                                  >
                                    {formData.company}
                                  </Typography>
                                </Box>
                              </Grid>
                            )}
                          </Grid>
                        </Paper>
                      </AnimationWrapper>

                      <AnimationWrapper variant="fadeIn" delay={0.2}>
                        <Box sx={{ mb: 4 }}>
                          <Typography variant="h6" gutterBottom>
                            Event Details
                          </Typography>
                          <Paper
                            variant="outlined"
                            sx={{ p: 3, borderRadius: 2 }}
                          >
                            <Grid container spacing={3}>
                              <Grid item xs={12} md={4}>
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <EventIcon
                                    sx={{ mr: 1, color: "primary.main" }}
                                  />
                                  <Box>
                                    <Typography
                                      variant="subtitle2"
                                      color="text.secondary"
                                    >
                                      Dates
                                    </Typography>
                                    <Typography
                                      variant="body1"
                                      fontWeight="medium"
                                    >
                                      June 15-17, 2025
                                    </Typography>
                                  </Box>
                                </Box>
                              </Grid>
                              <Grid item xs={12} md={8}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  <Box
                                    component="img"
                                    src="https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco+Convention+Center&zoom=15&size=400x150&maptype=roadmap&markers=color:red%7CSan+Francisco+Convention+Center&key=YOUR_API_KEY"
                                    alt="Map"
                                    sx={{
                                      width: "100%",
                                      height: 120,
                                      borderRadius: 1,
                                      objectFit: "cover",
                                    }}
                                  />
                                </Box>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                  San Francisco Convention Center
                                  <br />
                                  747 Howard St, San Francisco, CA 94103
                                </Typography>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Box>
                      </AnimationWrapper>

                      <AnimationWrapper variant="fadeIn" delay={0.3}>
                        <Box>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={termsAccepted}
                                onChange={handleTermsChange}
                                required
                                color="primary"
                              />
                            }
                            label={
                              <Typography variant="body2">
                                I agree to the{" "}
                                <Link
                                  href="#"
                                  style={{
                                    color: theme.palette.primary.main,
                                    textDecoration: "none",
                                  }}
                                >
                                  terms and conditions
                                </Link>{" "}
                                and{" "}
                                <Link
                                  href="#"
                                  style={{
                                    color: theme.palette.primary.main,
                                    textDecoration: "none",
                                  }}
                                >
                                  privacy policy
                                </Link>
                                .
                              </Typography>
                            }
                          />
                        </Box>
                      </AnimationWrapper>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 4,
                        }}
                      >
                        <Button
                          onClick={handleBack}
                          sx={{
                            px: 3,
                            py: 1.5,
                          }}
                        >
                          Back
                        </Button>
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={isSubmitting || !termsAccepted}
                            onClick={handleSubmit}
                            sx={{
                              px: 5,
                              py: 1.5,
                              fontWeight: "bold",
                              boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                            }}
                          >
                            {isSubmitting ? (
                              <CircularProgress size={24} color="inherit" />
                            ) : (
                              "Complete Registration"
                            )}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </>
            )}
          </Paper>
        </AnimationWrapper>

        {/* Add testimonials or FAQ section */}
        <Box sx={{ mt: 12 }}>
          <AnimationWrapper variant="fadeIn">
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 5, fontWeight: "bold" }}
            >
              Frequently Asked Questions
            </Typography>
          </AnimationWrapper>

          <Grid container spacing={4}>
            {[
              {
                question: "What's included in the registration fee?",
                answer:
                  "Your registration includes full access to the conference based on your ticket tier, lunch and refreshments, conference materials, and WiFi access throughout the venue.",
              },
              {
                question: "Is there a discount for group registrations?",
                answer:
                  "Yes, we offer a 10% discount for groups of 5 or more attendees registering together. Please contact us at groups@techconf2025.com for more information.",
              },
              {
                question: "What is the cancellation policy?",
                answer:
                  "Registrations can be cancelled with a full refund up to 60 days before the event. Between 30-60 days, a 50% refund is available. No refunds within 30 days of the event, but you may transfer your registration to another person.",
              },
              {
                question: "Will the sessions be recorded?",
                answer:
                  "Yes, most sessions will be recorded and available to Premium and VIP ticket holders after the conference. Standard ticket holders can purchase access to recordings for an additional fee.",
              },
              {
                question: "Is there hotel accommodation available?",
                answer:
                  "While accommodation is not included in the registration fee, we have negotiated special rates with nearby hotels. VIP ticket holders receive a discount code for partner hotels. Details will be provided in your confirmation email.",
              },
              {
                question: "Can I update my registration information later?",
                answer:
                  "Yes, you can update your personal details at any time by logging into your TechConf account. However, ticket tier changes may be subject to availability and price differences.",
              },
            ].map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <AnimationWrapper variant="slideUp" delay={0.1 * index}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                        fontWeight="bold"
                        color="primary"
                      >
                        {faq.question}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {faq.answer}
                      </Typography>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              </Grid>
            ))}
          </Grid>

          <AnimationWrapper variant="fadeIn" delay={0.6}>
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Still have questions about registration?
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleContactDialogOpen}
                sx={{ fontWeight: "medium" }}
              >
                Contact Us
              </Button>
            </Box>
          </AnimationWrapper>
        </Box>

        {/* Add countdown timer */}
        <Box sx={{ mt: 12 }}>
          <AnimationWrapper variant="zoomIn">
            <Card
              sx={{
                p: 4,
                textAlign: "center",
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "-50%",
                  left: "-10%",
                  width: "120%",
                  height: "200%",
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)",
                  opacity: 0.8,
                  zIndex: 0,
                  transform: "rotate(-10deg)",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Early Bird Registration Ends Soon!
                </Typography>

                <Typography variant="body1" sx={{ mb: 4 }}>
                  Register before December 15, 2024 to save 20% on all ticket
                  types.
                </Typography>

                <Grid
                  container
                  justifyContent="center"
                  spacing={3}
                  sx={{ mb: 4 }}
                >
                  {[
                    { value: 128, label: "Days" },
                    { value: 16, label: "Hours" },
                    { value: 42, label: "Minutes" },
                    { value: 18, label: "Seconds" },
                  ].map((item, index) => (
                    <Grid item key={index}>
                      <Paper
                        elevation={3}
                        sx={{
                          p: 2,
                          width: 80,
                          height: 80,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 2,
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          color="primary"
                        >
                          {item.value}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.label}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="#register"
                    sx={{
                      px: 5,
                      py: 1.5,
                      fontWeight: "bold",
                      boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                    }}
                  >
                    Register With Early Bird Discount
                  </Button>
                </Box>
              </Box>
            </Card>
          </AnimationWrapper>
        </Box>

        {/* Contact Dialog */}
        <Dialog
          open={contactDialogOpen}
          onClose={handleContactDialogClose}
          aria-labelledby="contact-dialog-title"
          aria-describedby="contact-dialog-description"
          PaperProps={{
            sx: {
              borderRadius: 2,
              maxWidth: "sm",
            },
          }}
        >
          <DialogTitle id="contact-dialog-title" sx={{ pb: 1 }}>
            <Typography variant="h5" fontWeight="bold">
              Contact the TechConf Team
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="contact-dialog-description" paragraph>
              We're here to help! Choose one of the following options to get in
              touch with our team about registration or any other questions you
              might have.
            </DialogContentText>
            <Box sx={{ mt: 3, mb: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <Box
                        component="span"
                        sx={{
                          fontWeight: "bold",
                          color: "primary.main",
                          mr: 1,
                        }}
                      >
                        Email:
                      </Box>
                      <Link
                        href="mailto:shahriarrifat0@gmail.com?subject=Question about TechConf 2025 Registration"
                        color="primary"
                        underline="hover"
                      >
                        shahriarrifat0@gmail.com
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Our team typically responds within 24 hours on business
                      days.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <Box
                        component="span"
                        sx={{
                          fontWeight: "bold",
                          color: "primary.main",
                          mr: 1,
                        }}
                      >
                        Phone:
                      </Box>
                      <Link
                        href="tel:+14155551234"
                        color="primary"
                        underline="hover"
                      >
                        (415) 555-1234
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Available Monday-Friday, 9AM-5PM Pacific Time
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "primary.main" }}
                    >
                      Live Chat
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      For immediate assistance, our support team is available
                      via live chat on our website.
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      fullWidth
                      sx={{ mt: 1 }}
                    >
                      Start Live Chat
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="body2" color="text.secondary" align="center">
              For group registrations (5+ attendees), please email
              groups@techconf2025.com for special rates.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={handleContactDialogClose} color="inherit">
              Close
            </Button>
            <Button
              onClick={() => {
                window.location.href =
                  "mailto:shahriarrifat0@gmail.com?subject=Question about TechConf 2025 Registration";
                handleContactDialogClose();
              }}
              color="primary"
              variant="contained"
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              }
            >
              Send Email
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Registration;
