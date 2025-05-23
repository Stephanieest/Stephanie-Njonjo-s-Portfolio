// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff69b4', // Hot Pink
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffcc00', // Cute yellow
      contrastText: '#000000',
    },
    background: {
      default: '#fffafc', // Soft cream
      paper: '#ffeef3', // Light pink card
    },
    text: {
      primary: '#333',
      secondary: '#ffb6c1', // Light pink secondary
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontFamily: 'Pacifico, cursive', // For headings
    },
  },
});

export default theme;
