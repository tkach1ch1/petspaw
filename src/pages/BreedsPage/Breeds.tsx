import React, { useEffect, useState } from 'react'
import 'src/styles/styles.css'
import Box from '@mui/material/Box'
import { fetchAllBreeds, fetchLimitBreeds } from 'src/redux/allBreedsReducer'
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

export const Breeds = () => {
    const allBreeds = useAppSelector((state) => state.allBreeds.breeds)
    const limitedBreeds = useAppSelector((state) => state.allBreeds.limBreeds)
    const breedsStatus = useAppSelector((state) => state.allBreeds.status)
    const breedsError = useAppSelector((state) => state.allBreeds.error)

    const dispatch = useAppDispatch()

    //State and anctions for limit select
    const arrayLimit = [
        { name: 'Limit: 5', value: 5 },
        { name: 'Limit: 10', value: 10 },
        { name: 'Limit: 15', value: 15 },
        { name: 'Limit: 20', value: 20 },
    ]

    const [limit, setLimit] = useState(5)

    const onHandleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setLimit(Number(value))
    }

    //Fetches all breeds from API
    useEffect(() => {
        dispatch(fetchAllBreeds())
    }, [dispatch])

    //Fetches limited breeds from API dependes on selected limit value
    useEffect(() => {
        dispatch(fetchLimitBreeds({ limit }))
    }, [dispatch, limit])

    //State and actions for breed select
    const [breed, setBreed] = useState('')

    const onHandleBreedsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBreed(event.target.value)
    }

    if (breed === 'All breeds') {
        setBreed('')
    }

    //States and actions for sort buttons
    const [isActiveBA, setIsActiveBA] = useState(false)
    const [isActiveAB, setIsActiveAB] = useState(true)

    const onClickHandleBA = () => {
        setIsActiveBA(true)
        if (isActiveAB) {
            setIsActiveAB(false)
        }
    }
    const onClickHandleAB = () => {
        setIsActiveAB(true)
        if (isActiveBA) {
            setIsActiveBA(false)
        }
    }

    return (
        <PageWrapper>
            <Navigation />
            <Box>
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
                                onClickBA={onClickHandleBA}
                                onClickAB={onClickHandleAB}
                                valueBA={isActiveBA}
                                valueAB={isActiveAB}
                            />
                        </Box>
                    </Box>
                    {/* GridBox with all placed breeds that are fetching from API */}
                    <ImageGalleryTemplateBreeds
                        limitedBreedsArray={limit ? limitedBreeds : []}
                        status={breedsStatus}
                        error={breedsError}
                        selectedBreed={breed}
                        valueBA={isActiveBA}
                        valueAB={isActiveAB}
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
