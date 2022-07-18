import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/styles.css';
import Box from '@mui/material/Box';
import { fetchAllBreeds, fetchLimitBreeds } from '../redux/allBreedsReducer';
import Context from '../components/context';

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

const Breeds = () => {
  const allBreeds = useSelector((state) => state.allBreeds.breeds);
  const limitedBreeds = useSelector((state) => state.allBreeds.limBreeds);
  const breedsStatus = useSelector((state) => state.allBreeds.status);
  const breedsError = useSelector((state) => state.allBreeds.error);

  const dispatch = useDispatch();

  //State and anctions for limit select
  const arrayLimit = [
    { name: 'Limit: 5', value: 5 },
    { name: 'Limit: 10', value: 10 },
    { name: 'Limit: 15', value: 15 },
    { name: 'Limit: 20', value: 20 },
  ];

  const [limit, setLimit] = useState(5);

  const onHandleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  //Fetches all breeds from API
    useEffect(() => {
      dispatch(fetchAllBreeds());
    }, [dispatch]);

  //Fetches limited breeds from API dependes on selected limit value
  useEffect(() => {
    dispatch(fetchLimitBreeds({ limit }));
  }, [dispatch, limit]);

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
    <Context.Provider value={{ limit }}>
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
          <MainBox position={'relative'}>
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
              <Box mb={'10px'} width={'100%'}>
                {/* Breed select categorie */}
                <SelectComponent
                  firstParam='All breeds'
                  arr={allBreeds.length > 0 && allBreeds}
                  onChange={onHandleBreedsChange}
                  value={breed}
                  status={breedsStatus}
                  error={breedsError}
                />
              </Box>
              <Box display={'flex'} gap={'10px'} width={'100%'}>
                {/* Limit breeds on page select categorie */}
                <SelectComponent
                  arr={arrayLimit.length > 0 && arrayLimit}
                  widthxl={'100px'}
                  widthxxl={'100%'}
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
              limitedBreedsArray={limit && limitedBreeds}
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
    </Context.Provider>
  );
};

export default Breeds;
