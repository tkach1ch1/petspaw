import { Box } from '@mui/system'
import React from 'react'
import { Categories } from './Categories'

export const Navigation = () => {
    return (
        <Box
            sx={{
                display: { xs: 'none', lg: 'block' },
            }}
        >
            <Categories />
        </Box>
    )
}
