import 'src/styles/styles.css'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import search_sign from 'src/img/svg/search.svg'
import { StyledInput, StyleImg } from './style/style'
import { useSearch } from './hooks/useSearch'

interface SearchBarProps {
    display: { xs: string; md: string }
}

export const SearchBar = ({ display }: SearchBarProps) => {
    const { onHandleSearchChange, onHandleKeyPress, onHandleClick } = useSearch()
    return (
        <Box
            sx={{
                display: display,
                width: '100%',
                margin: { md: '0 10px', lg: '0' },
                position: 'relative',
            }}
            onChange={onHandleSearchChange}
            onKeyPress={onHandleKeyPress}
        >
            <StyledInput
                type='text'
                placeholder='Search for breeds by name'
            />
            <Link
                to='/search'
                onClick={onHandleClick}
            >
                <StyleImg
                    src={search_sign}
                    alt='search_sign'
                />
            </Link>
        </Box>
    )
}
