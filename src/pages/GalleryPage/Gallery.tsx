import { useEffect, useState } from 'react'
import 'src/styles/styles.css'
import { fetchImages } from 'src/redux/allImagesGalleryReducer'
import Box from '@mui/material/Box'
import { MainBox } from 'src/components/MainBox'
import { PageWrapper } from 'src/components/PageWrapper'
import { Header } from 'src/layouts/Header/Header'
import { PageName } from 'src/components/PageName'
import { ChoseCategoryGallery } from './components/ChoseCategoryGallery'
import { ModalUpload } from './components/Modal/ModalUpload'
import { ScrollToTop } from 'src/components/ScrollToTop'
import { ImageGalleryTemplateGallery } from './components/ImageGalleryTemlateGallery'
import { fetchAllBreeds } from 'src/redux/allBreedsReducer'
import { Navigation } from 'src/layouts/Navigation/Navigation'
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks'

export const Gallery = () => {
    const allImages = useAppSelector((state) => state.allImages.images)
    const imagesStatus = useAppSelector((state) => state.allImages.statusGallery)
    const imagesError = useAppSelector((state) => state.allImages.error)

    //All states for select categories on GalleryPage
    const [limit, setLimit] = useState(5)
    const [order, setOrder] = useState('RANDOM')
    const [type, setType] = useState('jpg,png,gif')
    const [breed, setBreed] = useState('')
    const [breedId, setBreedId] = useState('')

    const dispatch = useAppDispatch()

    //Fetches all breeds from API
    useEffect(() => {
        dispatch(fetchAllBreeds())
    }, [dispatch])

    //Fetching images from API based on selected categories
    useEffect(() => {
        dispatch(fetchImages({ limit, order, type, breedId }))
    }, [dispatch, limit, order, type, breedId])

    return (
        <PageWrapper>
            <Navigation />
            <Box sx={{ width: { xs: '100%', xxxl: '1000px' } }}>
                <Header />
                <MainBox>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'row',
                                justifyContent: 'space-between',
                            },
                            mb: { xs: '10px', sm: '0px' },
                        }}
                    >
                        <PageName name='Gallery' />
                        <ModalUpload />
                    </Box>

                    <ChoseCategoryGallery
                        limit={limit}
                        order={order}
                        type={type}
                        breed={breed}
                        breedId={breedId}
                        setLimit={setLimit}
                        setOrder={setOrder}
                        setType={setType}
                        setBreed={setBreed}
                        setBreedId={setBreedId}
                    />

                    <ImageGalleryTemplateGallery
                        array={allImages}
                        status={imagesStatus}
                        error={imagesError}
                    />
                    <ScrollToTop />
                </MainBox>
            </Box>
        </PageWrapper>
    )
}
