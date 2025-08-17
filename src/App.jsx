import React from 'react';
import Landing from './pages/landing';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';

// Custom theme with font + background color
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#568F87", // ✅ your custom background
          margin: 0,
          marginTop:30,
          padding: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Landing />
      </Box>
    </ThemeProvider>
  );
}

export default App;
