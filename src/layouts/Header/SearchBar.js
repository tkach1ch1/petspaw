import React, { useState } from 'react'
import '../../styles/styles.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import { addSearchInput } from '../../redux/searchReducer'
import search_sign from '../../img/search.svg'
import { StyledInput, StyleImg } from './style/style'

export const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    //Form controll
    const onHandleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    let navigate = useNavigate()

    // On Enter click if search bar input istn't empty navigate to SearchPage and addes value from SearchBar to state
    // Else if user is already on SearchPage only changes the value of the input state
    const onHandleKeyPress = (target) => {
        if (target.charCode === 13 && search !== '') {
            navigate('/search')
            dispatch(addSearchInput(search.trim()))
        } else if (target.charCode === 13) {
            dispatch(addSearchInput(search.trim()))
        }
    }

    const onHandleClick = () => {
        navigate('/search')
        dispatch(addSearchInput(search.trim()))
    }

    return (
        <Box
            sx={{
                display: props.display,
                width: '100%',
                margin: { md: '0 10px', lg: '0' },
            }}
            position={'relative'}
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
