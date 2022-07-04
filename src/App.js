import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/system';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Breeds from './pages/Breeds';
import Gallery from './pages/Gallery';
import Voting from './pages/Voting';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={{ xs: '20px', sm: '30px' }}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='breeds' element={<Breeds />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='voting' element={<Voting />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
