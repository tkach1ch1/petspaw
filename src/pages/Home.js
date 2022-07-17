import React from 'react';
import '../styles/styles.css';
import { makeStyles, styled } from '@mui/styles';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import PageWrapper from '../components/PageWrapper';
import girlAndPet from '../img/girl-and-pet 1.png';

const useStyles = makeStyles((theme) => ({
  imgSize: {
    [theme.breakpoints.up('lg')]: {
      width: '500px',
      height: '690px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '530px',
      height: '640px',
    },
    [theme.breakpoints.up('xxl')]: {
      width: '780px',
      height: '890px',
    },
    [theme.breakpoints.up('xxxl')]: {
      width: '780px',
      height: '920px',
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
