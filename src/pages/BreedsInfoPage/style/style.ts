import { theme } from 'src/styles/theme'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import { StyledPageName } from 'src/components/style/style'
import 'src/styles/styles.css'
import { Swiper } from 'swiper/react'

export const StyledSwiper = styled(Swiper)({
    position: 'absolute',
    [theme.breakpoints.up('lg')]: {
        height: '100%',
        width: '100%',
    },
    [theme.breakpoints.down('lg')]: {
        height: '400px',
        width: '800px',
    },
    [theme.breakpoints.down('md')]: {
        height: '400px',
        width: '650px',
    },
    [theme.breakpoints.down('sm')]: {
        height: '300px',
        width: '370px',
    },
})

export const StyledId = styled(StyledPageName)({
    height: 'fit-content',
})

export const StyledFieldset = styled('fieldset')({
    border: '2px solid var(--light-red)',
    borderRadius: '20px',
    [theme.breakpoints.down('lg')]: {
        marginTop: '70px',
    },
    [theme.breakpoints.down('md')]: {
        marginTop: '180px',
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '110px',
    },
})

export const StyledLegend = styled('legend')({
    fontSize: '36px',
    fontWeight: '500',
    padding: '16px 20px',
    textAlign: 'center',
    color: 'var(--black)',
})

export const TypographyMainTitle = styled(Typography)({
    fontWeight: '500',
    color: 'var(--gray)',
})

export const TypographyTitle = styled(Typography)({
    fontWeight: '500',
    color: 'var(--black)',
})

export const TypographyDescription = styled(Typography)({
    color: 'var(--gray)',
})

export const StyledSwiperImg = styled('img')({
    display: 'block',
    height: 'auto',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '20px',
})

export const StyledImgNotFound = styled('img')({
    width: '100%',
    borderRadius: '20px',
})
