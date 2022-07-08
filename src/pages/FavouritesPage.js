import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';

const FavouritesPage = () => {

  const [isActivedFav, setIsActivedFav] = useState(false)
  useEffect(() =>{
    setIsActivedFav(true)
  }, []) 
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
          <PageName name='Favourites'/>
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default FavouritesPage;
