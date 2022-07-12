import React, { useEffect } from 'react';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import ChoseCategoryGallery from '../components/ChoseCategoryGallery';
import ModalUpload from '../components/ModalUpload';
import ScrollToTop from '../components/ScrollToTop';
import ImageGalleryTemplateGallery from '../components/ImageGalleryTemlateGallery';
import { fetchImages } from '../redux/allImagesGalleryReducer';

const Gallery = () => {
  const allImages = useSelector((state) => state.allImages.images);
  const imagesStatus = useSelector((state) => state.allImages.status);
  const imagesError = useSelector((state) => state.allImages.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <PageWrapper>
      <Box
        sx={{
          display: { xs: 'none', lg: 'block' },
        }}
      >
        <Categories />
      </Box>
      <Box>
        <Header />
        <MainBox backgroundColor={'#ffffff'}>
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

          <ChoseCategoryGallery />

          <ImageGalleryTemplateGallery
            arr={allImages}
            status={imagesStatus}
            error={imagesError}
          />
          <ScrollToTop />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default Gallery;
