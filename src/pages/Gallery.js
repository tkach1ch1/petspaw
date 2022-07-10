import React from 'react';
import '../styles/styles.css';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';

import ChoseCategoryGallery from '../components/ChoseCategoryGallery';
import ImageGalleryTemplate from '../components/ImageGalleryTemplate';

import heart from '../img/heart.svg';
import ModalUpload from '../components/ModalUpload';

const Gallery = () => {
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

          <ImageGalleryTemplate
            param={<img src={heart} alt='heart' />}
            width={'40px'}
            height={'40px'}
            padding={'10px'}
          />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default Gallery;
