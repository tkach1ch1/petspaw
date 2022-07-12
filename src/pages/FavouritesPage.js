import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import GridPageLoyaut from '../components/GridPageLoyaut';
import InfoCommentVoting from '../components/InfoCommentVoting';

const FavouritesPage = () => {
  const [isActivedFav, setIsActivedFav] = useState(false);

  const allFav = useSelector((state) => state.actions.favourites);
  const removedFav = useSelector((state) => state.actions.removedFav);

  console.log(allFav)

  useEffect(() => {
    setIsActivedFav(true);
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
        <Header isActivedFav={isActivedFav} />
        <MainBox backgroundColor={'#ffffff'}>
          <PageName name='Favourites' />
          <GridPageLoyaut arr={allFav} />
          {removedFav.length !== 0 &&
            removedFav.map((elem) => (
              <InfoCommentVoting
                id={elem.id}
                key={Math.floor(Math.random(10) * 100000)}
                date={elem.date}
              />
            ))}
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default FavouritesPage;
