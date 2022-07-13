import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import GridPageLoyaut from '../components/GridPageLoyaut';

const DislikesPage = () => {
  const [isActivedDis, setIsActivedDis] = useState(false);

  const allDislikes = useSelector((state) => state.actions.dislikes);

  //Change categorie sign in header on Active
  useEffect(() => {
    setIsActivedDis(true);
  }, []);
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
        <Header isActivedDis={isActivedDis} />
        <MainBox backgroundColor={'#ffffff'}>
          <PageName name='Dislikes' />
          <GridPageLoyaut arr={allDislikes} />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default DislikesPage;
