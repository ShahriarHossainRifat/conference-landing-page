// src/components/Header.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "../contexts/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

interface HideOnScrollProps {
  children: React.ReactElement;
  window?: () => Window;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Update the Header component props type
interface HeaderProps {
  window?: () => Window;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Speakers", href: "speakers" },
    { name: "Schedule", href: "schedule" },
    { name: "Register", href: "register", isButton: true },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TechConf 2025
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ScrollLink
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              style={{ width: "100%" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px)",
          background:
            mode === "light"
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(18, 18, 18, 0.8)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          borderBottom: "1px solid",
          borderColor:
            mode === "light"
              ? "rgba(0, 0, 0, 0.05)"
              : "rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Rest of the component remains the same */}
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: "bold",
                  mr: 4,
                  background: "linear-gradient(90deg, #3B82F6, #10B981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                TechConf 2025
              </Typography>
            </motion.div>

            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                {navItems.map((item, index) =>
                  item.isButton ? (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ ml: 2 }}
                        >
                          {item.name}
                        </Button>
                      </ScrollLink>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        activeClass="active"
                      >
                        <Button
                          sx={{
                            mx: 1,
                            "&.active": {
                              color: "primary.main",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          {item.name}
                        </Button>
                      </ScrollLink>
                    </motion.div>
                  )
                )}
              </Box>
            </Box>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </motion.div>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
