import React from 'react';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import ChosenImage from '../components/ChosenImage';
import ChoisesButtons from '../components/ChoisesButtons';
import InfoCommentVoting from '../components/InfoCommentVoting';

const Voting = () => {
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
        <MainBox backgroundColor={'#ffffff '}>
          <PageName name='Voting' />
          <Box mx={'auto'}>
            <ChosenImage />
            <ChoisesButtons />
          </Box>
          <Box mt={'-32px'}>
            <InfoCommentVoting />
            <InfoCommentVoting />
            <InfoCommentVoting />
            <InfoCommentVoting />
            <InfoCommentVoting />
            <InfoCommentVoting />
            <InfoCommentVoting />
          </Box>
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default Voting;
