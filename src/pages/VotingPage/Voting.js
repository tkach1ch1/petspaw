import React from 'react'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { MainBox } from '../../components/MainBox'
import { PageWrapper } from '../../components/PageWrapper'
import { Header } from '../../layouts/Header/Header'
import { PageName } from '../../components/PageName'
import { ChosenImage } from './components/ChosenImage'
import { ChoisesButtons } from './components/ChoisesButtons'
import { InfoCommentVoting } from '../../components/InfoCommentVoting'
import { ScrollToTop } from '../../components/ScrollToTop'
import { Navigation } from '../../layouts/Navigation/Navigation'
import { nanoid } from 'nanoid'

export const Voting = () => {
    const all = useSelector((state) => state.actions.all)
    const imageStatus = useSelector((state) => state.votingPage.status)

    return (
        <PageWrapper>
            <Navigation />
            <Box>
                <Header />
                <MainBox>
                    <PageName name='Voting' />
                    <Box>
                        <ChosenImage />
                    </Box>
                    {imageStatus !== 'loading' && <ChoisesButtons />}
                    <Box>
                        {/* Shows info about actions user did on VotingPage */}
                        {all.map((obj) => (
                            <InfoCommentVoting
                                id={obj.id}
                                key={nanoid}
                                value={obj.value}
                                date={obj.date}
                                votingValue={'voting'}
                            />
                        ))}
                    </Box>
                    <ScrollToTop />
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
