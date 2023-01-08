import Box from '@mui/material/Box'
import { MainBox } from '../components/MainBox'
import { PageWrapper } from '../components/PageWrapper'
import { Header } from '../layouts/Header/Header'
import { PageName } from '../components/PageName'
import { GridPageLoyaut } from '../components/GridPageLoyaut'
import { Navigation } from '../layouts/Navigation/Navigation'
import { useAppSelector } from 'src/hooks/reduxHooks'

export const DislikesPage = () => {
    const allDislikes = useAppSelector((state) => state.actions.dislikes)

    return (
        <PageWrapper>
            <Navigation />
            <Box>
                <Header />
                <MainBox>
                    <PageName name='Dislikes' />
                    <GridPageLoyaut array={allDislikes} />
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
