import React from 'react'
import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Category } from '../Navigation/Category'
import { StyledIconButton, StyledMenuDrawer } from './style/style'
import '../../styles/styles.css'

export const MenuDrawer = (props) => {
    return (
        <StyledMenuDrawer sx={{ display: { xs: 'block', lg: 'none' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <StyledIconButton
                    sx={{ mb: '20px' }}
                    onClick={props.handleMenuClose}
                >
                    <CloseIcon sx={{ fontSize: '38px', color: 'var(--main-red)' }} />
                </StyledIconButton>
            </Box>

            <Category />
        </StyledMenuDrawer>
    )
}
