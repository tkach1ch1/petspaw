import React from 'react';
import Categories from '../components/Categories';
import girlAndPet from '../img/girl-and-pet 1.png';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import '../styles/styles.css';

const Home = () => {
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        justifyContent: { lg: 'center' },
        gap: { lg: '20px', xl: '125px' },
      }}
    >
      <Categories />
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <MainBox backgroundColor={'#FBE0DC'}>
          <Box sx={{ position: 'absolute', right: { xxl: '0px' }, top: '0' }}>
            <img
              src={girlAndPet}
              alt='girl-and-pet'
              style={{
                width: { xl: '100px', lg: '300px', xxl: '500px' },
                height: { xl: '100px', lg: '300px', xxl: '500px' },
              }}
            />
          </Box>
        </MainBox>
      </Box>
    </Box>
  );
};

export default Home;
