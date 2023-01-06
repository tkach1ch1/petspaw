import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import '../styles/styles.css'
import { MainBox } from '../components/MainBox'
import { PageWrapper } from '../components/PageWrapper'
import { Header } from '../layouts/Header/Header'
import { PageName } from '../components/PageName'
import { GridPageLoyaut } from '../components/GridPageLoyaut'
import { Typography } from '@mui/material'
import { Navigation } from '../layouts/Navigation/Navigation'
import { nanoid } from 'nanoid'

export const SearchPage = () => {
    const [result, setResult] = useState([])

    const allBreeds = useSelector((state) => state.allBreeds.breeds)
    const searchInput = useSelector((state) => state.search.searchInput)

    // Takes search input from search bar, looks for a match and then returns all found breeds
    useEffect(() => {
        if (searchInput !== '') {
            let foundResult = allBreeds.filter((elem) =>
                elem.name.toLowerCase().startsWith(searchInput.toLowerCase())
            )
            setResult(foundResult)
        } else if (searchInput === '') {
            setResult([])
        }
    }, [allBreeds, searchInput])

    return (
        <PageWrapper>
            <Navigation />
            <Box>
                <Header />
                <MainBox>
                    <PageName name='Search' />

                    <Box
                        sx={{ display: 'flex', gap: '5px', mb: '20px' }}
                        key={nanoid}
                    >
                        <Typography sx={{ fontSize: '20px', color: 'var(--gray)' }}>
                            Search result for:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '20px',
                                color: 'var(--black)',
                                fontWeight: '500',
                            }}
                        >
                            {searchInput}
                        </Typography>
                    </Box>

                    <GridPageLoyaut
                        arr={result}
                        searchValue={'search'}
                    />
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
