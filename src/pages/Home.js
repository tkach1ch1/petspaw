import React from 'react';
import Categories from '../components/Categories';
import girlAndPet from '../img/girl-and-pet 1.png';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import '../styles/styles.css';
import { makeStyles } from '@mui/styles';
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

const Home = () => {
  const classes = useStyles();

  return (
    <PageWrapper>
      <Categories />
      <Box>
        <MainBox backgroundColor={'#FBE0DC'}>
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
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default Home;
