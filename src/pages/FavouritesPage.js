import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import { MainBox } from '../components/MainBox'
import { PageWrapper } from '../components/PageWrapper'
import { Header } from '../layouts/Header/Header'
import { PageName } from '../components/PageName'
import { GridPageLoyaut } from '../components/GridPageLoyaut'
import { InfoCommentVoting } from '../components/InfoCommentVoting'
import { Navigation } from '../layouts/Navigation/Navigation'
import { nanoid } from 'nanoid'

export const FavouritesPage = () => {
    const allFav = useSelector((state) => state.actions.favourites)
    const removedFav = useSelector((state) => state.actions.removedFav)

    return (
        <PageWrapper>
            <Navigation />
            <Box>
                <Header />
                <MainBox>
                    <PageName name='Favourites' />
                    <GridPageLoyaut arr={allFav} />
                    {/* If image was remover from FavPage shows some info about this action */}
                    {removedFav.length !== 0 &&
                        removedFav.map((elem) => (
                            <InfoCommentVoting
                                id={elem.id}
                                key={nanoid}
                                date={elem.date}
                            />
                        ))}
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
