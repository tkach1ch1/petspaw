import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#8C8C8C', // gray
      main: '#1D1D1D', // black
    },
    secondary: {
      light: '#FBE0DC', // light-red
      main: '#FF868E', // red
    },
  },
  typography: {
    fontFamily: 'Jost',
    fontWeightRegular: 400,
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: {
      xs: 375, // min-width for mobile devices
      sm: 480, // min-width for tablets
      md: 768,  // min-width for small screens, laptops
      lg: 1024, // min-width for the rest screens
      xl: 1200,
      xxl: 1440,
    }
  }
});
