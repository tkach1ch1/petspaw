import { ReactElement, useEffect } from 'react'
import 'src/styles/styles.css'
import Box from '@mui/material/Box'
import { PageWrapper } from 'src/components/PageWrapper'
import { Header } from 'src/layouts/Header/Header'
import { PageName } from 'src/components/PageName'
import { MainBox } from 'src/components/MainBox'
import { SwiperInfoPage } from './components/SwiperInfoPage'
import { InfoTextBreedsId } from './components/InfoTextBreedsId'
import { fetchImagesByBreedsId } from 'src/redux/allBreedsReducer'
import { Navigation } from 'src/layouts/Navigation/Navigation'
import { StyledCircularProgress } from 'src/components/style/style'
import { StyledId } from './style/style'
import { nanoid } from 'nanoid'
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks'

//NOTE:Gives info about certain breed that was chosen on BreedsPage

export const BreedsInfoPage = () => {
    const allBreeds = useAppSelector((state) => state.allBreeds.breeds)
    const imagesStatus = useAppSelector((state) => state.allBreeds.status)
    const imagesError = useAppSelector((state) => state.allBreeds.error)

    // Based on breed id fetching certain breed images for Swiper
    const breedId = useAppSelector((state) => state.allBreeds.breedsId)
    const allImagesByIdArray = useAppSelector((state) => state.allBreeds.imagesById)

    // Finding certain breed based on id and showing breed info.
    const breedInfo = allBreeds.filter((elem) => elem.id === breedId)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchImagesByBreedsId({ breedId }))
    }, [dispatch, breedId])

    let content: ReactElement

    if (imagesStatus === 'loading') {
        content = (
            <StyledCircularProgress
                sx={{
                    top: { xs: '50px', md: '120px' },
                }}
                size={'100px'}
                color='secondary'
            />
        )
    } else if (imagesStatus === 'succeeded' && allImagesByIdArray.length > 0) {
        content = <SwiperInfoPage allImagesByIdArray={allImagesByIdArray} />
    } else if (imagesStatus === 'failed') {
        content = <div>{imagesError}</div>
    }

    return (
        <div>
            {breedInfo.map((elem) => (
                <PageWrapper key={nanoid()}>
                    <Navigation />
                    <Box>
                        <Header />
                        <MainBox>
                            <Box
                                display={'flex'}
                                gap={'10px'}
                                mb={'10px'}
                            >
                                <PageName name='Breeds' />
                                <StyledId sx={{ padding: { xs: '5px 17px', md: '5px 30px' } }}>
                                    {elem.id}
                                </StyledId>
                            </Box>
                            <Box
                                sx={{
                                    height: { xs: '170px', sm: '230px', md: '360px' },
                                }}
                                position={'relative'}
                                display={'flex'}
                                justifyContent={'center'}
                            >
                                {content}
                            </Box>

                            <InfoTextBreedsId
                                name={elem.name}
                                description={elem.description ? elem.description : ''}
                                origin={elem.origin ? elem.origin : ''}
                                life_span={elem.life_span ? elem.life_span : ''}
                                metric={elem.weight ? elem.weight.metric : ''}
                                temperament={elem.temperament ? elem.temperament : ''}
                            />
                        </MainBox>
                    </Box>
                </PageWrapper>
            ))}
        </div>
    )
}
