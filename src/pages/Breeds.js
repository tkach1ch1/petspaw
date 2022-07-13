import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/styles.css';
import Box from '@mui/material/Box';
import { fetchBreeds } from '../redux/allBreedsReducer';

import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import SelectComponent from '../components/SelectComponent';
import ImageGalleryTemplateBreeds from '../components/ImageGalleryTemplateBreeds';
import SortButtons from '../components/SortButtons';
import PrevNextButtonsBreeds from '../components/PrevNextButtonsBreeds';
import ScrollToTop from '../components/ScrollToTop';

const limit = ['Limit: 5', 'Limit: 10', 'Limit: 15', 'Limit: 20'];

const Breeds = () => {
  const allBreeds = useSelector((state) => state.allBreeds.breeds);
  const breedsStatus = useSelector((state) => state.allBreeds.status);
  const breedsError = useSelector((state) => state.allBreeds.error);

  const dispatch = useDispatch();

  //Fetches all breeds from API
  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  //State and actions for breed select
  const [breed, setBreed] = useState('');

  const onHandleBreedsChange = (event) => {
    setBreed(event.target.value);
  };

  if (breed === 'All breeds') {
    setBreed('');
  }

  //States and actions for sort buttons
  const [isActiveBA, setIsActiveBA] = useState(false);
  const [isActiveAB, setIsActiveAB] = useState(true);

  const onClickHandleBA = () => {
    setIsActiveBA(true);
    if (isActiveAB) {
      setIsActiveAB(false);
    }
  };
  const onClickHandleAB = () => {
    setIsActiveAB(true);
    if (isActiveBA) {
      setIsActiveBA(false);
    }
  };

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
              {/* Breed select categorie */}
              <SelectComponent
                firstParam='All breeds'
                arr={allBreeds}
                status={breedsStatus}
                error={breedsError}
                onChange={onHandleBreedsChange}
                value={breed}
              />
            </Box>
            <Box display={'flex'} gap={'10px'} width={'100%'}>
              {/* Limit breeds on page select categorie */}
              <SelectComponent
                arr={limit}
                widthxl={'100px'}
                widthxxl={'100%'}
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
            arr={allBreeds}
            status={breedsStatus}
            error={breedsError}
            selectedBreed={breed}
            valueBA={isActiveBA}
            valueAB={isActiveAB}
          />

          <PrevNextButtonsBreeds />
          <ScrollToTop />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default Breeds;
