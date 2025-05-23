// src/App.jsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';

// ✅ Imported so far
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          {/* More pages will be added here next */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
