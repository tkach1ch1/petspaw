import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';

const LikesPage = () => {
  const [isActivedLike, setIsActivedLike] = useState(false)
  useEffect(() =>{
    setIsActivedLike(true)
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
        <Header isActivedLike={isActivedLike} />
        <MainBox backgroundColor={'#ffffff'}></MainBox>
      </Box>
    </PageWrapper>
  );
};

export default LikesPage;
