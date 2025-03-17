// src/App.tsx
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import FloatingAction from "./components/FloatingAction";
import { Container, CssBaseline } from "@mui/material";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline />
      <AnimatePresence>
        {loading ? (
          <LoadingScreen />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <main style={{ flexGrow: 1 }}>
              <Hero />
              <About />
              <Speakers />
              <Schedule />
              <Registration />
            </main>
            <Footer />
            <FloatingAction />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
