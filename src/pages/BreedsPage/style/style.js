import { Box } from '@mui/material'
import { styled } from '@mui/system'
import '../../../styles/styles.css'

export const StyledGrid = styled(Box)({
    position: 'relative',
    gridGap: '20px',
    gridAutoRows: '150px',
    gridAutoFlow: 'dense',
    gridTemplateColumns: 'repeat(3, 1fr)',
})

export const DisabledButton = styled(Box)({
    color: 'var(--gray)',
    backgroundColor: 'var(--main-gray)',
    display: 'flex',
    alignItems: 'center',
    height: 'fit-content',
    justifyContent: 'center',
    gap: '15px',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '500',
    borderRadius: '10px',
    letterSpacing: '2px',
})

export const SortButton = styled(Box)({
    background: 'var(--main-gray)',
    padding: '8px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    border: '2px solid transparent',
    '&:hover': {
        border: '2px solid var(--light-red)',
    },
})
