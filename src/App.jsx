// src/App.jsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // ✅ NEW

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} /> {/* ✅ NEW */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
