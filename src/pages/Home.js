import React from 'react';
import '../styles/styles.css';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import PageWrapper from '../components/PageWrapper';
import girlAndPet from '../img/girl-and-pet 1.png';
import styled from '@emotion/styled';

const ImgStyle = styled('img')`
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 500px;
    height: 690px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 530px;
    height: 640px;
  }
  ${(props) => props.theme.breakpoints.up('xxl')} {
    width: 780px;
    height: 890px;
  }
  ${(props) => props.theme.breakpoints.up('xxxl')} {
    width: 780px;
    height: 920px;
  } ;
`;

const MainBoxHome = styled(Box)({
  borderRadius: '20px',
  backgroundColor: '#FBE0DC',
});

const Home = () => {
  return (
    <PageWrapper>
      <Categories />

      <MainBoxHome
        sx={{
          width: { lg: '500px', xl: '570px', xxl: '680px', xxxl: '750px' },
          height: { lg: '637px', xl: '590px', xxl: '840px', xxxl: '865px' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: '0',
            top: '0',
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <ImgStyle src={girlAndPet} alt='girl-and-pet' />
        </Box>
      </MainBoxHome>
    </PageWrapper>
  );
};

export default Home;
