import { Box, IconButton } from '@mui/material'
import { styled } from '@mui/system'
import 'src/styles/styles.css'

export const StyledIconButton = styled(IconButton)({
    padding: '10px',
    width: '60px',
    backgroundColor: 'white',
    borderRadius: '20px',
    '&:hover': {
        backgroundColor: 'var(--light-red)',
        transition: 'all 0.3s',
    },
})

export const BoxWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    width: '100%',
})

export const StyledMenuDrawer = styled(Box)({
    position: 'absolute',
    zIndex: 1000,
    right: 0,
    top: 0,
    left: 0,
    height: '95vh',
    backgroundColor: '#F8F8F7',
    padding: '20px',
    margin: '-20px',
})

// -- Search bar  -- //

export const StyledInput = styled('input')({
    padding: '17px 60px 16px 20px',
    borderRadius: '20px',
    width: '100%',
    border: '2px solid #ffffff',
    fontSize: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '&::placeholder': {
        color: 'var(--gray)',
        fontFamily: 'Jost',
        fontSize: '20px',
        position: 'relative',
    },
    '&:hover': {
        border: '2px solid var(--light-red)',
        transition: 'all 0.2s',
    },
    '&:focus': {
        border: '2px solid #ff868e',
        outline: 'none',
    },
    '&:hover::placeholder': {
        color: 'transparent',
        transition: 'all 0.2s',
    },
    '&:focus::placeholder': {
        color: 'transparent',
    },
})

export const StyleImg = styled('img')({
    position: 'absolute',
    right: '10px',
    top: '10px',
    padding: '10px 10px',
    borderRadius: '10px',
    backgroundColor: 'var(--light-red)',
    cursor: 'pointer',
})

// -- //
