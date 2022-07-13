import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import SelectComponent from '../components/SelectComponent';
import '../styles/styles.css';
import ImageGalleryTemplateBreeds from '../components/ImageGalleryTemplateBreeds';
import SortButtons from '../components/SortButtons';
import PrevNextButtonsBreeds from '../components/PrevNextButtonsBreeds';
import { fetchBreeds } from '../redux/allBreedsReducer';
import ScrollToTop from '../components/ScrollToTop';

const limit = ['Limit: 5', 'Limit: 10', 'Limit: 15', 'Limit: 20'];

const Breeds = () => {
  const allBreeds = useSelector((state) => state.allBreeds.breeds);
  const breedsStatus = useSelector((state) => state.allBreeds.status);
  const breedsError = useSelector((state) => state.allBreeds.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  const [breed, setBreed] = useState('');
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

  const onHandleBreedsChange = (event) => {
    setBreed(event.target.value);
  };

  if (breed === 'All breeds') {
    setBreed('');
  }

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
              <SelectComponent
                arr={limit}
                widthxl={'100px'}
                widthxxl={'100%'}
              />
              <SortButtons
                onClickBA={onClickHandleBA}
                onClickAB={onClickHandleAB}
                valueBA={isActiveBA}
                valueAB={isActiveAB}
              />
            </Box>
          </Box>
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
