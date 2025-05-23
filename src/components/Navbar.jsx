// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo or Name */}
        <Typography variant="h6" sx={{ fontFamily: 'Pacifico, cursive', color: '#ff69b4' }}>
          Stephanie 💖
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          {['/', 'about', 'skills', 'projects', 'resume', 'contact'].map((page) => (
            <Button
              key={page}
              component={Link}
              to={page === '/' ? '/' : `/${page}`}
              sx={{ color: '#ff69b4', textTransform: 'none', fontWeight: 'bold' }}
            >
              {page === '/' ? 'Home' : page.charAt(0).toUpperCase() + page.slice(1)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
