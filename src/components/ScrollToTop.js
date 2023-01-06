import React from 'react'
import '../styles/styles.css'
import { Fade, useScrollTrigger } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ScrollBox, StyledToTopButton } from './style/style'

export const ScrollToTop = () => {
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: 10,
    })

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    return (
        <Fade in={trigger}>
            <ScrollBox
                onClick={handleClick}
                role='presentation'
            >
                <StyledToTopButton
                    size='small'
                    aria-label='scroll back to top'
                >
                    <KeyboardArrowUpIcon color='primary' />
                </StyledToTopButton>
            </ScrollBox>
        </Fade>
    )
}
