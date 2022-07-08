import React from 'react';
import Categories from '../components/Categories';
import girlAndPet from '../img/girl-and-pet 1.png';
import Box from '@mui/material/Box';
import '../styles/styles.css';
import { makeStyles, styled } from '@mui/styles';
import PageWrapper from '../components/PageWrapper';

const useStyles = makeStyles((theme) => ({
  imgSize: {
    [theme.breakpoints.up('xxl')]: {
      width: '780px',
      height: '890px',
    },
    [theme.breakpoints.down('xxl')]: {
      width: '650px',
      height: '705px',
    },
    [theme.breakpoints.down('xl')]: {
      width: '530px',
      height: '760px',
    },
  },
}));

const MainBoxHome = styled(Box)({
  borderRadius: '20px',
  backgroundColor: '#FBE0DC',
});

const Home = () => {
  const classes = useStyles();

  return (
    <PageWrapper>
      <Categories />

      <MainBoxHome
        sx={{
          width: { lg: '500px', xl: '570px', xxl: '680px', xxxl: '750px' },
          height: { lg: '637px', xl: '590px', xxl: '840px', xxxl: '795px' },
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
          <img
            src={girlAndPet}
            alt='girl-and-pet'
            className={classes.imgSize}
          />
        </Box>
      </MainBoxHome>
    </PageWrapper>
  );
};

export default Home;
