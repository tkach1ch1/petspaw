import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';

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
        <MainBox backgroundColor={'#ffffff'}>
        <PageName name='Dislikes'/>
        </MainBox>
        
      </Box>
    </PageWrapper>
  );
};

export default DislikesPage;
