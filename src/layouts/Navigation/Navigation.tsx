import { Box } from '@mui/system'
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
