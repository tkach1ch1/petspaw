import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import Categories from '../components/Categories';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName, { StyledPageName } from '../components/PageName';
import MainBox from '../components/MainBox';
import SwiperInfoPage from '../components/SwiperInfoPage';
import InfoTextBreedsId from '../components/InfoTextBreedsId';
import { fetchImagesByBreedsId } from '../redux/allBreedsReducer';
import { StyledCircularProgress } from '../components/ChosenImage';

const StyledId = styled(StyledPageName)({
  height: 'fit-content',
});

//NOTE:Gives info about certain breed that was chosen on BreedsPage

const BreedsInfoPage = () => {
  const allBreeds = useSelector((state) => state.allBreeds.breeds);
  const allImagesById = useSelector((state) => state.allBreeds.imagesById);
  const imagesStatus = useSelector((state) => state.allBreeds.status);

  const breedId = useSelector((state) => state.allBreeds.breedsId);

  const breedInfo = allBreeds.filter((elem) => elem.id === breedId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesByBreedsId({ breedId }));
  }, [dispatch, breedId]);

  let content;

  if (imagesStatus === 'loading') {
    content = (
      <StyledCircularProgress
        sx={{
          top: { xs: '50px', md: '120px' },
        }}
        size={'100px'}
      />
    );
  } else if (imagesStatus === 'succeeded') {
    content = <SwiperInfoPage allImagesById={allImagesById} />;
  }

  return (
    <div>
      {breedInfo.map((elem) => (
        <PageWrapper key={elem.id}>
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
            }}
          >
            <Categories />
          </Box>
          <Box>
            <Header />
            <MainBox backgroundColor={'#ffffff'}>
              <Box display={'flex'} gap={'10px'} mb={'10px'}>
                <PageName name='Breeds' />
                <StyledId sx={{ padding: { xs: '5px 20px', md: '5px 30px' } }}>
                  {elem.id}
                </StyledId>
              </Box>
              <Box
                sx={{ height: { xs: '170px', sm: '220px', md: '360px' } }}
                position={'relative'}
                display={'flex'}
                justifyContent={'center'}
              >
                {content}
              </Box>

              <InfoTextBreedsId
                name={elem.name}
                origin={elem.origin}
                life_span={elem.life_span}
                weight={elem.weight.metric}
                temperament={elem.temperament}
              />
            </MainBox>
          </Box>
        </PageWrapper>
      ))}
    </div>
  );
};

export default BreedsInfoPage;
