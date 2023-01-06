import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import { MainBox } from '../components/MainBox'
import { PageWrapper } from '../components/PageWrapper'
import { Header } from '../layouts/Header/Header'
import { PageName } from '../components/PageName'
import { GridPageLoyaut } from '../components/GridPageLoyaut'
import { Navigation } from '../layouts/Navigation/Navigation'

export const LikesPage = () => {
    const allLikes = useSelector((state) => state.actions.likes)

    return (
        <PageWrapper>
            <Navigation />
            <Box>
                <Header />
                <MainBox>
                    <PageName name='Likes' />
                    <GridPageLoyaut arr={allLikes} />
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
