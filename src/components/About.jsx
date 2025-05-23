// src/components/About.jsx
import React from 'react';
import { Container, Typography, Box, Avatar, Badge } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        {/* Avatar with a custom badge */}
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Box
              sx={{
                backgroundColor: '#ff69b4',
                color: '#000',
                px: 1.2,
                py: 0.3,
                fontSize: '0.75rem',
                fontWeight: 'bold',
                borderRadius: '12px',
                boxShadow: '0 0 4px rgba(0,0,0,0.2)',
              }}
            >
              Hi! ✨
            </Box>
          }
        >
          <Avatar
            src="https://i.pinimg.com/originals/ea/fc/15/eafc15f02d62424362d61e6d6483b573.jpg"
            alt="Stephanie"
            sx={{ width: 120, height: 120, margin: '0 auto', mb: 2 }}
          />
        </Badge>

        <Typography variant="h4" sx={{ color: '#ff69b4', fontFamily: 'Pacifico, cursive' }}>
          About Me 💕
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.8 }}>
        Hello! I'm Stephanie Njonjo from Nairobi, Kenya 🌍. I'm a passionate front-end developer who
        loves creating clean, responsive, and beautiful web applications using React, JavaScript,
        and Material UI. I'm currently finishing up my training at Moringa School and always eager
        to learn something new ✨.
      </Typography>
    </Container>
  );
}

export default About;
