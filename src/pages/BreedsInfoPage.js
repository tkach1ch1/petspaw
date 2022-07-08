import React from 'react';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName, { StyledPageName } from '../components/PageName';
import MainBox from '../components/MainBox';
import styled from '@emotion/styled';
import '../styles/styles.css';
import SwiperInfoPage from '../components/SwiperInfoPage';
import InfoTextBreedsId from '../components/InfoTextBreedsId';

const StyledId = styled(StyledPageName)({
  padding: '5px 30px',
  height: 'fit-content',
});

const BreedsInfoPage = () => {
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
          <Box display={'flex'} gap={'10px'} mb={'10px'}>
            <PageName name='Breeds' />
            <StyledId>28</StyledId>
          </Box>

          <SwiperInfoPage />

          <InfoTextBreedsId />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default BreedsInfoPage;
