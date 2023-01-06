import React, { useEffect } from 'react'
import '../../styles/styles.css'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import { PageWrapper } from '../../components/PageWrapper'
import { Header } from '../../layouts/Header/Header'
import { PageName } from '../../components/PageName'
import { MainBox } from '../../components/MainBox'
import { SwiperInfoPage } from '../BreedsInfoPage/components/SwiperInfoPage'
import { InfoTextBreedsId } from '../BreedsInfoPage/components/InfoTextBreedsId'
import { fetchImagesByBreedsId } from '../../redux/allBreedsReducer'
import { Navigation } from '../../layouts/Navigation/Navigation'
import { StyledCircularProgress } from '../../components/style/style'
import { StyledId } from './style/style'
import { nanoid } from 'nanoid'

//NOTE:Gives info about certain breed that was chosen on BreedsPage

export const BreedsInfoPage = () => {
    const allBreeds = useSelector((state) => state.allBreeds.breeds)
    const imagesStatus = useSelector((state) => state.allBreeds.status)

    // Based on breed id fetching certain breed images for Swiper
    const breedId = useSelector((state) => state.allBreeds.breedsId)
    const allImagesById = useSelector((state) => state.allBreeds.imagesById)

    // Finding certain breed based on id and showing breed info.
    const breedInfo = allBreeds.filter((elem) => elem.id === breedId)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImagesByBreedsId({ breedId }))
    }, [dispatch, breedId])

    let content

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
    } else if (imagesStatus === 'succeeded' && allImagesById.length > 0) {
        content = <SwiperInfoPage allImagesById={allImagesById} />
    }

    return (
        <div>
            {breedInfo.map((elem) => (
                <PageWrapper key={nanoid}>
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
                                description={elem.description}
                                origin={elem.origin}
                                life_span={elem.life_span}
                                weight={elem.weight.metric}
                                temperament={elem.temperament}
                            />
                        </MainBox>
                    </Box>
                </PageWrapper>
            ))}
        </div>
    )
}
