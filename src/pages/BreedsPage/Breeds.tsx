import { useEffect } from 'react'
import 'src/styles/styles.css'
import Box from '@mui/material/Box'
import { fetchAllBreeds } from 'src/redux/allBreedsReducer'
import { MainBox } from 'src/components/MainBox'
import { PageWrapper } from 'src/components/PageWrapper'
import { Header } from 'src/layouts/Header/Header'
import { PageName } from 'src/components/PageName'
import { SelectComponent } from 'src/components/SelectComponent'
import { ImageGalleryTemplateBreeds } from './components/ImageGalleryTemplateBreeds'
import { SortButtons } from './components/SortButtons'
import { PrevNextButtonsBreeds } from './components/PrevNextButtonsBreeds'
import { ScrollToTop } from 'src/components/ScrollToTop'
import { Navigation } from 'src/layouts/Navigation/Navigation'
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks'
import { useDefAndRevSort } from './hooks/useDefAndRevSort'
import { useGetLimitBreeds } from './hooks/useGetLimitBreeds'
import { useGetSelectedBreed } from './hooks/useGetSelectedBreed'

export const Breeds = () => {
    const dispatch = useAppDispatch()

    const allBreeds = useAppSelector((state) => state.allBreeds.breeds)
    const limitedBreeds = useAppSelector((state) => state.allBreeds.limBreeds)
    const breedsStatus = useAppSelector((state) => state.allBreeds.status)
    const breedsError = useAppSelector((state) => state.allBreeds.error)

    //Fetches all breeds from API
    useEffect(() => {
        dispatch(fetchAllBreeds())
    }, [dispatch])

    //Get limit breeds dependes on chosen limit value
    const { limit, onHandleLimitChange, arrayLimit } = useGetLimitBreeds()

    //Get breed dependes on chosen breed value
    const { breed, onHandleBreedsChange } = useGetSelectedBreed()

    const {
        isActiveDefaultSort,
        isActiveReversSort,
        onClickHandleDefaultSort,
        onClickHandleReverseSort,
    } = useDefAndRevSort()

    return (
        <PageWrapper>
            <Navigation />
            <Box sx={{ width: { xs: '100%', xxxl: '1000px' } }}>
                <Header />
                <MainBox sx={{ position: 'relative' }}>
                    <Box
                        sx={{
                            display: { md: 'flex', lg: 'block', xxl: 'flex' },
                            justifyContent: { md: 'space-between', xxl: 'flex-start' },
                            gap: { md: '10px' },
                            alignItems: { md: 'flex-start' },
                            mb: { xs: '20px', md: 0, lg: '20px', xxl: 0 },
                        }}
                    >
                        <PageName name='Breeds' />
                        <Box
                            mb={'10px'}
                            width={'100%'}
                        >
                            {/* Breed select categorie */}
                            <SelectComponent
                                firstParam='All breeds'
                                array={allBreeds.length > 0 ? allBreeds : []}
                                onChange={onHandleBreedsChange}
                                value={breed}
                                status={breedsStatus}
                                error={breedsError}
                            />
                        </Box>
                        <Box
                            display={'flex'}
                            gap={'10px'}
                            width={'100%'}
                        >
                            {/* Limit breeds on page select categorie */}
                            <SelectComponent
                                array={arrayLimit.length > 0 ? arrayLimit : []}
                                value={limit}
                                onChange={onHandleLimitChange}
                            />
                            {/* Sort buttons */}
                            <SortButtons
                                onClickHandleReverseSort={onClickHandleReverseSort}
                                onClickHandleDefaultSort={onClickHandleDefaultSort}
                                isActiveReversSort={isActiveReversSort}
                                isActiveDefaultSort={isActiveDefaultSort}
                            />
                        </Box>
                    </Box>
                    {/* GridBox with all placed breeds that are fetching from API */}
                    <ImageGalleryTemplateBreeds
                        limitedBreedsArray={limit ? limitedBreeds : []}
                        status={breedsStatus}
                        error={breedsError}
                        selectedBreed={breed}
                        isActiveReversSort={isActiveReversSort}
                        isActiveDefaultSort={isActiveDefaultSort}
                    />
                    {breed === '' && breedsStatus !== 'loading' && (
                        <PrevNextButtonsBreeds limit={limit} />
                    )}

                    <ScrollToTop />
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
