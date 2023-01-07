import React from 'react'
import '../styles/styles.css'
import Box from '@mui/material/Box'
import { Categories } from '../layouts/Navigation/Categories'
import { PageWrapper } from '../components/PageWrapper'
import girlAndPet from '../img/girl-and-pet 1.png'
import styled from '@emotion/styled'
import { theme } from '../styles/theme'

const MainBoxHome = styled(Box)({
    borderRadius: '20px',
    backgroundColor: '#FBE0DC',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
        display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block',
    },
})

export const Home = () => {
    return (
        <PageWrapper>
            <Categories />

            <MainBoxHome>
                <img
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                    src={girlAndPet}
                    alt='girl-and-pet'
                />
            </MainBoxHome>
        </PageWrapper>
    )
}
