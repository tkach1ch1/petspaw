import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import { MainBox } from '../components/MainBox'
import { PageWrapper } from '../components/PageWrapper'
import { Header } from '../layouts/Header/Header'
import { PageName } from '../components/PageName'
import { GridPageLoyaut } from '../components/GridPageLoyaut'
import { Navigation } from '../layouts/Navigation/Navigation'

export const DislikesPage = () => {
    const allDislikes = useSelector((state) => state.actions.dislikes)

    return (
        <PageWrapper>
            <Navigation />
            <Box>
                <Header />
                <MainBox>
                    <PageName name='Dislikes' />
                    <GridPageLoyaut arr={allDislikes} />
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
