import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import '../styles/styles.css'
import { MainBox } from '../components/MainBox'
import { PageWrapper } from '../components/PageWrapper'
import { Header } from '../layouts/Header/Header'
import { PageName } from '../components/PageName'
import { GridPageLoyaut } from '../components/GridPageLoyaut'
import { Typography } from '@mui/material'
import { Navigation } from '../layouts/Navigation/Navigation'
import { useAppSelector } from '../hooks/reduxHooks'
import { ActionsElements } from 'src/assets/BreedTypes'

export const SearchPage = () => {
    const [result, setResult] = useState<ActionsElements[]>([])

    const allBreeds = useAppSelector((state) => state.allBreeds.breeds)
    const searchInput = useAppSelector((state) => state.search.searchInput)

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

                    <Box sx={{ display: 'flex', gap: '5px', mb: '20px' }}>
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
                        array={result}
                        searchValue={'search'}
                    />
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
