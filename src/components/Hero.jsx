// src/components/Hero.jsx
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 3,
      }}
    >
      {/* Big Heading */}
      <Typography variant="h2" sx={{ fontFamily: 'Pacifico, cursive', color: '#ff69b4' }}>
        Hi, I'm Stephanie! 🌸
      </Typography>

      {/* Subheading */}
      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Front-End Developer ✨ I build beautiful, clean, and responsive web apps with React & love 💻💕
      </Typography>

      {/* CTA */}
      <Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/projects"
          sx={{ borderRadius: '20px', px: 4 }}
        >
          See My Work
        </Button>
      </Box>
    </Container>
  );
}

export default Hero;
