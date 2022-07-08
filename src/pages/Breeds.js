import React from 'react';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import SelectComponent from '../components/SelectComponent';
import '../styles/styles.css';
import ImageGalleryTemplate from '../components/ImageGalleryTemplate';
import SortButtons from '../components/SortButtons';
import PrevNextButtonsBreeds from '../components/PrevNextButtonsBreeds';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const limit = ['Limit: 5', 'Limit: 10', 'Limit: 15', 'Limit: 20'];

const Breeds = () => {
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
              display: { md: 'flex', lg: 'block', xl: 'flex' },
              justifyContent: { md: 'space-between', xl: 'flex-start' },
              gap: { md: '10px' },
              alignItems: { md: 'flex-start' },
              mb: { xs: '20px', md: 0, lg: '20px', xl: 0 },
            }}
          >
            <PageName name='Breeds' />
            <Box mb={'10px'} width={'100%'}>
              <SelectComponent firstParam='All breeds' arr={names} />
            </Box>
            <Box display={'flex'} gap={'10px'} width={'100%'}>
              <SelectComponent arr={limit} widthxl={'100px'} widthxxl={'100%'}/>
              <SortButtons />
            </Box>
          </Box>
          <ImageGalleryTemplate
            param={'Abyssinian'}
            padding={'5px 24px'}
            bottom={'10px'}
            width={'90%'}
          />
          <PrevNextButtonsBreeds />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default Breeds;
