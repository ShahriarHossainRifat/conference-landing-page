// src/components/FloatingAction.tsx
import React, { useState } from "react";
import {
  Box,
  Fab,
  Zoom,
  Tooltip,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useScrollTrigger,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShareIcon from "@mui/icons-material/Share";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const FloatingAction: React.FC = () => {
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actions = [
    {
      icon: <CalendarMonthIcon />,
      name: "Add to Calendar",
      action: () => {
        // Logic to add to calendar
        alert("Calendar event added");
      },
    },
    {
      icon: <TwitterIcon />,
      name: "Share on Twitter",
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?text=Join me at TechConf 2025, the premier tech event of the year! Register now at techconf2025.com`,
          "_blank"
        ),
    },
    {
      icon: <LinkedInIcon />,
      name: "Share on LinkedIn",
      action: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=techconf2025.com`,
          "_blank"
        ),
    },
    {
      icon: <WhatsAppIcon />,
      name: "Share on WhatsApp",
      action: () =>
        window.open(
          `https://wa.me/?text=Join me at TechConf 2025, the premier tech event of the year! Register now at techconf2025.com`,
          "_blank"
        ),
    },
  ];

  return (
    <Box sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 10 }}>
      <Zoom in={trigger}>
        <Box sx={{ position: "absolute", bottom: 70, right: 0 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="home" smooth={true} duration={800}>
              <Tooltip title="Back to top" placement="left">
                <Fab
                  color="secondary"
                  size="medium"
                  aria-label="scroll back to top"
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </Tooltip>
            </ScrollLink>
          </motion.div>
        </Box>
      </Zoom>

      <SpeedDial
        ariaLabel="Share and actions"
        icon={<SpeedDialIcon openIcon={<ShareIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="up"
        FabProps={{
          sx: {
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              action.action();
              handleClose();
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default FloatingAction;
