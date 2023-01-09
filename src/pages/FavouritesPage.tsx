import Box from '@mui/material/Box'
import { MainBox } from '../components/MainBox'
import { PageWrapper } from '../components/PageWrapper'
import { Header } from '../layouts/Header/Header'
import { PageName } from '../components/PageName'
import { GridPageLoyaut } from '../components/GridPageLoyaut'
import { InfoCommentVoting } from '../components/InfoCommentVoting'
import { Navigation } from '../layouts/Navigation/Navigation'
import { nanoid } from 'nanoid'
import { useAppSelector } from 'src/hooks/reduxHooks'

export const FavouritesPage = () => {
    const allFav = useAppSelector((state) => state.actions.favourites)
    const removedFav = useAppSelector((state) => state.actions.removedFav)

    return (
        <PageWrapper>
            <Navigation />
            <Box sx={{ width: { xs: '100%', xxxl: '1000px' } }}>
                <Header />
                <MainBox>
                    <PageName name='Favourites' />
                    <GridPageLoyaut array={allFav} />
                    {/* If image was remover from FavPage shows some info about this action */}
                    {removedFav.length !== 0 &&
                        removedFav.map((elem) => (
                            <InfoCommentVoting
                                id={elem.id}
                                key={nanoid()}
                                date={elem.date}
                            />
                        ))}
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
