import Box from '@mui/material/Box'
import { MainBox } from 'src/components/MainBox'
import { PageWrapper } from 'src/components/PageWrapper'
import { Header } from 'src/layouts/Header/Header'
import { PageName } from 'src/components/PageName'
import { ChosenImage } from './components/ChosenImage'
import { ChoisesButtons } from './components/ChoisesButtons'
import { InfoCommentVoting } from 'src/components/InfoCommentVoting'
import { ScrollToTop } from 'src/components/ScrollToTop'
import { Navigation } from 'src/layouts/Navigation/Navigation'
import { nanoid } from 'nanoid'
import { useAppSelector } from 'src/hooks/reduxHooks'

export const Voting = () => {
    const all = useAppSelector((state) => state.actions.all)
    const imageStatus = useAppSelector((state) => state.votingPage.status)

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
                                key={nanoid()}
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
