import { Typography } from '@mui/material';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>MacPaw_Test</Typography>
    </ThemeProvider>
  );
}

export default App;
