import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import ChosenImage from '../components/ChosenImage';
import ChoisesButtons from '../components/ChoisesButtons';
import InfoCommentVoting from '../components/InfoCommentVoting';
import ScrollToTop from '../components/ScrollToTop';

const Voting = () => {
  const all = useSelector((state) => state.actions.all);
  const imageStatus = useSelector((state) => state.votingPage.status);

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
        <MainBox>
          <PageName name='Voting' />
          <Box sx={{ minHeight: { xs: '200px', sm: '250px', md: '400px' } }}>
            <ChosenImage />
          </Box>
          {imageStatus !== 'loading' && <ChoisesButtons />}
          <Box mt={{ xs: '-75px', sm: '-55px', md: '-95px' }}>
            {/* Shows info about actions user did on VotingPage */}
            {all.map((obj) => (
              <InfoCommentVoting
                id={obj.id}
                key={obj.id}
                value={obj.value}
                date={obj.date}
                votingValue={'voting'}
              />
            ))}
          </Box>
          <ScrollToTop />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default Voting;
