import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';

const LikesPage = () => {
  const [isActivedLike, setIsActivedLike] = useState(false);

  const dispatch = useDispatch();

  const allLikes = useSelector((state) => state.actions.likes);

  useEffect(() => {
    setIsActivedLike(true);
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
        <Header isActivedLike={isActivedLike} />
        <MainBox backgroundColor={'#ffffff'}>
          <PageName name='Likes' />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default LikesPage;
