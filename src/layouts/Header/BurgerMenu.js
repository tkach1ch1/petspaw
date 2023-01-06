import React, { useState } from 'react'
import '../../styles/styles.css'
import MenuIcon from '@mui/icons-material/MenuOutlined'
import { Box } from '@mui/material'
import { MenuDrawer } from './MenuDrawer'
import { StyledIconButton } from './style/style'

//NOTE: Burger menu button

export const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    const handleMenuOpen = () => {
        setOpen(true)
    }

    const handleMenuClose = () => {
        setOpen(false)
    }

    return (
        <Box>
            <StyledIconButton
                size='medium'
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={handleMenuOpen}
                sx={{
                    display: { sx: 'block', lg: 'none' },
                    mr: { sx: '10px' },
                }}
            >
                <MenuIcon sx={{ fontSize: '38px', color: 'var(--main-red)' }} />
            </StyledIconButton>
            {open && <MenuDrawer handleMenuClose={handleMenuClose} />}
        </Box>
    )
}
