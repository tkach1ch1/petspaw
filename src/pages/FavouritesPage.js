import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import GridPageLoyaut from '../components/GridPageLoyaut';

const FavouritesPage = () => {
  const [isActivedFav, setIsActivedFav] = useState(false);

  const allFav = useSelector((state) => state.actions.favourites);

  useEffect(() => {
    setIsActivedFav(true);
  }, []);

console.log(allFav.value)

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
        <Header isActivedFav={isActivedFav} />
        <MainBox backgroundColor={'#ffffff'}>
          <PageName name='Favourites' />
          <GridPageLoyaut arr={allFav} />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default FavouritesPage;
