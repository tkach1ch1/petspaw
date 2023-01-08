import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import { StyledPageName } from 'src/components/style/style'
import 'src/styles/styles.css'

export const StyledId = styled(StyledPageName)({
    height: 'fit-content',
})

export const StyledFieldset = styled('fieldset')({
    border: '2px solid var(--light-red)',
    borderRadius: '20px',
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
