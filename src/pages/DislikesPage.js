import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';

const DislikesPage = () => {
  const [isActivedDis, setIsActivedDis] = useState(false)
  useEffect(() =>{
    setIsActivedDis(true)
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
        <Header isActivedDis={isActivedDis}/>
        <MainBox backgroundColor={'#ffffff'}></MainBox>
      </Box>
    </PageWrapper>
  );
};

export default DislikesPage;
