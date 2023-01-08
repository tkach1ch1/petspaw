import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Category } from '../Navigation/Category'
import { StyledIconButton, StyledMenuDrawer } from './style/style'
import 'src/styles/styles.css'

interface MenuDrawerProps {
    handleMenuClose: () => void
}

export const MenuDrawer = ({ handleMenuClose }: MenuDrawerProps) => {
    return (
        <StyledMenuDrawer sx={{ display: { xs: 'block', lg: 'none' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <StyledIconButton
                    sx={{ mb: '20px' }}
                    onClick={handleMenuClose}
                >
                    <CloseIcon sx={{ fontSize: '38px', color: 'var(--main-red)' }} />
                </StyledIconButton>
            </Box>

            <Category />
        </StyledMenuDrawer>
    )
}
