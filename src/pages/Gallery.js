import React from 'react';
import '../styles/styles.css';
import { useHover } from 'usehooks-ts';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import MainStyledButton, {
  StyledTypography,
} from '../components/MainStyledButton';
import ChoseCategoryGallery from '../components/ChoseCategoryGallery';
import ImageGalleryTemplate from '../components/ImageGalleryTemplate';
import upload from '../img/upload.svg';
import upload_hov from '../img/upload_hov.svg';
import heart from '../img/heart.svg';

const Gallery = () => {
  const hoverRef = React.createRef();
  const isHover = useHover(hoverRef);

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

            <MainStyledButton padding='11px 35px' ref={hoverRef}>
              <Box display={'flex'}>
                {isHover ? (
                  <img src={upload_hov} alt='arrow_hov' />
                ) : (
                  <img src={upload} alt='upload' />
                )}
              </Box>
              <StyledTypography>Upload</StyledTypography>
            </MainStyledButton>
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
