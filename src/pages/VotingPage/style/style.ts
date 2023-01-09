import { theme } from 'src/styles/theme'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import 'src/styles/styles.css'

export const ChosenImageBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.up('xs')]: {
        height: '170px',
    },
    [theme.breakpoints.up('xs')]: {
        height: '250px',
    },
    [theme.breakpoints.up('xs')]: {
        height: '360px',
    },
})

export const ImgStyle = styled('img')({
    [theme.breakpoints.up('xs')]: {
        height: '170px',
    },
    [theme.breakpoints.up('xs')]: {
        height: '250px',
    },
    [theme.breakpoints.up('xs')]: {
        height: '360px',
    },
})

export const MainWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
})

export const ButtonsWrapper = styled(Box)({
    display: 'flex',
    gap: '3px',
    position: 'absolute',
    border: '4px solid white',
    backgroundColor: 'white',
})

export const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        transition: 'all 0.3s',
    },
})
