import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useRoutes } from './routes';
import { Provider } from "react-redux";
import {store} from './redux/store'


// Breakpoints for computers and laptops are based on the most popular display sizes, such as:
// 1024x768
// 1280x720
// 1366x768
// 1440x900
// 1920x1080

function App() {
  const routes = useRoutes();
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Box p={{ xs: '20px', sm: '30px' }}>
        <CssBaseline />
        <Router>
          <div>{routes}</div>
        </Router>
      </Box>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
