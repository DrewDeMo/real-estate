import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#940000', // Red
    },
    secondary: {
      main: '#12283E', // Dark Blue
    },
    background: {
      default: '#FFFFFF', // White
      paper: '#FFFFFF', // White
    },
    text: {
      primary: '#000000', // Black
      secondary: '#666666', // Dark Gray
    },
  },
  typography: {
    fontFamily: 'Manrope, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
