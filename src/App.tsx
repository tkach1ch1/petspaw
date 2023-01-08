import { theme } from './styles/theme'
import { ThemeProvider } from '@mui/system'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { CssBaseline } from '@mui/material'
import { Routing } from './features/Routing'

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Routing />
                </CssBaseline>
            </ThemeProvider>
        </Provider>
    )
}

export default App
