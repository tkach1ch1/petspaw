import { theme } from 'src/styles/theme'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import 'src/styles/styles.css'
import { NavLink as BaseNavLink } from 'react-router-dom'

export const NavigationBox = styled(Box)({
    [theme.breakpoints.up('xs')]: {
        display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block',
    },
})

export const ImgBox = styled(Box)({
    width: '130px',
    height: '190px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: {
        width: '105px',
        height: '150px',
    },
})

export const StyledCategImg = styled('img')({
    [theme.breakpoints.down('xl')]: {
        width: '85px',
        height: '95px',
    },
})

export const CategoryWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'center',
})

export const StyledBaseNavLinkImg = styled(BaseNavLink)({
    borderRadius: '20px',
    '&:hover': {
        border: '4px solid #FFFFFF',
        transition: '0.4s ease',
    },
    [theme.breakpoints.down('xl')]: {
        width: '105px',
        height: '150px',
    },
})
