import { Box } from '@mui/material'
import { styled } from '@mui/system'
import '../../../styles/styles.css'
import { NavLink as BaseNavLink } from 'react-router-dom'

export const ImgBox = styled(Box)({
    width: '130px',
    height: '190px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
})
