import { createTheme } from '@mui/material/styles'

//I don't change .js to .ts in theme.js because of breackpoints.
//In .js we can set as much breackpoints as we want, but in .ts there are
//limited breackpoints quantity that cannot be changed in MUI yet.
export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F8F8F7',
                    color: '#1D1D1D', // black
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#8C8C8C', // gray
        },
        secondary: {
            light: '#FBE0DC', // light-red
            main: '#FF868E', // red
        },
    },
    typography: {
        allVariants: {
            fontFamily: `'Jost', sans-serif`,
        },
        h1: {
            fontSize: 44,
            fontWeight: 500,
        },
    },
    breakpoints: {
        keys: ['xs', 'sm', 'sg', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
        values: {
            xs: 0, // min-width for mobile devices
            sm: 480, // min-width for tablets
            sg: 550,
            md: 768, // min-width for small screens, laptops
            lg: 1024, // 1024x768
            xl: 1280, // 1280x720
            xxl: 1440, // 1440x900
            xxxl: 1850, // 1600x900
        },
    },
})
