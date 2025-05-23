import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar'; // ✅ just added

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar /> {/* ✅ now visible */}
        <Routes>
          {/* Pages will be added here one by one */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
